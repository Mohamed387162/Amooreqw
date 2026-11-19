'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/hospital-logic';
import { UI_COPY } from '@/lib/hospital-data';

interface TopBarProps {
  locale: Locale;
  onBookClick: () => void;
}

export function TopBar({ locale, onBookClick }: TopBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const copy = UI_COPY[locale];

  const navItems = [
    { href: '#services', label: copy.nav.services },
    { href: '#branches', label: copy.nav.branches },
    { href: '#doctors', label: copy.nav.doctors },
    { href: '#timeline', label: copy.nav.timeline },
    { href: '#academy', label: copy.nav.academy },
  ];

  const handleNavJump = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 md:gap-8 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-display text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E4DA4]"
        >
          {copy.brandWordmark}
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-[#0E4DA4] hover:underline hover:underline-offset-8 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E4DA4]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-2 shrink-0 sm:gap-3">
          <button
            type="button"
            onClick={onBookClick}
            className="rounded-lg bg-[#0E4DA4] px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#093575] whitespace-nowrap shrink-0 cursor-pointer sm:px-4 sm:py-2 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4DA4]"
          >
            {copy.bookCta}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavJump(item.href);
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0E4DA4]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
