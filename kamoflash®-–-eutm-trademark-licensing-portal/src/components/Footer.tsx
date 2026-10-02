import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface FooterProps {
  language: Language;
  onOpenImpressum: () => void;
  onOpenPrivacy: () => void;
  onOpenCertificate: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenImpressum,
  onOpenPrivacy,
  onOpenCertificate,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black uppercase font-display text-white tracking-tight">
                KAMOFLASH
              </span>
              <span className="text-xs font-mono text-[#00F2FE] border border-[#00F2FE]/40 rounded px-1 py-0.5">
                ®
              </span>
            </div>

            <p className="text-slate-300 max-w-lg leading-relaxed">
              {t.footer.euipoNotice}
            </p>

            <div className="space-y-1.5 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>KAMOFLASH · Saalburgallee 39, 60385 Frankfurt am Main, Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#10FFA0]" />
                <a href="tel:+491715635018" className="hover:text-white transition-colors font-mono">
                  +49 (0) 171 5635018
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4FF00]" />
                <a href="mailto:info@kamoflash-recordz.com" className="hover:text-white transition-colors font-mono">
                  info@kamoflash-recordz.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
              {t.footer.quickLinks}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#top" className="hover:text-[#00F2FE] transition-colors">
                  Overview & Wordmark
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[#00F2FE] transition-colors">
                  17 Registered Classes
                </a>
              </li>
              <li>
                <a href="#traction" className="hover:text-[#00F2FE] transition-colors">
                  Traction & Metrics
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#00F2FE] transition-colors">
                  Licensing Value
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#00F2FE] transition-colors">
                  Submit Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
              {t.footer.legalLinks}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={onOpenImpressum}
                  className="hover:text-[#00F2FE] transition-colors text-left font-medium cursor-pointer"
                >
                  {t.footer.impressumLink}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#00F2FE] transition-colors text-left font-medium cursor-pointer"
                >
                  {t.footer.privacyLink}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="hover:text-[#00F2FE] transition-colors text-left font-medium cursor-pointer"
                >
                  EUIPO Certificate (019087974)
                </button>
              </li>
              <li>
                <span className="text-slate-400">
                  EUIPO Filing: 18/01/2025
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Valid Until: 07/10/2034
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Jurisdiction: 27 EU States
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} KAMOFLASH. {t.footer.allRightsReserved}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>EUTM: 019087974</span>
            <span>·</span>
            <span>Frankfurt am Main</span>
            <span>·</span>
            <button
              onClick={onOpenImpressum}
              className="text-slate-400 hover:text-white underline cursor-pointer"
            >
              Impressum
            </button>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-white underline cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
