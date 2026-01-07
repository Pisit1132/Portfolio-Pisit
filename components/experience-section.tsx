"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "ThaiRung Partner",
    period: "Dec 2024 – Present",
    highlights: [
      "Rebuilt legacy OutSystems functions into Vue.js + TypeScript apps",
      "Developed vehicle marketplace platforms with React & Next.js",
      "Built Node.js + MySQL backend services to improve automation/reliability",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Fastwork",
    period: "Dec 2024 – Present",
    highlights: [
      "Delivered projects with React, Vue, Angular, Node.js (plus Go/Python basics)",
      "Managed AWS deployment, hosting, and CI/CD",
      "Worked directly with clients to gather requirements and deliver quickly",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Western Digital",
    period: "Aug 2024 – Nov 2024",
    highlights: [
      "Built internal workflow tools for engineering teams",
      "Built responsive UI with React/HTML/CSS",
      "Built backend services with Node.js + MySQL",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in full-stack development
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-border/70 md:block" aria-hidden />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative mt-2 hidden h-4 w-4 rounded-full border-4 border-background bg-primary shadow md:block">
                    <div className="absolute inset-[-6px] rounded-full border border-primary/40" />
                  </div>
                  <Card className="flex-1 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
