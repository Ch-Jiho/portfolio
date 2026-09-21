import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { certificates, extraExperiences } from '../data/portfolioData';

interface CertificatesSectionProps {
  lang: 'ko' | 'en';
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ lang }) => {
  return (
    <section id="certificates" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '공인 자격' : 'Certificates'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '자격 및 공인 인증' : 'Awards & Certificates'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? '국가기술자격 및 소프트웨어 전문기관에서 엄격한 검증을 통과한 공인 자격증 및 교육 이수 내역입니다.'
              : 'Official technical certifications and advanced training credentials verified by national agencies and accredited institutions.'}
          </p>
        </div>

        {/* 6-Card Grid (3 columns on desktop, matching reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => {
            const year = cert.date.slice(0, 4);

            return (
              <div
                key={index}
                id={`certificate-card-${index}`}
                className="group relative rounded-2xl bg-[#0e0e12]/90 hover:bg-[#131318] border border-zinc-800/80 hover:border-blue-500/40 p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Bar: Icon and Year Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      {year}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors mb-1.5">
                    {lang === 'ko' ? cert.nameKo : cert.nameEn}
                  </h3>

                  {/* Issuer Name */}
                  <p className="text-xs text-zinc-400 mb-4">
                    {lang === 'ko' ? cert.issuerKo : cert.issuerEn}
                  </p>
                </div>

                {/* Bottom Credential Tag & Date */}
                <div className="pt-4 border-t border-zinc-850 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {cert.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400/90 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    {cert.idNumber || 'Verified'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* University Band Leadership Extra Card */}
        {extraExperiences && extraExperiences.length > 0 && (
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-950/20 via-zinc-900/40 to-zinc-900/60 border border-zinc-800/80 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono font-medium border border-blue-500/30">
                  {extraExperiences[0].tag}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {extraExperiences[0].period}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {lang === 'ko' ? extraExperiences[0].titleKo : extraExperiences[0].titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {(lang === 'ko' ? extraExperiences[0].detailsKo : extraExperiences[0].detailsEn).join(' · ')}
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              {lang === 'ko' ? '리더십 & 협업 역량' : 'Leadership & Teamwork'}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
