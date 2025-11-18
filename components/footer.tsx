"use client"

import Link from "next/link"
import { Download, Leaf } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">TM</span>
              </div>
              <span className="font-serif text-2xl font-bold">TradeMad</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">{t("footer.brandDescription")}</p>
            <a
              href="/files/catalogo-trademad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-300 transition-colors"
            >
              <Download className="h-4 w-4" />
              {t("footer.downloadCatalog")}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.productsTitle")}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">{t("footer.productsList.flooring")}</li>
              <li className="text-sm text-secondary-foreground/80">{t("footer.productsList.decking")}</li>
              <li className="text-sm text-secondary-foreground/80">{t("footer.productsList.panels")}</li>
              <li className="text-sm text-secondary-foreground/80">{t("footer.productsList.furniture")}</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.certifications")}</h3>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
              <Leaf className="h-4 w-4 text-primary" />
              <span>{t("footer.fscCertified")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/80 mt-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span>{t("footer.iso9001")}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} TradeMad. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
