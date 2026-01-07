"use client"

import { useMemo, useState } from "react"
import { Button } from "./ui/button"
import { Download, Mail, Phone, FileText, X } from "lucide-react"
import { profile } from "@/lib/profile"

export function QuickActionsMobile() {
  const telHref = useMemo(() => `tel:${profile.phone.replace(/\s+/g, "")}`, [])
  const mailHref = useMemo(() => `mailto:${profile.email}`, [])
  const [open, setOpen] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 md:hidden">
      {open ? (
        <div className="rounded-2xl border border-border/70 bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-primary" />
              Quick Actions
            </div>
            <button
              aria-label="Close quick actions"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-muted-foreground transition hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-2">
            <Button asChild size="sm" className="justify-start">
              <a href={telHref}>
                <Phone className="mr-2 h-4 w-4" />
                Call
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="justify-start">
              <a href={mailHref}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="justify-start">
              <a href={profile.resume} download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open quick actions"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/90 shadow-lg backdrop-blur-sm transition hover:border-primary hover:shadow-xl"
        >
          <FileText className="h-5 w-5 text-primary" />
        </button>
      )}
    </div>
  )
}

