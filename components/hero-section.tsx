"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Award, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

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
        <Image
          src="/hero-lumber-products.jpg"
          alt="Premium wood products"
          fill
          className="object-cover opacity-75 dark:opacity-45"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60 dark:from-background/70 dark:via-background/60 dark:to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 dark:from-background/40 dark:via-transparent dark:to-background/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-10 animate-fade-in-up text-balance leading-tight">
            {t("hero.title")}
            <br />
            <span className="text-primary">{t("hero.subtitle")}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400 mb-20">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all"
              onClick={handleScrollToProducts}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 animate-fade-in-up animation-delay-600">
            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/85 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t("hero.features.sustainable.title")}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {t("hero.features.sustainable.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/85 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{t("hero.features.quality.title")}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {t("hero.features.quality.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/85 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
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
