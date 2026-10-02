import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Lock, Mail, Building2, MapPin, Phone, Scale } from 'lucide-react';
import { Language } from '../types/index.ts';
import { PRIVACY_POLICY } from '../data/privacyPolicy.ts';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const policy = PRIVACY_POLICY[language] || PRIVACY_POLICY.de;

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
          {/* Backdrop */}
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
            className="relative w-full max-w-3xl my-8 p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/20 shadow-2xl z-10 space-y-6 text-slate-100 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-[#00F2FE]/15 text-[#00F2FE]">
                    <Lock className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#00F2FE]">
                    DSGVO / GDPR Compliance
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {policy.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {policy.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Privacy Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto pr-2 space-y-5 text-xs sm:text-sm leading-relaxed custom-scrollbar">
              
              {/* Responsible Entity Banner */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#00F2FE] font-semibold text-xs uppercase font-mono">
                  <Building2 className="w-4 h-4" />
                  <span>{policy.responsibleTitle}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Entity:</span>
                    <span className="font-bold text-white text-sm">{policy.responsibleName}</span>
                    <span className="text-slate-400 block mt-0.5">{policy.responsibleAddress}</span>
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-slate-400 text-[11px]">Phone: </span>
                      <a href={`tel:${policy.responsiblePhone.replace(/\s+/g, '')}`} className="font-mono text-white hover:text-[#00F2FE]">
                        {policy.responsiblePhone}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px]">E-Mail: </span>
                      <a href={`mailto:${policy.responsibleEmail}`} className="font-mono text-[#00F2FE] hover:underline">
                        {policy.responsibleEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sections List */}
              {policy.sections.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10FFA0]" />
                    <span>{sec.title}</span>
                  </h4>
                  <div className="space-y-2 pl-3.5 text-xs text-slate-300">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-3 text-[11px] font-mono text-slate-500 text-center">
                {policy.lastUpdated}
              </div>
            </div>

            {/* Footer Close */}
            <div className="pt-4 border-t border-white/10 flex justify-end shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] transition-colors cursor-pointer"
              >
                {policy.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
