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

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pisit Sirisingskul | Full-Stack Developer",
  description:
    "Full-Stack Developer experienced in React, Vue, Next.js, Node.js, MySQL. Building scalable web applications and improving workflows.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Vue.js", "Node.js", "MySQL", "Web Development", "Bangkok"],
  authors: [{ name: "Pisit Sirisingskul" }],
  openGraph: {
    title: "Pisit Sirisingskul | Full-Stack Developer",
    description: "Full-Stack Developer experienced in React, Vue, Next.js, Node.js, MySQL",
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="portfolio-theme">
            <ScrollProgress />
            <CursorTrail />
            <QuickActionsMobile />
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </ThemeProvider>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
