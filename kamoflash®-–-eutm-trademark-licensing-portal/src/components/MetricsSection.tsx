import React from 'react';
import { motion } from 'motion/react';
import { Play, Users, Calendar, Music } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface MetricsSectionProps {
  language: Language;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const stats = [
    {
      number: t.traction.stat1Number,
      label: t.traction.stat1Label,
      desc: t.traction.stat1Desc,
      icon: Play,
      accentColor: '#00F2FE',
      glow: 'rgba(0, 242, 254, 0.15)',
    },
    {
      number: t.traction.stat2Number,
      label: t.traction.stat2Label,
      desc: t.traction.stat2Desc,
      icon: Users,
      accentColor: '#10FFA0',
      glow: 'rgba(16, 255, 160, 0.15)',
    },
    {
      number: t.traction.stat3Number,
      label: t.traction.stat3Label,
      desc: t.traction.stat3Desc,
      icon: Calendar,
      accentColor: '#D4FF00',
      glow: 'rgba(212, 255, 0, 0.15)',
    },
    {
      number: t.traction.stat4Number,
      label: t.traction.stat4Label,
      desc: t.traction.stat4Desc,
      icon: Music,
      accentColor: '#9D4EDD',
      glow: 'rgba(157, 78, 221, 0.15)',
    },
  ];

  return (
    <section id="traction" className="py-20 lg:py-28 relative border-y border-white/10 bg-[#0A0C13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F2FE] uppercase block">
            {t.traction.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {t.traction.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.traction.subtitle}
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
              {t.traction.sinceNote}
            </span>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 sm:p-7 bg-[#10131E] border border-white/10 transition-all duration-300 hover:border-white/20 group hover:-translate-y-1"
                style={{
                  boxShadow: `0 10px 30px -15px ${stat.glow}`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${stat.accentColor}15`,
                      borderColor: `${stat.accentColor}40`,
                      color: stat.accentColor,
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Verified
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
