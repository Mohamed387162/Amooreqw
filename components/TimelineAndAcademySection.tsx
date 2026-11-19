'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  PlayCircle,
  Tv,
} from 'lucide-react';
import type { Locale, TimelineFilter } from '@/lib/hospital-logic';
import { filterTimelineEvents } from '@/lib/hospital-logic';
import {
  ACADEMY_VIDEOS,
  FAQS,
  TIMELINE_EVENTS,
  UI_COPY,
} from '@/lib/hospital-data';

interface TimelineAndAcademySectionProps {
  locale: Locale;
}

export function TimelineAndAcademySection({
  locale,
}: TimelineAndAcademySectionProps) {
  const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>('all');
  const [activeVideoId, setActiveVideoId] = useState<string>(
    ACADEMY_VIDEOS[0].id
  );
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const copy = UI_COPY[locale];
  const filteredEvents = filterTimelineEvents(TIMELINE_EVENTS, timelineFilter);
  const activeVideo =
    ACADEMY_VIDEOS.find((v) => v.id === activeVideoId) ?? ACADEMY_VIDEOS[0];

  return (
    <>
      {/* Chronological Timeline & Media Archive */}
      <section
        id="timeline"
        className="border-b border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#0E4DA4]">
                {copy.timelineSection.kicker}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {copy.timelineSection.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {copy.timelineSection.subtitle}
              </p>
            </div>

            <div
              role="group"
              aria-label="Filter chronological milestones"
              className="inline-flex flex-wrap items-center self-start rounded-lg border border-slate-200 bg-slate-100 p-1"
            >
              {(
                [
                  { id: 'all', label: copy.timelineSection.filters.all },
                  { id: 'mogadishu', label: copy.timelineSection.filters.mogadishu },
                  { id: 'hargeisa', label: copy.timelineSection.filters.hargeisa },
                  { id: 'technology', label: copy.timelineSection.filters.technology },
                ] as const
              ).map((tab) => {
                const active = timelineFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setTimelineFilter(tab.id)}
                    aria-pressed={active}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white text-[#0E4DA4] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredEvents.map((event, idx) => (
              <article
                key={event.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-mono-tabular font-semibold text-[#0E4DA4]">
                      {String(idx + 1).padStart(2, '0')} · {event.dateLabel[locale]}
                    </span>
                    <span>
                      {event.category === 'mogadishu'
                        ? copy.timelineSection.filters.mogadishu
                        : event.category === 'hargeisa'
                          ? copy.timelineSection.filters.hargeisa
                          : copy.timelineSection.filters.technology}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-bold text-slate-900">
                    {event.title[locale]}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {event.description[locale]}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-3 text-xs text-slate-500">
                  <Tv className="h-3.5 w-3.5 shrink-0 text-[#D9232E]" />
                  <span>
                    {copy.timelineSection.sourcesLabel}: {event.sources.join(' · ')}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Learning Academy & Clinical FAQ */}
      <section
        id="academy"
        className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#0E4DA4]">
              {copy.academySection.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.academySection.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {copy.academySection.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left: Video Topics Selector */}
            <div className="space-y-3 lg:col-span-5">
              <p className="text-xs font-semibold text-slate-500">
                {copy.academySection.channelNote}
              </p>
              {ACADEMY_VIDEOS.map((video) => {
                const isSelected = video.id === activeVideo.id;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideoId(video.id)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-start gap-3.5 rounded-xl border p-4 text-start transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#0E4DA4] bg-white shadow-sm'
                        : 'border-slate-200 bg-white/80 hover:bg-white'
                    }`}
                  >
                    <PlayCircle
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        isSelected ? 'text-[#D9232E]' : 'text-slate-400'
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">
                        {video.topicTag[locale]} ·{' '}
                        <span className="font-mono-tabular">{video.duration}</span>
                      </p>
                      <h3 className="mt-1 font-display text-base font-bold text-slate-900">
                        {video.translatedTitle[locale]}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        YouTube: &ldquo;{video.titleSomali}&rdquo;
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Educational Summary & Takeaways */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <span className="text-xs font-semibold text-[#0E4DA4]">
                  {activeVideo.topicTag[locale]}
                </span>
                <span className="font-mono-tabular text-xs font-semibold text-slate-500">
                  {activeVideo.duration} · YouTube Educational Brief
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
                {activeVideo.translatedTitle[locale]}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {activeVideo.summary[locale]}
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h4 className="text-xs font-semibold text-slate-500">
                  {copy.academySection.takeawaysTitle}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {activeVideo.keyTakeaways[locale].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0E4DA4]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical FAQs */}
          <div className="mt-14">
            <h3 className="font-display text-2xl font-bold text-slate-900">
              {copy.academySection.faqTitle}
            </h3>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-start font-display text-base font-semibold text-slate-900 hover:bg-slate-50 cursor-pointer"
                    >
                      <span>{faq.question[locale]}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                        {faq.answer[locale]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
