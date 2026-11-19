export type Locale = 'so' | 'en' | 'ar';
export type BranchId = 'mogadishu' | 'hargeisa';
export type PaymentMethod = 'evc_plus' | 'zaad' | 'edahab' | 'card';
export type TimelineFilter = 'all' | 'mogadishu' | 'hargeisa' | 'technology';

export interface BranchOpenStatus {
  isOpen: boolean;
  dayIndex: number; // 0 = Sun, 1 = Mon, ... 6 = Sat in Africa/Mogadishu
  eatTimeLabel: string; // HH:mm
  hoursTodayLabel: {
    so: string;
    en: string;
    ar: string;
  };
  statusLabel: {
    so: string;
    en: string;
    ar: string;
  };
}

export interface BookingPayload {
  branchId: BranchId;
  serviceId: string;
  serviceName: string;
  doctorId: string;
  doctorName: string;
  appointmentDate: string;
  timeSlot: string;
  patientName: string;
  phone: string;
  discreetMode: boolean;
  paymentMethod: PaymentMethod;
  notes?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

/**
 * Computes real-time open/closed status in Africa/Mogadishu (UTC+3).
 * Mogadishu verified hours (Google Places):
 * - Monday: 07:30 – 17:00
 * - Tue–Thu, Sat–Sun: 07:00 – 17:00
 * - Friday: Closed
 * Hargeisa branch follows the same clinical operating schedule unless updated in Phase 0,
 * and returns a clear verified note distinguishing Google Places Mogadishu hours.
 */
export function getBranchOpenStatus(
  branchId: BranchId,
  now: Date = new Date()
): BranchOpenStatus {
  // Africa/Mogadishu is permanently UTC+3 (no DST)
  const eatMs = now.getTime() + 3 * 60 * 60 * 1000;
  const eatDate = new Date(eatMs);
  const dayIndex = eatDate.getUTCDay(); // 0=Sun..6=Sat
  const hour = eatDate.getUTCHours();
  const minute = eatDate.getUTCMinutes();
  const minutesSinceMidnight = hour * 60 + minute;

  const hh = String(hour).padStart(2, '0');
  const mm = String(minute).padStart(2, '0');
  const eatTimeLabel = `${hh}:${mm} EAT`;

  if (branchId === 'hargeisa') {
    // Hargeisa branch is operational (opened Sept 30, 2025); detailed daily hours pending Phase 0 confirmation,
    // operating standard daytime clinical hours Sat-Thu (closed Friday) as regional baseline.
    const isFriday = dayIndex === 5;
    const isOpen =
      !isFriday && minutesSinceMidnight >= 7 * 60 + 30 && minutesSinceMidnight < 17 * 60;

    return {
      isOpen,
      dayIndex,
      eatTimeLabel,
      hoursTodayLabel: isFriday
        ? {
            so: 'Jimcaha: Xiran',
            en: 'Friday: Closed',
            ar: 'الجمعة: مغلق',
          }
        : {
            so: '7:30 AM – 5:00 PM (Jadwalka Hargeysa — La Xaqiijinayo)',
            en: '7:30 AM – 5:00 PM (Standard Clinical Hours)',
            ar: '7:30 ص – 5:00 م (ساعات العمل السريرية)',
          },
      statusLabel: isOpen
        ? { so: 'Furan Hadda', en: 'Open Now', ar: 'مفتوح الآن' }
        : { so: 'Xiran Hadda', en: 'Closed Now', ar: 'مغلق الآن' },
    };
  }

  // Mogadishu exact Google Places hours
  if (dayIndex === 5) {
    return {
      isOpen: false,
      dayIndex,
      eatTimeLabel,
      hoursTodayLabel: {
        so: 'Jimcaha: Waa Xiran Yahay',
        en: 'Friday: Closed',
        ar: 'الجمعة: مغلق',
      },
      statusLabel: {
        so: 'Xiran Maanta (Jimce)',
        en: 'Closed Today (Friday)',
        ar: 'مغلق اليوم (الجمعة)',
      },
    };
  }

  const openMinutes = dayIndex === 1 ? 7 * 60 + 30 : 7 * 60;
  const closeMinutes = 17 * 60;
  const isOpen =
    minutesSinceMidnight >= openMinutes && minutesSinceMidnight < closeMinutes;

  const openLabel = dayIndex === 1 ? '7:30 AM – 5:00 PM' : '7:00 AM – 5:00 PM';

  return {
    isOpen,
    dayIndex,
    eatTimeLabel,
    hoursTodayLabel: {
      so: `Saacadaha Maanta: ${openLabel}`,
      en: `Today's Hours: ${openLabel}`,
      ar: `ساعات اليوم: ${openLabel}`,
    },
    statusLabel: isOpen
      ? { so: 'Furan Hadda', en: 'Open Now', ar: 'مفتوح الآن' }
      : { so: 'Xiran Hadda', en: 'Closed Now', ar: 'مغلق الآن' },
  };
}

/**
 * Generates a deterministic/readable confidential booking reference code (AMR-XXXX).
 */
export function generateBookingCode(seedInput: string): string {
  let hash = 2166136261;
  for (let i = 0; i < seedInput.length; i += 1) {
    hash ^= seedInput.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const num = (Math.abs(hash) % 9000) + 1000;
  return `AMR-${num}`;
}

/**
 * Formats the SMS/WhatsApp notification preview.
 * When discreetMode is enabled, sensitive medical specialty names (e.g., EDV, Fertility, 40+)
 * are strictly omitted so anyone glancing at the patient's lock screen only sees an appointment code.
 */
export function formatDiscreetNotification(
  booking: Pick<
    BookingPayload,
    'branchId' | 'serviceName' | 'appointmentDate' | 'timeSlot' | 'discreetMode'
  >,
  bookingCode: string,
  locale: Locale
): string {
  const branchText =
    booking.branchId === 'mogadishu'
      ? locale === 'ar'
        ? 'فرع مقديشو (غرب طليح)'
        : locale === 'en'
          ? 'Mogadishu (West Taleex)'
          : 'Muqdisho (West Taleex)'
      : locale === 'ar'
        ? 'فرع هرجيسا (جيجيغا يار)'
        : locale === 'en'
          ? 'Hargeisa (Jigjiga-Yar)'
          : 'Hargeysa (Jigjiga-Yar)';

  if (booking.discreetMode) {
    if (locale === 'ar') {
      return `مستشفى أموري التخصصي: تم تأكيد موعدك بالرمز السري [${bookingCode}] في ${branchText} بتاريخ ${booking.appointmentDate} الساعة ${booking.timeSlot}.`;
    }
    if (locale === 'en') {
      return `Amoore Specialist: Confirmed ref [${bookingCode}] at ${branchText} on ${booking.appointmentDate} at ${booking.timeSlot}.`;
    }
    return `Amoore Specialist: Ballankaaga qarsoon [${bookingCode}] waa la xaqiijiyay — ${branchText}, ${booking.appointmentDate} saacadda ${booking.timeSlot}.`;
  }

  if (locale === 'ar') {
    return `مستشفى أموري التخصصي: تم تأكيد موعد (${booking.serviceName}) برقم [${bookingCode}] في ${branchText} بتاريخ ${booking.appointmentDate} الساعة ${booking.timeSlot}.`;
  }
  if (locale === 'en') {
    return `Amoore Specialist: Confirmed ${booking.serviceName} [${bookingCode}] at ${branchText} on ${booking.appointmentDate} at ${booking.timeSlot}.`;
  }
  return `Amoore Specialist: Ballankaaga (${booking.serviceName}) [${bookingCode}] waa la xaqiijiyay — ${branchText}, ${booking.appointmentDate} saacadda ${booking.timeSlot}.`;
}

/**
 * Validates booking input strictly without silent fallbacks.
 */
export function validateBookingInput(
  input: Partial<BookingPayload>,
  locale: Locale = 'so'
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.branchId || (input.branchId !== 'mogadishu' && input.branchId !== 'hargeisa')) {
    errors.branchId =
      locale === 'en'
        ? 'Select a valid hospital branch.'
        : locale === 'ar'
          ? 'يرجى اختيار فرع المستشفى.'
          : 'Fadlan dooro xarunta isbitaalka.';
  }

  if (!input.serviceId || !input.serviceId.trim()) {
    errors.serviceId =
      locale === 'en'
        ? 'Select a clinical specialty.'
        : locale === 'ar'
          ? 'يرجى اختيار التخصص الطبي.'
          : 'Fadlan dooro adeegga caafimaad.';
  }

  if (!input.appointmentDate || !/^\d{4}-\d{2}-\d{2}$/.test(input.appointmentDate)) {
    errors.appointmentDate =
      locale === 'en'
        ? 'Choose a valid appointment date.'
        : locale === 'ar'
          ? 'يرجى اختيار تاريخ صحيح للموعد.'
          : 'Fadlan dooro taariikh sax ah.';
  } else {
    const parsed = new Date(`${input.appointmentDate}T12:00:00Z`);
    if (parsed.getUTCDay() === 5) {
      errors.appointmentDate =
        locale === 'en'
          ? 'Hospital clinics are closed on Fridays. Please choose Saturday–Thursday.'
          : locale === 'ar'
            ? 'العيادات مغلقة يوم الجمعة. يرجى اختيار يوم آخر.'
            : 'Isbitaalku wuu xiran yahay Jimcaha. Fadlan dooro Sabti ilaa Khamiis.';
    }
  }

  if (!input.timeSlot || !input.timeSlot.trim()) {
    errors.timeSlot =
      locale === 'en'
        ? 'Select an available time slot.'
        : locale === 'ar'
          ? 'يرجى اختيار وقت الموعد.'
          : 'Fadlan dooro saacadda ballanka.';
  }

  const trimmedName = (input.patientName || '').trim();
  if (trimmedName.length < 2) {
    errors.patientName =
      locale === 'en'
        ? 'Enter full name or initials (at least 2 characters).'
        : locale === 'ar'
          ? 'يرجى إدخال الاسم أو الأحرف الأولى (حرفان على الأقل).'
          : 'Geli magacaaga ama xarfo kooban (ugu yaraan 2 xaraf).';
  }

  const cleanedPhone = (input.phone || '').replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+?252|0)?(6[1-9]|7[1-9]|9[0-9])\d{6,7}$|^\+\d{8,15}$/;
  if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
    errors.phone =
      locale === 'en'
        ? 'Enter a valid Somali (+252 61/63/65...) or international phone number.'
        : locale === 'ar'
          ? 'يرجى إدخال رقم هاتف صومالي (+252) أو دولي صحيح.'
          : 'Geli lambar telefoon oo sax ah (tusaale +252 61... ama 063...).';
  }

  if (!input.paymentMethod) {
    errors.paymentMethod =
      locale === 'en'
        ? 'Choose a payment method.'
        : locale === 'ar'
          ? 'يرجى اختيار وسيلة الدفع.'
          : 'Fadlan dooro qaabka lacag-bixinta.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function getRecommendedPaymentMethods(branchId: BranchId): PaymentMethod[] {
  if (branchId === 'mogadishu') {
    return ['evc_plus', 'edahab', 'card'];
  }
  return ['zaad', 'edahab', 'card'];
}

export interface TimelineItemBase {
  id: string;
  category: 'mogadishu' | 'hargeisa' | 'technology';
}

export function filterTimelineEvents<T extends TimelineItemBase>(
  items: T[],
  filter: TimelineFilter
): T[] {
  if (filter === 'all') return items;
  return items.filter((item) => item.category === filter);
}

export interface DoctorItemBase {
  id: string;
  branchId: BranchId;
}

export function filterDoctors<T extends DoctorItemBase>(
  doctors: T[],
  branchFilter: 'all' | BranchId
): T[] {
  if (branchFilter === 'all') return doctors;
  return doctors.filter((doc) => doc.branchId === branchFilter);
}
