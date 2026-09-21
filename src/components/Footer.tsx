import React from 'react';
import { ArrowUp, Github, Mail, Phone, Heart, Sparkles, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  lang: 'ko' | 'en';
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#070709] py-12 text-zinc-400 text-xs no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-base font-bold text-white tracking-tight">
            {lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="font-mono text-[11px] text-zinc-400">
            © {new Date().getFullYear()} {personalInfo.nameEn}. All rights reserved.
          </span>
        </div>

        {/* Center: Deployment Ready Status */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenDeployGuide}
            className="px-3 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Rocket className="w-3 h-3" />
            <span>Ready for GitHub & Vercel</span>
          </button>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-xs transition-colors cursor-pointer"
            title="맨 위로 가기"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
