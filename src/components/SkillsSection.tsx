import React, { useState } from 'react';
import {
  Zap,
  BrainCircuit,
  Layout,
  BarChart3,
  Database,
  Sparkles,
  Server,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: 'ko' | 'en';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Layout':
        return Layout;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'BarChart3':
        return BarChart3;
      case 'Database':
        return Database;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '핵심 역량' : 'Explore Skills'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '기술 역량 및 전문 분야' : 'Skills & Capabilities'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '문제를 구조적으로 분석하고 신속하게 실현 가능한 소프트웨어 아키텍처로 구현하는 핵심 역량입니다.'
              : 'Core technical capabilities that shape how I approach complex software engineering problems and product decisions.'}
          </p>
        </div>

        {/* Bento Grid Layout (matching reference image: Left Featured Card + Right 3 Stacked Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Featured Highlight Card (Large 3D style) */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#12121a] to-[#0a0a0e] border border-blue-500/30 p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-500/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              {/* 3D Glowing Icon */}
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-600/20">
                <BrainCircuit className="w-7 h-7 text-blue-400" />
              </div>

              <div>
                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold">
                  {lang === 'ko' ? '주력 핵심 분야' : 'Featured Core Capability'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {lang === 'ko'
                    ? 'FastAPI 백엔드 & 다국어 AI 에이전트'
                    : 'FastAPI Backend & Multilingual AI Agents'}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {lang === 'ko'
                  ? 'FastAPI를 통한 고성능 비동기 API 서버를 구축하고, RAG(검색 증강 생성), FAISS 벡터 검색, OpenAI API 및 Claude Code 기반의 바이브 코딩을 유기적으로 결합하여 실제 서비스 가능한 AI 웹 애플리케이션을 신속하게 완성합니다.'
                  : 'Architecting high-throughput async REST servers with FastAPI, coupling dense FAISS vector embeddings, RAG pipelines, and Claude Code vibe coding to ship resilient AI-driven web systems.'}
              </p>

              {/* Tag Pills with glossy outlines */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'FastAPI REST',
                  'Pydantic Validation',
                  'RAG Pipeline',
                  'FAISS Vector DB',
                  'Claude Code Vibe Coding',
                  'OpenAI Integration',
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-medium text-blue-300"
                  >
                    ● {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Proof Note */}
            <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                {lang === 'ko' ? '㈜ 픽스 학원 보고서 시스템 적용' : 'Deployed at Fix Inc. AI System'}
              </span>
              <span className="font-mono text-zinc-400">Production Ready</span>
            </div>
          </div>

          {/* Right Column: 3 Stacked Cards (matching reference image) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {/* Card 1: Web & Full-Stack */}
            <div className="rounded-2xl bg-[#0e0e12] hover:bg-[#13131a] border border-zinc-800/80 hover:border-zinc-700 p-6 transition-all duration-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Layout className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-base font-semibold text-white">
                    {lang === 'ko' ? '웹 프론트엔드 & 풀스택 인터페이스' : 'Web Frontend & Full-Stack Interface'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {lang === 'ko'
                      ? 'HTML5, CSS3, JavaScript(ES6+), React 기반 반응형 UI 시스템 구현. 클라이언트 상태 관리와 시맨틱 마크업을 준수합니다.'
                      : 'Semantic HTML5, CSS3, ES6+ JavaScript, and modern React responsive layouts with accessible component structures.'}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['HTML5/CSS3', 'JavaScript ES6+', 'React', 'Tailwind CSS'].map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Data Science & NLP */}
            <div className="rounded-2xl bg-[#0e0e12] hover:bg-[#13131a] border border-zinc-800/80 hover:border-zinc-700 p-6 transition-all duration-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-base font-semibold text-white">
                    {lang === 'ko' ? '대용량 데이터 정제 & 한국어 NLP' : 'Data Science & Korean NLP'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {lang === 'ko'
                      ? 'pandas를 통한 결측치 및 이상치 정제, KoNLPy 형태소 분석기를 활용한 감성 키워드 도출 및 matplotlib/WordCloud 시각화.'
                      : 'Dataframe manipulation with pandas, Korean morpheme parsing with KoNLPy, and insightful WordCloud dashboards.'}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['pandas', 'KoNLPy 형태소', 'matplotlib', 'seaborn', 'WordCloud'].map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Database & Cloud */}
            <div className="rounded-2xl bg-[#0e0e12] hover:bg-[#13131a] border border-zinc-800/80 hover:border-zinc-700 p-6 transition-all duration-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-base font-semibold text-white">
                    {lang === 'ko' ? '데이터베이스 & 클라우드 보안' : 'Database & Cloud Security'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {lang === 'ko'
                      ? 'Google Firebase & Firestore 실시간 NoSQL 설계, MySQL 관계형 DB 스키마, Firebase App Check(reCAPTCHA) 보안 강화.'
                      : 'Real-time Firestore collections, relational MySQL modeling, and enterprise security with Firebase App Check.'}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Firestore NoSQL', 'MySQL', 'Firebase App Check', 'Streamlit', 'Vercel'].map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
