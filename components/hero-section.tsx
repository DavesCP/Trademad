"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Award, Shield, Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const backgroundVideos = [
  "/videos/WhatsApp%20Video%202025-11-17%20at%2022.49.30.mp4",
  "/videos/WhatsApp%20Video%202025-11-17%20at%2022.49.45.mp4",
]

export function HeroSection() {
  const { t } = useLanguage()
  const [activeVideo, setActiveVideo] = useState(0)
  const descriptionPrefix = t("hero.description.prefix")
  const descriptionHighlight = t("hero.description.highlight")
  const descriptionSuffix = t("hero.description.suffix")

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % backgroundVideos.length)
    }, 12000)

    return () => window.clearInterval(interval)
  }, [])

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      const headerOffset = 80
      const elementPosition = productsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundVideos.map((video, index) => (
          <video
            key={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover motion-safe:transition-opacity motion-safe:duration-1000",
              index === activeVideo ? "opacity-80" : "opacity-0"
            )}
            poster="/hero-lumber-products.jpg"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply dark:bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/55 dark:from-background/65 dark:via-background/45 dark:to-background/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15 dark:from-background/25 dark:via-transparent dark:to-background/25" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto text-center px-2 md:px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-foreground mb-10 animate-fade-in-up leading-tight drop-shadow-[0_15px_45px_rgba(0,0,0,0.55)] max-w-4xl md:max-w-5xl mx-auto">
            {t("hero.title")}
            <br />
            <span className="text-primary drop-shadow-[0_6px_25px_rgba(0,0,0,0.45)]">{t("hero.subtitle")}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 dark:text-muted-foreground mb-12 max-w-3xl md:max-w-4xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] px-1 sm:px-4">
            {descriptionPrefix}{" "}
            <span className="text-primary font-semibold">{descriptionHighlight}</span>{" "}
            {descriptionSuffix}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-200 mb-10 md:mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all"
                onClick={handleScrollToProducts}
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full border-0 bg-primary text-primary-foreground shadow-[0_15px_45px_rgba(15,23,42,0.25)] transition-all hover:bg-primary/85 focus-visible:ring-primary/70"
                onClick={async () => {
                  try {
                    const response = await fetch('/files/catalogo-trademad.pdf')
                    if (!response.ok) throw new Error('PDF não encontrado')
                    const blob = await response.blob()
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.href = url
                    link.download = 'catalogo-trademad.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.URL.revokeObjectURL(url)
                  } catch (error) {
                    console.error('Erro ao baixar PDF:', error)
                    window.open('/files/catalogo-trademad.pdf', '_blank')
                  }
                }}
              >
                {t("hero.catalogCta")}
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80 dark:text-muted-foreground">
              <Download className="h-4 w-4 flex-shrink-0" />
              <span className="text-center">{t("hero.catalogTag")}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-16 animate-fade-in-up animation-delay-600">
            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/85 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all md:hover:scale-105 md:hover:shadow-lg w-full">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t("hero.features.sustainable.title")}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {t("hero.features.sustainable.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/85 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all md:hover:scale-105 md:hover:shadow-lg w-full">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t("hero.features.quality.title")}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {t("hero.features.quality.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/85 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all md:hover:scale-105 md:hover:shadow-lg w-full">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t("hero.features.certified.title")}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {t("hero.features.certified.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
