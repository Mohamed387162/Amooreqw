'use client';

import type { Locale } from '@/lib/hospital-logic';
import { BRANCHES, UI_COPY } from '@/lib/hospital-data';

interface FooterProps {
  locale: Locale;
  onOpenTransparency: () => void;
}

export function Footer({ locale, onOpenTransparency }: FooterProps) {
  const copy = UI_COPY[locale];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold text-white">
              {copy.brandWordmark}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              {copy.footer.description}
            </p>
            <button
              type="button"
              onClick={onOpenTransparency}
              className="mt-4 text-xs font-semibold text-white underline underline-offset-4 hover:text-slate-200 cursor-pointer"
            >
              {copy.footer.auditTrigger}
            </button>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white">
              {BRANCHES.mogadishu.city[locale]}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              {BRANCHES.mogadishu.address[locale]}
            </p>
            <p className="mt-2 font-mono-tabular text-xs font-semibold text-white">
              {BRANCHES.mogadishu.primaryPhone}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white">
              {BRANCHES.hargeisa.city[locale]}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              {BRANCHES.hargeisa.address[locale]} ({BRANCHES.hargeisa.plusCode})
            </p>
            <p className="mt-2 font-mono-tabular text-xs font-semibold text-white">
              {BRANCHES.hargeisa.primaryPhone} · 063 877 7943
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          {copy.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
