import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  lang: 'ko' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pill Tag (matching reference image) */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '프로젝트 협업' : 'Contact'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'ko' ? '함께 만들어갈 기회를 기다립니다' : "Let's Collaborate"}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            {lang === 'ko'
              ? 'FastAPI 백엔드 개발, AI 시스템 연동, 데이터 분석 및 바이브 코딩 풀스택 프로젝트 협업 등 언제든 문의해 주세요.'
              : "One message away from starting something amazing — let's discuss your project, hiring opportunities, or technical collaboration."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Profile & Direct Contacts Card (matching reference image) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0e0e12] border border-zinc-800/80 p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Profile Header */}
            <div className="flex items-center gap-4 pb-6 border-b border-zinc-800/80">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20 overflow-hidden">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = 'https://raw.githubusercontent.com/Ch-Jiho/portfolio/5ace50d3f0df847202cd611cf80986bb2ce0e257/%EC%B5%9C%EC%A7%80%ED%98%B8(24%EB%85%84).jpg';
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-blue-400 font-bold text-xl">
                    CJ
                  </div>
                )}
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-medium mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === 'ko' ? '새 프로젝트 가능' : 'Open to Work'}</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {lang === 'ko' ? personalInfo.nameKo : personalInfo.nameEn}
                </h3>
                <p className="text-xs text-zinc-400">
                  {lang === 'ko' ? personalInfo.headlineRoleKo : personalInfo.headlineRoleEn}
                </p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      {lang === 'ko' ? '전화번호' : 'Phone'}
                    </span>
                    <p className="text-xs sm:text-sm font-mono font-semibold text-white">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="전화번호 복사"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      {lang === 'ko' ? '이메일' : 'Email'}
                    </span>
                    <p className="text-xs sm:text-sm font-mono font-semibold text-white">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="이메일 복사"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    {lang === 'ko' ? '거주지' : 'Location'}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {lang === 'ko' ? personalInfo.locationKo : personalInfo.locationEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Copy Feedback Toast */}
            {copiedText && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>
                  {copiedText === 'email'
                    ? lang === 'ko' ? '이메일 주소가 복사되었습니다.' : 'Email copied to clipboard.'
                    : lang === 'ko' ? '전화번호가 복사되었습니다.' : 'Phone number copied.'}
                </span>
              </div>
            )}

            {/* Social Links */}
            <div className="pt-4 border-t border-zinc-800 flex items-center gap-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Modern Dark Message Form (matching reference image) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0e0e12] border border-zinc-800/80 p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ko' ? '메시지 남기기' : 'Send a Direct Note'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              {lang === 'ko'
                ? '프로젝트 문의나 미팅 제안을 남겨주시면 24시간 이내에 회신드리겠습니다.'
                : 'Leave a note regarding engineering inquiries, contracts, or opportunities.'}
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-blue-950/30 border border-blue-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {lang === 'ko' ? '메시지가 성공적으로 전달되었습니다!' : 'Message Received!'}
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  {lang === 'ko'
                    ? '보내주신 소중한 내용을 확인 후 빠른 시일 내에 연락드리겠습니다.'
                    : 'Thank you for reaching out. I will respond to your message promptly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300 block">
                      {lang === 'ko' ? '이름 / 회사명' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ko' ? '홍길동' : 'John Doe'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300 block">
                      {lang === 'ko' ? '이메일 주소' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone No */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300 block">
                    {lang === 'ko' ? '연락처 (선택)' : 'Phone Number (Optional)'}
                  </label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300 block">
                    {lang === 'ko' ? '메시지 내용' : 'Message'} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      lang === 'ko'
                        ? '진행하고자 하는 프로젝트나 협업에 대해 편하게 말씀해 주세요.'
                        : 'Tell me about your project, goals, timeline, or inquiries...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button (Electric Blue full-width) */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-[0.99]"
                >
                  <span>{lang === 'ko' ? '메시지 전송하기' : 'Send Message'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
