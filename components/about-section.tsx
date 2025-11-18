"use client"

import { Leaf, Users, Globe2, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Leaf,
      titleKey: "about.values.sustainability.title",
      descriptionKey: "about.values.sustainability.description",
    },
    {
      icon: Award,
      titleKey: "about.values.quality.title",
      descriptionKey: "about.values.quality.description",
    },
    {
      icon: Users,
      titleKey: "about.values.partnership.title",
      descriptionKey: "about.values.partnership.description",
    },
    {
      icon: Globe2,
      titleKey: "about.values.global.title",
      descriptionKey: "about.values.global.description",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/about-wood-manufacturing.jpg"
                alt={t("about.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10 hidden md:block" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {t("about.title")}
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description")}</p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 sm:pt-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="space-y-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t(value.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(value.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
