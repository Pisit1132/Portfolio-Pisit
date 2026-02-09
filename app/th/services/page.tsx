import { ServicesContent } from "@/components/services-content"
import { SiteShell } from "@/components/site-shell"

export const metadata = {
  title: "เว็บไซต์ธุรกิจ อีคอมเมิร์ซ ระบบภายใน | ฟรีแลนซ์ประเทศไทย",
  description:
    "รับทำเว็บไซต์บริษัท อีคอมเมิร์ซ และระบบภายใน โหลดเร็ว รองรับ SEO เหมาะกับลูกค้าไทย",
}

export default function ServicesPageTh() {
  return (
    <SiteShell lang="th">
      <ServicesContent />
    </SiteShell>
  )
}
