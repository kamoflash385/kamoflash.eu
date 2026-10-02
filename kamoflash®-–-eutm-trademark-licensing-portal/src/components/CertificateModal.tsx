import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Award, CheckCircle2, Globe2, Calendar, FileText } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS, EU_MEMBER_STATES } from '../data/translations.ts';
import { TRADEMARK_CLASSES } from '../data/trademarkClasses.ts';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-3xl my-8 p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-emerald-500/30 shadow-2xl z-10 space-y-6 text-slate-100"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    Official Trademark Registry
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {t.certificate.modalTitle}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Certificate Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Filing Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <span className="text-slate-400 uppercase font-mono text-[10px] tracking-wider block">
                  Issuing Office / Behörde
                </span>
                <p className="font-bold text-white text-sm">
                  {t.certificate.officeName}
                </p>
                <div className="pt-2 border-t border-white/5 space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span>EUTM Reference:</span>
                    <span className="font-mono text-[#00F2FE] font-bold">019087974</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mark Type:</span>
                    <span className="font-semibold text-white">Wordmark / Wortmarke</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wordmark Text:</span>
                    <span className="font-bold text-[#10FFA0] tracking-wider">KAMOFLASH</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <span className="text-slate-400 uppercase font-mono text-[10px] tracking-wider block">
                  Registration & Validity
                </span>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Officially Registered & Fully Protected</span>
                </div>
                <div className="pt-2 border-t border-white/5 space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span>Registration Date:</span>
                    <span className="font-mono text-white">18/01/2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expiry Date:</span>
                    <span className="font-mono text-[#D4FF00] font-semibold">07/10/2034</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewable:</span>
                    <span className="text-slate-300">Every 10 Years in perpetuity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registered Classes Summary */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#00F2FE] uppercase tracking-wider">
                  17 Registered Nice Classification Classes:
                </span>
                <span className="text-xs text-slate-400 font-mono">17 Classes</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TRADEMARK_CLASSES.map((cls) => (
                  <span
                    key={cls.id}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                  >
                    Class {cls.classNumber}
                  </span>
                ))}
              </div>
            </div>

            {/* 27 EU Member States */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-[#00F2FE]" />
                <span>{t.certificate.territoryCoverage}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-slate-300 font-mono">
                {EU_MEMBER_STATES.map((country, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10FFA0]" />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Ownership Statement */}
            <div className="p-3.5 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-xs text-slate-300 leading-relaxed flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00F2FE] shrink-0" />
              <span>
                <strong>Legal Proprietor:</strong> KAMOFLASH, Saalburgallee 39, 60385 Frankfurt am Main, Germany. All commercial licensing negotiations are conducted directly with the trademark holder.
              </span>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] transition-colors"
              >
                {t.certificate.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
