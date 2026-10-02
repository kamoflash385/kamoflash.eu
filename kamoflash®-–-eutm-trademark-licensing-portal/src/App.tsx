import React, { useState } from 'react';
import { Language } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { MetricsSection } from './components/MetricsSection.tsx';
import { TrademarkExplorer } from './components/TrademarkExplorer.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { LicensingForm } from './components/LicensingForm.tsx';
import { Footer } from './components/Footer.tsx';
import { ImpressumModal } from './components/ImpressumModal.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';
import { CertificateModal } from './components/CertificateModal.tsx';
import { TRADEMARK_CLASSES } from './data/trademarkClasses.ts';

export default function App() {
  const [language, setLanguage] = useState<Language>('de');
  const [selectedClasses, setSelectedClasses] = useState<number[]>([25, 32]); // Defaults: Streetwear (25) & Beverages (32)
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const handleToggleClass = (classNumber: number) => {
    setSelectedClasses((prev) =>
      prev.includes(classNumber)
        ? prev.filter((c) => c !== classNumber)
        : [...prev, classNumber]
    );
  };

  const handleClearSelectedClasses = () => {
    setSelectedClasses([]);
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col font-sans selection:bg-[#00F2FE]/30 selection:text-white">
      {/* Sticky Header with i18n Switcher */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenImpressum={() => setIsImpressumOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        selectedClassesCount={selectedClasses.length}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenCertificate={() => setIsCertificateOpen(true)}
          totalClassesCount={TRADEMARK_CLASSES.length}
        />

        {/* Brand Traction / Social Proof Counter */}
        <MetricsSection language={language} />

        {/* Core Interactive 17 Classes / 5 Pillars Trademark Explorer */}
        <TrademarkExplorer
          language={language}
          selectedClasses={selectedClasses}
          onToggleClass={handleToggleClass}
          onClearSelectedClasses={handleClearSelectedClasses}
        />

        {/* License Partner Commercial Benefits */}
        <BenefitsSection language={language} />

        {/* B2B Inbound Licensing Form */}
        <LicensingForm
          language={language}
          selectedClasses={selectedClasses}
          onToggleClass={handleToggleClass}
          onClearSelectedClasses={handleClearSelectedClasses}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
      </main>

      {/* Legal Footer */}
      <Footer
        language={language}
        onOpenImpressum={() => setIsImpressumOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Impressum Modal Popup */}
      <ImpressumModal
        isOpen={isImpressumOpen}
        onClose={() => setIsImpressumOpen(false)}
        language={language}
      />

      {/* GDPR Privacy Policy Modal Popup */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        language={language}
      />

      {/* EUIPO Official Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        language={language}
      />
    </div>
  );
}
