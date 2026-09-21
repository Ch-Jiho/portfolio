import React from 'react';
import { stats } from '../data/portfolioData';
import { TrendingUp, Sparkles } from 'lucide-react';

interface NumbersSectionProps {
  lang: 'ko' | 'en';
}

export const NumbersSection: React.FC<NumbersSectionProps> = ({ lang }) => {
  return (
    <section className="py-12 lg:py-16 border-t border-zinc-800/80 bg-[#08080c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-column Metrics Grid (matching dark theme) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              id={`stat-card-${idx}`}
              className="rounded-2xl bg-[#0e0e12]/80 border border-zinc-850 p-6 flex flex-col justify-between hover:border-blue-500/30 transition-colors shadow-sm"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                {stat.value}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {lang === 'ko' ? stat.labelKo : stat.labelEn}
                </p>
                <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  {lang === 'ko' ? stat.subKo : stat.subEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
