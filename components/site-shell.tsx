"use client"

import { LanguageProvider } from "./language-provider"
import { ScrollProgress } from "./scroll-progress"
import { CursorTrail } from "./cursor-trail"
import { QuickActionsMobile } from "./quick-actions-mobile"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

export function SiteShell({ children, lang }: { children: React.ReactNode; lang: "en" | "th" }) {
  return (
    <LanguageProvider initialLang={lang}>
      <ScrollProgress />
      <CursorTrail />
      <QuickActionsMobile />
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
