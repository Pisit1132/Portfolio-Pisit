"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import { profile } from "@/lib/profile"
import { SiteShell } from "@/components/site-shell"

export default function ResumePageTh() {
  return (
    <SiteShell lang="th">
      <div className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold">เรซูเม่</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ดูหรือดาวน์โหลดไฟล์เรซูเม่ล่าสุดด้านล่าง ไฟล์ PDF นี้อัปเดตสอดคล้องกับเว็บไซต์เสมอ
              </p>
              <Button asChild size="lg">
                <a href={profile.resume} download>
                  <Download className="mr-2 h-4 w-4" />
                  ดาวน์โหลดเรซูเม่ (PDF)
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="overflow-hidden border border-border/60 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 bg-muted/40 px-6 py-4">
                <div>
                  <p className="text-sm text-muted-foreground">ไฟล์ล่าสุด</p>
                  <p className="text-lg font-semibold text-foreground">
                    {profile.name} — {profile.role}
                  </p>
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
                      ดาวน์โหลด
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
                    <p className="text-lg font-semibold text-foreground">ไม่สามารถแสดงตัวอย่าง</p>
                    <p className="text-muted-foreground">
                      เบราว์เซอร์บล็อกการฝัง PDF กรุณากดปุ่มด้านล่างเพื่อดาวน์โหลด
                    </p>
                    <Button asChild size="lg">
                      <a href={profile.resume} download>
                        <Download className="mr-2 h-4 w-4" />
                        ดาวน์โหลดเรซูเม่ (PDF)
                      </a>
                    </Button>
                  </div>
                </object>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </SiteShell>
  )
}
