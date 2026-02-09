"use client"

import { AnimatedSection } from "./animated-section"
import { useLanguage } from "./language-provider"

export function SeoIntro() {
  const { t } = useLanguage()
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t("seo_h1")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("seo_intro")}</p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <AnimatedSection className="space-y-6">
            <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_services_title")}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("seo_services_1")}</li>
                <li>{t("seo_services_2")}</li>
                <li>{t("seo_services_3")}</li>
                <li>{t("seo_services_4")}</li>
                <li>{t("seo_services_5")}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">{t("seo_why_title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("seo_why_copy")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">{t("seo_fit_title")}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("seo_fit_1")}</li>
                <li>{t("seo_fit_2")}</li>
                <li>{t("seo_fit_3")}</li>
                <li>{t("seo_fit_4")}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">{t("seo_tech_title")}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t("seo_tech_1")}</li>
                <li>{t("seo_tech_2")}</li>
                <li>{t("seo_tech_3")}</li>
                <li>{t("seo_tech_4")}</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
