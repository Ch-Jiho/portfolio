import React, { useState, useEffect } from 'react';
import {
  Clock,
  MapPin,
  Globe,
  Rocket,
  FileDown,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface TopStatusBarProps {
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
  onOpenDeployGuide: () => void;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({
  lang,
  setLang,
  onOpenDeployGuide,
}) => {
  const [timeString, setTimeString] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString(lang === 'ko' ? 'ko-KR' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { href: '#hero', labelKo: 'Home', labelEn: 'Home' },
    { href: '#experience', labelKo: 'Work experience', labelEn: 'Work experience' },
    { href: '#certificates', labelKo: 'Certificates', labelEn: 'Certificates' },
    { href: '#toolkits', labelKo: 'Dev Toolkits', labelEn: 'Dev Toolkits' },
    { href: '#skills', labelKo: 'Skills', labelEn: 'Skills' },
    { href: '#projects', labelKo: 'Projects', labelEn: 'Projects' },
    { href: '#education', labelKo: 'Education', labelEn: 'Education' },
    { href: '#reviews', labelKo: 'Reviews', labelEn: 'Reviews' },
    { href: '#languages', labelKo: 'Languages', labelEn: 'Languages' },
    { href: '#contact', labelKo: 'Contact', labelEn: 'Contact' },
  ];

  return (
    <header
      id="top-status-bar"
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#050507]/85 border-b border-zinc-800/80 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors no-print"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: Clock Widget & Mobile Identity */}
        <div className="flex items-center gap-3">
          {/* Mobile Identity */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs overflow-hidden">
              {personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://raw.githubusercontent.com/Ch-Jiho/portfolio/5ace50d3f0df847202cd611cf80986bb2ce0e257/%EC%B5%9C%EC%A7%80%ED%98%B8(24%EB%85%84).jpg';
                    }
                  }}
                />
              ) : (
                'CJ'
              )}
            </div>
            <span className="font-semibold text-sm text-white">
              {lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}
            </span>
          </div>

          {/* Live Clock Display (matching reference image top bar) */}
          <div
            id="live-clock-badge"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 font-mono tracking-wider shadow-xs"
          >
            <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>{timeString || '12:00:00 PM'}</span>
            <span className="text-[10px] text-zinc-400 font-sans">KST</span>
          </div>

          {/* Location Badge (matching reference image) */}
          <div
            id="location-badge"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 shadow-xs"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>
              {lang === 'ko' ? '대한민국 부산광역시' : 'Based in Busan, South Korea'}
            </span>
          </div>
        </div>

        {/* Right Status Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Open to Work Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{lang === 'ko' ? '협업 및 입사 가능' : 'Available for Work'}</span>
          </div>

          {/* Language Switcher */}
          <button
            type="button"
            id="top-lang-toggle"
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono font-semibold">{lang === 'ko' ? 'EN' : 'KO'}</span>
          </button>

          {/* Vercel & GitHub Deploy Guide Button */}
          <button
            type="button"
            id="top-deploy-guide-btn"
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-colors cursor-pointer"
            title="GitHub & Vercel 배포 가이드"
          >
            <Rocket className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">
              {lang === 'ko' ? 'Vercel 배포' : 'Vercel Deploy'}
            </span>
          </button>

          {/* Download CV Button */}
          <button
            type="button"
            id="top-download-cv-btn"
            onClick={handlePrint}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all cursor-pointer active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? 'CV 다운로드' : 'Download CV'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-zinc-800/80 space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors"
              >
                {lang === 'ko' ? link.labelKo : link.labelEn}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-800/60 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-800"
            >
              <Rocket className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'ko' ? 'Vercel 배포 안내' : 'Deploy Guide'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-white bg-blue-600"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? 'CV 인쇄 / PDF' : 'Download CV'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
