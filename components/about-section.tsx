"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"
import { Code2, Server, Cloud } from "lucide-react"
import { useLanguage } from "./language-provider"

const features = [
  {
    icon: Code2,
    title: "Frontend Focus",
    description: "React, Next.js, Vue, TypeScript",
  },
  {
    icon: Server,
    title: "Backend Focus",
    description: "Node.js, REST, MySQL, MongoDB",
  },
  {
    icon: Cloud,
    title: "Deployment",
    description: "AWS hosting + CI/CD",
  },
]

export function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">{t("about_title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_subtitle")}</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur">
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
