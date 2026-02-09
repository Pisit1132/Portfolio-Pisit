"use client"

import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "./language-provider"

export function ServicesContent() {
  const { t, lang } = useLanguage()

  const sectionsEn = [
    {
      title: "Business & Corporate Websites",
      summary: "Clear, modern sites that present your services, brand story, and contact paths.",
      bullets: [
        "Company profile, services, and contact forms",
        "Landing pages for campaigns and lead capture",
        "Fast, mobile-first, and SEO-ready structure",
      ],
      examples: ["Corporate site with service pages", "Lead-gen landing page", "Product/portfolio showcase"],
    },
    {
      title: "eCommerce & Product Catalog",
      summary: "Storefronts and catalogs focused on conversion, trust, and easy browsing.",
      bullets: [
        "Product listing, filters, and detail pages",
        "Checkout or inquiry flows tailored to your business",
        "Performance, UX, and SEO to drive organic traffic",
      ],
      examples: ["Car listings/catalog", "SMB product catalog", "Service bundles with inquiry/checkout"],
    },
    {
      title: "Internal Tools, CRM & Dashboards",
      summary: "In-house systems to manage customers, deals, data, and workflows.",
      bullets: [
        "Lead/deal tracking, reminders, and activity timelines",
        "Dashboards for revenue, pipeline, and ops KPIs",
        "Role-based access and exports for finance/ops",
      ],
      examples: ["CRM dashboard for sales teams", "Ops dashboard with exports", "Internal approval/workflow tool"],
    },
    {
      title: "Desktop-Style Web Apps & Portals",
      summary: "Rich web apps that feel like desktop software but run in the browser.",
      bullets: [
        "Multi-pane layouts, data grids, and filters",
        "Auth, session, and API integration with backoffice",
        "Optimized for speed and maintainability",
      ],
      examples: ["Inventory/asset portal", "Data grid with filters/exports", "Backoffice console for staff"],
    },
  ]

  const sectionsTh = [
    {
      title: "เว็บไซต์ธุรกิจและองค์กร",
      summary: "เว็บไซต์สมัยใหม่ นำเสนอบริการและเรื่องราวแบรนด์อย่างชัดเจน",
      bullets: [
        "หน้าโปรไฟล์บริษัท บริการ และฟอร์มติดต่อ",
        "แลนดิ้งเพจแคมเปญ เก็บลีด",
        "โหลดเร็ว มือถือสะดวก โครงสร้างรองรับ SEO",
      ],
      examples: ["เว็บบริษัท/บริการ", "แลนดิ้งเพจเก็บลูกค้า", "โชว์เคสสินค้า/ผลงาน"],
    },
    {
      title: "อีคอมเมิร์ซและแคตตาล็อกสินค้า",
      summary: "หน้าร้านและแคตตาล็อกที่ออกแบบเพื่อการขายและความน่าเชื่อถือ",
      bullets: [
        "หน้ารายการสินค้า ฟิลเตอร์ และหน้ารายละเอียด",
        "ขั้นตอนสั่งซื้อหรือสอบถามที่ตรงกับธุรกิจ",
        "เน้นความเร็ว UX และ SEO เพื่อดึงทราฟฟิก",
      ],
      examples: ["ลิสต์รถ/แคตตาล็อกสินค้า", "หน้าร้าน SMB", "แพ็กเกจบริการพร้อมสอบถาม/สั่งซื้อ"],
    },
    {
      title: "ระบบภายใน / CRM / Dashboard",
      summary: "ระบบ in-house จัดการลูกค้า ดีล ข้อมูล และเวิร์กโฟลว์",
      bullets: [
        "ติดตามลีด/ดีล แจ้งเตือน และไทม์ไลน์กิจกรรม",
        "แดชบอร์ดรายได้ ไพป์ไลน์ และ KPI ฝ่ายปฏิบัติการ",
        "สิทธิ์การใช้งานตามบทบาท และไฟล์ส่งออกสำหรับไฟแนนซ์/ออปส์",
      ],
      examples: ["CRM สำหรับทีมเซลส์", "แดชบอร์ดปฏิบัติการพร้อมไฟล์ส่งออก", "ระบบอนุมัติ/เวิร์กโฟลว์ภายใน"],
    },
    {
      title: "เว็บแอปแบบเดสก์ท็อป / พอร์ทัล",
      summary: "เว็บแอปที่ให้ประสบการณ์เหมือนซอฟต์แวร์เดสก์ท็อป ใช้งานผ่านเบราว์เซอร์",
      bullets: [
        "เลย์เอาต์หลายพาเนล ตารางข้อมูล ฟิลเตอร์",
        "ระบบล็อกอิน เซสชัน และเชื่อม API กับแบ็กออฟฟิศ",
        "ปรับแต่งให้เร็ว ใช้ง่าย และดูแลได้ระยะยาว",
      ],
      examples: ["พอร์ทัลสินค้าหรือทรัพย์สิน", "ตารางข้อมูลพร้อมฟิลเตอร์/ไฟล์ส่งออก", "คอนโซลหลังบ้านสำหรับทีมงาน"],
    },
  ]

  const sections = lang === "en" ? sectionsEn : sectionsTh
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <AnimatedSection>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">{t("services_h1")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("services_intro")}</p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, idx) => (
            <AnimatedSection key={section.title} delay={idx * 0.05}>
              <div className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm backdrop-blur-sm pressable">
                <div className="space-y-2 mb-3">
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.summary}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 text-xs font-semibold uppercase text-muted-foreground tracking-wide">
                  {t("services_examples_label")}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {section.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-foreground bg-card"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="space-y-4">
          <h2 className="text-2xl font-bold">{t("services_tech_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("services_tech_copy")}</p>
        </AnimatedSection>
      </div>
    </div>
  )
}
