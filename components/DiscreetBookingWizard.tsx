'use client';

import { useState } from 'react';
import {
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  Lock,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import type { BranchId, Locale, PaymentMethod } from '@/lib/hospital-logic';
import {
  formatDiscreetNotification,
  generateBookingCode,
  getRecommendedPaymentMethods,
  validateBookingInput,
} from '@/lib/hospital-logic';
import {
  BRANCHES,
  DOCTORS,
  PAYMENT_CHANNELS,
  SERVICES,
  TIME_SLOTS,
  UI_COPY,
} from '@/lib/hospital-data';

interface DiscreetBookingWizardProps {
  locale: Locale;
  activeBranch: BranchId;
  onBranchChange: (branch: BranchId) => void;
  serviceId: string;
  onServiceChange: (id: string) => void;
  doctorId: string;
  onDoctorChange: (id: string) => void;
}

function getDefaultAppointmentDate(): string {
  // Deterministic next valid non-Friday date from today
  const d = new Date();
  d.setDate(d.getDate() + 1);
  if (d.getDay() === 5) {
    d.setDate(d.getDate() + 1);
  }
  return d.toISOString().slice(0, 10);
}

export function DiscreetBookingWizard({
  locale,
  activeBranch,
  onBranchChange,
  serviceId,
  onServiceChange,
  doctorId,
  onDoctorChange,
}: DiscreetBookingWizardProps) {
  const copy = UI_COPY[locale];

  const [appointmentDate, setAppointmentDate] = useState<string>(
    getDefaultAppointmentDate
  );
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[1]);
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [discreetMode, setDiscreetMode] = useState<boolean>(true);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('evc_plus');
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const recommendedPayments = getRecommendedPaymentMethods(activeBranch);
  const paymentMethod: PaymentMethod = recommendedPayments.includes(selectedPayment)
    ? selectedPayment
    : recommendedPayments[0];

  const activeService =
    SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];
  const branchDoctors = DOCTORS.filter((d) => d.branchId === activeBranch);
  const selectedDoctor = branchDoctors.find((d) => d.id === doctorId);

  const previewCode =
    confirmedCode ||
    generateBookingCode(
      `${activeBranch}-${serviceId}-${appointmentDate}-${timeSlot}-${patientName || 'guest'}`
    );

  const liveNotificationPreview = formatDiscreetNotification(
    {
      branchId: activeBranch,
      serviceName: activeService.title[locale],
      appointmentDate,
      timeSlot,
      discreetMode,
    },
    previewCode,
    locale
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingInput(
      {
        branchId: activeBranch,
        serviceId,
        serviceName: activeService.title[locale],
        doctorId,
        doctorName: selectedDoctor?.name || '',
        appointmentDate,
        timeSlot,
        patientName,
        phone,
        discreetMode,
        paymentMethod,
        notes,
      },
      locale
    );

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const finalCode = generateBookingCode(
      `${activeBranch}-${serviceId}-${appointmentDate}-${timeSlot}-${patientName}-${phone}`
    );
    setConfirmedCode(finalCode);
  };

  const handleCopyCode = async () => {
    if (!confirmedCode) return;
    try {
      await navigator.clipboard.writeText(confirmedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setConfirmedCode(null);
    setCopied(false);
    setErrors({});
  };

  return (
    <section id="booking" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#D9232E]">
            {copy.bookingSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {copy.bookingSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {copy.bookingSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Form or Confirmed Receipt */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:col-span-7">
            {confirmedCode ? (
              <div
                data-testid="booking-confirmation"
                className="flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#0E4DA4]" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {copy.bookingSection.confirmedTitle}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {copy.bookingSection.confirmedDesc}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold text-slate-500">
                    {copy.bookingSection.codeLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="font-mono-tabular text-3xl font-bold tracking-tight text-[#0E4DA4]">
                      {confirmedCode}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-[#0E4DA4]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      <span>
                        {copied
                          ? copy.bookingSection.copiedBtn
                          : copy.bookingSection.copyBtn}
                      </span>
                    </button>
                  </div>

                  <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-200 pt-4 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs text-slate-500">
                        {copy.bookingSection.stepBranch}
                      </dt>
                      <dd className="mt-0.5 font-semibold text-slate-900">
                        {BRANCHES[activeBranch].officialName[locale]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">
                        {copy.bookingSection.dateLabel}
                      </dt>
                      <dd className="mt-0.5 font-mono-tabular font-semibold text-slate-900">
                        {appointmentDate} · {timeSlot}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">
                        {copy.bookingSection.paymentLabel}
                      </dt>
                      <dd className="mt-0.5 font-semibold text-slate-900">
                        {
                          PAYMENT_CHANNELS.find((p) => p.id === paymentMethod)
                            ?.label[locale]
                        }
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">
                        {copy.bookingSection.discreetTitle}
                      </dt>
                      <dd className="mt-0.5 font-semibold text-[#0E4DA4]">
                        {discreetMode
                          ? locale === 'ar'
                            ? 'مفعّل'
                            : locale === 'en'
                              ? 'Enabled'
                              : 'Waa Daaran Yahay'
                          : locale === 'ar'
                            ? 'قياسي'
                            : locale === 'en'
                              ? 'Standard'
                              : 'Caadi'}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    {copy.bookingSection.smsPreviewTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">
                    {liveNotificationPreview}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
                  >
                    {copy.bookingSection.newBookingBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* 1. Branch */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600">
                    {copy.bookingSection.stepBranch}
                  </label>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {(['mogadishu', 'hargeisa'] as const).map((id) => {
                      const active = activeBranch === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => onBranchChange(id)}
                          aria-pressed={active}
                          className={`flex flex-col items-start rounded-xl border p-3.5 text-start transition-colors cursor-pointer ${
                            active
                              ? 'border-[#0E4DA4] bg-white shadow-xs'
                              : 'border-slate-200 bg-white/70 hover:bg-white'
                          }`}
                        >
                          <span className="font-display text-sm font-bold text-slate-900">
                            {BRANCHES[id].city[locale]}
                          </span>
                          <span className="mt-0.5 text-xs text-slate-500">
                            {BRANCHES[id].primaryPhone}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Service & Specialist */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      {copy.bookingSection.stepService}
                    </label>
                    <select
                      id="booking-service"
                      value={serviceId}
                      onChange={(e) => onServiceChange(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#0E4DA4] focus:outline-none"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.id}>
                          {svc.code}. {svc.title[locale]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-doctor"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      {copy.bookingSection.doctorLabel}
                    </label>
                    <select
                      id="booking-doctor"
                      value={doctorId}
                      onChange={(e) => onDoctorChange(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#0E4DA4] focus:outline-none"
                    >
                      <option value="">
                        {locale === 'ar'
                          ? 'أول طبيب متاح في القسم'
                          : locale === 'en'
                            ? 'First Available Specialist'
                            : 'Dhakhtarka Ugu Horeeya ee Diyaarka ah'}
                      </option>
                      {branchDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} — {doc.role[locale]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Date & Time */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      {copy.bookingSection.dateLabel}
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="booking-date"
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono-tabular text-sm text-slate-900 focus:border-[#0E4DA4] focus:outline-none"
                      />
                    </div>
                    {errors.appointmentDate && (
                      <p className="mt-1 text-xs font-medium text-[#D9232E]">
                        {errors.appointmentDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-slot"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      {copy.bookingSection.slotLabel}
                    </label>
                    <select
                      id="booking-slot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono-tabular text-sm text-slate-900 focus:border-[#0E4DA4] focus:outline-none"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot} (EAT)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Patient Contact */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      {copy.bookingSection.nameLabel}
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={copy.bookingSection.namePlaceholder}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0E4DA4] focus:outline-none"
                    />
                    {errors.patientName && (
                      <p className="mt-1 text-xs font-medium text-[#D9232E]">
                        {errors.patientName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold text-slate-600"
                    >
                      {copy.bookingSection.phoneLabel}
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={copy.bookingSection.phonePlaceholder}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono-tabular text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0E4DA4] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs font-medium text-[#D9232E]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Payment Channel */}
                <div>
                  <span className="block text-xs font-semibold text-slate-600">
                    {copy.bookingSection.paymentLabel}
                  </span>
                  <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {PAYMENT_CHANNELS.map((channel) => {
                      const active = paymentMethod === channel.id;
                      return (
                        <button
                          key={channel.id}
                          type="button"
                          onClick={() => setSelectedPayment(channel.id)}
                          aria-pressed={active}
                          className={`flex flex-col items-start rounded-lg border p-3 text-start transition-colors cursor-pointer ${
                            active
                              ? 'border-[#0E4DA4] bg-white shadow-xs'
                              : 'border-slate-200 bg-white/70 hover:bg-white'
                          }`}
                        >
                          <span className="text-sm font-semibold text-slate-900">
                            {channel.label[locale]}
                          </span>
                          <span className="mt-0.5 text-xs text-slate-500">
                            {channel.branchHint[locale]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold text-slate-600"
                  >
                    {copy.bookingSection.notesLabel}
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={copy.bookingSection.notesPlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0E4DA4] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0E4DA4] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#093575] cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{copy.bookingSection.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Discreet Privacy Mode Controller & Live SMS Preview */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-[#0E4DA4]" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {copy.bookingSection.discreetTitle}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {copy.bookingSection.discreetDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-xs font-semibold text-slate-700">
                  {discreetMode
                    ? locale === 'ar'
                      ? 'وضع الخصوصية: مفعّل'
                      : locale === 'en'
                        ? 'Privacy Mask: Active'
                        : 'Sirta Ballanka: Waa Daaran Tahay'
                    : locale === 'ar'
                      ? 'وضع الخصوصية: متوقف'
                      : locale === 'en'
                        ? 'Privacy Mask: Off'
                        : 'Sirta Ballanka: Waa Daranayn (Caadi)'}
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={discreetMode}
                  aria-label={copy.bookingSection.discreetTitle}
                  onClick={() => setDiscreetMode((prev) => !prev)}
                  className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                    discreetMode ? 'bg-[#0E4DA4]' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      discreetMode
                        ? locale === 'ar'
                          ? '-translate-x-6'
                          : 'translate-x-6'
                        : locale === 'ar'
                          ? '-translate-x-1'
                          : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <MessageSquare className="h-4 w-4 text-[#D9232E]" />
                <span>{copy.bookingSection.smsPreviewTitle}</span>
              </div>
              <div
                data-testid="sms-preview"
                className="mt-4 rounded-xl border border-slate-700 bg-slate-800/80 p-4 text-sm leading-relaxed text-slate-100"
              >
                {liveNotificationPreview}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 shrink-0 text-white" />
                <span>
                  {locale === 'ar'
                    ? 'لا يتم استخدام ملفات تتبع إعلانية في صفحة الحجز.'
                    : locale === 'en'
                      ? 'Zero advertising trackers or third-party pixels run on booking pages.'
                      : 'Bogga ballamaha laguma xiro trackers xayeysiis ah si xogtaadu u badbaaddo.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
