'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Lock,
  Microscope,
  Stethoscope,
} from 'lucide-react';
import familyImg from '@/src/assets/images/amoore_family_hope_1795107188740.jpg';
import fertilityLabImg from '@/src/assets/images/amoore_fertility_lab_1795107186926.jpg';
import ultrasoundImg from '@/src/assets/images/amoore_ultrasound_suite_1795107187458.jpg';
import heroClinicImg from '@/src/assets/images/amoore_hero_clinic_1795107188221.jpg';
import type { Locale } from '@/lib/hospital-logic';
import { SERVICES, UI_COPY } from '@/lib/hospital-data';

interface SpecialtiesSectionProps {
  locale: Locale;
  onSelectServiceForBooking: (serviceId: string) => void;
}

const IMAGE_MAP: Record<string, StaticImageData> = {
  family: familyImg,
  fertility: fertilityLabImg,
  ultrasound: ultrasoundImg,
  hero: heroClinicImg,
};

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case 'fertility':
      return <HeartHandshake className="h-5 w-5 text-[#D9232E]" />;
    case 'obgyn-40plus':
      return <Stethoscope className="h-5 w-5 text-[#0E4DA4]" />;
    case 'urology-edv':
      return <Activity className="h-5 w-5 text-[#0E4DA4]" />;
    default:
      return <Microscope className="h-5 w-5 text-[#D9232E]" />;
  }
}

export function SpecialtiesSection({
  locale,
  onSelectServiceForBooking,
}: SpecialtiesSectionProps) {
  const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const copy = UI_COPY[locale];

  const activeService =
    SERVICES.find((s) => s.id === selectedId) ?? SERVICES[0];

  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#0E4DA4]">
            {copy.servicesSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {copy.servicesSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {copy.servicesSection.subtitle}
          </p>
        </div>

        {/* Asymmetric Clinical Pillars Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: 4 Interactive Department Selectors */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedId(service.id)}
                  aria-pressed={isSelected}
                  className={`group flex w-full flex-col items-start rounded-xl border p-5 text-start transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-[#0E4DA4] bg-white shadow-sm'
                      : 'border-slate-200 bg-white/75 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <ServiceIcon id={service.id} />
                      <span className="font-mono-tabular text-xs font-semibold text-slate-500">
                        {service.code}
                      </span>
                    </div>
                    {service.discreetEligible && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                        <Lock className="h-3 w-3 text-[#0E4DA4]" />
                        <span>{locale === 'ar' ? 'سري' : locale === 'en' ? 'Discreet' : 'Qarsoon'}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                    {service.code}. {service.title[locale]}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {service.subtitle[locale]}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Active Department Clinical Spotlight & Visual */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-7">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              {!brokenImages[activeService.id] ? (
                <Image
                  src={IMAGE_MAP[activeService.imageKey]}
                  alt={activeService.title[locale]}
                  fill
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setBrokenImages((prev) => ({
                      ...prev,
                      [activeService.id]: true,
                    }))
                  }
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-500">
                  <ServiceIcon id={activeService.id} />
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-medium text-slate-200">
                  {activeService.code} · {activeService.subtitle[locale]}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold">
                  {activeService.title[locale]}
                </h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-base leading-relaxed text-slate-700">
                  {activeService.summary[locale]}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500">
                      {copy.servicesSection.protocolsHeading}
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {activeService.clinicalProtocols[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0E4DA4]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-500">
                      {copy.servicesSection.equipmentHeading}
                    </h4>
                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      {activeService.equipment[locale]}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {activeService.mediaSource}
                    </p>
                    {activeService.discreetEligible && (
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#0E4DA4]">
                        <Lock className="h-3.5 w-3.5 shrink-0" />
                        <span>{copy.servicesSection.discreetAvailable}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
                <span className="text-xs text-slate-500">
                  Muqdisho (West Taleex) · Hargeysa (Jigjiga-Yar)
                </span>
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(activeService.id)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0E4DA4] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#093575] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{copy.servicesSection.bookServiceBtn}</span>
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
