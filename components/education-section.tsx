"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"
import { GraduationCap, Plane } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Education</h2>
          </div>
        </AnimatedSection>

        <div className="w-full max-w-4xl space-y-6">
          <AnimatedSection>
            <Card className="p-6 hover:shadow-lg transition-all bg-card/70 backdrop-blur border-border/60">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <GraduationCap className="h-8 w-8 text-primary shrink-0" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Engineering (Computer Engineering)</h3>
                  <p className="text-lg text-primary">Mahidol University International College</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="p-6 hover:shadow-lg transition-all bg-card/70 backdrop-blur border-border/60 lg:border-l-4 lg:border-l-blue-500">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Plane className="h-8 w-8 text-blue-500 shrink-0" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold">Study Abroad</h3>
                  <p className="text-lg text-blue-500">University of Groningen, Netherlands</p>
                  <div className="space-y-1 text-muted-foreground">
                    <p>• Focus: Web Application Architecture</p>
                    <p>• Built: REST API + MongoDB music-search application</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
