"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-muted/30">
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("contact.email")}</h3>
                  <a
                    href="mailto:marcos@trademad.com.br"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    marcos@trademad.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("contact.phone")}</h3>
                  <a href="tel:+5547991010050" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 47 9910-1050
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("contact.location")}</h3>
                  <p className="text-muted-foreground">Rua Peterson André Machado, 103 - Apto 00140</p>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="hidden lg:block aspect-video rounded-xl overflow-hidden mt-8">
                <img
                  src="/wood-manufacturing-facility.jpg"
                  alt={t("contact.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 animate-slide-in-right">
              <div>
                <Input placeholder={t("contact.form.name")} className="h-12" />
              </div>
              <div>
                <Input type="email" placeholder={t("contact.form.email")} className="h-12" />
              </div>
              <div>
                <Input placeholder={t("contact.form.subject")} className="h-12" />
              </div>
              <div>
                <Textarea placeholder={t("contact.form.message")} rows={6} />
              </div>
              <Button size="lg" className="w-full rounded-full">
                {t("contact.form.send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
