"use client"

import { Truck, Lightbulb, FileText, ShieldCheck, ClipboardCheck, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Truck,
      key: "logistics",
    },
    {
      icon: Lightbulb,
      key: "development",
    },
    {
      icon: FileText,
      key: "trade",
    },
    {
      icon: ShieldCheck,
      key: "quality",
    },
    {
      icon: ClipboardCheck,
      key: "documentation",
    },
    {
      icon: Award,
      key: "certification",
    },
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground mb-4 text-balance">{t("services.subtitle")}</p>
          <p className="text-lg text-muted-foreground text-pretty">{t("services.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.key}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t(`services.items.${service.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`services.items.${service.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6 text-left">
            {t("services.cta")}
          </p>
        </div>
      </div>
    </section>
  )
}
