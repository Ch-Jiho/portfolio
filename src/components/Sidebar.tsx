import React from 'react';
import {
  Home,
  Briefcase,
  Award,
  Wand2,
  Zap,
  FolderGit2,
  GraduationCap,
  MessageSquareQuote,
  Languages,
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface SidebarProps {
  lang: 'ko' | 'en';
  activeSection: string;
  onOpenDeployGuide: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ lang, activeSection }) => {
  const menuItems = [
    { id: 'hero', icon: Home, labelKo: 'Home', labelEn: 'Home' },
    { id: 'experience', icon: Briefcase, labelKo: 'Work experience', labelEn: 'Work experience' },
    { id: 'certificates', icon: Award, labelKo: 'Certificates', labelEn: 'Certificates' },
    { id: 'toolkits', icon: Wand2, labelKo: 'Dev Toolkits', labelEn: 'Dev Toolkits' },
    { id: 'skills', icon: Zap, labelKo: 'Skills', labelEn: 'Skills' },
    { id: 'projects', icon: FolderGit2, labelKo: 'Projects', labelEn: 'Projects' },
    { id: 'education', icon: GraduationCap, labelKo: 'Education', labelEn: 'Education' },
    { id: 'reviews', icon: MessageSquareQuote, labelKo: 'Reviews', labelEn: 'Reviews' },
    { id: 'languages', icon: Languages, labelKo: 'Languages', labelEn: 'Languages' },
    { id: 'contact', icon: Mail, labelKo: 'Contact', labelEn: 'Contact' },
  ];

  return (
    <aside
      id="desktop-sidebar"
      className="hidden lg:flex flex-col justify-between w-64 xl:w-72 shrink-0 h-screen sticky top-0 bg-[#09090b]/95 backdrop-blur-xl border-r border-zinc-800/80 p-5 overflow-y-auto no-print z-30 select-none"
    >
      {/* Top Profile Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3.5 pb-4 border-b border-zinc-800/60">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/40 p-0.5 bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20">
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
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-blue-400 font-bold text-lg">
                  CJ
                </div>
              )}
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-zinc-950 rounded-full animate-pulse" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white tracking-tight flex items-center gap-1.5">
              <span>{lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}</span>
              <Sparkles className="w-3 h-3 text-blue-400" />
            </h2>
            <p className="text-xs text-zinc-400 font-normal">
              {lang === 'ko' ? personalInfo.headlineRoleKo : personalInfo.headlineRoleEn}
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`sidebar-link-${item.id}`}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-850/70'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? 'text-blue-400' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}
                />
                <span>{lang === 'ko' ? item.labelKo : item.labelEn}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-xs shadow-blue-400" />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-5 border-t border-zinc-800/60 space-y-4">
        <div>
          <p className="text-[11px] font-medium text-zinc-400 mb-2.5 uppercase tracking-wider">
            {lang === 'ko' ? '소셜 & 채널' : 'Follow me on:'}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              id="sidebar-github-btn"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              id="sidebar-email-btn"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              id="sidebar-phone-btn"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              id="sidebar-linkedin-btn"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hire Myself / Contact Primary Action Button */}
        <a
          href="#contact"
          id="sidebar-hire-cta"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-600/25 transition-all duration-200 group active:scale-[0.98]"
        >
          <span>{lang === 'ko' ? '프로젝트 의뢰 & 연락' : 'Hire Myself'}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </aside>
  );
};
