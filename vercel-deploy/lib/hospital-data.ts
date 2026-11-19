import type { BranchId, Locale, PaymentMethod } from './hospital-logic';

export type LocalizedText = Record<Locale, string>;

export interface BranchInfo {
  id: BranchId;
  city: LocalizedText;
  officialName: LocalizedText;
  address: LocalizedText;
  plusCode?: string;
  googleRating: string;
  googleReviewCount: number;
  cyboRating?: string;
  primaryPhone: string;
  secondaryPhones: string[];
  emailPlaceholder: string;
  openedDate: LocalizedText;
  weeklyHours: Array<{
    day: LocalizedText;
    hours: LocalizedText;
  }>;
  mapQuery: string;
  directoryNote: LocalizedText;
}

export interface SpecialistService {
  id: string;
  code: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  clinicalProtocols: Record<Locale, string[]>;
  equipment: LocalizedText;
  mediaSource: string;
  discreetEligible: boolean;
  imageKey: 'family' | 'fertility' | 'ultrasound' | 'hero';
}

export interface DoctorProfile {
  id: string;
  name: string;
  arabicName?: string;
  role: LocalizedText;
  department: LocalizedText;
  branchId: BranchId;
  branchLabel: LocalizedText;
  languages: string;
  verifiedRecordNote: LocalizedText;
  clinicalFocus: LocalizedText;
}

export interface TimelineEvent {
  id: string;
  dateLabel: LocalizedText;
  category: 'mogadishu' | 'hargeisa' | 'technology';
  title: LocalizedText;
  description: LocalizedText;
  sources: string[];
}

export interface AcademyVideo {
  id: string;
  duration: string;
  titleSomali: string;
  translatedTitle: LocalizedText;
  topicTag: LocalizedText;
  summary: LocalizedText;
  keyTakeaways: Record<Locale, string[]>;
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const UI_COPY: Record<
  Locale,
  {
    brandWordmark: string;
    nav: {
      services: string;
      branches: string;
      doctors: string;
      timeline: string;
      academy: string;
    };
    bookCta: string;
    hero: {
      kicker: string;
      headline: string;
      subhead: string;
      primaryBtn: string;
      secondaryBtn: string;
      auditBtn: string;
      branchSwitchLabel: string;
      languageLabel: string;
      ratingLabel: string;
      reviewsWord: string;
      equipmentLabel: string;
      privacyPromise: string;
    };
    servicesSection: {
      kicker: string;
      title: string;
      subtitle: string;
      protocolsHeading: string;
      equipmentHeading: string;
      bookServiceBtn: string;
      discreetAvailable: string;
    };
    branchesSection: {
      kicker: string;
      title: string;
      subtitle: string;
      hoursTitle: string;
      contactTitle: string;
      openMapsBtn: string;
      lasAnodTitle: string;
      lasAnodBody: string;
    };
    doctorsSection: {
      kicker: string;
      title: string;
      subtitle: string;
      filterAll: string;
      filterMogadishu: string;
      filterHargeisa: string;
      recordNoteLabel: string;
      bookDoctorBtn: string;
    };
    timelineSection: {
      kicker: string;
      title: string;
      subtitle: string;
      filters: {
        all: string;
        mogadishu: string;
        hargeisa: string;
        technology: string;
      };
      sourcesLabel: string;
    };
    academySection: {
      kicker: string;
      title: string;
      subtitle: string;
      channelNote: string;
      takeawaysTitle: string;
      faqTitle: string;
    };
    bookingSection: {
      kicker: string;
      title: string;
      subtitle: string;
      stepBranch: string;
      stepService: string;
      stepSchedule: string;
      stepDetails: string;
      discreetTitle: string;
      discreetDesc: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      dateLabel: string;
      slotLabel: string;
      doctorLabel: string;
      paymentLabel: string;
      notesLabel: string;
      notesPlaceholder: string;
      smsPreviewTitle: string;
      submitBtn: string;
      confirmedTitle: string;
      confirmedDesc: string;
      codeLabel: string;
      copyBtn: string;
      copiedBtn: string;
      newBookingBtn: string;
    };
    transparency: {
      title: string;
      subtitle: string;
      closeBtn: string;
      logoSectionTitle: string;
      logoSectionDesc: string;
      colorGapNotice: string;
      disambiguationTitle: string;
      phase0Title: string;
    };
    footer: {
      description: string;
      auditTrigger: string;
      copyright: string;
    };
  }
> = {
  so: {
    brandWordmark: 'Amoore Specialist',
    nav: {
      services: 'Adeegyada',
      branches: 'Xarumaha',
      doctors: 'Dhakhaatiirta',
      timeline: 'Taariikhda',
      academy: 'Wacyigelinta',
    },
    bookCta: 'Ballan Qarsoon',
    hero: {
      kicker: 'Isbitaalka Takhasusiga Amoore · Muqdisho & Hargeysa',
      headline: 'Safarka Nolosha, Rajada Qoyska & Daaweynta Taranka',
      subhead:
        'Xarun caafimaad oo ku takhasustay daaweynta dhalma la’aanta ragga iyo dumarka, bacriminta ubadka, xalka haweenka 40+ sano ka weyn, adeegga EDV ee raganimada, iyo baaritaanka Mindray Ultrasound DC-30.',
      primaryBtn: 'Ballan Qarsoon Qabso',
      secondaryBtn: 'Eeg Adeegyada Takhasuska',
      auditBtn: 'Midabada Astaanta & Xogta Rasmiga ah',
      branchSwitchLabel: 'Xarunta Firfircoon',
      languageLabel: 'Luqadda',
      ratingLabel: 'Qiimeynta Google',
      reviewsWord: 'faallo',
      equipmentLabel: 'Qalabka La Xaqiijiyay',
      privacyPromise: 'Ballamaha xasaasiga ah waxaa loo maareeyaa si qarsoodi ah',
    },
    servicesSection: {
      kicker: '01 – 04 · Waaxyaha Takhasuska',
      title: 'Afar Tiir oo Caafimaadka Taranka & Qoyska ah',
      subtitle:
        'Adeeg kasta wuxuu ku dhisan yahay baaritaan shaybaar oo sax ah, qalab casri ah, iyo xafidaadda sirta bukaanka.',
      protocolsHeading: 'Adeegyada & Baaritaannada Gudaha',
      equipmentHeading: 'Teknoolajiyadda & Caddeynta Warbaahinta',
      bookServiceBtn: 'Ballanso Adeeggan',
      discreetAvailable: 'Habka Ballanta Qarsoon waa diyaar',
    },
    branchesSection: {
      kicker: 'Xarumaha La Xaqiijiyay',
      title: 'Muqdisho (West Taleex) & Hargeysa (Jigjiga-Yar)',
      subtitle:
        'Cinwaanada saxda ah ee khariidadda, telefoonnada tooska ah, iyo saacadaha shaqada ee xilliga Bariga Afrika (EAT).',
      hoursTitle: 'Saacadaha Shaqada Todobaadlaha',
      contactTitle: 'Xiriirka Tooska ah',
      openMapsBtn: 'Ka fur Khariidadda',
      lasAnodTitle: 'Diiwaanka Rarka Qalabka ee Laascaanood (March 31, 2026)',
      lasAnodBody:
        'Dukumiinti heshiis ah (Heshiis Qaadis Alaab) wuxuu caddeeyay in faraca Jigjiga-Yar ee Hargeysa (063 877 7943 / 063 877 7953) uu hal xabbo oo Mindray Ultrasound DC-30 oo cusub u diray Laascaanood ($250 oo lagu bixiyay Zaad). Xogta dadweynuhu weli ma xaqiijin haddii farac cusub laga furayo Laascaanood ama haddii uu yahay wareejin qalab.',
    },
    doctorsSection: {
      kicker: 'Maamulka & Khubarada',
      title: 'Dhakhaatiirta & Hoggaanka La Diiwaangeliyay',
      subtitle:
        'Dhakhaatiir takhasus leh iyo maamul ku saxiixan dukumiintiyada rasmiga ah iyo baahinnada warbaahinta.',
      filterAll: 'Dhammaan',
      filterMogadishu: 'Muqdisho',
      filterHargeisa: 'Hargeysa',
      recordNoteLabel: 'Xogta Diiwaanka',
      bookDoctorBtn: 'La Ballan Dhakhtarkan',
    },
    timelineSection: {
      kicker: '2020 – Maarso 2026',
      title: 'Taariikhda Horumarka & Warbaahinta',
      subtitle:
        'Laga soo bilaabo muuqaalladii wacyigelinta YouTube ilaa furitaanka Muqdisho, daahfurka Hargeysa, barnaamijka 40+, iyo keenista teknoolajiyadda EDV.',
      filters: {
        all: 'Dhammaan Dhacdooyinka',
        mogadishu: 'Muqdisho',
        hargeisa: 'Hargeysa',
        technology: 'Qalabka & Tiknoolajiyadda',
      },
      sourcesLabel: 'Ilaha Xaqiijiyay',
    },
    academySection: {
      kicker: 'Kanaalka Amoore Specialist Hospital',
      title: 'Akadeemiyadda Wacyigelinta & Su’aalaha Bukaanka',
      subtitle:
        'Mawduucyada waxbarasho ee laga soo xigtay kanaalka YouTube-ka rasmiga ah ee isbitaalka oo loo beddelay qoraallo fudud oo la akhrisan karo.',
      channelNote: 'Muuqaallada Kanaalka: Amoore specialist hospital',
      takeawaysTitle: 'Qodobada Muhiimka ah ee Caafimaadka',
      faqTitle: 'Su’aalaha Badanaa La Isweydiiyo',
    },
    bookingSection: {
      kicker: 'Nidaamka Ballamaha Sirta ah',
      title: 'Qabso Ballan Qarsoon oo Degdeg ah',
      subtitle:
        'Dooro xarunta, takhasuska, waqtiga, iyo habka lacag-bixinta maxalliga ah (EVC Plus, ZAAD, eDahab).',
      stepBranch: '1. Xarunta',
      stepService: '2. Adeegga & Dhakhtarka',
      stepSchedule: '3. Taariikhda & Waqtiga',
      stepDetails: '4. Xogtaada & Lacagta',
      discreetTitle: 'Daar Ballan Qarsoon (Discreet Privacy Mode)',
      discreetDesc:
        'Marka uu daaran yahay, fariinta SMS/WhatsApp laguma qorayo magaca cudurka (sida EDV ama Bacriminta); waxaa kaliya la soo dirayaa koodhka sirta ah (AMR-XXXX) iyo saacadda.',
      nameLabel: 'Magacaaga ama Xarfo Kooban',
      namePlaceholder: 'Tusaale: Axmed Maxamed ama A.M.',
      phoneLabel: 'Lambarka Telefoonka (WhatsApp / SMS)',
      phonePlaceholder: '+252 61 / 063 ...',
      dateLabel: 'Taariikhda Ballanka (Sabti – Khamiis)',
      slotLabel: 'Saacadda La Heli Karo',
      doctorLabel: 'Dhakhtarka / Qaybta',
      paymentLabel: 'Habka Lacag-bixinta',
      notesLabel: 'Faahfaahin Kooban (Ikhtiyaari)',
      notesPlaceholder: 'Haddii aad rabto in aan warbixin hore kula wadaagno...',
      smsPreviewTitle: 'Horudhaca Fariinta Xaqiijinta (SMS / WhatsApp)',
      submitBtn: 'Xaqiiji Ballanka',
      confirmedTitle: 'Ballankaaga Waa La Diiwaangeliyay',
      confirmedDesc:
        'Kaydso koodhkan hoose. Waxaad la hadli kartaa xaruntaada adigoo u sheegaya koodhka oo kaliya.',
      codeLabel: 'Koodhka Ballanka',
      copyBtn: 'Koobiyeey Koodhka',
      copiedBtn: 'Waa La Koobiyeeyay',
      newBookingBtn: 'Samee Ballan Cusub',
    },
    transparency: {
      title: 'Xogta Astaanta, Color Codes & Hubinta Cilmi-baarista',
      subtitle:
        'Hufnaan buuxda oo ku saabsan midabada astaanta Amoore, kala-saaridda hay’adaha magaca u eg, iyo qodobada weli sugaya xaqiijinta maamulka (Phase 0).',
      closeBtn: 'Xir',
      logoSectionTitle: 'Falanqaynta Astaanta & Koodhadhka Midabada',
      logoSectionDesc:
        'Astaanta Isbitaalka Amoore waxay ka kooban tahay saddex midab oo waaweyn: Buluug Boqor ah (salka, qofka midig, ilmaha uur-jiifka), Casaan Dhalaalaya (giraangirta iyo qofka bidix ee hooyada), iyo Caddaan Saafi ah. Labada qof waxay samaynayaan qaab Wadne ah oo ilaalinaya ilmaha.',
      colorGapNotice:
        'Ogeysiis Daacad ah: Maadaama uusan jirin Brand Style Guide dadweynaha u furan oo isbitaalku daabacay, koodhadhka ku xiran CSS-ka boggan (#0E4DA4 iyo #D9232E) waa tokens naqshadeed oo u dhigma sawirka astaanta ilaa maamulka Amoore laga helo faylka vector-ka asalka ah (.SVG/.AI).',
      disambiguationTitle: 'Kala-saaridda Magacyada u Eg (Entity Disambiguation)',
      phase0Title: 'Xogaha Gudaha ee Weligood aan La Daabicin (Phase 0 Checklist)',
    },
    footer: {
      description:
        'Isbitaalka Takhasusiga Amoore — Xarunta caafimaadka taranka, dhalma la’aanta, haweenka 40+, iyo kaadi-mareenka ee Muqdisho & Hargeysa.',
      auditTrigger: 'Eeg Xogta Midabada & Hubinta Cilmi-baarista',
      copyright: '© 2026 Amoore Specialist Hospital. Dhammaan xogta dadweynaha waa la xaqiijiyay.',
    },
  },
  en: {
    brandWordmark: 'Amoore Specialist',
    nav: {
      services: 'Services',
      branches: 'Branches',
      doctors: 'Specialists',
      timeline: 'Timeline',
      academy: 'Academy',
    },
    bookCta: 'Book Discreetly',
    hero: {
      kicker: 'Amoore Specialist Hospital · Mogadishu & Hargeisa',
      headline: 'The Journey of Life, Family Hope & Reproductive Care',
      subhead:
        'Dedicated specialist hospital for male and female infertility, assisted fertility, specialized OB/GYN care for women 40+, modern male urology & EDV technology, and Mindray DC-30 ultrasound imaging.',
      primaryBtn: 'Book Discreet Consultation',
      secondaryBtn: 'Explore Clinical Pillars',
      auditBtn: 'Brand Colors & Data Audit',
      branchSwitchLabel: 'Active Branch',
      languageLabel: 'Language',
      ratingLabel: 'Google Rating',
      reviewsWord: 'reviews',
      equipmentLabel: 'Verified Systems',
      privacyPromise: 'Sensitive consultations are handled with confidential booking codes',
    },
    servicesSection: {
      kicker: '01 – 04 · Clinical Departments',
      title: 'Four Pillars of Reproductive & Family Medicine',
      subtitle:
        'Every department pairs diagnostic precision with calm, confidential clinical care across our Mogadishu and Hargeisa facilities.',
      protocolsHeading: 'Clinical Protocols & Diagnostics',
      equipmentHeading: 'Equipment & Broadcast Verification',
      bookServiceBtn: 'Book This Department',
      discreetAvailable: 'Discreet Privacy Mode supported',
    },
    branchesSection: {
      kicker: 'Verified Facilities',
      title: 'Mogadishu (West Taleex) & Hargeisa (Jigjiga-Yar)',
      subtitle:
        'Verified physical addresses, direct telephone lines, and live East Africa Time (EAT) clinic schedules.',
      hoursTitle: 'Weekly Operating Schedule',
      contactTitle: 'Direct Branch Contacts',
      openMapsBtn: 'Open in Maps',
      lasAnodTitle: 'Las Anod Equipment Shipment Record (March 31, 2026)',
      lasAnodBody:
        'A documented freight agreement (Heshiis Qaadis Alaab) records the Jigjiga-Yar, Hargeisa branch (063 877 7943 / 063 877 7953) dispatching one new Mindray Ultrasound DC-30 unit to Las Anod ($250 shipping paid via Zaad). Public records have not yet confirmed whether this indicates a new branch or partner equipment delivery.',
    },
    doctorsSection: {
      kicker: 'Leadership & Specialists',
      title: 'Documented Physicians & Hospital Leadership',
      subtitle:
        'Named specialists and executives confirmed in public hospital documentation and televised clinical launches.',
      filterAll: 'All Branches',
      filterMogadishu: 'Mogadishu',
      filterHargeisa: 'Hargeisa',
      recordNoteLabel: 'Public Record Note',
      bookDoctorBtn: 'Request Consultation',
    },
    timelineSection: {
      kicker: '2020 – March 2026',
      title: 'Verified Growth Timeline & Broadcast Archive',
      subtitle:
        'From educational YouTube broadcasts to the Mogadishu launch, Hargeisa expansion, Women 40+ fertility solutions, and EDV urology technology.',
      filters: {
        all: 'All Milestones',
        mogadishu: 'Mogadishu',
        hargeisa: 'Hargeisa',
        technology: 'Equipment & IT',
      },
      sourcesLabel: 'Verified Sources',
    },
    academySection: {
      kicker: 'Amoore Specialist Hospital Channel',
      title: 'Patient Education Academy & Clinical FAQ',
      subtitle:
        'Educational health topics from the hospital’s official YouTube channel organized into clear, readable clinical summaries.',
      channelNote: 'Official YouTube Channel: Amoore specialist hospital',
      takeawaysTitle: 'Key Clinical Takeaways',
      faqTitle: 'Frequently Asked Questions',
    },
    bookingSection: {
      kicker: 'Confidential Appointment Engine',
      title: 'Schedule a Discreet Consultation',
      subtitle:
        'Select your branch, specialty, time slot, and preferred local payment method (EVC Plus, ZAAD, eDahab, or Card).',
      stepBranch: '1. Branch',
      stepService: '2. Service & Specialist',
      stepSchedule: '3. Date & Time',
      stepDetails: '4. Contact & Payment',
      discreetTitle: 'Enable Discreet Privacy Mode',
      discreetDesc:
        'When enabled, SMS/WhatsApp confirmations omit sensitive condition names (such as EDV or Fertility) and show only your confidential reference code (AMR-XXXX) and appointment time.',
      nameLabel: 'Full Name or Initials',
      namePlaceholder: 'e.g., Ahmed Mohamed or A.M.',
      phoneLabel: 'Phone Number (WhatsApp / SMS)',
      phonePlaceholder: '+252 61 / 063 ...',
      dateLabel: 'Appointment Date (Saturday – Thursday)',
      slotLabel: 'Available Time Slot',
      doctorLabel: 'Specialist / Unit',
      paymentLabel: 'Payment Channel',
      notesLabel: 'Brief Note (Optional)',
      notesPlaceholder: 'Optional notes for the intake nurse...',
      smsPreviewTitle: 'Live Confirmation Message Preview (SMS / WhatsApp)',
      submitBtn: 'Confirm Appointment',
      confirmedTitle: 'Appointment Registered',
      confirmedDesc:
        'Save your confidential reference code below. Present only this code at reception.',
      codeLabel: 'Booking Reference',
      copyBtn: 'Copy Reference',
      copiedBtn: 'Copied',
      newBookingBtn: 'Book Another Slot',
    },
    transparency: {
      title: 'Brand Color System & Public Research Audit',
      subtitle:
        'Complete transparency on the Amoore emblem colors, entity disambiguation, and non-public items awaiting Phase 0 hospital confirmation.',
      closeBtn: 'Close',
      logoSectionTitle: 'Emblem Anatomy & Color Token Notice',
      logoSectionDesc:
        'The Amoore emblem uses three visual colors: Royal Blue (background field, right figure, central fetus), Bright Crimson Red (inner ring and left maternal figure), and Pure White (center disc). Together the two figures form a protective heart around the developing child.',
      colorGapNotice:
        'Honesty Notice: Because Amoore Specialist Hospital has not published an official Brand Style Guide, the hex tokens used in this interface (#0E4DA4 and #D9232E) are calibrated visual design tokens matching the emblem until the original vector file (.SVG/.AI) is supplied by leadership.',
      disambiguationTitle: 'Entity Disambiguation (Avoiding Confusion)',
      phase0Title: 'Non-Public Records Pending Phase 0 Confirmation',
    },
    footer: {
      description:
        'Amoore Specialist Hospital — Dedicated fertility, OB/GYN 40+, urology & EDV, and Mindray DC-30 diagnostic imaging across Mogadishu and Hargeisa.',
      auditTrigger: 'Brand Colors & Research Transparency Audit',
      copyright: '© 2026 Amoore Specialist Hospital. Built exclusively on verified public records.',
    },
  },
  ar: {
    brandWordmark: 'مستشفى أموري',
    nav: {
      services: 'الخدمات',
      branches: 'الفروع',
      doctors: 'الأطباء',
      timeline: 'المسيرة',
      academy: 'التوعية',
    },
    bookCta: 'حجز سري',
    hero: {
      kicker: 'مستشفى أموري التخصصي · مقديشو وهرجيسا',
      headline: 'رحلة الحياة، أمل الأسرة والرعاية الإنجابية المتخصصة',
      subhead:
        'مستشفى تخصصي لعلاج تأخر الإنجاب لدى الرجال والنساء، الإخصاب، برنامج النساء فوق سن الأربعين، جراحة المسالك البولية وتقنية EDV للرجال، والتصوير بجهاز Mindray Ultrasound DC-30.',
      primaryBtn: 'احجز استشارة سرية',
      secondaryBtn: 'استكشف الأقسام الطبية',
      auditBtn: 'ألوان الشعار وتدقيق البيانات',
      branchSwitchLabel: 'الفرع النشط',
      languageLabel: 'اللغة',
      ratingLabel: 'تقييم جوجل',
      reviewsWord: 'تقييم',
      equipmentLabel: 'أجهزة معتمدة',
      privacyPromise: 'تُدار المواعيد الحساسة برموز حجز سرية لحماية الخصوصية',
    },
    servicesSection: {
      kicker: '01 – 04 · الأقسام التخصصية',
      title: 'أربعة ركائز للطب الإنجابي وصحة الأسرة',
      subtitle:
        'يجمع كل قسم بين الفحوصات المخبرية الدقيقة والتقنيات التشخيصية الحديثة مع احترام كامل لخصوصية المريض.',
      protocolsHeading: 'البروتوكولات والفحوصات',
      equipmentHeading: 'التقنيات والتوثيق الإعلامي',
      bookServiceBtn: 'احجز في هذا القسم',
      discreetAvailable: 'يدعم وضع الحجز السري',
    },
    branchesSection: {
      kicker: 'المواقع المعتمدة',
      title: 'مقديشو (غرب طليح) وهرجيسا (جيجيغا يار)',
      subtitle:
        'العناوين الموثقة على الخرائط، أرقام الهواتف المباشرة، وساعات العمل بتوقيت شرق أفريقيا (EAT).',
      hoursTitle: 'جدول العمل الأسبوعي',
      contactTitle: 'أرقام التواصل المباشر',
      openMapsBtn: 'فتح في الخرائط',
      lasAnodTitle: 'سجل شحن الأجهزة إلى لاس عانود (31 مارس 2026)',
      lasAnodBody:
        'توثق اتفاقية شحن رسمية مؤرخة في 31 مارس 2026 قيام فرع جيجيغا يار في هرجيسا (0638777943 / 0638777953) بإرسال جهاز Mindray Ultrasound DC-30 جديد إلى لاس عانود بتكلفة شحن 250 دولار عبر خدمة Zaad. لم تؤكد السجلات العامة بعد ما إذا كان ذلك لفرع جديد أم لشريك طبي.',
    },
    doctorsSection: {
      kicker: 'القيادة والأطباء',
      title: 'الأطباء والإدارة الموثقون',
      subtitle:
        'الأخصائيون والقيادة الإدارية المذكورون في الوثائق العامة والتقارير التلفزيونية للمستشفى.',
      filterAll: 'جميع الفروع',
      filterMogadishu: 'مقديشو',
      filterHargeisa: 'هرجيسا',
      recordNoteLabel: 'ملاحظة التوثيق',
      bookDoctorBtn: 'طلب موعد مع الطبيب',
    },
    timelineSection: {
      kicker: '2020 – مارس 2026',
      title: 'المسيرة الزمنية وأرشيف التغطيات الإعلامية',
      subtitle:
        'من فيديوهات التوعية على يوتيوب إلى افتتاح مقديشو، وتدشين هرجيسا، وبرنامج 40+، وتقنية EDV.',
      filters: {
        all: 'كل المحطات',
        mogadishu: 'مقديشو',
        hargeisa: 'هرجيسا',
        technology: 'الأجهزة والتقنية',
      },
      sourcesLabel: 'المصادر الموثقة',
    },
    academySection: {
      kicker: 'قناة مستشفى أموري التخصصي',
      title: 'أكاديمية التوعية والأسئلة الشائعة',
      subtitle:
        'ملخصات تعليمية مستمدة من مقاطع الفيديو التوعوية الرسمية للمستشفى على يوتيوب.',
      channelNote: 'القناة الرسمية: Amoore specialist hospital',
      takeawaysTitle: 'النقاط الطبية الرئيسية',
      faqTitle: 'الأسئلة الشائعة للمرضى',
    },
    bookingSection: {
      kicker: 'نظام المواعيد السري',
      title: 'احجز موعدك بسرية تامة',
      subtitle:
        'اختر الفرع والتخصص والوقت ووسيلة الدفع المحلية المناسبة (EVC Plus أو ZAAD أو eDahab).',
      stepBranch: '1. الفرع',
      stepService: '2. التخصص والطبيب',
      stepSchedule: '3. التاريخ والوقت',
      stepDetails: '4. البيانات والدفع',
      discreetTitle: 'تفعيل وضع الخصوصية السري',
      discreetDesc:
        'عند التفعيل، يتم إخفاء اسم الحالة الطبية من رسائل SMS وواتساب والاكتفاء برمز الحجز السري (AMR-XXXX) ووقت الموعد.',
      nameLabel: 'الاسم الكامل أو الأحرف الأولى',
      namePlaceholder: 'مثال: أحمد محمد أو أ.م.',
      phoneLabel: 'رقم الهاتف (واتساب / SMS)',
      phonePlaceholder: '+252 61 / 063 ...',
      dateLabel: 'تاريخ الموعد (السبت – الخميس)',
      slotLabel: 'الوقت المتاح',
      doctorLabel: 'الطبيب / الوحدة',
      paymentLabel: 'وسيلة الدفع',
      notesLabel: 'ملاحظة مختصرة (اختياري)',
      notesPlaceholder: 'ملاحظات اختيارية لفريق الاستقبال...',
      smsPreviewTitle: 'معاينة رسالة التأكيد (SMS / واتساب)',
      submitBtn: 'تأكيد الموعد',
      confirmedTitle: 'تم تسجيل الموعد بنجاح',
      confirmedDesc:
        'احتفظ برمز الحجز أدناه، ويمكنك إبراز الرمز فقط عند الاستقبال.',
      codeLabel: 'رمز الحجز',
      copyBtn: 'نسخ الرمز',
      copiedBtn: 'تم النسخ',
      newBookingBtn: 'حجز موعد جديد',
    },
    transparency: {
      title: 'ألوان الشعار وتدقيق البيانات العامة',
      subtitle:
        'شفافية كاملة حول ألوان الشعار، والتمييز بين الكيانات المتشابهة في الاسم، والبيانات الداخلية المنتظر تأكيدها في المرحلة 0.',
      closeBtn: 'إغلاق',
      logoSectionTitle: 'تحليل الشعار وألوانه',
      logoSectionDesc:
        'يتكون شعار أموري من ثلاثة ألوان رئيسية: الأزرق الملكي، والأحمر القاني، والأبيض النقي، حيث يشكل الرمزان شكل قلب يحمي الجنين في المنتصف.',
      colorGapNotice:
        'تنويه للأمانة العلمية: لعدم توفر دليل هوية بصرية منشور رسمياً من المستشفى، فإن الرموز اللونية المستخدمة (#0E4DA4 و #D9232E) هي رموز تصميمية مطابقة بصرياً للشعار لحين استلام ملف الشعار المتجه الأصلي (.SVG/.AI) من الإدارة.',
      disambiguationTitle: 'التمييز بين الأسماء المتشابهة',
      phase0Title: 'بيانات داخلية غير منشورة (قائمة المرحلة 0)',
    },
    footer: {
      description:
        'مستشفى أموري التخصصي — رعاية متخصصة للخصوبة، أمراض النساء والولادة، المسالك البولية وتقنية EDV في مقديشو وهرجيسا.',
      auditTrigger: 'عرض تدقيق الألوان والشفافية البحثية',
      copyright: '© 2026 مستشفى أموري التخصصي. مبني وفق البيانات العامة الموثقة.',
    },
  },
};

export const BRANCHES: Record<BranchId, BranchInfo> = {
  mogadishu: {
    id: 'mogadishu',
    city: { so: 'Muqdisho', en: 'Mogadishu', ar: 'مقديشو' },
    officialName: {
      so: 'Xarunta Muqdisho — West Taleex',
      en: 'Mogadishu Branch — West Taleex',
      ar: 'فرع مقديشو — غرب طليح',
    },
    address: {
      so: 'West Taleex (W Taleex), Muqdisho, Gobolka Banaadir, Soomaaliya',
      en: 'West Taleex (W Taleex), Mogadishu, Banadir, Somalia',
      ar: 'غرب طليح (W Taleex)، مقديشو، بنادر، الصومال',
    },
    googleRating: '4.8',
    googleReviewCount: 20,
    cyboRating: '5.0 / 5 (1 Cybo)',
    primaryPhone: '+252 61 444 5914',
    secondaryPhones: ['61 444 5914'],
    emailPlaceholder: 'Amoorehospital@[Domain Pending Verification]',
    openedDate: {
      so: 'Baahinta Furitaanka: September 2, 2024',
      en: 'Launch Broadcast: September 2, 2024',
      ar: 'بث الافتتاح: 2 سبتمبر 2024',
    },
    weeklyHours: [
      {
        day: { so: 'Isniin', en: 'Monday', ar: 'الإثنين' },
        hours: { so: '7:30 AM – 5:00 PM', en: '7:30 AM – 5:00 PM', ar: '7:30 ص – 5:00 م' },
      },
      {
        day: { so: 'Talaado – Khamiis', en: 'Tuesday – Thursday', ar: 'الثلاثاء – الخميس' },
        hours: { so: '7:00 AM – 5:00 PM', en: '7:00 AM – 5:00 PM', ar: '7:00 ص – 5:00 م' },
      },
      {
        day: { so: 'Jimce', en: 'Friday', ar: 'الجمعة' },
        hours: { so: 'Waa xiran yahay', en: 'Closed', ar: 'مغلق' },
      },
      {
        day: { so: 'Sabti – Axad', en: 'Saturday – Sunday', ar: 'السبت – الأحد' },
        hours: { so: '7:00 AM – 5:00 PM', en: '7:00 AM – 5:00 PM', ar: '7:00 ص – 5:00 م' },
      },
    ],
    mapQuery: 'https://maps.google.com/?q=Amoore+Specialist+West+Taleex+Mogadishu',
    directoryNote: {
      so: 'Diiwaanka Google Places & Cybo waxay si sax ah u xaqiijiyeen West Taleex (waxaa la saxay qaladka bogga Kulmie oo degmooyin kala duwan ku xusay).',
      en: 'Google Places and Cybo verify West Taleex as the exact location (clarifying automated Kulmie directory district mismatches).',
      ar: 'تؤكد خرائط جوجل وCybo أن الموقع الدقيق هو غرب طليح (تم تصحيح تداخل المديريات في دليل Kulmie).',
    },
  },
  hargeisa: {
    id: 'hargeisa',
    city: { so: 'Hargeysa', en: 'Hargeisa', ar: 'هرجيسا' },
    officialName: {
      so: 'Xarunta Hargeysa — Jigjiga-Yar',
      en: 'Hargeisa Branch — Jigjiga-Yar',
      ar: 'فرع هرجيسا — جيجيغا يار',
    },
    address: {
      so: 'Waddada Jigjiga-Yar, Hargeysa, Maroodi Jeex',
      en: 'Jigjiga-Yar Road, Hargeisa, Maroodi Jeex',
      ar: 'شارع جيجيغا يار، هرجيسا، مرودي جيح',
    },
    plusCode: 'H29P+37P',
    googleRating: '5.0',
    googleReviewCount: 6,
    primaryPhone: '+252 63 877 7953',
    secondaryPhones: ['063 877 7943', '+252 65 720 3180 (2 657 203180)'],
    emailPlaceholder: 'Amoorehospital@[Domain Pending Verification]',
    openedDate: {
      so: 'Daahfurka Rasmiga ah: September 30, 2025',
      en: 'Official Opening: September 30, 2025',
      ar: 'الافتتاح الرسمي: 30 سبتمبر 2025',
    },
    weeklyHours: [
      {
        day: { so: 'Sabti – Khamiis', en: 'Saturday – Thursday', ar: 'السبت – الخميس' },
        hours: {
          so: '7:30 AM – 5:00 PM (Jadwalka Guud)',
          en: '7:30 AM – 5:00 PM (Standard Schedule)',
          ar: '7:30 ص – 5:00 م (الجدول العام)',
        },
      },
      {
        day: { so: 'Jimce', en: 'Friday', ar: 'الجمعة' },
        hours: { so: 'Waa xiran yahay', en: 'Closed', ar: 'مغلق' },
      },
    ],
    mapQuery: 'https://maps.google.com/?q=H29P%2B37P+Jigjiga-Yar+Hargeisa',
    directoryNote: {
      so: 'Waxaa lagu xaqiijiyay warbixinnada MM Somali TV, Gabiley News, KF Media TV, Google Places (H29P+37P), heshiiska rarka ("Jig-jiga yar Hospital, Hargeisa"), iyo dukumiintiga rasmiga ah ee shaqada.',
      en: 'Verified via MM Somali TV, Gabiley News, KF Media TV, Google Places (H29P+37P), freight agreement ("Jig-jiga yar Hospital, Hargeisa"), and official work certificate records.',
      ar: 'موثق عبر MM Somali TV وGabiley News وKF Media TV وخرائط جوجل (H29P+37P) وعقد الشحن وشهادة العمل الرسمية.',
    },
  },
};

export const SERVICES: SpecialistService[] = [
  {
    id: 'fertility',
    code: '01',
    title: {
      so: 'Bacriminta Ubadka & Dhalma La’aanta',
      en: 'Fertility & Infertility Care',
      ar: 'الإخصاب وعلاج تأخر الإنجاب',
    },
    subtitle: {
      so: 'Daaweynta dhalma la’aanta ragga iyo dumarka',
      en: 'Comprehensive male & female fertility diagnostics',
      ar: 'تشخيص وعلاج العقم لدى الرجال والنساء',
    },
    summary: {
      so: 'Qiimeyn buuxda oo ku saabsan sababaha keena dhalma la’aanta labada lammaane, iyadoo la adeegsanayo baaritaanno hormoonnada, xaaladda ugxanta, iyo caafimaadka shahwada.',
      en: 'Integrated couple-centered diagnostics evaluating hormonal balance, ovulation health, and male reproductive parameters across Mogadishu and Hargeisa.',
      ar: 'تقييم شامل للزوجين يشمل فحوصات الهرمونات، التبويض، وصحة الحيوانات المنوية في فرعي مقديشو وهرجيسا.',
    },
    clinicalProtocols: {
      so: [
        'Baaritaanka sababaha dhalma la’aanta ragga iyo dumarka',
        'Adeegga Bacriminta Ubadka ee Xarunta Hargeysa (daahfurkii Jan 9, 2026)',
        'La-talinta qorsheynta qoyska iyo la-socoshada xaaladaha gaarka ah',
      ],
      en: [
        'Root-cause male & female infertility evaluation',
        'Assisted Fertility Services launched in Hargeisa (Jan 9, 2026)',
        'Couples reproductive counseling & continuous clinical follow-up',
      ],
      ar: [
        'تقييم أسباب تأخر الإنجاب لدى الرجال والنساء',
        'خدمات الإخصاب المدشنة في هرجيسا (9 يناير 2026)',
        'استشارات الزوجين والمتابعة الطبية المستمرة',
      ],
    },
    equipment: {
      so: 'Shaybaarka taranka & nidaamka baaritaanka uur-ku-taalla',
      en: 'Dedicated reproductive diagnostics & laboratory profiling',
      ar: 'مختبر الفحوصات الإنجابية والتحاليل الهرمونية',
    },
    mediaSource: 'Somali Cable (Sept 2024) · MM Somali TV & Horn Cable TV (Jan 9, 2026)',
    discreetEligible: true,
    imageKey: 'family',
  },
  {
    id: 'obgyn-40plus',
    code: '02',
    title: {
      so: 'Caafimaadka Haweenka & Xalka 40+ Sano',
      en: 'OB/GYN & Women 40+ Program',
      ar: 'أمراض النساء والولادة وبرنامج 40+',
    },
    subtitle: {
      so: 'Daryeelka uurka & haweenka 40+ ee dhalmo gooyay',
      en: 'Prenatal monitoring & specialized 40+ fertility solutions',
      ar: 'متابعة الحمل وحلول الخصوبة للنساء فوق الأربعين',
    },
    summary: {
      so: 'Markii ugu horreysay dalka ayuu Isbitaalka Amoore daahfuray barnaamij xal u raadinaya haweenka da’doodu ka weyn tahay 40-ka sano ee dhalmo gooyay, oo ay weheliyaan baaritaannada ugxanta iyo la-socoshada haweenka uurka leh.',
      en: 'First-in-country fertility and ovulation management program designed for women over 40 experiencing fertility decline, alongside full antenatal care and delivery preparation.',
      ar: 'برنامج متخصص رائد في الصومال للنساء فوق سن الأربعين اللواتي يواجهن تراجع الخصوبة، مع متابعة كاملة للحمل ومشاكل التبويض.',
    },
    clinicalProtocols: {
      so: [
        'Barnaamijka xalka haweenka 40+ sano ka weyn (daahfurkii Jan 20, 2026)',
        'Xallinta dhibaatooyinka ukunta/ugxanta (Ovulation) & bacriminta',
        'La-socoshada joogtada ah ee hooyada uurka leh (Consultant OB/GYN)',
      ],
      en: [
        'Specialized Women 40+ fertility solution (launched Jan 20, 2026)',
        'Ovulation & fertilization support diagnostics',
        'Consultant OB/GYN prenatal care and laboratory screening',
      ],
      ar: [
        'برنامج الخصوبة للنساء فوق 40 عاماً (تدشين 20 يناير 2026)',
        'علاج مشاكل التبويض ودعم الإخصاب',
        'متابعة الحمل بإشراف استشاري أمراض النساء والتوليد',
      ],
    },
    equipment: {
      so: 'Barnaamijyada horumarinta OB/GYN & Ultrasound-ka uurka',
      en: 'Advanced OB/GYN diagnostic suite & fetal monitoring',
      ar: 'عيادة النساء والتوليد المتقدمة وتخطيط الحمل',
    },
    mediaSource: 'Shabelle TV & Somali Cable (Jan 20, 2026) · Dr. Mohamed Ali Khalfallah',
    discreetEligible: true,
    imageKey: 'fertility',
  },
  {
    id: 'urology-edv',
    code: '03',
    title: {
      so: 'Kaadi-mareenka & Adeegga EDV ee Ragga',
      en: 'Urology, Andrology & EDV Therapy',
      ar: 'المسالك البولية وصحة الرجل وتقنية EDV',
    },
    subtitle: {
      so: 'Daaweynta kacsiga, hamiga ragga & shahwada',
      en: 'Erectile dysfunction, male vitality & sperm motility',
      ar: 'علاج ضعف الانتصاب وضعف حركة الحيوانات المنوية',
    },
    summary: {
      so: 'Waax u gaar ah caafimaadka raganimada iyo kaadi-mareenka oo keentay qalabka casriga ah iyo adeegga EDV (daahfurkii March 24, 2026), iyadoo sidoo kale lagu daaweeyo daciifnimada dhaqdhaqaaqa shahwada (Asthenozoospermia).',
      en: 'Dedicated urology & men’s reproductive health unit equipped with modern EDV systems for erectile dysfunction and male vitality, plus clinical management of Asthenozoospermia.',
      ar: 'وحدة متخصصة في المسالك البولية وصحة الرجل مجهزة بتقنية EDV الحديثة لعلاج ضعف الانتصاب ومشاكل حركة الحيوانات المنوية.',
    },
    clinicalProtocols: {
      so: [
        'Adeegga casriga ah ee EDV ee caafimaadka raganimada (March 24, 2026)',
        'Daaweynta daciifnimada kacsiga iyo yaraanta hamiga ragga',
        'Baaritaanka & daaweynta yaraanta socodka shahwada (Asthenozoospermia)',
        'Daaweynta bukaan-socodka, bukaan-jiifka & xaaladaha degdegga ah ee kaadi-mareenka',
      ],
      en: [
        'EDV therapy & modern male vitality equipment (March 24, 2026)',
        'Confidential evaluation of erectile dysfunction & libido concerns',
        'Semen analysis & Asthenozoospermia motility protocols',
        'Outpatient, inpatient & emergency urological care',
      ],
      ar: [
        'خدمة EDV المتطورة لصحة الرجل (24 مارس 2026)',
        'علاج ضعف الانتصاب ونقص الرغبة بسرية تامة',
        'تشخيص وعلاج ضعف حركة الحيوانات المنوية',
        'رعاية العيادات الخارجية والطوارئ للمسالك البولية',
      ],
    },
    equipment: {
      so: 'Qalabka casriga ah ee EDV & Shaybaarka Andrology',
      en: 'Modern EDV Therapy Console & Andrology Lab',
      ar: 'أجهزة EDV الحديثة ومختبر الذكورة',
    },
    mediaSource: 'Shabelle TV & Somali Cable (March 24, 2026) · Dr. Tamir Abdalla',
    discreetEligible: true,
    imageKey: 'hero',
  },
  {
    id: 'diagnostics-ultrasound',
    code: '04',
    title: {
      so: 'Shaybaarka & Mindray Ultrasound DC-30',
      en: 'Diagnostics & Mindray Ultrasound DC-30',
      ar: 'المختبر والتصوير بجهاز Mindray DC-30',
    },
    subtitle: {
      so: 'Raajada codka ee saxda ah & baaritaannada shaybaarka',
      en: 'High-definition ultrasound imaging & lab diagnostics',
      ar: 'التصوير بالموجات فوق الصوتية والتحاليل المخبرية',
    },
    summary: {
      so: 'Sawir-qaadista caafimaadka haweenka, uurka, iyo taranka oo lagu qabto mashiinnada Mindray Ultrasound DC-30 iyo shaybaar dhammaystiran oo taageera go’aannada dhakhaatiirta.',
      en: 'Diagnostic ultrasound imaging utilizing Mindray DC-30 systems paired with comprehensive clinical laboratory panels for obstetrics, fertility, and urology.',
      ar: 'تصوير تشخيصي دقيق باستخدام أجهزة Mindray Ultrasound DC-30 مع باقات تحاليل مخبرية متكاملة لأقسام النساء والخصوبة والمسالك.',
    },
    clinicalProtocols: {
      so: [
        'Sawir-qaadista Mindray Ultrasound DC-30 (xaqiijintii March 31, 2026)',
        'Baaritaannada uurka iyo korriinka ilmaha',
        'Shaybaarka hormoonnada, dhiigga, iyo baaritaannada taranka',
      ],
      en: [
        'Mindray Ultrasound DC-30 diagnostic imaging',
        'Pelvic, follicular & obstetric fetal ultrasound scans',
        'Full endocrine, hematology & reproductive lab testing',
      ],
      ar: [
        'التصوير التشخيصي بجهاز Mindray Ultrasound DC-30',
        'فحوصات الحوض ومتابعة التبويض ونمو الجنين',
        'تحاليل الهرمونات والدم والفحوصات الإنجابية',
      ],
    },
    equipment: {
      so: 'Mindray Ultrasound DC-30 & Shaybaarka Casriga ah',
      en: 'Mindray Ultrasound DC-30 & Clinical Laboratory',
      ar: 'جهاز Mindray Ultrasound DC-30 والمختبر السريري',
    },
    mediaSource: 'Heshiis Qaadis Alaab (March 31, 2026) · Dr. Khalfallah (Sept 2024)',
    discreetEligible: false,
    imageKey: 'ultrasound',
  },
];

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'mohamed-yasin-hassan',
    name: 'Mohamed Yasin Hassan',
    role: {
      so: 'Agaasimaha Guud (General Director)',
      en: 'General Director',
      ar: 'المدير العام',
    },
    department: {
      so: 'Maamulka Sare ee Isbitaalka',
      en: 'Executive Hospital Leadership',
      ar: 'الإدارة العليا للمستشفى',
    },
    branchId: 'hargeisa',
    branchLabel: { so: 'Hargeysa · Jigjiga-Yar', en: 'Hargeisa · Jigjiga-Yar', ar: 'هرجيسا · جيجيغا يار' },
    languages: 'Somali · English',
    verifiedRecordNote: {
      so: 'Ku saxiixan Warqadda Rasmiga ah ee Caddaynta Shaqada (Work Certificate) ee xarunta Hargeysa.',
      en: 'Signatory on official Work Certificate documentation for the Hargeisa Jigjiga-Yar facility.',
      ar: 'موقّع على شهادة العمل الرسمية الصادرة عن فرع هرجيسا.',
    },
    clinicalFocus: {
      so: 'Hagidda istiraatiijiyadda adeegyada bacriminta, soo dejinta qalabka casriga ah, iyo tayada daryeelka.',
      en: 'Overseeing hospital operations, fertility expansion, and medical equipment procurement.',
      ar: 'الإشراف الإداري على توسع خدمات الخصوبة وتوريد الأجهزة الطبية الحديثة.',
    },
  },
  {
    id: 'tamir-abdalla',
    name: 'Dr. Tamir Abdalla Mohammed Mahmmoud',
    role: {
      so: 'Takhasuska Kaadi-mareenka (Urology Specialist)',
      en: 'Urology Specialist',
      ar: 'أخصائي جراحة المسالك البولية',
    },
    department: {
      so: 'Waaxda Kaadi-mareenka & Caafimaadka Ragga',
      en: 'Urology & Men’s Reproductive Health',
      ar: 'قسم المسالك البولية وصحة الرجل',
    },
    branchId: 'hargeisa',
    branchLabel: { so: 'Hargeysa · Jigjiga-Yar', en: 'Hargeisa · Jigjiga-Yar', ar: 'هرجيسا · جيجيغا يار' },
    languages: 'Arabic · English · Somali Care Team',
    verifiedRecordNote: {
      so: 'Warqadda caddaynta shaqada ee Scribd waxay muujinaysaa madaxa "Date 2 April 2025" halka qoraalka gudihiisu leeyahay "from June 2025 up to the present time", iyadoo OCR-ka dukumiintigu mararka qaar u akhriyo "Tamir Abdalia Mohammed Mahmmoud" (waa la diiwaangeliyay farqigan).',
      en: 'Public work certificate header states "Date 2 April 2025" while body text states "from June 2025 up to the present time", and OCR indexing sometimes reads "Tamir Abdalia Mohammed Mahmmoud" (discrepancies transparently noted).',
      ar: 'تظهر شهادة العمل تاريخ 2 أبريل 2025 في الترويسة بينما يذكر النص بدء العمل من يونيو 2025، مع قراءة OCR أحياناً لاسم "Tamir Abdalia Mohammed Mahmmoud" (ملاحظة توثيقية دقيقة).',
    },
    clinicalFocus: {
      so: 'Qaabilaadda bukaan-socodka, bukaan-jiifka, iyo xaaladaha degdegga ah ee kaadi-mareenka.',
      en: 'Managing outpatient consultations, inpatient procedures, and emergency urology cases.',
      ar: 'رعاية مرضى العيادات الخارجية والتنويم وحالات الطوارئ في المسالك البولية.',
    },
  },
  {
    id: 'mohamed-ali-khalfallah',
    name: 'Dr. Mohamed Ali Khalfallah',
    arabicName: 'د. محمد علي خلف الله',
    role: {
      so: 'La-taliye Cudurada Haweenka & Umulaha (Consultant OB/GYN)',
      en: 'Consultant OB/GYN',
      ar: 'استشاري أمراض النساء والتوليد',
    },
    department: {
      so: 'Waaxda Haweenka, Uurka & Bacriminta',
      en: 'Obstetrics, Gynecology & Fertility',
      ar: 'قسم أمراض النساء والتوليد والخصوبة',
    },
    branchId: 'mogadishu',
    branchLabel: { so: 'Muqdisho · West Taleex', en: 'Mogadishu · West Taleex', ar: 'مقديشو · غرب طليح' },
    languages: 'Arabic · English · Somali Care Team',
    verifiedRecordNote: {
      so: 'Ka hadlay warbixintii furitaanka Muqdisho ee September 2024 isagoo soo dhaweeyay bukaanada Soomaaliyeed.',
      en: 'Featured in the September 2024 Mogadishu launch broadcast welcoming Somali families.',
      ar: 'ظهر في تغطية افتتاح فرع مقديشو في سبتمبر 2024 مرحباً بالأسر الصومالية.',
    },
    clinicalFocus: {
      so: 'Baaritaanka iyo la-socoshada haweenka uurka leh, shaybaarka, iyo ultrasound-ka.',
      en: 'Prenatal screening, maternal follow-up, diagnostic lab interpretation, and ultrasound.',
      ar: 'متابعة الحوامل، الفحوصات المخبرية، والتصوير بالموجات فوق الصوتية.',
    },
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'yt-academy',
    dateLabel: { so: '2020 – 2024', en: '2020 – 2024', ar: '2020 – 2024' },
    category: 'technology',
    title: {
      so: 'Kanaalka YouTube-ka & Wacyigelinta Taranka',
      en: 'YouTube Health Education Launch',
      ar: 'إطلاق قناة التوعية الصحية على يوتيوب',
    },
    description: {
      so: 'Kanaalka rasmiga ah ee "Amoore specialist hospital" ayaa daabacay muuqaallo cilmiyaysan oo ku saabsan bilowga nolosha, taariikhda dhakhtarka taranka dumarka, iyo Asthenozoospermia.',
      en: 'The official "Amoore specialist hospital" YouTube channel published Somali-language educational videos on human conception, gynecological history, and Asthenozoospermia.',
      ar: 'نشرت القناة الرسمية للمستشفى على يوتيوب مقاطع تثقيفية باللغة الصومالية حول بداية الحياة وتاريخ طب النساء وضعف حركة الحيوانات المنوية.',
    },
    sources: ['YouTube · Amoore specialist hospital'],
  },
  {
    id: 'mogadishu-launch',
    dateLabel: { so: 'September 2, 2024', en: 'September 2, 2024', ar: '2 سبتمبر 2024' },
    category: 'mogadishu',
    title: {
      so: 'Baahinta Furitaanka Isbitaalka Amoore ee Muqdisho',
      en: 'Mogadishu Specialist Hospital Launch Broadcast',
      ar: 'تغطية افتتاح مستشفى أموري التخصصي في مقديشو',
    },
    description: {
      so: 'Warbixin ay baahisay Somali Cable ayaa soo bandhigtay Isbitaalka Takhasusiga Amoore (West Taleex) ee daaweeya taranka iyo cudurada keena dhalma la’aanta ragga iyo dumarka, iyadoo Dr. Mohamed Ali Khalfallah uu sharaxay adeegyada uurka iyo ultrasound-ka.',
      en: 'Somali Cable broadcast the launch of Amoore Specialist Hospital in Mogadishu for male/female infertility and OB/GYN care, featuring Consultant OB/GYN Dr. Mohamed Ali Khalfallah.',
      ar: 'بثت قناة Somali Cable تقريراً عن افتتاح مستشفى أموري في مقديشو لعلاج العقم لدى الرجال والنساء بمشاركة الاستشاري د. محمد علي خلف الله.',
    },
    sources: ['Somali Cable', 'Google Places (West Taleex)'],
  },
  {
    id: 'hargeisa-opening',
    dateLabel: { so: 'September 30, 2025', en: 'September 30, 2025', ar: '30 سبتمبر 2025' },
    category: 'hargeisa',
    title: {
      so: 'Daahfurka Rasmiga ah ee Xarunta Hargeysa (Jigjiga-Yar)',
      en: 'Hargeisa Branch Grand Opening (Jigjiga-Yar)',
      ar: 'الافتتاح الرسمي لفرع هرجيسا (جيجيغا يار)',
    },
    description: {
      so: 'Isbitaalka Amoore ayaa si rasmi ah uga furay xarun cusub waddada Jigjiga-Yar ee Hargeysa, taasoo balaarisay adeegyada caafimaadka taranka ee Somaliland.',
      en: 'Amoore Specialist Hospital officially opened its Hargeisa branch on Jigjiga-Yar Road, expanding specialized reproductive healthcare.',
      ar: 'افتتح مستشفى أموري فرعه الجديد في شارع جيجيغا يار بمدينة هرجيسا لتوسيع خدمات الرعاية الإنجابية.',
    },
    sources: ['MM Somali TV', 'Gabiley News', 'KF Media TV'],
  },
  {
    id: 'hargeisa-fertility',
    dateLabel: { so: 'January 9, 2026', en: 'January 9, 2026', ar: '9 يناير 2026' },
    category: 'hargeisa',
    title: {
      so: 'Daahfurka Adeegga Bacriminta Ubadka ee Hargeysa',
      en: 'Fertility & Conception Services Launched in Hargeisa',
      ar: 'تدشين خدمات الإخصاب في هرجيسا',
    },
    description: {
      so: 'Xarunta Hargeysa ayaa bilowday adeegga Bacriminta Ubadka iyo adeegyo cusub oo casri ah oo loogu talagalay qoysaska raadinaya ubadka.',
      en: 'The Hargeisa facility formally launched its specialized Fertility / Conception services ("adeega Bacriminta Ubadka").',
      ar: 'أطلق فرع هرجيسا خدمات الإخصاب المساعد والعلاج المتقدم لتأخر الإنجاب.',
    },
    sources: ['MM Somali TV', 'Horn Cable TV', 'Gabiley News'],
  },
  {
    id: 'women-40-plus',
    dateLabel: { so: 'January 20, 2026', en: 'January 20, 2026', ar: '20 يناير 2026' },
    category: 'mogadishu',
    title: {
      so: 'Xalka Haweenka 40+ Sano ka Weyn ee Dhalmo Gooyay',
      en: 'First-in-Country Fertility Program for Women 40+',
      ar: 'برنامج خصوبة رائد للنساء فوق سن الأربعين',
    },
    description: {
      so: 'Amoore ayaa markii ugu horreysay dalka ka daahfuray adeeg caafimaad oo xal u ah haweenka 40+ sano ka weyn, oo leh baaritaanno cusub oo taageera ugxanta iyo bacriminta.',
      en: 'Amoore introduced a pioneering reproductive care program supporting women over 40 facing ovulation and fertilization challenges.',
      ar: 'أطلق المستشفى لأول مرة في البلاد برنامجاً علاجياً متخصصاً للنساء فوق سن الأربعين لدعم التبويض والإخصاب.',
    },
    sources: ['Shabelle TV', 'Somali Cable'],
  },
  {
    id: 'edv-launch',
    dateLabel: { so: 'March 24, 2026', en: 'March 24, 2026', ar: '24 مارس 2026' },
    category: 'technology',
    title: {
      so: 'Keenista Qalab Casri ah & Adeegga EDV ee Ragga',
      en: 'Advanced Male Health Equipment & EDV Launch',
      ar: 'وصول أجهزة حديثة وتدشين خدمة EDV للرجال',
    },
    description: {
      so: 'Isbitaalku wuxuu dalka keenay qalab casri ah oo loogu talagalay dadka hamiga iyo taranku ka saameeyeen iyo adeegga EDV oo wax ka beddelaya daaweynta kaadi-mareenka iyo daciifnimada kacsiga ragga.',
      en: 'Launch of modern EDV urology systems addressing erectile dysfunction and male reproductive vitality.',
      ar: 'تدشين تقنية EDV الحديثة وأجهزة تشخيصية متطورة لعلاج ضعف الانتصاب وأمراض المسالك البولية.',
    },
    sources: ['Shabelle TV', 'Somali Cable'],
  },
  {
    id: 'las-anod-mindray',
    dateLabel: { so: 'March 31, 2026', en: 'March 31, 2026', ar: '31 مارس 2026' },
    category: 'technology',
    title: {
      so: 'Rarka Mindray Ultrasound DC-30 & Nidaamka Allif Tech',
      en: 'Mindray Ultrasound DC-30 Dispatch & Allif Tech Digital Systems',
      ar: 'شحن جهاز Mindray DC-30 والشراكة التقنية مع Allif Tech',
    },
    description: {
      so: 'Heshiis taariikhaysan March 31, 2026 ayaa diiwaangeliyay rarista hal xabbo oo Mindray Ultrasound DC-30 oo cusub oo laga qaaday Hargeysa loona diray Laascaanood ($250 Zaad). Sidoo kale shirkadda Allif Tech (Muqdisho) waxay u dhigtay Amoore nidaamyo dhijitaal ah.',
      en: 'Freight agreement recorded a new Mindray Ultrasound DC-30 unit shipped from Hargeisa to Las Anod ($250 via Zaad). Separately, Mogadishu tech firm Allif Tech lists Amoore Specialist Hospital as a healthcare systems client.',
      ar: 'وثق عقد شحن إرسال جهاز Mindray Ultrasound DC-30 من هرجيسا إلى لاس عانود عبر Zaad (250 دولار)، كما تدرج شركة Allif Tech في مقديشو المستشفى ضمن عملائها للأنظمة الرقمية.',
    },
    sources: ['Heshiis Qaadis Alaab (Scribd)', 'Allif Tech'],
  },
];

export const ACADEMY_VIDEOS: AcademyVideo[] = [
  {
    id: 'journey-of-life',
    duration: '3:03',
    titleSomali: 'Sidee safarka nolosha ku bilaawdaa?',
    translatedTitle: {
      so: 'Sidee safarka nolosha ku bilaawdaa?',
      en: 'How does the journey of life begin?',
      ar: 'كيف تبدأ رحلة الحياة؟',
    },
    topicTag: {
      so: 'Bacriminta & Uurka',
      en: 'Conception & Early Life',
      ar: 'الإخصاب وبداية الحمل',
    },
    summary: {
      so: 'Muuqaal waxbarasho oo sharaxaya marxaladda bacriminta (fertilization), kulanka unugga ragga iyo ugxanta haweeneyda, iyo sida caafimaadka taranka labada lammaane uu u saameeyo bilowga uurka.',
      en: 'An educational briefing from the Amoore specialist hospital YouTube channel explaining conception, gamete health, and the biological factors enabling healthy pregnancy.',
      ar: 'مقطع توعوي من القناة الرسمية يشرح مراحل التلقيح وبداية تكوّن الجنين والعوامل الصحية المؤثرة في نجاح الحمل.',
    },
    keyTakeaways: {
      so: [
        'Bacrimintu waxay ku xiran tahay tayada ugxanta iyo dhaqdhaqaaqa shahwada labada dhinac.',
        'Baaritaanka hore ee labada lammaane wuxuu badbaadiyaa waqti iyo daaweyn aan loo baahnayn.',
        'La-socoshada ultrasound-ka hore waxay xaqiijisaa badqabka uur-jiifka.',
      ],
      en: [
        'Successful conception depends on balanced male and female reproductive health.',
        'Joint evaluation of both partners prevents delayed diagnosis.',
        'Early diagnostic ultrasound confirms healthy implantation and growth.',
      ],
      ar: [
        'يعتمد نجاح الإخصاب على التوازن الصحي لكلا الزوجين.',
        'الفحص المشترك المبكر يختصر الوقت ويوجه العلاج بدقة.',
        'التصوير المبكر بالموجات فوق الصوتية يطمئن على سلامة الحمل.',
      ],
    },
  },
  {
    id: 'obgyn-history',
    duration: '1:43',
    titleSomali: 'Tarikhda Dhakhtarka Taranka Dumarka',
    translatedTitle: {
      so: 'Tarikhda Dhakhtarka Taranka Dumarka',
      en: 'History & Role of the Women’s Reproductive Specialist',
      ar: 'تاريخ ودور أخصائي أمراض النساء والخصوبة',
    },
    topicTag: {
      so: 'Caafimaadka Haweenka',
      en: 'OB/GYN & Women’s Health',
      ar: 'صحة المرأة والتوليد',
    },
    summary: {
      so: 'Sharaxaad ku saabsan horumarka caafimaadka haweenka, muhiimadda takhasuska OB/GYN, iyo sida daryeelka haweenka casriga ahi uu rajo ugu abuuray xataa haweenka da’doodu ka weyn tahay 40-ka sano.',
      en: 'Explores the evolution of specialized gynecology and reproductive medicine, highlighting modern pathways for women across all reproductive stages including 40+.',
      ar: 'يستعرض تطور طب النساء والتوليد والطب الإنجابي الحديث ودوره في تقديم حلول آمنة للنساء في مختلف المراحل العمرية.',
    },
    keyTakeaways: {
      so: [
        'Takhasuska haweenka wuxuu isku daraa caafimaadka taranka, daryeelka uurka, iyo dhalmada badbaadada leh.',
        'Haweenka da’doodu ka weyn tahay 40 sano waxay hadda heli karaan barnaamijyo qiimeyn gaar ah.',
        'Baaritaannada joogtada ah waxay ka hortagaan dhibaatooyin badan kahor inta aysan adkaan.',
      ],
      en: [
        'Modern OB/GYN integrates reproductive endocrinology, antenatal monitoring, and safe care.',
        'Women aged 40+ benefit from targeted ovulation and hormonal evaluations.',
        'Routine screening catches treatable reproductive barriers early.',
      ],
      ar: [
        'يجمع طب النساء الحديث بين الغدد الصماء الإنجابية ومتابعة الحمل الآمنة.',
        'تستفيد النساء فوق 40 عاماً من تقييمات دقيقة للتبويض والهرمونات.',
        'الفحص الدوري يكشف العوائق القابلة للعلاج في وقت مبكر.',
      ],
    },
  },
  {
    id: 'asthenozoospermia',
    duration: '1:44',
    titleSomali: 'Waa maxay ethnozoospermia ama shahwada oo socodkeedu yaraadu?',
    translatedTitle: {
      so: 'Waa maxay Asthenozoospermia (shahwada oo socodkeedu yaraado)?',
      en: 'What is Asthenozoospermia (low sperm motility)?',
      ar: 'ما هو ضعف حركة الحيوانات المنوية (Asthenozoospermia)؟',
    },
    topicTag: {
      so: 'Caafimaadka Taranka Ragga',
      en: 'Andrology & Male Fertility',
      ar: 'أمراض الذكورة والخصوبة',
    },
    summary: {
      so: 'Sharaxaad cilmiyaysan oo ku saabsan daciifnimada dhaqdhaqaaqa shahwada (Asthenozoospermia — oo cinwaanka YouTube loogu qoray "ethnozoospermia"), sababaha keena, iyo baaritaannada lagu ogaado.',
      en: 'Clarifies Asthenozoospermia (titled "ethnozoospermia" in the original upload), explaining why reduced sperm motility impacts conception and how urology/andrology testing addresses it.',
      ar: 'شرح مبسط لحالة ضعف حركة الحيوانات المنوية وأسبابها الطبية وكيفية تشخيصها وعلاجها في قسم المسالك البولية.',
    },
    keyTakeaways: {
      so: [
        'Socodka shahwadu wuxuu muhiim u yahay in ay gaarto ugxanta si bacrimin u dhacdo.',
        'Baaritaanka shaybaarka shahwada iyo kaadi-mareenka ayaa lagu kala saaraa sababaha.',
        'Waxaa jira daaweyn caafimaad oo horumarin karta tayada iyo dhaqdhaqaaqa shahwada.',
      ],
      en: [
        'Progressive sperm motility is essential for natural fertilization.',
        'Targeted semen and urological evaluations pinpoint reversible factors.',
        'Specialized urology and lifestyle interventions can improve motility outcomes.',
      ],
      ar: [
        'الحركة التقدمية للحيوانات المنوية ضرورية لحدوث الإخصاب الطبيعي.',
        'تساعد تحاليل السائل المنوي وفحوصات المسالك على تحديد الأسباب القابلة للعلاج.',
        'تتوفر خطط علاجية متخصصة لتحسين الجودة والحركة.',
      ],
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-branches',
    question: {
      so: 'Xaggee ku yaallaan xarumaha Isbitaalka Amoore, sidee loola xiriiraa?',
      en: 'Where are Amoore Specialist Hospital branches located and what are the official numbers?',
      ar: 'أين تقع فروع مستشفى أموري التخصصي وما هي أرقام التواصل الرسمية؟',
    },
    answer: {
      so: 'Xarunta Muqdisho waxay ku taallaa West Taleex (+252 61 444 5914). Xarunta Hargeysa waxay ku taallaa Waddada Jigjiga-Yar, koodhka khariidadda H29P+37P (+252 63 877 7953 / 063 877 7943 / +252 65 720 3180).',
      en: 'Mogadishu branch is in West Taleex (+252 61 444 5914). Hargeisa branch is on Jigjiga-Yar Road, map code H29P+37P (+252 63 877 7953 / 063 877 7943 / +252 65 720 3180).',
      ar: 'يقع فرع مقديشو في غرب طليح (+252 61 444 5914)، ويقع فرع هرجيسا في شارع جيجيغا يار، رمز الخريطة H29P+37P (+252 63 877 7953 / 063 877 7943 / +252 65 720 3180).',
    },
  },
  {
    id: 'faq-privacy',
    question: {
      so: 'Sidee loo ilaaliyaa sirta bukaannada soo ballansada adeegyada EDV iyo bacriminta?',
      en: 'How does Discreet Privacy Mode protect fertility and EDV patient confidentiality?',
      ar: 'كيف يحمي وضع الخصوصية السري بيانات مرضى الإخصاب وخدمة EDV؟',
    },
    answer: {
      so: 'Marka aad doorato Ballan Qarsoon (Discreet Mode), fariinta xaqiijinta ee WhatsApp ama SMS laguma qorayo magaca xaaladda caafimaad; waxaa kaliya la soo dirayaa koodh qarsoon sida AMR-4821 iyo saacadda ballanka.',
      en: 'When Discreet Privacy Mode is enabled, confirmation messages omit medical specialty names and display only a confidential code (e.g., AMR-4821), branch, and appointment time.',
      ar: 'عند تفعيل الوضع السري، تُحذف مسميات الحالة الطبية من رسائل التأكيد ويُرسل فقط رمز الحجز السري (مثل AMR-4821) ووقت الموعد.',
    },
  },
  {
    id: 'faq-40plus',
    question: {
      so: 'Ma jiraan adeegyo gaar u ah haweenka da’doodu ka weyn tahay 40 sano?',
      en: 'Does Amoore offer specialized fertility care for women over 40?',
      ar: 'هل يوفر المستشفى خدمات خصوبة مخصصة للنساء فوق سن الأربعين؟',
    },
    answer: {
      so: 'Haa. Bishii Janaayo 20, 2026 ayuu isbitaalku daahfuray barnaamij gaar ah oo xal u ah haweenka da’doodu ka weyn tahay 40-ka sano ee dhalmo gooyay, oo ay ku jiraan baaritaannada ugxanta iyo taageerada bacriminta.',
      en: 'Yes. On January 20, 2026, Amoore launched a dedicated reproductive program for women over 40 experiencing fertility decline, incorporating targeted ovulation and fertilization assessments.',
      ar: 'نعم، أطلق المستشفى في 20 يناير 2026 برنامجاً متخصصاً للنساء فوق سن الأربعين يشمل تقييم التبويض ودعم الإخصاب.',
    },
  },
  {
    id: 'faq-friday',
    question: {
      so: 'Maalinta Jimcaha ma furan yahay isbitaalku?',
      en: 'Is the hospital open on Fridays?',
      ar: 'هل المستشفى مفتوح يوم الجمعة؟',
    },
    answer: {
      so: 'Sida diiwaanka Google Places ee xarunta Muqdisho muujinayo, isbitaalku waa xiran yahay maalinta Jimcaha; wuxuu furan yahay Sabti ilaa Khamiis (Isniin 7:30 AM–5:00 PM; Talaado–Khamiis & Sabti–Axad 7:00 AM–5:00 PM).',
      en: 'According to Mogadishu Google Places records, clinics are closed on Fridays and operate Saturday–Thursday (Mon 7:30 AM–5:00 PM; Tue–Thu & Sat–Sun 7:00 AM–5:00 PM).',
      ar: 'وفق سجلات خرائط جوجل لفرع مقديشو، العيادات مغلقة يوم الجمعة وتعمل من السبت إلى الخميس (الإثنين 7:30 ص – 5:00 م؛ بقية الأيام 7:00 ص – 5:00 م).',
    },
  },
];

export const PAYMENT_CHANNELS: Array<{
  id: PaymentMethod;
  label: LocalizedText;
  branchHint: LocalizedText;
}> = [
  {
    id: 'evc_plus',
    label: { so: 'EVC Plus (Hormuud)', en: 'EVC Plus (Hormuud)', ar: 'EVC Plus (هورمود)' },
    branchHint: { so: 'Ku habboon Muqdisho', en: 'Recommended for Mogadishu', ar: 'موصى به لمقديشو' },
  },
  {
    id: 'zaad',
    label: { so: 'ZAAD Service (Telesom)', en: 'ZAAD Service (Telesom)', ar: 'خدمة ZAAD (تليصوم)' },
    branchHint: { so: 'Ku habboon Hargeysa (sida heshiisyada)', en: 'Recommended for Hargeisa', ar: 'موصى به لهرجيسا' },
  },
  {
    id: 'edahab',
    label: { so: 'eDahab', en: 'eDahab', ar: 'إي ذهب (eDahab)' },
    branchHint: { so: 'Muqdisho & Hargeysa', en: 'Mogadishu & Hargeisa', ar: 'مقديشو وهرجيسا' },
  },
  {
    id: 'card',
    label: { so: 'Visa / Mastercard (Qurbo-joog)', en: 'Visa / Mastercard (Diaspora)', ar: 'فيزا / ماستركارد' },
    branchHint: { so: 'Bukaannada Dibadda', en: 'International Patients', ar: 'المرضى من الخارج' },
  },
];

export const TIME_SLOTS = [
  '08:00 AM',
  '09:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:15 PM',
];

export const TRANSPARENCY_AUDIT = {
  colorTokens: [
    {
      name: {
        so: 'Buluug Boqor ah (Royal / Cobalt Blue)',
        en: 'Royal / Cobalt Blue',
        ar: 'الأزرق الملكي',
      },
      tokenHex: '#0E4DA4',
      role: {
        so: 'Salka astaanta, qofka midig (aabbaha/daryeelaha), iyo ilmaha uur-jiifka ah.',
        en: 'Emblem background, right protective figure, and central fetus icon.',
        ar: 'خلفية الشعار، الشكل الأيمن، ورمز الجنين في المنتصف.',
      },
    },
    {
      name: {
        so: 'Casaan Dhalaalaya (Bright Crimson Red)',
        en: 'Bright Crimson Red',
        ar: 'الأحمر القاني',
      },
      tokenHex: '#D9232E',
      role: {
        so: 'Giraangirta wareegsan ee gudaha iyo qofka bidix (hooyada) ee samaynaya wadnaha.',
        en: 'Inner circular accent ring and left maternal heart figure.',
        ar: 'الحلقة الداخلية والشكل الأيسر المشكّل للقلب.',
      },
    },
    {
      name: {
        so: 'Caddaan Saafi ah (Pure White)',
        en: 'Pure White',
        ar: 'الأبيض النقي',
      },
      tokenHex: '#FFFFFF',
      role: {
        so: 'Goobada weyn ee dhexe iyo salka nadiifta ah ee boggaga caafimaadka.',
        en: 'Central circular emblem field and primary clinical canvas.',
        ar: 'القرص المركزي للشعار والخلفية السريرية النظيفة.',
      },
    },
  ],
  disambiguation: [
    {
      entity: 'Dr. Samira Ahmed Mohamud (Dr. Samira Amoore / Samra Amoore)',
      note: {
        so: 'Waa dhakhtarad OB/GYN oo ka howlgasha Isbitaalka Erdoğan (Digfeer) ee Muqdisho. Ma jiro wax caddaynaya xiriir maamul oo ay la leedahay Isbitaalka Amoore.',
        en: 'OB/GYN physician practicing at Erdoğan (Digfeer) Hospital in Mogadishu. No public record links her to Amoore Specialist Hospital.',
        ar: 'طبيبة نساء وتوليد تعمل في مستشفى أردوغان (ديغفير) بمقديشو، ولا يوجد ارتباط إداري موثق بمستشفى أموري.',
      },
    },
    {
      entity: 'Amoore Special Clinic Ltd (Mandera, Kenya)',
      note: {
        so: 'Waa rug caafimaad oo diiwaanka xog-haynta Kenya (ODPC) ugu diiwaangashan Mandera. Lama xaqiijin xiriir ay la leedahay xarumaha Muqdisho iyo Hargeysa.',
        en: 'Registered in Kenya’s ODPC data-protection registry in Mandera. No verified operational tie to the Mogadishu or Hargeisa hospitals.',
        ar: 'عيادة مسجلة في مانديرا بكينيا ضمن سجل ODPC، دون توثيق صلة إدارية بفرعي الصومال.',
      },
    },
    {
      entity: 'amoore.so (December 2023 Video)',
      note: {
        so: 'Waxaa lagu arkay muuqaal tababar WordPress/Elementor ah oo la soo geliyay Dec 2023; ma aha bog internet oo rasmi ah oo uu isbitaalku leeyahay.',
        en: 'Appeared in a December 2023 WordPress/Elementor tutorial video; not an active official hospital website.',
        ar: 'ظهر في فيديو تدريبي لتصميم المواقع في ديسمبر 2023 وليس موقعاً رسمياً فعالاً للمستشفى.',
      },
    },
  ],
  phase0Checklist: {
    so: [
      'Faylka asalka ah ee astaanta (.SVG / .AI) si loo xaqiijiyo koodhadhka rasmiga ah ee Pantone/CMYK/HEX iyo Typography-ga.',
      'Domain-ka saxda ah ee iimaylka (maadaama Scribd uu qariyay qaybta ka dambeysa Amoorehospital@[...]).',
      'Liiska buuxa ee dhammaan dhakhaatiirta, kalkaaliyayaasha, shaqaalaha, tirada sariiraha, iyo sawirrada dhabta ah ee qolalka.',
      'Qiimaha adeegyada (IVF/Bacriminta, EDV, Ultrasound) iyo xaqiijinta in Laascaanood laga furayo farac cusub.',
      'Xiriirka API-ga nidaamka tiknoolajiyadda Allif Tech (haddii la rabo ballamo toos ugu dhaca EMR-ka isbitaalka) & boggaga Facebook/Instagram/TikTok.',
    ],
    en: [
      'Original vector logo file (.SVG / .AI) to lock official Pantone/CMYK/HEX color specs and brand typography.',
      'Verified official email domain (Scribd redacts the domain after Amoorehospital@[...]).',
      'Complete physician & nursing roster, bed capacity, service pricing (IVF, EDV, Ultrasound), and real facility photography.',
      'Confirmation of whether the March 31, 2026 Las Anod Mindray DC-30 shipment represents a new branch.',
      'Allif Tech HMS/EMR API integration specs and official Facebook/Instagram/TikTok handles.',
    ],
    ar: [
      'ملف الشعار المتجه الأصلي (.SVG / .AI) لتثبيت أكواد الألوان الرسمية والخطوط المعتمدة.',
      'النطاق الرسمي للبريد الإلكتروني (حيث يحجب موقع Scribd النطاق بعد Amoorehospital@[...]).',
      'القائمة الكاملة للأطباء وطاقم التمريض، السعة السريرية، أسعار الخدمات، والصور الحقيقية للمرافق.',
      'تأكيد وضع فرع لاس عانود بعد شحنة جهاز Mindray DC-30 في 31 مارس 2026.',
      'مواصفات الربط البرمجي مع نظام Allif Tech وحسابات التواصل الاجتماعي الرسمية.',
    ],
  },
};
