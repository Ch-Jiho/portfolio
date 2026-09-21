import React, { useState } from 'react';
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

interface ReviewsSectionProps {
  lang: 'ko' | 'en';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '협업 피드백' : 'Reviews'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '신뢰받는 협업 평가 및 추천' : 'Trusted Reviews'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '함께 호흡을 맞춘 클라이언트, 팀 리드 및 교육 멘토들이 증명하는 개발 속도와 신뢰성입니다.'
              : 'What project leads, collaborators, and mentors say about my work ethic, execution speed, and software craft.'}
          </p>
        </div>

        {/* Featured Large Testimonial Card (matching reference image) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#12121a] via-[#0d0d12] to-[#0a0a0f] border border-blue-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-6 right-8 text-blue-500/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-white leading-relaxed tracking-tight">
              "{lang === 'ko' ? current.quoteKo : current.quoteEn}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-md">
                  <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-blue-400 font-bold text-sm">
                    {current.authorKo.slice(0, 1)}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {lang === 'ko' ? current.authorKo : current.authorEn}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {lang === 'ko' ? current.roleKo : current.roleEn} ·{' '}
                    <span className="text-blue-400">
                      {lang === 'ko' ? current.relationKo : current.relationEn}
                    </span>
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  id="testimonial-prev-btn"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  id="testimonial-next-btn"
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-2xl p-5 border transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#151520] border-blue-500/50 shadow-md'
                  : 'bg-[#0e0e12] hover:bg-[#121218] border-zinc-800/80'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed mb-3">
                "{lang === 'ko' ? item.quoteKo : item.quoteEn}"
              </p>
              <p className="text-xs font-semibold text-white">
                {lang === 'ko' ? item.authorKo : item.authorEn}
              </p>
              <p className="text-[11px] text-zinc-400">
                {lang === 'ko' ? item.roleKo : item.roleEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
