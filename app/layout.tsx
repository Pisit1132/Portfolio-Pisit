import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Footer } from "@/components/footer"
import { CursorTrail } from "@/components/cursor-trail"
import { QuickActionsMobile } from "@/components/quick-actions-mobile"
import Script from "next/script"
import { LanguageProvider } from "@/components/language-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "รับทำเว็บไซต์ธุรกิจ | ฟรีแลนซ์ทำเว็บไซต์ในประเทศไทย",
  description:
    "ฟรีแลนซ์รับทำเว็บไซต์ธุรกิจ เว็บไซต์องค์กร อีคอมเมิร์ซ โหลดเร็ว รองรับ SEO เหมาะกับลูกค้าไทย",
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
  openGraph: {
    title: "รับทำเว็บไซต์ธุรกิจ | ฟรีแลนซ์ทำเว็บไซต์ในประเทศไทย",
    description:
      "ฟรีแลนซ์รับทำเว็บไซต์ธุรกิจ เว็บไซต์องค์กร อีคอมเมิร์ซ โหลดเร็ว รองรับ SEO เหมาะกับลูกค้าไทย",
    type: "website",
    url: "https://pisit-portfolio.vercel.app",
  },
  icons: {
    icon: [
      {
        url: "/images/pisit.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/images/pisit.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="flex min-h-screen flex-col">
          <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="portfolio-theme">
              <ScrollProgress />
              <CursorTrail />
              <QuickActionsMobile />
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
            </ThemeProvider>
          </LanguageProvider>
          <Script
            id="person-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >{`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pisit Sirisingskul",
  "jobTitle": "ฟรีแลนซ์นักพัฒนาเว็บไซต์",
  "description": "รับทำเว็บไซต์ React และ Next.js สำหรับธุรกิจในประเทศไทย",
  "url": "https://pisit-portfolio.vercel.app",
  "areaServed": "Thailand"
}`}</Script>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
