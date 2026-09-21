import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { educationMilestones } from '../data/portfolioData';

interface EducationSectionProps {
  lang: 'ko' | 'en';
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  return (
    <section id="education" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '학력 및 교육' : 'Educations'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '학력 및 기술 교육 여정' : 'Academic Journey'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '컴퓨터공학 학사 전공을 바탕으로 최신 AI 에이전트, 임베디드 및 풀스택 실습 과정을 체계적으로 수료했습니다.'
              : 'Formal computer science degree and specialized advanced training across AI agents, software engineering, and systems.'}
          </p>
        </div>

        {/* Primary University Degree Banner Card (matching reference image) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#111119] to-[#0d0d12] border border-blue-500/30 p-6 sm:p-8 mb-8 shadow-xl shadow-blue-500/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <GraduationCap className="w-7 h-7 text-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    ● {lang === 'ko' ? '학사 과정' : 'Bachelors Degree'}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    2021.03 — 2026.02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {lang === 'ko' ? '부산외국어대학교 컴퓨터공학과' : 'Busan University of Foreign Studies'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  {lang === 'ko'
                    ? '컴퓨터공학과 학사 졸업예정 · AI·SW 특화 교육 및 다국어 AI 에이전트 과정 수료'
                    : 'B.S. in Computer Engineering · Specialized in Multilingual AI Agents & Full-Stack Systems'}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap md:flex-col gap-2">
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                AI & SW Specialization
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                Computer Engineering BS
              </span>
            </div>
          </div>
        </div>

        {/* 6 Chronological Milestone Cards (2021 — 2026) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0e0e12] hover:bg-[#13131a] border border-zinc-800/80 hover:border-zinc-700 p-5 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold">
                    {milestone.year}
                  </span>
                  {milestone.badge && (
                    <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                  {lang === 'ko' ? milestone.titleKo : milestone.titleEn}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {lang === 'ko' ? milestone.descKo : milestone.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-850 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'ko' ? '수료 완료' : 'Completed'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
