import React, { useState } from 'react';
import { 
  FileDown, 
  Github, 
  Send, 
  Menu, 
  X, 
  Globe,
  Rocket
} from 'lucide-react';

interface NavbarProps {
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenDeployGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelKo: '홈', labelEn: 'Home' },
    { href: '#experience', labelKo: '경력', labelEn: 'Experience' },
    { href: '#projects', labelKo: '프로젝트', labelEn: 'Projects' },
    { href: '#education', labelKo: '학력', labelEn: 'Education' },
    { href: '#skills', labelKo: '기술 스택', labelEn: 'Skills' },
    { href: '#certificates', labelKo: '자격 & 활동', labelEn: 'Certificates' },
    { href: '#contact', labelKo: '연락처', labelEn: 'Contact' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#faf9f6]/90 border-b border-stone-200/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          id="nav-brand-logo"
          className="group flex items-center gap-2 text-stone-900 transition-colors"
        >
          <span className="font-serif-display text-2xl font-medium tracking-tight text-stone-900 group-hover:text-indigo-600 transition-colors">
            {lang === 'ko' ? '최지호' : 'Jiho Choi'}
          </span>
          <span className="text-xs font-mono text-stone-400 font-normal px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200/80">
            Dev
          </span>
        </a>

        {/* Desktop Nav Pill Links (matching reference image center menu) */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1.5 rounded-full border border-stone-200/80 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="px-3.5 py-1 text-xs font-medium text-stone-600 hover:text-stone-950 hover:bg-white rounded-full transition-all duration-150"
            >
              {lang === 'ko' ? link.labelKo : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            type="button"
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer"
            title="Toggle Language (KO/EN)"
          >
            <Globe className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-mono font-semibold">{lang === 'ko' ? 'EN' : '한국어'}</span>
          </button>

          {/* Vercel & GitHub Deploy Guide */}
          <button
            type="button"
            id="deploy-guide-btn"
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-300/80 transition-colors cursor-pointer"
            title="GitHub & Vercel 배포 가이드"
          >
            <Rocket className="w-3.5 h-3.5 text-indigo-600" />
            <span>{lang === 'ko' ? 'Vercel 배포' : 'Vercel Deploy'}</span>
          </button>

          {/* Download / Print CV Button (matching reference image purple button) */}
          <button
            type="button"
            id="download-cv-btn"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '이력서 인쇄 / PDF' : 'Download CV'}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="p-1.5 text-xs font-mono font-semibold rounded bg-stone-100 border border-stone-200"
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
          <button
            type="button"
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-md"
              >
                {lang === 'ko' ? link.labelKo : link.labelEn}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg"
            >
              <Rocket className="w-3.5 h-3.5 text-indigo-600" />
              <span>{lang === 'ko' ? 'Vercel 배포 가이드' : 'Deploy Guide'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? 'PDF 다운로드' : 'Download CV'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
