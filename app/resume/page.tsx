"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import { profile } from "@/lib/profile"

export default function ResumePage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold">Resume</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View or download the latest copy of my resume. The PDF below stays in sync with this portfolio.
            </p>
            <Button asChild size="lg">
              <a href={profile.resume} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="overflow-hidden border border-border/60 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 bg-muted/40 px-6 py-4">
              <div>
                <p className="text-sm text-muted-foreground">Latest copy</p>
                <p className="text-lg font-semibold text-foreground">{profile.name} — {profile.role}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{profile.location}</span>
                <span className="hidden sm:inline-block">•</span>
                <a href={`mailto:${profile.email}`} className="font-medium text-primary hover:underline">
                  {profile.email}
                </a>
                <span className="hidden sm:inline-block">•</span>
                <span>{profile.phone}</span>
                <Button asChild size="sm">
                  <a href={profile.resume} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <object
                data={`${profile.resume}#view=FitH`}
                type="application/pdf"
                className="h-[80vh] w-full"
                aria-label="Resume PDF preview"
              >
                <div className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
                  <p className="text-lg font-semibold text-foreground">Preview unavailable</p>
                  <p className="text-muted-foreground">
                    Your browser blocked the embedded PDF. Use the button below to download it directly.
                  </p>
                  <Button asChild size="lg">
                    <a href={profile.resume} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume (PDF)
                    </a>
                  </Button>
                </div>
              </object>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
