import React from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github,
  CheckCircle2, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'ko' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e0e12] rounded-2xl shadow-2xl border border-zinc-800 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Project Number and Category */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-blue-400 font-bold text-sm px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30">
            PROJECT {project.number}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          {lang === 'ko' ? project.titleKo : project.titleEn}
        </h3>

        {/* Tagline */}
        <p className="text-sm font-medium text-zinc-400 mb-4">
          {lang === 'ko' ? project.taglineKo : project.taglineEn}
        </p>

        {/* Action Links (Live Demo & GitHub) */}
        {(project.liveUrl || project.githubUrl || project.url) && (
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            {project.liveUrl && (
              <a
                id={`modal-quick-live-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-all group shadow-sm shadow-blue-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>{lang === 'ko' ? '라이브 서비스 바로가기' : 'Launch Live Demo'}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                id={`modal-quick-github-${project.id}`}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-zinc-500 text-zinc-200 hover:text-white text-xs font-mono font-medium transition-all group"
              >
                <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>{lang === 'ko' ? 'GitHub 소스코드' : 'GitHub Repository'}</span>
              </a>
            )}
            {project.url && !project.liveUrl && (
              <a
                id={`modal-quick-url-${project.id}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 text-zinc-200 hover:text-white text-xs font-mono font-medium transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '프로젝트 웹사이트' : 'Project Website'}</span>
              </a>
            )}
          </div>
        )}

        {/* Mockup Preview Inside Modal */}
        <div className="h-56 sm:h-64 w-full mb-6">
          <ProjectMockup project={project} lang={lang} />
        </div>

        {/* Detailed Descriptions */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            {lang === 'ko' ? '프로젝트 개요 및 배경' : 'Overview & Context'}
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {(lang === 'ko' ? project.descriptionKo : project.descriptionEn).map((desc, idx) => (
              <p key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <span>{desc}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            {lang === 'ko' ? '주요 구현 기능' : 'Key Engineering Features'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(lang === 'ko' ? project.featuresKo : project.featuresEn).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-850 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-zinc-800">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-zinc-400" />
            {lang === 'ko' ? '사용 기술 스택' : 'Technologies Used'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl && (
              <a
                id={`modal-bottom-live-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors shadow-sm shadow-blue-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '서비스 바로가기' : 'Visit Live App'}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                id={`modal-bottom-github-${project.id}`}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-750 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium transition-colors ml-auto"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
