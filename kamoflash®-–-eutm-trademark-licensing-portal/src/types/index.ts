export type Language = 'de' | 'en' | 'es' | 'fr';

export interface TrademarkClass {
  id: number;
  classNumber: number;
  pillarId: string;
  name: Record<Language, string>;
  shortDescription: Record<Language, string>;
  granularScope: Record<Language, string[]>;
  commercialRelevance: Record<Language, string>;
  potentialLicenseeTypes: Record<Language, string[]>;
}

export interface BrandPillar {
  id: string;
  number: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  classes: number[];
  color: string;
  accentGlow: string;
  iconName: string;
}

export interface LicensingInquiry {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  targetIndustry: string;
  licenseType: string;
  selectedClasses: number[];
  geographicScope: string;
  timeframe: string;
  proposalDetails: string;
}
