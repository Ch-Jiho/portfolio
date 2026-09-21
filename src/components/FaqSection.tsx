import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data/portfolioData';

interface FaqSectionProps {
  lang: 'ko' | 'en';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '질문 & 답변' : 'FAQ & Perspectives'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '개발 철학 및 협업 방식' : 'Frequently Asked Questions'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? 'AI 시스템 연동 및 바이브 코딩 실무, 다국어 처리 경험과 프로젝트 배포에 대한 답변입니다.'
              : 'Insights on engineering workflow, AI adoption, multilingual systems, and production delivery.'}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121218] border-blue-500/40 shadow-md'
                    : 'bg-[#0e0e12] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {lang === 'ko' ? item.questionKo : item.questionEn}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-850 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {lang === 'ko' ? item.answerKo : item.answerEn}
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
