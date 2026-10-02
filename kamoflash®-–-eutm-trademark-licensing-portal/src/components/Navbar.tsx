import React, { useState } from 'react';
import { ShieldCheck, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenImpressum: () => void;
  onOpenPrivacy: () => void;
  onOpenCertificate: () => void;
  selectedClassesCount: number;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenImpressum,
  onOpenPrivacy,
  onOpenCertificate,
  selectedClassesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#08090D]/85 border-b border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark & Verification Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="text-2xl font-extrabold tracking-tighter uppercase font-display text-white hover:text-[#00F2FE] transition-colors flex items-center gap-1.5"
            >
              <span>KAMOFLASH</span>
              <span className="text-xs font-mono font-normal text-[#00F2FE] border border-[#00F2FE]/40 rounded px-1 py-0.5 ml-0.5">®</span>
            </a>
            
            <button
              onClick={onOpenCertificate}
              title={t.hero.verifiedTooltip}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full hover:bg-emerald-900/40 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.nav.verifiedBadge}</span>
              <span className="text-[10px] text-emerald-300/80 font-mono">019087974</span>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#pillars"
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#00F2FE]"
            >
              {t.nav.pillars}
              {selectedClassesCount > 0 && (
                <span className="ml-1.5 px-1.5 py-0.2 text-[10px] font-mono font-bold text-black bg-[#00F2FE] rounded-full">
                  {selectedClassesCount}
                </span>
              )}
            </a>
            <a
              href="#traction"
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-[#00F2FE]"
            >
              {t.nav.traction}
            </a>
            <a
              href="#benefits"
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-[#00F2FE]"
            >
              {t.nav.benefits}
            </a>
            <button
              onClick={onOpenCertificate}
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-[#00F2FE] cursor-pointer"
            >
              {t.nav.eutmDetails}
            </button>
            <button
              onClick={onOpenImpressum}
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-[#00F2FE] cursor-pointer"
            >
              {t.nav.impressumBtn}
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-[#00F2FE] cursor-pointer"
            >
              {t.nav.privacyBtn}
            </button>
          </nav>

          {/* Zone 3: Actions & Language Switcher */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 transition-colors cursor-pointer"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span className="uppercase font-mono">{language}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 py-1 bg-[#121520] border border-white/15 rounded-xl shadow-2xl z-20 overflow-hidden backdrop-blur-xl">
                    {LANGUAGES.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          onLanguageChange(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-xs flex items-center justify-between text-left transition-colors cursor-pointer ${
                          language === item.code
                            ? 'bg-[#00F2FE]/15 text-[#00F2FE] font-bold'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.flag}</span>
                          <span className="font-mono">{item.label}</span>
                        </span>
                        {language === item.code && <span className="text-[10px]">●</span>}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Primary Action Button */}
            <a
              href="#inquiry"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] rounded-lg transition-all duration-200 shadow-md shadow-[#00F2FE]/20 hover:shadow-[#10FFA0]/30 cursor-pointer whitespace-nowrap"
            >
              {t.nav.inquireBtn}
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-3">
            <div className="flex sm:hidden items-center justify-between pb-3 border-b border-white/10">
              <button
                onClick={() => {
                  onOpenCertificate();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.nav.verifiedBadge} (019087974)</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
              >
                {t.nav.pillars}
              </a>
              <a
                href="#traction"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
              >
                {t.nav.traction}
              </a>
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
              >
                {t.nav.benefits}
              </a>
              <button
                onClick={() => {
                  onOpenCertificate();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
              >
                {t.nav.eutmDetails}
              </button>
              <button
                onClick={() => {
                  onOpenImpressum();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
              >
                {t.nav.impressumBtn}
              </button>
              <button
                onClick={() => {
                  onOpenPrivacy();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
              >
                {t.nav.privacyBtn}
              </button>
            </nav>

            <div className="pt-2">
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#00F2FE] rounded-lg"
              >
                {t.nav.inquireBtn}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
