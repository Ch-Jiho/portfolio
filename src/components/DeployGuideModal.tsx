import React, { useState } from 'react';
import { X, Copy, CheckCircle2, Github, Terminal, ArrowUpRight, Check, Rocket } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose, lang }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const gitCommands = [
    {
      id: 'git-init',
      title: '1. 로컬 저장소 초기화 및 커밋',
      cmd: 'git init\ngit add .\ngit commit -m "feat: Initial portfolio commit for Jiho Choi"',
    },
    {
      id: 'git-remote',
      title: '2. GitHub 레포지토리 연결 및 푸시',
      cmd: 'git branch -M main\ngit remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git\ngit push -u origin main',
    },
    {
      id: 'vercel-cli',
      title: '3. Vercel 배포 (Vercel CLI 사용 시)',
      cmd: 'npm i -g vercel\nvercel',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0e0e12] rounded-2xl shadow-2xl border border-zinc-800 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'ko' ? 'GitHub 저장 및 Vercel 배포 가이드' : 'GitHub & Vercel Deployment Guide'}
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              {lang === 'ko' ? '정적 빌드(Vite SPA) 최적화 — 설정 없이 1분 만에 배포' : 'Zero-config Vite SPA ready for Vercel Edge'}
            </p>
          </div>
        </div>

        {/* Step-by-step instructions */}
        <div className="space-y-4 mb-6">
          {gitCommands.map((step) => (
            <div key={step.id} className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-200">
                  {step.title}
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(step.cmd, step.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {copiedCmd === step.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>명령어 복사</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 rounded-lg bg-black border border-zinc-850 font-mono text-xs text-zinc-300 overflow-x-auto whitespace-pre">
                {step.cmd}
              </pre>
            </div>
          ))}
        </div>

        {/* Vercel Dashboard Method Note */}
        <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs text-zinc-300 space-y-1.5">
          <p className="font-semibold text-blue-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Vercel 웹 대시보드로 간편 배포 (추천)
          </p>
          <p className="text-zinc-400 leading-relaxed">
            1. GitHub에 코드를 푸시한 후, <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-blue-400 underline">vercel.com</a>에 접속합니다.<br />
            2. 'Add New Project'를 누르고 해당 GitHub 저장소를 Import 합니다.<br />
            3. Framework Preset이 'Vite'로 자동 감지되며, 추가 설정 없이 'Deploy' 버튼을 누르면 수 초 내에 라이브 배포됩니다.
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {lang === 'ko' ? '확인 및 닫기' : 'Got it, Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
