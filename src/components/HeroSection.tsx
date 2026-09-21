import React from 'react';
import {
  ArrowRight,
  FileDown,
  BrainCircuit,
  Server,
  BarChart3,
  Users,
  Sparkles,
  Zap,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  lang: 'ko' | 'en';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const handlePrint = () => {
    window.print();
  };

  const featureCards = [
    {
      id: 'ai-llm',
      icon: BrainCircuit,
      glowColor: 'from-blue-600/30 to-indigo-600/20',
      tagKo: 'AI & LLM Systems',
      tagEn: 'AI & LLM Systems',
      titleKo: '다국어 AI 에이전트 & RAG',
      titleEn: 'Multilingual Agent & RAG',
      descKo: 'OpenAI, LangChain, FAISS 벡터 검색 및 최신 바이브 코딩으로 지능형 시스템 구축',
      descEn: 'Intelligent systems built with OpenAI, LangChain, FAISS vector search & Vibe Coding',
      badges: ['RAG Pipeline', 'FAISS', 'Claude Code'],
    },
    {
      id: 'backend-api',
      icon: Server,
      glowColor: 'from-cyan-600/30 to-blue-600/20',
      tagKo: 'Backend & API',
      tagEn: 'Backend & API',
      titleKo: '고성능 FastAPI 아키텍처',
      titleEn: 'High-Performance FastAPI',
      descKo: '비동기 REST API, Pydantic 검증, 실무 학원 보고서 및 동아리 플랫폼 운영',
      descEn: 'Async REST APIs, strict validation, and production-proven web architectures',
      badges: ['FastAPI', 'Python', 'MySQL / Firestore'],
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      glowColor: 'from-indigo-600/30 to-purple-600/20',
      tagKo: 'Data Analytics',
      tagEn: 'Data Analytics',
      titleKo: '대용량 데이터 정제 & NLP',
      titleEn: 'Big Data Pipeline & NLP',
      descKo: 'KoNLPy 한국어 형태소 분석, pandas 결측치 정제, matplotlib 시각화 인사이트',
      descEn: 'Korean morphological parsing, robust pandas pipelines & visual analytics',
      badges: ['KoNLPy', 'pandas', 'WordCloud'],
    },
    {
      id: 'leadership-ops',
      icon: Users,
      glowColor: 'from-sky-600/30 to-blue-600/20',
      tagKo: 'Leadership & Ops',
      tagEn: 'Leadership & Ops',
      titleKo: '매장 총괄 & 밴드 집행부',
      titleEn: 'Store Management & Lead',
      descKo: '빈스에스프레소 매니저 실무와 대학 밴드 집행부로 검증된 유연한 소통과 실행력',
      descEn: 'Proven store management, cross-functional empathy, and agile team delivery',
      badges: ['Manager Lead', 'Communication', 'Agile Execution'],
    },
  ];

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Avatar & Open to Work Badge */}
        <div className="flex flex-col items-center text-center space-y-4 mb-6">
          <div className="relative group">
            {/* Glowing ring around avatar */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-70 blur-xs group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-900 border-2 border-zinc-800 p-0.5 flex items-center justify-center shadow-xl overflow-hidden">
              {personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to direct github raw url if local file fails
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://raw.githubusercontent.com/Ch-Jiho/portfolio/5ace50d3f0df847202cd611cf80986bb2ce0e257/%EC%B5%9C%EC%A7%80%ED%98%B8(24%EB%85%84).jpg';
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white tracking-wider">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                    CJ
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Open to Work Badge (matching reference image) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-md text-xs font-medium text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {lang === 'ko' ? '새로운 프로젝트 및 채용 제안 환영' : 'Open to Work'}
            </span>
          </div>
        </div>

        {/* Main Display Headline (matching reference image) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] break-keep">
            {lang === 'ko' ? (
              <>
                <span className="whitespace-nowrap inline-block">
                  안녕하세요, 저는 <span className="text-blue-400">최지호</span>입니다.
                </span>
                <br />
                <span className="whitespace-nowrap inline-block">
                  디지털프로덕트와 AI시스템을
                </span>
                <br />
                구축합니다.
              </>
            ) : (
              <>
                <span className="whitespace-nowrap inline-block">
                  Hello, I Am <span className="text-blue-400">Jiho</span>
                </span>
                <br />
                I Build Digital Products &
                <br />
                AI Systems
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {lang === 'ko'
              ? 'FastAPI 기반의 고성능 API 구현과 다국어 AI 에이전트 개발, 대용량 데이터 정제 및 시각화, 그리고 최신 바이브 코딩(Claude Code, Gemini)을 접목하여 빠르고 견고한 웹 솔루션을 만듭니다.'
              : 'Architecting high-performance FastAPI backends, multilingual AI agents, big data NLP pipelines, and production web applications powered by modern Vibe Coding.'}
          </p>

          {/* Action CTA Buttons (matching reference image bright blue + dark glass) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#skills"
              id="hero-explore-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-95"
            >
              <span>{lang === 'ko' ? '기술 역량 살펴보기' : 'Explore My Skills'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              id="hero-download-cv-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-zinc-400" />
              <span>{lang === 'ko' ? '이력서 다운로드 / PDF' : 'Download CV'}</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Cards Grid (matching reference image 4 columns with 3D glassmorphic styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`hero-card-${card.id}`}
                className="group relative rounded-2xl bg-[#0e0e12]/90 hover:bg-[#14141a] border border-zinc-800/80 hover:border-blue-500/40 p-5 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5"
              >
                <div>
                  {/* Glowing 3D-effect icon badge */}
                  <div className="relative mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.glowColor} border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-medium text-blue-400/90 tracking-wider uppercase">
                    {lang === 'ko' ? card.tagKo : card.tagEn}
                  </span>

                  <h3 className="text-sm font-semibold text-white mt-1 mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                    {lang === 'ko' ? card.titleKo : card.titleEn}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {lang === 'ko' ? card.descKo : card.descEn}
                  </p>
                </div>

                {/* Badge tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-850">
                  {card.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[10px] text-zinc-400 font-mono"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
