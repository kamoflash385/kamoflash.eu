import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, MapPin, Phone, Mail, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface ImpressumModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ImpressumModal: React.FC<ImpressumModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = TRANSLATIONS[language];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl my-8 p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/20 shadow-2xl z-10 space-y-6 text-slate-100"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00F2FE]">
                  Official Legal Disclosure
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {t.impressum.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.impressum.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Impressum"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Impressum Content Grid */}
            <div className="space-y-5 text-xs sm:text-sm leading-relaxed">
              
              {/* Official Legal Entity */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#00F2FE] font-semibold text-xs uppercase font-mono">
                  <Building2 className="w-4 h-4" />
                  <span>{t.impressum.entityHeading}</span>
                </div>
                <div className="pl-6 space-y-1">
                  <div className="text-base font-bold text-white tracking-wide">
                    KAMOFLASH
                  </div>
                  <div className="text-xs text-slate-400">
                    Officially Registered European Trademark & Media Entity
                  </div>
                </div>
              </div>

              {/* Registered Address */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#10FFA0] font-semibold text-xs uppercase font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>{t.impressum.addressHeading}</span>
                </div>
                <div className="pl-6 space-y-0.5 text-slate-200">
                  <p className="font-semibold text-white">KAMOFLASH</p>
                  <p>Saalburgallee 39</p>
                  <p>60385 Frankfurt am Main</p>
                  <p className="text-slate-400">Germany / Deutschland</p>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#D4FF00] font-semibold text-xs uppercase font-mono">
                  <Phone className="w-4 h-4" />
                  <span>{t.impressum.contactHeading}</span>
                </div>
                <div className="pl-6 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-slate-400 w-16">Phone:</span>
                    <a
                      href="tel:+491715635018"
                      className="font-mono text-white hover:text-[#00F2FE] transition-colors"
                    >
                      +49 (0) 171 5635018
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-slate-400 w-16">E-Mail:</span>
                    <a
                      href="mailto:info@kamoflash-recordz.com"
                      className="font-mono text-white hover:text-[#00F2FE] transition-colors"
                    >
                      info@kamoflash-recordz.com
                    </a>
                  </div>
                </div>
              </div>

              {/* EUIPO Trademark Details */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#9D4EDD] font-semibold text-xs uppercase font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.impressum.trademarkHeading}</span>
                </div>
                <div className="pl-6 space-y-1 text-xs text-slate-300">
                  <p>
                    <strong className="text-white">Amt der Europäischen Union für geistiges Eigentum (EUIPO)</strong>
                  </p>
                  <p className="font-mono text-slate-300">
                    Unionsmarkennummer (EUTM): <span className="text-[#00F2FE] font-bold">019087974</span>
                  </p>
                  <p>
                    Eintragungstag: 18/01/2025 | Schutzdauer bis: 07/10/2034
                  </p>
                  <p>
                    Geschützte Klassen: 17 Nizza-Klassen (9, 12, 14, 16, 18, 25, 29, 30, 31, 32, 33, 34, 35, 38, 40, 41, 42)
                  </p>
                </div>
              </div>

              {/* Legal Disclaimer & Dispute Resolution */}
              <div className="space-y-3 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300 font-semibold font-mono text-[11px] uppercase">
                  <Scale className="w-3.5 h-3.5" />
                  <span>{t.impressum.disclaimerHeading}</span>
                </div>
                <p className="leading-relaxed">
                  {t.impressum.disclaimerText}
                </p>
                <p className="leading-relaxed text-[11px]">
                  {t.impressum.euNoticeText}{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00F2FE] underline inline-flex items-center gap-1"
                  >
                    <span>ec.europa.eu/consumers/odr/</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </p>
              </div>

            </div>

            {/* Modal Footer / Close */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {t.impressum.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
