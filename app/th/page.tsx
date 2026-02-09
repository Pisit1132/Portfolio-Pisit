"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { SeoIntro } from "@/components/seo-intro"
import { SiteShell } from "@/components/site-shell"

export default function HomePageTh() {
  return (
    <SiteShell lang="th">
      <HeroSection />
      <SeoIntro />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </SiteShell>
  )
}
