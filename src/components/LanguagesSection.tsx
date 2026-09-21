import React from 'react';
import { Languages, CheckCircle2 } from 'lucide-react';
import { languageProficiencies } from '../data/portfolioData';

interface LanguagesSectionProps {
  lang: 'ko' | 'en';
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ lang }) => {
  return (
    <section id="languages" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Languages className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '언어 & 숙련도' : 'Languages'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '커뮤니케이션 언어 및 주력 기술' : 'My Languages & Stacks'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '원활한 팀 협업을 위한 자연어 소통 역량과 고품질 시스템 구현을 뒷받침하는 핵심 기술 스택 숙련도입니다.'
              : 'Communication and engineering fluencies enabling seamless cross-domain team delivery and technical excellence.'}
          </p>
        </div>

        {/* 4 Circular Progress Meters (matching reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languageProficiencies.map((item, idx) => {
            const radius = 42;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (item.percentage / 100) * circumference;

            return (
              <div
                key={idx}
                id={`lang-gauge-${idx}`}
                className="group rounded-2xl bg-[#0e0e12]/90 hover:bg-[#13131a] border border-zinc-800/80 hover:border-blue-500/40 p-6 flex flex-col items-center text-center transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5"
              >
                {/* Circular Gauge SVG */}
                <div className="relative w-28 h-28 my-2 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background track circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-zinc-800/80"
                      strokeWidth="7"
                      fill="transparent"
                    />
                    {/* Active progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke={item.color}
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Center percentage label */}
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-xl font-bold font-mono text-white tracking-tight">
                      {item.percentage}%
                    </span>
                  </div>
                </div>

                {/* Title & Level */}
                <h3 className="text-base font-semibold text-white mt-3 group-hover:text-blue-300 transition-colors">
                  {lang === 'ko' ? item.nameKo : item.nameEn}
                </h3>

                <p className="text-xs font-mono text-blue-400 font-medium mt-1">
                  {lang === 'ko' ? item.levelKo : item.levelEn}
                </p>

                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {lang === 'ko' ? item.subKo : item.subEn}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
