import React from 'react';
import { Project } from '../types';
import { 
  Train, 
  MessageSquareText, 
  Users, 
  Coffee, 
  Compass, 
  Check, 
  ShieldCheck, 
  Search,
  Sparkles,
  BarChart2
} from 'lucide-react';

interface ProjectMockupProps {
  project: Project;
  lang: 'ko' | 'en';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project, lang }) => {
  switch (project.mockupType) {
    case 'subway':
      return (
        <div className="w-full h-full bg-stone-900 rounded-xl p-4 sm:p-5 text-white flex flex-col justify-between select-none shadow-inner border border-stone-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-mono text-stone-400 ml-1">metro-busan.ai</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
              OpenAI API · ML
            </span>
          </div>

          {/* Center Visual Mockup */}
          <div className="my-auto py-3 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-300 flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-emerald-400" />
                2호선 서면역 → 센텀시티역
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">혼잡도 보통 (42%)</span>
            </div>

            {/* Metro Cars Representation */}
            <div className="grid grid-cols-6 gap-1.5">
              {[
                { car: '1호차', prob: '85%', color: 'bg-emerald-500/30 text-emerald-300 border-emerald-500/50' },
                { car: '2호차', prob: '60%', color: 'bg-amber-500/30 text-amber-300 border-amber-500/50' },
                { car: '3호차', prob: '30%', color: 'bg-rose-500/30 text-rose-300 border-rose-500/50' },
                { car: '4호차', prob: '45%', color: 'bg-amber-500/30 text-amber-300 border-amber-500/50' },
                { car: '5호차', prob: '78%', color: 'bg-emerald-500/30 text-emerald-300 border-emerald-500/50' },
                { car: '6호차', prob: '92%', color: 'bg-emerald-500/30 text-emerald-300 border-emerald-500/50' },
              ].map((c, i) => (
                <div key={i} className={`p-1.5 rounded text-center border text-[10px] font-mono ${c.color}`}>
                  <div className="font-semibold">{c.car}</div>
                  <div className="text-[9px] opacity-80">{c.prob}</div>
                </div>
              ))}
            </div>

            {/* Time Slot Probability */}
            <div className="bg-stone-800/80 rounded-lg p-2.5 flex items-center justify-between text-xs">
              <span className="text-stone-400">08:30 탑승 시 좌석 확보 확률</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">78.4% (여유)</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[10px] text-stone-500 font-mono">
            <span>🌐 KO / EN / JA / ZH</span>
            <span>Real-time Predict Engine</span>
          </div>
        </div>
      );

    case 'traffic':
      return (
        <div className="w-full h-full bg-stone-900 rounded-xl p-4 sm:p-5 text-white flex flex-col justify-between select-none shadow-inner border border-stone-800">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-1.5 text-xs text-stone-300 font-mono">
              <MessageSquareText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Korea Road Law RAG Bot</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-200 border border-indigo-700">
              FAISS + PyMuPDF
            </span>
          </div>

          {/* Chat Bubble simulator */}
          <div className="my-auto py-2 space-y-2 text-xs">
            <div className="bg-stone-800 rounded-lg rounded-tr-xs p-2.5 ml-6 border border-stone-700 text-stone-200">
              Q: 외국인 운전자 우회전 시 보행자 신호 대기 규칙은?
            </div>
            <div className="bg-indigo-950/80 rounded-lg rounded-tl-xs p-2.5 mr-4 border border-indigo-800/80 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-indigo-300">
                <span className="font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" /> 도로교통법 제27조 참조
                </span>
                <span className="font-mono text-emerald-400">FAISS 유사도 0.94</span>
              </div>
              <p className="text-[11px] text-indigo-100 leading-snug">
                보행자가 횡단보도를 건너고 있거나 건너려고 하는 때에는 일시정지 의무가 있습니다. (영어/중국어 자동 번역 제공)
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[10px] text-stone-500 font-mono">
            <span>LangChain · Streamlit</span>
            <span>Zero Hallucination Verified</span>
          </div>
        </div>
      );

    case 'club':
      return (
        <div className="w-full h-full bg-stone-900 rounded-xl p-4 sm:p-5 text-white flex flex-col justify-between select-none shadow-inner border border-stone-800">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-semibold text-stone-200">미네르바 (Minerva Club)</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
              <ShieldCheck className="w-3 h-3" />
              <span>App Check Active</span>
            </div>
          </div>

          {/* Club Dashboard Elements */}
          <div className="my-auto py-2 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-stone-800/90 rounded-lg p-2.5 border border-stone-700">
              <span className="block text-[10px] text-stone-400 font-mono">연습실 예약 현황</span>
              <span className="text-xs font-bold text-indigo-300 mt-1 block">A스튜디오 18:00 예약 완료</span>
              <span className="text-[10px] text-stone-500 font-mono">실시간 동기화 (Firestore)</span>
            </div>
            <div className="bg-stone-800/90 rounded-lg p-2.5 border border-stone-700">
              <span className="block text-[10px] text-stone-400 font-mono">진행 중 투표</span>
              <span className="text-xs font-bold text-amber-300 mt-1 block">정기공연 셋리스트 확정</span>
              <span className="text-[10px] text-stone-500 font-mono">참여율 94%</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[10px] text-stone-500 font-mono">
            <span>Built with Claude Code (Vibe Coding)</span>
            <span>Firebase Security Hardened</span>
          </div>
        </div>
      );

    case 'cafe':
      return (
        <div className="w-full h-full bg-stone-900 rounded-xl p-4 sm:p-5 text-white flex flex-col justify-between select-none shadow-inner border border-stone-800">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-1.5 text-xs text-stone-300 font-mono">
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span>Busan Cafe NLP Keyword Cloud</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-400">
              KoNLPy + pandas
            </span>
          </div>

          {/* Word Cloud tags mockup */}
          <div className="my-auto py-2 flex flex-wrap items-center justify-center gap-2 p-2 bg-stone-950/60 rounded-lg border border-stone-800">
            <span className="text-base font-bold text-amber-300">오션뷰 (42%)</span>
            <span className="text-xs font-medium text-indigo-300">핸드드립</span>
            <span className="text-sm font-semibold text-emerald-300">디저트맛집</span>
            <span className="text-[11px] text-stone-400">주차편리</span>
            <span className="text-sm font-bold text-indigo-400">광안대교</span>
            <span className="text-xs text-stone-300">분위기좋은</span>
            <span className="text-xs text-amber-200">친절한직원</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[10px] text-stone-500 font-mono">
            <span>해운대구 · 광안리 · 기장군 분석</span>
            <span>WordCloud & Matplotlib</span>
          </div>
        </div>
      );

    case 'drawing':
      return (
        <div className="w-full h-full bg-stone-900 rounded-xl p-4 sm:p-5 text-white flex flex-col justify-between select-none shadow-inner border border-stone-800">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-1.5 text-xs text-stone-300 font-mono">
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Prompt to CAD Schematic</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
              Streamlit + OpenAI
            </span>
          </div>

          {/* CAD Schematic Simulation */}
          <div className="my-auto py-2 space-y-2">
            <div className="bg-stone-800/80 rounded-lg p-2 font-mono text-[11px] text-stone-300">
              <span className="text-indigo-400">&gt; Prompt:</span> "외경 40mm, 내경 25mm 원통형 알루미늄 플랜지 부품"
            </div>
            <div className="bg-stone-950 rounded-lg p-2.5 border border-indigo-950 flex items-center justify-around font-mono text-[10px] text-stone-400">
              <div className="text-center">
                <span className="block text-indigo-400 font-bold">OD: 40.0mm</span>
                <span>외경 치수</span>
              </div>
              <div className="h-6 w-px bg-stone-800"></div>
              <div className="text-center">
                <span className="block text-emerald-400 font-bold">ID: 25.0mm</span>
                <span>내경 치수</span>
              </div>
              <div className="h-6 w-px bg-stone-800"></div>
              <div className="text-center">
                <span className="block text-amber-400 font-bold">H: 15.0mm</span>
                <span>두께 규격</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[10px] text-stone-500 font-mono">
            <span>치수표 자동 추출 (Dimension OCR)</span>
            <span>AI 에이전트 확장 아키텍처</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
