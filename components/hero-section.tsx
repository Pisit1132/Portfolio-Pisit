"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Gauge, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { profile } from "@/lib/profile"
import { getFeaturedProjects } from "@/lib/projects-data"
import { useLanguage } from "./language-provider"

const socialLinks =
  [
    profile.socials.github && { href: profile.socials.github, label: "GitHub", icon: Github },
    profile.socials.linkedin && { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Github }[]

const featured = getFeaturedProjects().slice(0, 2)
const logos = [
  { src: "/westerndigital.png", alt: "Western Digital", width: 210 },
  { src: "/MuicLogo.jpg", alt: "Mahidol University International College", width: 190 },
  { src: "/groningen.png", alt: "University of Groningen", width: 300 },
]

export function HeroSection() {
  const { t, lang } = useLanguage()

  const highlightsEn = profile.highlights
  const highlightsTh = [
    { label: "ส่วนหน้า", value: "React · Next.js · Vue · TypeScript" },
    { label: "ส่วนหลัง", value: "Node.js · REST APIs · MySQL · MongoDB" },
    { label: "คลาวด์ & โอเปอเรชัน", value: "ดีพลอยบน AWS · CI/CD" },
  ]

  const impactStatsEn = [
    { label: "Faster delivery", value: "Improved release cadence", detail: "On Jing Jai marketplace rollout (2025)" },
    { label: "Reduced manual effort", value: "~20%", detail: "Listing automation & asset pipelines" },
    { label: "Uptime", value: "99.9%", detail: "Stable launches across app stack" },
  ]

  const impactStatsTh = [
    { label: "ส่งมอบเร็วขึ้น", value: "รอบปล่อยงานดีขึ้น", detail: "จากการเปิดตัว Jing Jai Marketplace (2025)" },
    { label: "ลดงานมือ", value: "ประมาณ 20%", detail: "ออโตภาพ-ข้อมูลรายการสินค้า" },
    { label: "ความเสถียร", value: "99.9%", detail: "ดูแลการปล่อยฟีเจอร์ให้ระบบเสถียร" },
  ]

  const heroCards: { label: string; value: string; detail?: string }[] =
    lang === "en" ? [...highlightsEn, ...impactStatsEn] : [...highlightsTh, ...impactStatsTh]
  return (
    <section className="relative isolate overflow-hidden py-10 sm:py-12 md:py-14 min-h-[calc(100vh-64px)]">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute -left-10 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedSection>
            <div className="space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span>{profile.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-foreground">{t("hero_location")}</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl leading-tight font-bold text-balance sm:text-6xl lg:text-6xl"
              >
                {t("hero_title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
              >
                {t("hero_sub")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground lg:justify-start"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-medium text-emerald-600">
                  {t("hero_availability")}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    {t("hero_cta_projects")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.resume} download>
                    <Download className="mr-2 h-4 w-4" />
                    {t("hero_cta_resume")}
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="https://jingjai.thairunggroup.co.th/" target="_blank" rel="noopener noreferrer">
                    {t("hero_cta_live")}
                    <Gauge className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {t("hero_cta_email")}
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium lg:justify-start"
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Call"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call</span>
                </a>
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
              >
                {logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-16 items-center justify-center rounded-lg border border-border/60 bg-card/70 px-5 shadow-sm backdrop-blur-sm"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 200}
                      height={56}
                      sizes="(min-width: 1024px) 200px, 40vw"
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="grid gap-3 pt-2 sm:grid-cols-2"
              >
                {featured.map((project) => (
                  <div
                    key={project.slug}
                    className="rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm pressable"
                  >
                    <p className="text-xs font-semibold uppercase text-primary">{t("featured_project_label")}</p>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
                      {project.links.demo && project.links.demo !== "#" && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-primary/50 px-3 py-1 text-primary hover:bg-primary/10"
                        >
                          Live
                        </a>
                      )}
                      {project.links.github && project.links.github !== "#" && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-border px-3 py-1 text-foreground hover:bg-muted/50"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {heroCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/60 bg-card/70 px-4 py-3 text-left shadow-sm backdrop-blur-sm"
                  >
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-base font-semibold text-foreground">{item.value}</p>
                    {"detail" in item && item.detail ? (
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    ) : null}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-2 text-center text-sm text-muted-foreground lg:text-left"
              >
                Scroll to see projects ↓
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-md">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-r from-blue-600/30 via-teal-500/20 to-purple-500/30 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-2xl backdrop-blur">
                <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-background/10" />
                <Image
                  src="/images/pisit.jpg"
                  alt={profile.name}
                  width={420}
                  height={520}
                  priority
                  sizes="(min-width: 1024px) 400px, 80vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Full-stack Delivery
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
