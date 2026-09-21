import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopStatusBar } from './components/TopStatusBar';
import { HeroSection } from './components/HeroSection';
import { NumbersSection } from './components/NumbersSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ToolkitsSection } from './components/ToolkitsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DeployGuideModal } from './components/DeployGuideModal';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section as user scrolls
  useEffect(() => {
    const sectionIds = [
      'hero',
      'experience',
      'certificates',
      'toolkits',
      'skills',
      'projects',
      'education',
      'reviews',
      'languages',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 selection:bg-blue-600/30 selection:text-white antialiased flex flex-row relative">
      {/* Fixed Left Sidebar (Matching reference image desktop layout) */}
      <Sidebar
        lang={lang}
        activeSection={activeSection}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        {/* Top Status Bar with Live Clock, Location, Status, Lang Switcher */}
        <TopStatusBar
          lang={lang}
          setLang={setLang}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* Structured Portfolio Flow matching reference image */}
        <main className="flex-grow">
          {/* Section 1: Hero & Profile Intro */}
          <HeroSection lang={lang} />

          {/* Key Metrics */}
          <NumbersSection lang={lang} />

          {/* Section 2: Work Experience (Career Journeys) */}
          <ExperienceSection lang={lang} />

          {/* Section 3: Awards & Certificates (6 Cards) */}
          <CertificatesSection lang={lang} />

          {/* Section 4: Dev Toolkits (Infinite Moving Marquee) */}
          <ToolkitsSection lang={lang} />

          {/* Section 5: Skills & Capabilities (Bento Layout) */}
          <SkillsSection lang={lang} />

          {/* Section 6: Selected Projects with Interactive Mockups */}
          <ProjectsSection lang={lang} />

          {/* Section 7: Academic Journey (BUFS 2021-2026 & Milestones) */}
          <EducationSection lang={lang} />

          {/* Section 8: Trusted Reviews & Feedback */}
          <ReviewsSection lang={lang} />

          {/* Section 9: My Languages & Stacks (4 Circular Progress Meters) */}
          <LanguagesSection lang={lang} />

          {/* FAQ & Perspectives */}
          <FaqSection lang={lang} />

          {/* Section 10: Let's Collaborate & Direct Contact Form */}
          <ContactSection lang={lang} />
        </main>

        {/* Footer */}
        <Footer
          lang={lang}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />
      </div>

      {/* GitHub & Vercel Deployment Modal */}
      <DeployGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
        lang={lang}
      />
    </div>
  );
}
