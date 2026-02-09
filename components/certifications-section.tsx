"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"
import { Award } from "lucide-react"
import { Button } from "./ui/button"
import { useLanguage } from "./language-provider"

const certifications = [
  {
    title: "Internship Program Certificate",
    issuer: "Western Digital",
    link: "/Internship Certificate - Pisit Sirisingskul.pdf",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    link: "/software_engineer_intern certificate.pdf",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    link: "/frontend_developer_react certificate.pdf",
  },
  {
    title: "IELTS Academic",
    issuer: "British Council",
    link: "/IELTS®.pdf",
  },
]

export function CertificationsSection() {
  const { t } = useLanguage()
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">{t("certifications_title")}</h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 group pressable">
                <Award className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
