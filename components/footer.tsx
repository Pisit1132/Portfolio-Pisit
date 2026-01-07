import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { profile } from "@/lib/profile"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socials =
    [
      profile.socials.github && { href: profile.socials.github, label: "GitHub", icon: Github },
      profile.socials.linkedin && { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
    ].filter(Boolean) as { href: string; label: string; icon: typeof Github }[]

  return (
    <footer className="border-t border-border/50 bg-card/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-foreground">Let’s build something reliable together.</p>
            <p className="text-sm text-muted-foreground">
              Bangkok • {profile.email} • {profile.phone}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-foreground transition hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-foreground transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/40 pt-4 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {currentYear} Pisit Sirisingskul</span>
            <span className="hidden text-border lg:inline">•</span>
            <span>Full-Stack Developer • React/Next.js · Node · AWS</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="hover:text-foreground" href="/projects">
              Projects
            </a>
            <a className="hover:text-foreground" href="/resume">
              Resume
            </a>
            <a className="hover:text-foreground" href="/#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
