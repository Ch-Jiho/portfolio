import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, Sparkles, Code2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  lang: 'ko' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '주요 프로젝트' : 'Projects'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '선별된 주요 프로젝트' : 'Selected Projects'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '문제 정의부터 AI 모델 학습, RAG 벡터 검색, 그리고 프로덕션 웹 인터페이스까지 완결성 있게 구축한 작업물입니다.'
              : 'End-to-end applications built from raw data ingestion and model training to robust full-stack deployment.'}
          </p>
        </div>

        {/* Project Cards List (matching reference image dark cards) */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#0e0e12]/90 hover:bg-[#131319] border border-zinc-800/80 hover:border-blue-500/50 p-6 sm:p-8 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Arrow Icon in Top Right Corner (matching reference image) */}
              <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-900 group-hover:bg-blue-600 text-zinc-400 group-hover:text-white border border-zinc-800 group-hover:border-blue-500 flex items-center justify-center transition-all duration-200">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Project Info Column */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4 pr-0 lg:pr-6">
                  
                  {/* Number Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                      PROJECT {project.number}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {lang === 'ko' ? project.titleKo : project.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-normal mt-2 leading-relaxed">
                      {lang === 'ko' ? project.taglineKo : project.taglineEn}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {(lang === 'ko' ? project.descriptionKo.slice(0, 2) : project.descriptionEn.slice(0, 2)).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 line-clamp-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Tech Stack Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Direct Project Links (Live Demo & GitHub) */}
                  {(project.liveUrl || project.githubUrl || project.url) && (
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      {project.liveUrl && (
                        <a
                          id={`project-live-btn-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-300 hover:text-white text-xs font-mono font-medium transition-all group/btn shadow-sm"
                          title={lang === 'ko' ? '라이브 서비스 바로가기' : 'Open Live Service'}
                        >
                          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                          <span>{lang === 'ko' ? '라이브 데모' : 'Live Demo'}</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          id={`project-github-btn-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs font-mono font-medium transition-all group/btn"
                          title={lang === 'ko' ? 'GitHub 소스코드 바로가기' : 'View GitHub Repo'}
                        >
                          <Github className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.url && !project.liveUrl && (
                        <a
                          id={`project-url-btn-${project.id}`}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs font-mono font-medium transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>URL</span>
                        </a>
                      )}
                    </div>
                  )}

                </div>

                {/* Right: Mockup Preview Window */}
                <div className="lg:col-span-6 h-60 sm:h-64 w-full">
                  <ProjectMockup project={project} lang={lang} />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
