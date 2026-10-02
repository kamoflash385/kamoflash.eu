import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Plus, 
  Tv, 
  Sparkles, 
  Coffee, 
  Compass, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { Language, TrademarkClass, BrandPillar } from '../types/index.ts';
import { BRAND_PILLARS, TRADEMARK_CLASSES } from '../data/trademarkClasses.ts';
import { TRANSLATIONS } from '../data/translations.ts';

interface TrademarkExplorerProps {
  language: Language;
  selectedClasses: number[];
  onToggleClass: (classNumber: number) => void;
  onClearSelectedClasses: () => void;
}

export const TrademarkExplorer: React.FC<TrademarkExplorerProps> = ({
  language,
  selectedClasses,
  onToggleClass,
  onClearSelectedClasses,
}) => {
  const [activePillarId, setActivePillarId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedClassIds, setExpandedClassIds] = useState<number[]>([9, 25, 32]); // Pre-expand 3 popular classes
  const t = TRANSLATIONS[language];

  const pillarIconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    Tv,
    Sparkles,
    Coffee,
    Compass,
    TrendingUp,
  };

  const toggleExpand = (id: number) => {
    setExpandedClassIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter classes based on active pillar and search query
  const filteredClasses = useMemo(() => {
    return TRADEMARK_CLASSES.filter((item) => {
      // Pillar filter
      if (activePillarId !== 'all' && item.pillarId !== activePillarId) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const name = (item.name[language] || '').toLowerCase();
        const shortDesc = (item.shortDescription[language] || '').toLowerCase();
        const terms = (item.granularScope[language] || []).join(' ').toLowerCase();
        const classNumStr = item.classNumber.toString();

        return (
          name.includes(q) ||
          shortDesc.includes(q) ||
          terms.includes(q) ||
          classNumStr === q
        );
      }

      return true;
    });
  }, [activePillarId, searchQuery, language]);

  return (
    <section id="pillars" className="py-20 lg:py-28 relative bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F2FE] uppercase block">
            {t.trademarkSection.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.trademarkSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.trademarkSection.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.trademarkSection.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-[#10131E] border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-white/5"
              >
                ✕
              </button>
            )}
          </div>

          {/* 5 Brand Pillars Segmented Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActivePillarId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activePillarId === 'all'
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-[#10131E] text-slate-400 border border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {t.trademarkSection.allPillarsTab} (17)
            </button>

            {BRAND_PILLARS.map((pillar) => {
              const IconComp = pillarIconMap[pillar.iconName] || Tv;
              const isActive = activePillarId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white border shadow-md'
                      : 'bg-[#10131E] text-slate-400 border border-white/10 hover:text-slate-200 hover:border-white/20'
                  }`}
                  style={{
                    backgroundColor: isActive ? `${pillar.color}20` : undefined,
                    borderColor: isActive ? pillar.color : undefined,
                    boxShadow: isActive ? `0 0 20px ${pillar.accentGlow}` : undefined,
                  }}
                >
                  <IconComp className="w-3.5 h-3.5" style={{ color: pillar.color }} />
                  <span className="font-mono text-[11px] opacity-75">{pillar.number}.</span>
                  <span>{pillar.title[language]}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/10">
                    {pillar.classes.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Classes Sticky Quick Bar */}
        {selectedClasses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#00F2FE]/15 via-[#10FFA0]/10 to-transparent border border-[#00F2FE]/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F2FE]/20 flex items-center justify-center text-[#00F2FE] font-mono font-bold text-xs">
                {selectedClasses.length}
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">
                  {selectedClasses.length} {t.trademarkSection.selectedCount}
                </span>
                <span className="text-[11px] text-slate-300">
                  {t.trademarkSection.selectedClassesBarNotice}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClearSelectedClasses}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] rounded-lg transition-colors cursor-pointer"
              >
                <span>{t.trademarkSection.proceedToInquiry}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Classes Card Grid */}
        {filteredClasses.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-[#10131E] border border-white/10 space-y-4">
            <p className="text-sm text-slate-400">
              {t.trademarkSection.noResults}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActivePillarId('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#00F2FE] border border-[#00F2FE]/30 rounded-lg hover:bg-[#00F2FE]/10"
            >
              {t.trademarkSection.clearFilter}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((item) => {
              const isExpanded = expandedClassIds.includes(item.id);
              const isSelected = selectedClasses.includes(item.classNumber);
              const currentPillar = BRAND_PILLARS.find((p) => p.id === item.pillarId);

              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`rounded-2xl p-6 bg-[#0F1118] border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#00F2FE]/60 bg-[#121624] shadow-lg shadow-[#00F2FE]/10'
                      : 'border-white/10 hover:border-white/20 hover:bg-[#121520]'
                  }`}
                >
                  <div>
                    {/* Class header & Pillar badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                          style={{
                            color: currentPillar?.color || '#00F2FE',
                            borderColor: `${currentPillar?.color || '#00F2FE'}40`,
                            backgroundColor: `${currentPillar?.color || '#00F2FE'}15`,
                          }}
                        >
                          Class {item.classNumber.toString().padStart(2, '0')}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          EUTM 019087974
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onToggleClass(item.classNumber)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#00F2FE] text-black font-bold shadow-md shadow-[#00F2FE]/30'
                            : 'bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10'
                        }`}
                        title={isSelected ? 'Remove from inquiry' : 'Add to inquiry'}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Marked</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-[#00F2FE]" />
                            <span>Select</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Class Name & Summary */}
                    <div className="py-4 space-y-2">
                      <h3 className="text-base font-bold text-white leading-snug">
                        {item.name[language]}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.shortDescription[language]}
                      </p>
                    </div>

                    {/* Commercial Fit */}
                    <div className="py-2.5 px-3 rounded-lg bg-black/30 border border-white/5 text-[11px] text-slate-400 space-y-1">
                      <span className="font-semibold text-slate-300 block">
                        {t.trademarkSection.commercialFitHeader}
                      </span>
                      <p className="text-slate-400 leading-relaxed">
                        {item.commercialRelevance[language]}
                      </p>
                    </div>

                    {/* Expandable Granular Terms */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pt-4 space-y-3 overflow-hidden"
                        >
                          <div className="border-t border-white/10 pt-3">
                            <span className="text-[11px] font-mono uppercase text-[#00F2FE] tracking-wider block mb-2 font-semibold">
                              {t.trademarkSection.protectedScopeHeader}
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {item.granularScope[language].map((term, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2">
                                  <span className="text-[#00F2FE] font-mono mt-0.5">•</span>
                                  <span className="leading-tight">{term}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-1.5 font-semibold">
                              {t.trademarkSection.potentialPartnersHeader}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {item.potentialLicenseeTypes[language].map((partner, pIdx) => (
                                <span
                                  key={pIdx}
                                  className="text-[10px] text-slate-300 bg-white/5 border border-white/10 rounded px-2 py-0.5 font-mono"
                                >
                                  {partner}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expand Toggle Button */}
                  <div className="pt-4 border-t border-white/5 mt-3">
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="w-full py-1.5 text-xs font-medium text-slate-400 hover:text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? t.trademarkSection.collapseTerms
                          : t.trademarkSection.expandTerms}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
