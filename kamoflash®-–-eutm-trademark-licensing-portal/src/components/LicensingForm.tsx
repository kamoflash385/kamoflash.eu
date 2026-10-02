import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, X, ShieldCheck, Tag } from 'lucide-react';
import { Language, LicensingInquiry } from '../types/index.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { TRADEMARK_CLASSES } from '../data/trademarkClasses.ts';

interface LicensingFormProps {
  language: Language;
  selectedClasses: number[];
  onToggleClass: (classNumber: number) => void;
  onClearSelectedClasses: () => void;
  onOpenPrivacy?: () => void;
}

export const LicensingForm: React.FC<LicensingFormProps> = ({
  language,
  selectedClasses,
  onToggleClass,
  onClearSelectedClasses,
  onOpenPrivacy,
}) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<LicensingInquiry>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    targetIndustry: '',
    licenseType: 'category',
    selectedClasses: selectedClasses,
    geographicScope: 'all-eu',
    timeframe: 'q1-2025',
    proposalDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState<{
    referenceCode: string;
    classes: number[];
    company: string;
    contact: string;
  } | null>(null);

  // Industry options localized
  const industriesByLang: Record<Language, string[]> = {
    de: [
      'Mode & Streetwear Bekleidung',
      'Getränke & Energy Drinks',
      'Food & Gastronomie / Kebab-Franchise',
      'Musiklabel, Streaming & Entertainment',
      'Event-Veranstaltung & Festival-Organisation',
      'Automotive, Tuning & Mikromobilität',
      'Schmuck, Uhren & Luxusgüter',
      'Raucherbedarf & Botanik / Hanf',
      'Digitalagentur, Software & Web-Plattform',
      'Andere Branche / Diversifizierter Handel',
    ],
    en: [
      'Fashion & Streetwear Apparel',
      'Beverages & Energy Drinks',
      'Food, Dining & Kebab Franchising',
      'Music Label, Streaming & Entertainment',
      'Event Promotion & Festival Production',
      'Automotive, Tuning & Micro-Mobility',
      'Jewelry, Watches & Luxury Goods',
      'Smoker Accessories & Botanicals / Hemp',
      'Digital Agency, Software & Platforms',
      'Other Commercial Sector',
    ],
    es: [
      'Moda y Ropa Streetwear',
      'Bebidas y Energy Drinks',
      'Alimentación y Franquicias Gastronómicas',
      'Sellos Musicales, Streaming y Entretenimiento',
      'Producción de Eventos y Festivales',
      'Automoción, Tuning y Movilidad Urbana',
      'Joyería, Relojería y Bienes de Lujo',
      'Parafernalia de Fumador y Botánica',
      'Agencias Digitales y Software',
      'Otros Sectores Comerciales',
    ],
    fr: [
      'Mode & Vêtements Streetwear',
      'Boissons & Energy Drinks',
      'Alimentation & Franchises Kebab / Street Food',
      'Labels Musicaux, Streaming & Divertissement',
      'Production d’Événements & Festivals',
      'Automobile, Tuning & Mobilité Urbaine',
      'Joaillerie, Horlogerie & Produits de Luxe',
      'Articles pour Fumeurs & Botanique',
      'Agences Numériques & Éditeurs de Logiciels',
      'Autres Secteurs Commerciaux',
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (
      !formData.companyName.trim() ||
      !formData.contactPerson.trim() ||
      !formData.email.trim() ||
      !formData.targetIndustry ||
      !formData.proposalDetails.trim()
    ) {
      setErrorMessage(t.form.validationError);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(
        language === 'de'
          ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
          : 'Please provide a valid corporate email address.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'KM-' + Math.floor(100000 + Math.random() * 900000).toString();
      setSuccessData({
        referenceCode: randomRef,
        classes: selectedClasses,
        company: formData.companyName,
        contact: formData.contactPerson,
      });
    }, 800);
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 relative bg-[#08090D] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F2FE] uppercase block">
            {t.form.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {t.form.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.form.subtitle}
          </p>
        </div>

        {/* Inbound Lead Form Card */}
        <div className="rounded-2xl p-6 sm:p-10 bg-[#0F1118] border border-white/15 shadow-2xl relative">
          
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Company & Contact Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.companyLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder={t.form.companyPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.contactPersonLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder={t.form.contactPersonPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Industry & License Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.industryLabel}
                </label>
                <select
                  required
                  value={formData.targetIndustry}
                  onChange={(e) => setFormData({ ...formData, targetIndustry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                >
                  <option value="" disabled>
                    {t.form.industrySelectDefault}
                  </option>
                  {industriesByLang[language].map((ind, idx) => (
                    <option key={idx} value={ind} className="bg-[#141824] text-white">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.licenseTypeLabel}
                </label>
                <select
                  value={formData.licenseType}
                  onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                >
                  <option value="exclusive" className="bg-[#141824] text-white">
                    {t.form.licenseExclusive}
                  </option>
                  <option value="category" className="bg-[#141824] text-white">
                    {t.form.licenseCategory}
                  </option>
                  <option value="co-branding" className="bg-[#141824] text-white">
                    {t.form.licenseCoBranding}
                  </option>
                  <option value="distribution" className="bg-[#141824] text-white">
                    {t.form.licenseDistribution}
                  </option>
                </select>
              </div>
            </div>

            {/* Row 4: Territory Scope & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.territoryLabel}
                </label>
                <select
                  value={formData.geographicScope}
                  onChange={(e) => setFormData({ ...formData, geographicScope: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                >
                  <option value="all-eu" className="bg-[#141824] text-white">
                    {t.form.territoryAllEU}
                  </option>
                  <option value="dach" className="bg-[#141824] text-white">
                    {t.form.territoryDACH}
                  </option>
                  <option value="specific" className="bg-[#141824] text-white">
                    {t.form.territorySpecific}
                  </option>
                  <option value="global" className="bg-[#141824] text-white">
                    {t.form.territoryGlobal}
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.form.websiteLabel}
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder={t.form.websitePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                />
              </div>
            </div>

            {/* Synced Protected Classes Selector Box */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-200">
                  {t.form.classesLabel} ({selectedClasses.length})
                </label>
                {selectedClasses.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearSelectedClasses}
                    className="text-[11px] text-slate-400 hover:text-white"
                  >
                    Clear selection
                  </button>
                )}
              </div>

              {selectedClasses.length === 0 ? (
                <div className="text-xs text-slate-400 py-1">
                  {t.form.noClassesSelectedPrompt}
                  <a href="#pillars" className="text-[#00F2FE] ml-1 underline">
                    View 17 Classes
                  </a>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedClasses.sort((a, b) => a - b).map((clsNum) => {
                    const clsItem = TRADEMARK_CLASSES.find((c) => c.classNumber === clsNum);
                    return (
                      <span
                        key={clsNum}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#00F2FE]/15 border border-[#00F2FE]/40 text-[#00F2FE]"
                      >
                        <Tag className="w-3 h-3" />
                        <span>Class {clsNum}</span>
                        {clsItem && <span className="text-[10px] text-slate-300 hidden sm:inline">({clsItem.name[language].slice(0, 18)}...)</span>}
                        <button
                          type="button"
                          onClick={() => onToggleClass(clsNum)}
                          className="hover:text-white ml-0.5"
                          title="Remove class"
                        >
                          ✕
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Proposal Details Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                {t.form.proposalLabel}
              </label>
              <textarea
                required
                rows={4}
                value={formData.proposalDetails}
                onChange={(e) => setFormData({ ...formData, proposalDetails: e.target.value })}
                placeholder={t.form.proposalPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#141824] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors resize-y"
              />
            </div>

            {/* Privacy note */}
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {t.form.privacyNotice}{' '}
              {onOpenPrivacy && (
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-[#00F2FE] hover:underline cursor-pointer inline-flex items-center ml-1"
                >
                  {language === 'de'
                    ? 'Datenschutzerklärung einsehen'
                    : language === 'es'
                    ? 'Ver Política de Privacidad'
                    : language === 'fr'
                    ? 'Consulter la Politique de Confidentialité'
                    : 'View Privacy Policy'}
                </button>
              )}
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#00F2FE]/25 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>{t.form.submittingBtn}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.form.submitBtn}</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {successData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessData(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-[#00F2FE]/40 shadow-2xl z-10 text-center space-y-5"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {t.form.successModalTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {t.form.successModalSubtitle}
                </p>
              </div>

              {/* Inquiry Details Receipt */}
              <div className="text-left rounded-xl bg-black/40 border border-white/10 p-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.form.successRefCode}</span>
                  <span className="font-mono font-bold text-[#00F2FE]">{successData.referenceCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Company:</span>
                  <span className="font-semibold text-white">{successData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Contact Person:</span>
                  <span className="text-slate-200">{successData.contact}</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-slate-400 block mb-1.5">{t.form.successClassList}</span>
                  {successData.classes.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {successData.classes.map((c) => (
                        <span key={c} className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-[#10FFA0]">
                          Class {c}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-slate-400 italic">Broad Portfolio License Inquiry</span>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {t.form.successNextSteps}
              </p>

              <button
                type="button"
                onClick={() => setSuccessData(null)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F2FE] hover:bg-[#10FFA0] transition-colors cursor-pointer"
              >
                {t.form.successCloseBtn}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
