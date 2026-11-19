'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  Phone,
  Star,
  Truck,
} from 'lucide-react';
import type { BranchId, Locale } from '@/lib/hospital-logic';
import { filterDoctors, getBranchOpenStatus } from '@/lib/hospital-logic';
import { BRANCHES, DOCTORS, UI_COPY } from '@/lib/hospital-data';

interface BranchesAndDoctorsSectionProps {
  locale: Locale;
  activeBranch: BranchId;
  onBranchChange: (branch: BranchId) => void;
  onBookDoctor: (branchId: BranchId, doctorId: string) => void;
}

export function BranchesAndDoctorsSection({
  locale,
  activeBranch,
  onBranchChange,
  onBookDoctor,
}: BranchesAndDoctorsSectionProps) {
  const [doctorFilter, setDoctorFilter] = useState<'all' | BranchId>('all');
  const copy = UI_COPY[locale];
  const visibleDoctors = filterDoctors(DOCTORS, doctorFilter);

  return (
    <>
      {/* Branches & Las Anod Record */}
      <section
        id="branches"
        className="border-b border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#0E4DA4]">
              {copy.branchesSection.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.branchesSection.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {copy.branchesSection.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {(['mogadishu', 'hargeisa'] as const).map((branchId) => {
              const branch = BRANCHES[branchId];
              const status = getBranchOpenStatus(branchId);
              const isHighlighted = activeBranch === branchId;

              return (
                <article
                  key={branchId}
                  className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-colors ${
                    isHighlighted
                      ? 'border-[#0E4DA4] bg-white shadow-sm'
                      : 'border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                      <div>
                        <p className="text-xs font-semibold text-[#0E4DA4]">
                          {branch.openedDate[locale]}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
                          {branch.officialName[locale]}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => onBranchChange(branchId)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isHighlighted
                            ? 'bg-[#0E4DA4] text-white'
                            : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {status.statusLabel[locale]}
                      </button>
                    </div>

                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0E4DA4]" />
                        <span>
                          {branch.address[locale]}
                          {branch.plusCode ? ` · ${branch.plusCode}` : ''}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Star className="h-4 w-4 shrink-0 text-[#D9232E]" />
                        <span
                          dir="ltr"
                          className="inline-block font-mono-tabular font-semibold text-slate-900"
                        >
                          {branch.googleRating} / 5
                        </span>
                        <span className="text-slate-500">
                          ({branch.googleReviewCount} Google{' '}
                          {copy.hero.reviewsWord}
                          {branch.cyboRating ? ` · ${branch.cyboRating}` : ''})
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0E4DA4]" />
                        <div
                          dir="ltr"
                          className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tabular"
                        >
                          <a
                            href={`tel:${branch.primaryPhone.replace(/\s+/g, '')}`}
                            className="font-semibold text-slate-900 hover:text-[#0E4DA4] hover:underline"
                          >
                            {branch.primaryPhone}
                          </a>
                          {branch.secondaryPhones.map((phone) => (
                            <span key={phone} className="text-xs text-slate-500">
                              · {phone}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                        <span
                          dir="ltr"
                          className="break-all font-mono-tabular text-xs text-slate-600"
                        >
                          {branch.emailPlaceholder}
                        </span>
                      </div>
                    </div>

                    {/* Weekly Schedule */}
                    <div className="mt-6 border-t border-slate-200 pt-5">
                      <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <Clock className="h-3.5 w-3.5 text-[#0E4DA4]" />
                        <span>{copy.branchesSection.hoursTitle}</span>
                      </h4>
                      <dl className="mt-3 space-y-2 text-sm">
                        {branch.weeklyHours.map((row) => (
                          <div
                            key={row.day.en}
                            className="flex items-center justify-between gap-4 border-b border-slate-100 pb-1.5 last:border-b-0"
                          >
                            <dt className="text-slate-600">{row.day[locale]}</dt>
                            <dd className="font-mono-tabular text-xs font-semibold text-slate-900">
                              {row.hours[locale]}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                      <span>{branch.directoryNote[locale]}</span>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                    <a
                      href={branch.mapQuery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E4DA4] hover:underline whitespace-nowrap shrink-0"
                    >
                      <span>{copy.branchesSection.openMapsBtn}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        onBranchChange(branchId);
                        onBookDoctor(branchId, '');
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>{copy.bookCta}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Las Anod Equipment Record Notice (Clean Hairline Box, No Thick Left Border) */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0E4DA4]">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900">
                  {copy.branchesSection.lasAnodTitle}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {copy.branchesSection.lasAnodBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors & Leadership Directory */}
      <section
        id="doctors"
        className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#0E4DA4]">
                {copy.doctorsSection.kicker}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {copy.doctorsSection.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {copy.doctorsSection.subtitle}
              </p>
            </div>

            {/* Interactive Branch Filter Tabs */}
            <div
              role="group"
              aria-label="Filter specialists by branch"
              className="inline-flex items-center self-start rounded-lg border border-slate-200 bg-white p-1"
            >
              {(
                [
                  { id: 'all', label: copy.doctorsSection.filterAll },
                  { id: 'mogadishu', label: copy.doctorsSection.filterMogadishu },
                  { id: 'hargeisa', label: copy.doctorsSection.filterHargeisa },
                ] as const
              ).map((tab) => {
                const active = doctorFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setDoctorFilter(tab.id)}
                    aria-pressed={active}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#0E4DA4] text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {visibleDoctors.map((doc) => (
              <article
                key={doc.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <p className="text-xs font-semibold text-[#0E4DA4]">
                    {doc.branchLabel[locale]} · {doc.languages}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                    {doc.name}
                  </h3>
                  {doc.arabicName && (
                    <p className="mt-0.5 text-sm font-medium text-slate-600" dir="rtl">
                      {doc.arabicName}
                    </p>
                  )}
                  <p className="mt-2 text-sm font-semibold text-[#D9232E]">
                    {doc.role[locale]}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {doc.department[locale]}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    {doc.clinicalFocus[locale]}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold text-slate-500">
                      {copy.doctorsSection.recordNoteLabel}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {doc.verifiedRecordNote[locale]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onBookDoctor(doc.branchId, doc.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-[#0E4DA4] hover:text-[#0E4DA4] cursor-pointer"
                  >
                    <span>{copy.doctorsSection.bookDoctorBtn}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
