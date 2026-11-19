'use client';

import { useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Palette, X } from 'lucide-react';
import type { Locale } from '@/lib/hospital-logic';
import { TRANSPARENCY_AUDIT, UI_COPY } from '@/lib/hospital-data';
import { AmooreLogo } from './AmooreLogo';

interface TransparencyModalProps {
  open: boolean;
  locale: Locale;
  onClose: () => void;
}

export function TransparencyModal({
  open,
  locale,
  onClose,
}: TransparencyModalProps) {
  const copy = UI_COPY[locale];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="transparency-modal-title"
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2
              id="transparency-modal-title"
              className="font-display text-2xl font-bold text-slate-900"
            >
              {copy.transparency.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {copy.transparency.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={copy.transparency.closeBtn}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 1. Emblem & Color System */}
        <div className="mt-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
            <Palette className="h-5 w-5 text-[#0E4DA4]" />
            <span>{copy.transparency.logoSectionTitle}</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {copy.transparency.logoSectionDesc}
          </p>

          <div className="mt-4 flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center">
            <AmooreLogo size={84} />
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
              {TRANSPARENCY_AUDIT.colorTokens.map((token) => (
                <div
                  key={token.tokenHex}
                  className="rounded-lg border border-slate-200 bg-white p-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 shrink-0 rounded border border-slate-300"
                      style={{ backgroundColor: token.tokenHex }}
                    />
                    <span className="font-mono-tabular text-xs font-bold text-slate-900">
                      {token.tokenHex}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-slate-800">
                    {token.name[locale]}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {token.role[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#D9232E]" />
            <span>{copy.transparency.colorGapNotice}</span>
          </div>
        </div>

        {/* 2. Entity Disambiguation */}
        <div className="mt-7 border-t border-slate-200 pt-6">
          <h3 className="font-display text-lg font-bold text-slate-900">
            {copy.transparency.disambiguationTitle}
          </h3>
          <div className="mt-3 space-y-3">
            {TRANSPARENCY_AUDIT.disambiguation.map((item) => (
              <div
                key={item.entity}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
              >
                <p className="text-sm font-bold text-slate-900">{item.entity}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.note[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Phase 0 Checklist */}
        <div className="mt-7 border-t border-slate-200 pt-6">
          <h3 className="font-display text-lg font-bold text-slate-900">
            {copy.transparency.phase0Title}
          </h3>
          <ul className="mt-3 space-y-2">
            {TRANSPARENCY_AUDIT.phase0Checklist[locale].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0E4DA4]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex justify-end border-t border-slate-200 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#0E4DA4] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#093575] cursor-pointer"
          >
            {copy.transparency.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
