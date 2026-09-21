import React from 'react';
import {
  Wand2,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  Database,
  Flame,
  Globe,
  Bot,
  Box,
  GitBranch,
  BarChart,
  Search,
} from 'lucide-react';
import { toolkits } from '../data/portfolioData';

interface ToolkitsSectionProps {
  lang: 'ko' | 'en';
}

export const ToolkitsSection: React.FC<ToolkitsSectionProps> = ({ lang }) => {
  // Map toolkit names to icons
  const getToolkitIcon = (name: string) => {
    if (name.includes('Python') || name.includes('TypeScript') || name.includes('React')) return Code2;
    if (name.includes('FastAPI') || name.includes('Zap')) return Zap;
    if (name.includes('AI') || name.includes('Gemini') || name.includes('Claude')) return Bot;
    if (name.includes('FAISS') || name.includes('RAG')) return Search;
    if (name.includes('Firebase')) return Flame;
    if (name.includes('MySQL') || name.includes('Database')) return Database;
    if (name.includes('Git')) return GitBranch;
    if (name.includes('Docker')) return Box;
    if (name.includes('Tailwind')) return Layers;
    return Terminal;
  };

  // Duplicate list to create seamless infinite scroll
  const marqueeList = [...toolkits, ...toolkits];

  return (
    <section id="toolkits" className="py-16 lg:py-20 border-t border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Wand2 className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '개발 툴킷' : 'Dev Toolkits'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '주요 기술 툴킷 및 프레임워크' : 'Dev Toolkits'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? 'AI 시스템 설계부터 백엔드 API, 데이터 파이프라인, 풀스택 프론트엔드 및 클라우드 배포까지 사용하는 핵심 도구들입니다.'
              : 'My go-to tools for research, development, prompt engineering, vector indexing, and production deployment.'}
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Ribbon */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {marqueeList.map((tool, idx) => {
            const Icon = getToolkitIcon(tool.name);
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0e0e12] hover:bg-[#15151c] border border-zinc-800/90 hover:border-blue-500/40 shadow-md transition-colors shrink-0 group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white tracking-tight group-hover:text-blue-300">
                    {tool.name}
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {tool.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
