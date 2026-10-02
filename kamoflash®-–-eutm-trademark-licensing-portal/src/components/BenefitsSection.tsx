import React from 'react';
import { motion } from 'motion/react';
import { History, Users2, Zap, ShieldAlert, Check } from 'lucide-react';
import { Language } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface BenefitsSectionProps {
  language: Language;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const cards = [
    {
      title: t.benefits.card1Title,
      tag: t.benefits.card1Tag,
      desc: t.benefits.card1Desc,
      bullets: [t.benefits.card1Bullet1, t.benefits.card1Bullet2],
      icon: History,
      color: '#00F2FE',
    },
    {
      title: t.benefits.card2Title,
      tag: t.benefits.card2Tag,
      desc: t.benefits.card2Desc,
      bullets: [t.benefits.card2Bullet1, t.benefits.card2Bullet2],
      icon: Users2,
      color: '#10FFA0',
    },
    {
      title: t.benefits.card3Title,
      tag: t.benefits.card3Tag,
      desc: t.benefits.card3Desc,
      bullets: [t.benefits.card3Bullet1, t.benefits.card3Bullet2],
      icon: Zap,
      color: '#D4FF00',
    },
    {
      title: t.benefits.card4Title,
      tag: t.benefits.card4Tag,
      desc: t.benefits.card4Desc,
      bullets: [t.benefits.card4Bullet1, t.benefits.card4Bullet2],
      icon: ShieldAlert,
      color: '#9D4EDD',
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 relative bg-[#0A0C14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F2FE] uppercase block">
            {t.benefits.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {t.benefits.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-7 sm:p-8 bg-[#0F111A] border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${card.color}15`,
                      borderColor: `${card.color}40`,
                      color: card.color,
                    }}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md border"
                    style={{
                      borderColor: `${card.color}30`,
                      backgroundColor: `${card.color}10`,
                      color: card.color,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {card.desc}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#10FFA0]" />
                      </div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
