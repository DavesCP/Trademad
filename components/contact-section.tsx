"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 animate-slide-in-up">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t("contact.email")}</h3>
              <a
                href="mailto:marcos@trademad.com.br"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                marcos@trademad.com.br
              </a>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t("contact.phone")}</h3>
              <a href="tel:+5547991010050" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                +55 47 9910-1050
              </a>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t("contact.location")}</h3>
              <p className="text-lg text-muted-foreground max-w-[250px]">
                Rua Peterson André Machado, 103 - Apto 00140
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
