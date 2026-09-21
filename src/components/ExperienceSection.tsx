import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, Sparkles, Building2, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: 'ko' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  // Allow toggling accordion or keeping both visible
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '경력 사항' : 'Career Journeys'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '실무 경력' : 'Work Experience'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '실제 프로덕트를 개발·배포하고, 매장 현장 운영과 팀 커뮤니케이션을 주도하며 검증된 실무 경험입니다.'
              : 'Organizations and teams where I engineered software solutions, led operations, and delivered measurable outcomes.'}
          </p>
        </div>

        {/* Experience Accordion List (matching reference image) */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isPresent = exp.period.includes('현재') || exp.period.includes('Present');
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                id={`experience-item-${index}`}
                className={`rounded-2xl bg-[#0e0e12]/90 border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-blue-500/50 shadow-xl shadow-blue-500/5 bg-[#121218]'
                    : 'border-zinc-800/80 hover:border-zinc-700 bg-[#0e0e12]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                      <Building2 className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          {exp.period}
                        </span>

                        {isPresent ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {lang === 'ko' ? '재직 중' : 'Current'}
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-750">
                            {lang === 'ko' ? '근무 완료' : 'Past'}
                          </span>
                        )}

                        {exp.typeKo && (
                          <span className="text-[11px] text-zinc-500">
                            · {lang === 'ko' ? exp.typeKo : exp.typeEn}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300">
                        {lang === 'ko' ? exp.roleKo : exp.roleEn}
                        <span className="text-zinc-400 font-normal text-sm ml-2">
                          @ {lang === 'ko' ? exp.companyKo : exp.companyEn}
                        </span>
                      </h3>
                    </div>
                  </div>

                  {/* Expand Icon Button */}
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Area */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-850/80 space-y-4">
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {(lang === 'ko' ? exp.descriptionKo : exp.descriptionEn).map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          ● {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
