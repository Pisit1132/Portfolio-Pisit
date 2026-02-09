import type { Metadata } from "next"
import Script from "next/script"
import { profile } from "@/lib/profile"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://pisitdev.com"),
  title: {
    default: "รับทำเว็บไซต์ | ฟรีแลนซ์ทำเว็บไซต์ในประเทศไทย | Pisitdev",
    template: "%s | Pisitdev",
  },
  description:
    "ฟรีแลนซ์ทำเว็บไซต์ธุรกิจ เว็บไซต์องค์กร อีคอมเมิร์ซ โหลดเร็ว รองรับ SEO เหมาะกับลูกค้าไทย (กรุงเทพและทั่วประเทศ)",
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำเว็บไซต์ React",
    "รับทำเว็บไซต์ Next.js",
    "ฟรีแลนซ์ทำเว็บไซต์",
    "นักพัฒนาเว็บไซต์",
    "รับทำเว็บไซต์บริษัท",
    "รับทำเว็บไซต์ธุรกิจ",
    "เว็บไซต์รองรับ SEO",
    "เว็บไซต์ Responsive",
    "รับทำเว็บไซต์ กรุงเทพ",
    "ฟรีแลนซ์ทำเว็บไซต์ กรุงเทพ",
    "รับทำเว็บไซต์ ประเทศไทย",
  ],
  authors: [{ name: "Pisit Sirisingskul" }],
  alternates: {
    canonical: "https://pisitdev.com/th",
    languages: {
      en: "https://pisitdev.com",
      th: "https://pisitdev.com/th",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "รับทำเว็บไซต์ | ฟรีแลนซ์ทำเว็บไซต์ในประเทศไทย | Pisitdev",
    description:
      "ฟรีแลนซ์ทำเว็บไซต์ธุรกิจ เว็บไซต์องค์กร อีคอมเมิร์ซ โหลดเร็ว รองรับ SEO เหมาะกับลูกค้าไทย (กรุงเทพและทั่วประเทศ)",
    type: "website",
    url: "https://pisitdev.com/th",
    images: [
      {
        url: "/images/pisit.jpg",
        width: 1200,
        height: 630,
        alt: "Pisit Sirisingskul portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ฟรีแลนซ์ทำเว็บไซต์ | รองรับ SEO โหลดเร็ว",
    description: "รับทำเว็บไซต์ธุรกิจ/องค์กร/อีคอมเมิร์ซ โหลดเร็ว รองรับ SEO ในไทย",
    images: ["/images/pisit.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider initialLang="th">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="portfolio-theme">
        {children}
      </ThemeProvider>
      <Script
        id="person-schema-th"
        type="application/ld+json"
        strategy="afterInteractive"
      >{`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pisit Sirisingskul",
  "jobTitle": "ฟรีแลนซ์นักพัฒนาเว็บไซต์",
  "description": "รับทำเว็บไซต์ธุรกิจ อีคอมเมิร์ซ และระบบภายใน โหลดเร็ว รองรับ SEO",
  "url": "https://pisitdev.com/th",
  "areaServed": "Thailand"
}`}</Script>
      <Script
        id="pro-service-schema-th"
        type="application/ld+json"
        strategy="afterInteractive"
      >{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Pisitdev",
  "serviceType": "Web Development",
  "areaServed": "Thailand",
  "url": "https://pisitdev.com/th",
  "sameAs": [
    "${profile.socials.github}",
    "${profile.socials.linkedin}"
  ],
  "description": "ฟรีแลนซ์ทำเว็บไซต์ธุรกิจ อีคอมเมิร์ซ และระบบภายใน โหลดเร็ว รองรับ SEO",
  "provider": {
    "@type": "Person",
    "name": "Pisit Sirisingskul"
  }
}`}</Script>
    </LanguageProvider>
  )
}
