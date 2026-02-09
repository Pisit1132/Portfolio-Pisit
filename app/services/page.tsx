import { ServicesContent } from "../../components/services-content"
import { SiteShell } from "@/components/site-shell"

export const metadata = {
  title: "Business websites, eCommerce, internal tools | Freelance Thailand",
  description:
    "Freelance developer building business sites, eCommerce, and internal dashboards that are fast, SEO-ready, and tailored to your needs.",
}

export default function ServicesPage() {
  return (
    <SiteShell lang="en">
      <ServicesContent />
    </SiteShell>
  )
}
