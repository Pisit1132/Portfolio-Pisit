"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Download, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { profile } from "@/lib/profile"
import { useLanguage } from "./language-provider"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")
  const { t, lang, toggle } = useLanguage()

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash || "")
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && (currentHash === "" || currentHash === "#")
    if (href.startsWith("/#")) {
      const target = href.split("#")[1]
      return pathname === "/" && currentHash === `#${target}`
    }
    return pathname === href
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-linear-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Pisit Sirisingskul
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground",
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {t(`nav_${item.label.toLowerCase()}` as any) ?? item.label}
              {isActive(item.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-teal-600"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm" variant="outline" onClick={toggle} className="min-w-[64px]">
            {lang === "en" ? "EN" : "TH"}
          </Button>
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:flex">
            <a href={profile.resume} download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="px-6 pt-6">
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <div className="space-y-2 px-4 pb-6 pt-2">
                <div className="flex justify-end pb-2">
                  <Button size="sm" variant="outline" onClick={toggle} className="min-w-[64px]">
                    {lang === "en" ? "EN" : "TH"}
                  </Button>
                </div>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted",
                        isActive(item.href) ? "text-foreground bg-muted/70 border border-border/60" : "text-muted-foreground",
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        {t(`nav_${item.label.toLowerCase()}` as any) ?? item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href={profile.resume}
                    download
                    className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
