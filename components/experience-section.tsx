"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"
import { useLanguage } from "./language-provider"

const experiencesEn = [
  {
    title: "Full Stack Developer",
    company: "ThaiRung Partner",
    period: "Dec 2024 – Present",
    highlights: [
      "Rebuilt legacy OutSystems functions into Vue.js + TypeScript apps",
      "Developed vehicle marketplace platforms with React & Next.js",
      "Built Node.js + MySQL backend services to improve automation/reliability",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Fastwork",
    period: "Dec 2024 – Present",
    highlights: [
      "Delivered projects with React, Vue, Angular, Node.js (plus Go/Python basics)",
      "Managed AWS deployment, hosting, and CI/CD",
      "Worked directly with clients to gather requirements and deliver quickly",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Western Digital",
    period: "Aug 2024 – Nov 2024",
    highlights: [
      "Built internal workflow tools for engineering teams",
      "Built responsive UI with React/HTML/CSS",
      "Built backend services with Node.js + MySQL",
    ],
  },
]

const experiencesTh = [
  {
    title: "ฟูลสแตก ดีเวลลอปเปอร์",
    company: "ThaiRung Partner",
    period: "ธ.ค. 2024 – ปัจจุบัน",
    highlights: [
      "ปรับระบบ OutSystems เดิมให้เป็นเว็บ Vue + TypeScript",
      "พัฒนาแพลตฟอร์มประกาศรถและเชื่อมระบบภายใน",
      "สร้างบริการ Node.js + MySQL เพิ่มอัตโนมัติและความเสถียร",
    ],
  },
  {
    title: "ฟรีแลนซ์ ฟูลสแตก",
    company: "Fastwork",
    period: "ธ.ค. 2024 – ปัจจุบัน",
    highlights: [
      "ส่งมอบเว็บแอปด้วย React, Vue, Angular, Node.js (รวม Go/Python เบื้องต้น)",
      "ดูแลดีพลอยบน AWS และ CI/CD ให้ลูกค้า",
      "ทำงานตรงกับลูกค้า เก็บความต้องการและส่งงานรวดเร็ว",
    ],
  },
  {
    title: "ฟูลสแตก ดีเวลลอปเปอร์ (ฝึกงาน)",
    company: "Western Digital",
    period: "ส.ค. 2024 – พ.ย. 2024",
    highlights: [
      "สร้างเครื่องมือภายในช่วยทีมวิศวกรรม",
      "ทำ UI ตอบสนองด้วย React/HTML/CSS",
      "พัฒนาบริการหลังบ้านด้วย Node.js + MySQL",
    ],
  },
]

export function ExperienceSection() {
  const { t } = useLanguage()
  const data = t("nav_home") === "Home" ? experiencesEn : experiencesTh
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">{t("experience_title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("experience_subtitle")}</p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-border/70 md:block" aria-hidden />
          <div className="space-y-8">
            {data.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative mt-2 hidden h-4 w-4 rounded-full border-4 border-background bg-primary shadow md:block">
                    <div className="absolute inset-[-6px] rounded-full border border-primary/40" />
                  </div>
                <Card className="flex-1 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg pressable">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
