import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface HeroProps {
  language: Language;
  onOpenCertificate: () => void;
  totalClassesCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenCertificate,
  totalClassesCount,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="top" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#00F2FE]/15 via-[#10FFA0]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#9D4EDD]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trademark Status Kicker */}
        <div className="flex items-center justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#10FFA0] animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-300 tracking-wide">
              {t.hero.eutmPill}
            </span>
          </motion.div>
        </div>

        {/* Main Grid: Headline & Interactive Trademark Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: B2B Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.08] text-balance">
              <span>{t.hero.titleStart} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#10FFA0] to-[#D4FF00]">
                {t.hero.titleAccent}
              </span>
              <br />
              <span className="text-slate-100 tracking-normal font-sans text-3xl sm:text-4xl lg:text-5xl font-bold block mt-2">
                {t.hero.titleEnd}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pillars"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] rounded-xl transition-all duration-200 shadow-lg shadow-[#00F2FE]/25 hover:shadow-[#10FFA0]/40 group"
              >
                <span>{t.hero.ctaExplore}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all duration-200"
              >
                <span>{t.hero.ctaInquire}</span>
                <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              </a>
            </div>

            {/* Key Assurance Indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.registrationLabel}
                </span>
                <span className="text-sm font-mono font-bold text-white">019087974</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.validityLabel}
                </span>
                <span className="text-sm font-mono font-bold text-[#10FFA0]">07/10/2034</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.classesBadge}
                </span>
                <span className="text-sm font-mono font-bold text-[#00F2FE]">{totalClassesCount} Classes</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Focal Anchor - Official EUTM Verification Certificate Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#00F2FE]/30 via-white/5 to-[#10FFA0]/20 blur-md -z-10" />

              <div className="rounded-2xl p-6 sm:p-8 bg-[#0F1118]/90 border border-white/15 backdrop-blur-2xl space-y-6 shadow-2xl">
                
                {/* Header of verification badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#00F2FE] uppercase block">
                        EUIPO Registered
                      </span>
                      <span className="text-xs text-slate-400">European Union</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Active / Valid
                  </span>
                </div>

                {/* Wordmark Centerpiece Display */}
                <div className="py-4 text-center rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                    Registered Wordmark / Wortmarke
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white uppercase">
                    KAMOFLASH
                  </div>
                  <span className="text-xs font-mono text-[#00F2FE]">
                    Registration No: 019087974
                  </span>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Proprietor / Inhaber:</span>
                    <span className="font-semibold text-slate-200">KAMOFLASH</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Registered Office:</span>
                    <span className="font-semibold text-slate-200">Frankfurt am Main, Germany</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Registration Date:</span>
                    <span className="font-mono text-slate-200">18/01/2025</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Valid Until:</span>
                    <span className="font-mono text-[#10FFA0] font-semibold">07/10/2034</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Territory Scope:</span>
                    <span className="text-slate-200 text-right">Full EU (27 Member States)</span>
                  </div>
                </div>

                {/* Inspect Button */}
                <button
                  type="button"
                  onClick={onOpenCertificate}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{t.hero.inspectCertificate}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00F2FE]" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
