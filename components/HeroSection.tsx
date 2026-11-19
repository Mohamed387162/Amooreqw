'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Clock,
  Globe,
  MapPin,
  Palette,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react';
import heroClinicImg from '@/src/assets/images/amoore_hero_clinic_1795107188221.jpg';
import type { BranchId, Locale } from '@/lib/hospital-logic';
import { getBranchOpenStatus } from '@/lib/hospital-logic';
import { BRANCHES, UI_COPY } from '@/lib/hospital-data';
import { AmooreLogo } from './AmooreLogo';

interface HeroSectionProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activeBranch: BranchId;
  onBranchChange: (branch: BranchId) => void;
  onBookClick: () => void;
  onExploreServices: () => void;
  onOpenTransparency: () => void;
}

export function HeroSection({
  locale,
  onLocaleChange,
  activeBranch,
  onBranchChange,
  onBookClick,
  onExploreServices,
  onOpenTransparency,
}: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const copy = UI_COPY[locale];
  const branch = BRANCHES[activeBranch];
  const status = getBranchOpenStatus(activeBranch);

  return (
    <section
      id="top"
      className="border-b border-slate-200 bg-white pt-6 pb-12 sm:pt-8 sm:pb-16"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Workspace Control Bar: Branch Switcher & Trilingual Selector */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              {copy.hero.branchSwitchLabel}:
            </span>
            <div
              role="group"
              aria-label={copy.hero.branchSwitchLabel}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 p-1"
            >
              {(['mogadishu', 'hargeisa'] as const).map((id) => {
                const isSelected = activeBranch === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onBranchChange(id)}
                    aria-pressed={isSelected}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#0E4DA4] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {BRANCHES[id].city[locale]}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <Clock className="h-3.5 w-3.5 text-[#0E4DA4] shrink-0" />
              <span className="font-semibold text-slate-900">
                {status.statusLabel[locale]}
              </span>
              <span aria-hidden="true">·</span>
              <span dir="ltr" className="font-mono-tabular">
                {status.eatTimeLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span dir="ltr">{status.hoursTodayLabel[locale]}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Globe className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="sr-only">{copy.hero.languageLabel}</span>
            <div
              role="group"
              aria-label={copy.hero.languageLabel}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 p-1"
            >
              {(
                [
                  { code: 'so', label: 'Soomaali' },
                  { code: 'en', label: 'English' },
                  { code: 'ar', label: 'العربية' },
                ] as const
              ).map((item) => {
                const active = locale === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onLocaleChange(item.code)}
                    aria-pressed={active}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white text-[#0E4DA4] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-w-0 flex-col justify-between lg:col-span-6"
          >
            <div>
              <div className="mb-5 flex items-center gap-4">
                <AmooreLogo size={64} animate />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#0E4DA4]">
                    {copy.hero.kicker}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {branch.officialName[locale]} ·{' '}
                    <span dir="ltr" className="inline-block font-mono-tabular">
                      {branch.primaryPhone}
                    </span>
                  </p>
                </div>
              </div>

              <h1
                className="font-display font-bold tracking-tight text-slate-900"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3.35rem)', lineHeight: 1.12 }}
              >
                {copy.hero.headline}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
                {copy.hero.subhead}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0E4DA4] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#093575] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4DA4]"
                >
                  <span>{copy.hero.primaryBtn}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onExploreServices}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copy.hero.secondaryBtn}
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#D9232E] shrink-0" />
                <span>{copy.hero.privacyPromise}</span>
              </div>

              <button
                type="button"
                onClick={onOpenTransparency}
                className="inline-flex items-center gap-1.5 font-semibold text-[#0E4DA4] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Palette className="h-3.5 w-3.5" />
                <span>{copy.hero.auditBtn}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Media Frame (16:9 / Stretch Match) */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 lg:col-span-6 lg:min-h-[420px]">
            {!imgError ? (
              <Image
                src={heroClinicImg}
                alt="Amoore Specialist Hospital clinical reception and consultation lounge"
                fill
                priority
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0E4DA4]/10 via-white to-[#D9232E]/10 p-8 text-center">
                <AmooreLogo size={96} />
                <p className="mt-4 text-sm font-semibold text-slate-800">
                  {branch.officialName[locale]}
                </p>
              </div>
            )}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs font-medium text-slate-200">
                {branch.openedDate[locale]}
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                {branch.officialName[locale]}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>{branch.address[locale]}</span>
                </span>
                <span
                  dir="ltr"
                  className="inline-flex items-center gap-1.5 font-mono-tabular"
                >
                  <Phone className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>{branch.primaryPhone}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Trust & Proof Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{BRANCHES.mogadishu.city[locale]} · West Taleex</span>
              <Star className="h-3.5 w-3.5 text-[#D9232E]" />
            </div>
            <p
              dir="ltr"
              className="mt-2 inline-block font-mono-tabular text-2xl font-bold text-slate-900"
            >
              4.8 / 5
            </p>
            <p className="mt-1 text-xs text-slate-600">
              20 Google {copy.hero.reviewsWord} · 5.0/5 Cybo
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{BRANCHES.hargeisa.city[locale]} · Jigjiga-Yar</span>
              <Star className="h-3.5 w-3.5 text-[#0E4DA4]" />
            </div>
            <p
              dir="ltr"
              className="mt-2 inline-block font-mono-tabular text-2xl font-bold text-slate-900"
            >
              5.0 / 5
            </p>
            <p className="mt-1 text-xs text-slate-600">
              6 Google {copy.hero.reviewsWord} · H29P+37P
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs text-slate-500">{copy.hero.equipmentLabel}</p>
            <p className="mt-2 font-display text-lg font-bold text-slate-900">
              Mindray DC-30 &amp; EDV
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Ultrasound · Urology · Fertility 40+
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs text-slate-500">
              {locale === 'ar'
                ? 'شريك الأنظمة الرقمية'
                : locale === 'en'
                  ? 'Digital Systems Partner'
                  : 'Tiknoolajiyadda & Sirta'}
            </p>
            <p className="mt-2 font-display text-lg font-bold text-slate-900">
              Allif Tech · Discreet SMS
            </p>
            <p className="mt-1 text-xs text-slate-600">
              EVC Plus · ZAAD · eDahab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
