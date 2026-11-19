'use client';

import { useState } from 'react';
import type { BranchId, Locale } from '@/lib/hospital-logic';
import { TopBar } from './TopBar';
import { HeroSection } from './HeroSection';
import { SpecialtiesSection } from './SpecialtiesSection';
import { BranchesAndDoctorsSection } from './BranchesAndDoctorsSection';
import { TimelineAndAcademySection } from './TimelineAndAcademySection';
import { DiscreetBookingWizard } from './DiscreetBookingWizard';
import { Footer } from './Footer';
import { TransparencyModal } from './TransparencyModal';

export function AmooreAppShell() {
  const [locale, setLocale] = useState<Locale>('so');
  const [activeBranch, setActiveBranch] = useState<BranchId>('mogadishu');
  const [serviceId, setServiceId] = useState<string>('fertility');
  const [doctorId, setDoctorId] = useState<string>('');
  const [transparencyOpen, setTransparencyOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (selectedServiceId: string) => {
    setServiceId(selectedServiceId);
    scrollToSection('booking');
  };

  const handleBookDoctor = (branchId: BranchId, selectedDoctorId: string) => {
    setActiveBranch(branchId);
    setDoctorId(selectedDoctorId);
    scrollToSection('booking');
  };

  return (
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen overflow-x-clip bg-slate-50"
    >
      <TopBar
        locale={locale}
        onBookClick={() => scrollToSection('booking')}
      />

      <main>
        <HeroSection
          locale={locale}
          onLocaleChange={setLocale}
          activeBranch={activeBranch}
          onBranchChange={setActiveBranch}
          onBookClick={() => scrollToSection('booking')}
          onExploreServices={() => scrollToSection('services')}
          onOpenTransparency={() => setTransparencyOpen(true)}
        />

        <SpecialtiesSection
          locale={locale}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        <BranchesAndDoctorsSection
          locale={locale}
          activeBranch={activeBranch}
          onBranchChange={setActiveBranch}
          onBookDoctor={handleBookDoctor}
        />

        <TimelineAndAcademySection locale={locale} />

        <DiscreetBookingWizard
          locale={locale}
          activeBranch={activeBranch}
          onBranchChange={setActiveBranch}
          serviceId={serviceId}
          onServiceChange={setServiceId}
          doctorId={doctorId}
          onDoctorChange={setDoctorId}
        />
      </main>

      <Footer
        locale={locale}
        onOpenTransparency={() => setTransparencyOpen(true)}
      />

      <TransparencyModal
        open={transparencyOpen}
        locale={locale}
        onClose={() => setTransparencyOpen(false)}
      />
    </div>
  );
}
