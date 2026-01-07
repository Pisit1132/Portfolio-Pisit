"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"

const skills = {
  "Front End": ["React", "Next.js", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  "Back End": ["Node.js", "MySQL", "MongoDB", "REST API", "Go (basic)", "Python (basic)"],
  Cloud: ["AWS (deployment, hosting, CI/CD)"],
  Tools: ["Git", "Bootstrap", "OutSystems logic translation"],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <AnimatedSection key={category} delay={i * 0.1}>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
