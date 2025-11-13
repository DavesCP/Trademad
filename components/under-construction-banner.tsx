"use client"

import { useLanguage } from "@/lib/language-context"
import { Hammer, Download, Navigation } from "lucide-react"

export function UnderConstructionBanner() {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-background/60 dark:bg-background/75 backdrop-blur-lg" />

      <div className="absolute inset-0 opacity-[0.05] dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            90deg,
            oklch(0.45 0.12 155),
            oklch(0.45 0.12 155) 2px,
            transparent 2px,
            transparent 28px
          )`,
            animation: "slide-right 24s linear infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
            oklch(0.35 0.08 145),
            oklch(0.35 0.08 145) 1px,
            transparent 1px,
            transparent 96px
          )`,
            animation: "slide-down 36s linear infinite",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[14%] left-[-14%] w-60 h-20 bg-gradient-to-r from-primary/15 via-primary/25 to-primary/15 rounded-2xl animate-float-slow rotate-6 shadow-2xl backdrop-blur-sm md:w-72 md:h-24" />
        <div className="absolute top-[62%] right-[-12%] w-72 h-24 bg-gradient-to-r from-accent/15 via-accent/25 to-accent/15 rounded-2xl animate-float-medium -rotate-6 shadow-2xl backdrop-blur-sm md:w-80 md:h-28" />
        <div className="absolute bottom-[18%] left-[6%] w-60 h-16 bg-gradient-to-r from-secondary/15 via-secondary/25 to-secondary/15 rounded-2xl animate-float-fast -rotate-3 shadow-2xl backdrop-blur-sm md:w-72 md:h-20" />

        <div className="absolute top-[24%] right-[12%] w-14 h-52 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/20 rounded-2xl animate-float-medium -rotate-6 shadow-2xl backdrop-blur-sm md:w-16 md:h-64" />
        <div className="absolute bottom-[28%] right-[4%] w-16 h-64 bg-gradient-to-b from-accent/20 via-accent/30 to-accent/20 rounded-2xl animate-float-slow rotate-6 shadow-2xl backdrop-blur-sm md:w-20 md:h-72" />

        <div className="absolute top-[22%] right-[36%] w-10 h-10 bg-primary/25 rounded-xl animate-spin-slow shadow-lg backdrop-blur-sm" />
        <div className="absolute bottom-[36%] left-[26%] w-8 h-8 bg-accent/25 rounded-xl animate-spin-slow animation-delay-200 shadow-lg backdrop-blur-sm" />
        <div className="absolute top-[68%] right-[46%] w-12 h-12 bg-secondary/25 rounded-xl animate-spin-slow animation-delay-400 shadow-lg backdrop-blur-sm" />
        <div className="absolute top-[42%] left-[16%] w-7 h-7 bg-primary/20 rounded-xl animate-spin-slow animation-delay-600 shadow-lg backdrop-blur-sm" />
      </div>

      <div className="absolute inset-x-0 top-[5.5rem] bottom-6 flex items-center justify-center px-4 sm:px-6">
        <div className="pointer-events-auto w-full max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-lg backdrop-blur-sm animate-bounce-slow">
            <Hammer className="h-4 w-4" aria-hidden="true" />
            <span>{t("underConstruction.badge")}</span>
          </div>

          <div className="relative mt-3 rounded-3xl border border-primary/30 bg-card/90 dark:bg-card/85 p-4 shadow-2xl backdrop-blur-2xl animate-scale-in sm:p-6">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-60" />

            <div className="space-y-4 sm:space-y-4.5" role="status" aria-live="polite">
              <div className="space-y-1.5 text-center sm:space-y-2.5">
                <h1 className="text-[clamp(1.6rem,3.6vw,2.7rem)] font-serif font-bold leading-snug text-foreground">{t("underConstruction.title")}</h1>
                <p className="text-[clamp(0.95rem,2.6vw,1.15rem)] font-semibold text-primary">{t("underConstruction.subtitle")}</p>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                  {t("underConstruction.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-3">
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/12 to-primary/6 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] sm:p-3.5">
                  <div className="rounded-xl bg-primary/20 p-1.5">
                    <Navigation className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {t("underConstruction.features.modern")}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/12 to-accent/6 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] sm:p-3.5">
                  <div className="rounded-xl bg-accent/20 p-1.5">
                    <Download className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {t("underConstruction.features.catalog")}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 rounded-2xl border border-secondary/25 bg-gradient-to-br from-secondary/12 to-secondary/6 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] sm:p-3.5">
                  <div className="rounded-xl bg-secondary/20 p-1.5">
                    <Hammer className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {t("underConstruction.features.navigation")}
                  </span>
                </div>
              </div>

              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted/50 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-80 animate-progress" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-progress animation-delay-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
