"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Lang = "en" | "th"

type Dictionary = Record<string, string>

const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_services: "Services",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_resume: "Resume",
    nav_contact: "Contact",

    hero_title: "Fast, modern websites that rank and convert",
    hero_sub:
      "Freelance web developer building business sites that load fast, look modern, and are ready for SEO, eCommerce, and internal tools.",
    hero_location: "Based in Bangkok, Thailand",
    hero_availability: "Open to roles & freelance",
    hero_cta_projects: "View Projects",
    hero_cta_resume: "Download Resume",
    hero_cta_live: "Live Demo: Jing Jai Used Car",
    hero_cta_email: "Email Me",

    about_title: "About Me",
    about_subtitle:
      "Full-stack developer delivering business websites, eCommerce, and internal tools that are fast, modern, and maintainable.",

    projects_title: "Featured Projects",
    projects_subtitle: "A selection of work across business sites, eCommerce, and internal tools/dashboards.",
    featured_project_label: "Featured Project",
    featured_work_label: "Featured work",
    view_all_projects_btn: "View All Projects",

    experience_title: "Experience",
    experience_subtitle: "Professional journey delivering production-ready products.",

    education_title: "Education",
    skills_title: "Technical Skills",
    skills_subtitle: "Tools and technologies I use to build modern applications.",

    certifications_title: "Certifications",

    contact_title: "Get In Touch",
    contact_subtitle: "Have a project in mind? Let's talk.",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_location_label: "Location",

    footer_headline: "Let’s build something reliable together.",
    footer_projects: "Projects",
    footer_services: "Services",
    footer_resume: "Resume",
    footer_contact: "Contact",

    seo_h1: "Websites that load fast, rank well, and convert",
    seo_intro:
      "I build business websites, eCommerce, and internal tools that are fast, modern, and SEO-ready—so customers can find you and take action.",
    seo_local: "Bangkok-based freelancer serving clients across Thailand. Local SEO-friendly, fast, and mobile-first.",
    seo_services_title: "Website Services",
    seo_services_1: "Corporate and business websites",
    seo_services_2: "Web development with React and Next.js",
    seo_services_3: "SEO-friendly structure for Google Search",
    seo_services_4: "Responsive design for mobile and tablet",
    seo_services_5: "Speed improvements for existing sites",
    seo_why_title: "Why work with me",
    seo_why_copy:
      "I build fast, usable sites with solid SEO structure so you can grow long term. Professional quality with sensible budgets.",
    seo_fit_title: "Who it’s for",
    seo_fit_1: "Companies and organizations in Thailand",
    seo_fit_2: "Small to mid-sized business owners",
    seo_fit_3: "Startups wanting a modern site",
    seo_fit_4: "Buyers seeking SEO-ready, high-value websites",
    seo_tech_title: "Technical highlights",
    seo_tech_1: "Fast load, SEO-ready structure",
    seo_tech_2: "Responsive across devices",
    seo_tech_3: "Built with React / Next.js",
    seo_tech_4: "Backend/API integrations",

    services_meta_title: "Business websites, eCommerce, internal tools | Freelance Thailand",
    services_meta_desc:
      "I build business sites, eCommerce, and internal dashboards that are fast, SEO-ready, and tailored to your needs.",
    services_h1: "Websites and systems for businesses",
    services_intro:
      "I deliver business sites, eCommerce storefronts, internal tools/CRM dashboards, and even desktop-style apps—fast, modern, SEO-ready.",
    services_get_title: "What you get",
    services_get_1: "Business/brand sites that present your services clearly",
    services_get_2: "eCommerce storefronts and product catalogs with conversion focus",
    services_get_3: "Internal tools/CRM/dashboards to manage operations and data",
    services_get_4: "Desktop-style web apps and portals tailored to workflows",
    services_get_5: "Fast, responsive, SEO-friendly builds ready to scale",
    services_tech_title: "Approach & stack",
    services_tech_copy:
      "I pick the right stack for your goals (modern web frameworks, APIs, databases, headless CMS). Performance, SEO, and maintainability come first.",
    services_examples_label: "Examples",
  },
  th: {
    nav_home: "หน้าแรก",
    nav_projects: "ผลงาน",
    nav_services: "บริการ",
    nav_experience: "ประสบการณ์",
    nav_skills: "ทักษะ",
    nav_resume: "เรซูเม่",
    nav_contact: "ติดต่อ",

    hero_title: "เว็บไซต์เร็ว ทันสมัย ตอบโจทย์ SEO และธุรกิจ",
    hero_sub:
      "ฟรีแลนซ์นักพัฒนาเว็บ ทำเว็บไซต์ที่โหลดเร็ว ทันสมัย รองรับ SEO และใช้งานจริง ทั้งเว็บไซต์บริษัท อีคอมเมิร์ซ และระบบภายใน",
    hero_location: "ประจำที่กรุงเทพ ประเทศไทย",
    hero_availability: "พร้อมรับงานและฟรีแลนซ์",
    hero_cta_projects: "ดูผลงาน",
    hero_cta_resume: "ดาวน์โหลดเรซูเม่",
    hero_cta_live: "ดูตัวอย่าง: Jing Jai Used Car",
    hero_cta_email: "ส่งอีเมล",

    about_title: "เกี่ยวกับฉัน",
    about_subtitle:
      "นักพัฒนาเว็บแบบฟูลสแตก รับทำเว็บไซต์ธุรกิจ อีคอมเมิร์ซ และระบบภายในที่โหลดเร็ว ทันสมัย และดูแลได้ง่าย",

    projects_title: "ผลงานเด่น",
    projects_subtitle: "ตัวอย่างงานเว็บไซต์ธุรกิจ อีคอมเมิร์ซ และระบบภายใน/แดชบอร์ด",
    featured_project_label: "ผลงานแนะนำ",
    featured_work_label: "ผลงานเด่น",
    view_all_projects_btn: "ดูผลงานทั้งหมด",

    experience_title: "ประสบการณ์",
    experience_subtitle: "เส้นทางการทำงานและผลงานที่พร้อมใช้งานจริง",

    education_title: "การศึกษา",
    skills_title: "ทักษะด้านเทคนิค",
    skills_subtitle: "เครื่องมือและเทคโนโลยีที่ใช้พัฒนาเว็บแอปทันสมัย",

    certifications_title: "ประกาศนียบัตร",

    contact_title: "ติดต่อ",
    contact_subtitle: "มีโปรเจกต์หรือต้องการพูดคุย ติดต่อได้เลย",
    contact_email_label: "อีเมล",
    contact_phone_label: "โทร",
    contact_location_label: "ที่ตั้ง",

    footer_headline: "มาสร้างเว็บไซต์ที่เชื่อถือได้ไปด้วยกัน",
    footer_projects: "ผลงาน",
    footer_services: "บริการ",
    footer_resume: "เรซูเม่",
    footer_contact: "ติดต่อ",

    seo_h1: "เว็บไซต์โหลดเร็ว ติดอันดับ และเพิ่มโอกาสการขาย",
    seo_intro:
      "ผมทำเว็บไซต์ธุรกิจ อีคอมเมิร์ซ และระบบภายในที่โหลดเร็ว ทันสมัย โครงสร้างรองรับ SEO เพื่อให้ลูกค้าเจอคุณง่ายขึ้น",
    seo_local: "ฟรีแลนซ์ในกรุงเทพ รับงานทั่วประเทศไทย เว็บโหลดเร็ว โครงสร้างรองรับ SEO และเหมาะกับมือถือ",
    seo_services_title: "บริการรับทำเว็บไซต์",
    seo_services_1: "รับทำเว็บไซต์บริษัท / เว็บไซต์ธุรกิจ",
    seo_services_2: "เว็บไซต์อีคอมเมิร์ซและแคตตาล็อกสินค้า",
    seo_services_3: "ระบบภายใน / CRM / Dashboard สำหรับทีม",
    seo_services_4: "โครงสร้างรองรับ SEO โหลดเร็ว มือถือใช้งานสะดวก",
    seo_services_5: "ปรับปรุงเว็บไซต์เดิมให้เร็วและดูเป็นมืออาชีพ",
    seo_why_title: "ทำไมต้องเลือกผม",
    seo_why_copy:
      "ผมเน้นเว็บที่ใช้งานได้จริง โหลดเร็ว โครงสร้างเหมาะกับ SEO และต่อยอดธุรกิจได้ระยะยาว คุ้มค่าในงบที่เหมาะสม",
    seo_fit_title: "เว็บไซต์เหมาะกับใคร",
    seo_fit_1: "บริษัทและองค์กรในประเทศไทย",
    seo_fit_2: "เจ้าของธุรกิจขนาดเล็กถึงกลาง",
    seo_fit_3: "สตาร์ทอัพที่ต้องการเว็บไซต์ทันสมัย",
    seo_fit_4: "ผู้ต้องการเว็บไซต์รองรับ SEO ในงบคุ้มค่า",
    seo_tech_title: "จุดเด่นด้านเทคนิค",
    seo_tech_1: "โหลดเร็ว โครงสร้างรองรับ SEO",
    seo_tech_2: "Responsive ทุกอุปกรณ์",
    seo_tech_3: "พัฒนาด้วย React / Next.js",
    seo_tech_4: "เชื่อมต่อระบบหลังบ้าน / API",

    services_meta_title: "เว็บไซต์ธุรกิจ อีคอมเมิร์ซ ระบบภายใน | ฟรีแลนซ์ประเทศไทย",
    services_meta_desc:
      "รับทำเว็บไซต์บริษัท อีคอมเมิร์ซ และระบบภายใน โหลดเร็ว รองรับ SEO เหมาะกับลูกค้าไทย",
    services_h1: "รับทำเว็บไซต์และระบบสำหรับธุรกิจ",
    services_intro:
      "ผมทำเว็บไซต์ธุรกิจ เว็บไซต์อีคอมเมิร์ซ ระบบภายใน/CRM/Dashboard และเว็บแนวเดสก์ท็อป แอปที่โหลดเร็ว ทันสมัย และรองรับ SEO",
    services_get_title: "สิ่งที่คุณจะได้รับ",
    services_get_1: "เว็บไซต์บริษัท/บริการที่นำเสนอข้อมูลชัดเจน",
    services_get_2: "เว็บไซต์อีคอมเมิร์ซและแคตตาล็อกสินค้าเน้นการขาย",
    services_get_3: "ระบบภายใน/CRM/Dashboard จัดการงานและข้อมูล",
    services_get_4: "เว็บแนวเดสก์ท็อป แอป และพอร์ทัลที่ตรงกับการทำงาน",
    services_get_5: "เว็บโหลดเร็ว รองรับมือถือ และโครงสร้าง SEO พร้อมเติบโต",
    services_tech_title: "แนวทางและเทคโนโลยี",
    services_tech_copy:
      "ผมเลือกเทคโนโลยีให้เหมาะกับเป้าหมาย (เฟรมเวิร์กเว็บสมัยใหม่, API, ฐานข้อมูล, Headless CMS) โดยให้ความสำคัญกับความเร็ว SEO และการดูแลรักษา",
    services_examples_label: "ตัวอย่าง",
  },
}

type LanguageContextType = {
  lang: Lang
  t: (key: keyof typeof dictionaries["en"]) => string
  toggle: () => void
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem("site-lang")
    if (stored === "en" || stored === "th") setLang(stored)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("site-lang", lang)
  }, [lang])

  const toggle = () => setLang((prev) => (prev === "en" ? "th" : "en"))

  const value = useMemo(
    () => ({
      lang,
      t: (key: keyof typeof dictionaries["en"]) => dictionaries[lang][key] ?? key,
      toggle,
      setLang,
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
