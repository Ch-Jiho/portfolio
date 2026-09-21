export interface Project {
  id: string;
  number: string;
  titleKo: string;
  titleEn: string;
  category: string;
  period?: string;
  taglineKo: string;
  taglineEn: string;
  descriptionKo: string[];
  descriptionEn: string[];
  techStack: string[];
  featuresKo: string[];
  featuresEn: string[];
  architectureKo?: string;
  mockupType: 'subway' | 'traffic' | 'club' | 'cafe' | 'drawing';
  liveUrl?: string;
  githubUrl?: string;
  url?: string;
}

export interface Experience {
  period: string;
  roleKo: string;
  roleEn: string;
  companyKo: string;
  companyEn: string;
  typeKo?: string;
  typeEn?: string;
  descriptionKo: string[];
  descriptionEn: string[];
  skills: string[];
}

export interface EducationMilestone {
  year: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  badge?: string;
}

export interface SkillCategory {
  categoryNameKo: string;
  categoryNameEn: string;
  iconName: string;
  items: {
    name: string;
    descriptionKo: string;
    descriptionEn: string;
    level?: string;
  }[];
}

export interface Certificate {
  nameKo: string;
  nameEn: string;
  date: string;
  issuerKo: string;
  issuerEn: string;
  idNumber?: string;
}

export interface ExtraExperience {
  period: string;
  titleKo: string;
  titleEn: string;
  detailsKo: string[];
  detailsEn: string[];
  tag: string;
}

export interface FaqItem {
  questionKo: string;
  questionEn: string;
  answerKo: string;
  answerEn: string;
}

export interface Testimonial {
  quoteKo: string;
  quoteEn: string;
  authorKo: string;
  authorEn: string;
  roleKo: string;
  roleEn: string;
  rating: number;
  avatarUrl?: string;
  relationKo: string;
  relationEn: string;
}

export interface LanguageProficiency {
  nameKo: string;
  nameEn: string;
  levelKo: string;
  levelEn: string;
  percentage: number;
  subKo: string;
  subEn: string;
  color: string;
}

