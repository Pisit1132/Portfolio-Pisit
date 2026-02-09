"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Phone, MapPin, Copy, CheckCircle2, Download, ArrowRight } from "lucide-react"
import { useState } from "react"
import { profile } from "@/lib/profile"
import { useLanguage } from "./language-provider"

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const { t } = useLanguage()

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">{t("contact_title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact_subtitle")}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid max-w-5xl mx-auto gap-6 lg:grid-cols-2">
            <Card className="p-8 pressable">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-lg font-medium hover:text-primary">
                    {profile.email}
                  </a>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(profile.email, "email")}>
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="text-lg font-medium hover:text-primary">
                    {profile.phone}
                  </a>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(profile.phone, "phone")}>
                    {copiedPhone ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-medium">{profile.location}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button asChild size="lg" className="w-full">
                    <a href={`mailto:${profile.email}`}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Start a Conversation
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/70 backdrop-blur pressable">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Availability</p>
                <p className="text-2xl font-bold leading-tight">{profile.availability}</p>
                <div className="space-y-2 text-muted-foreground">
                  {profile.highlights.map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <p>
                        <span className="font-semibold text-foreground">{item.label}:</span> {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  <Button asChild className="w-full">
                    <a href="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={profile.resume} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
