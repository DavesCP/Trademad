"use client"

import Link from "next/link"
import Image from "next/image"
import { Download, Leaf } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col items-center gap-1 group">
              <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
                <Image
                  src="/images/favicon-trademad.png"
                  alt="TradeMad mark"
                  fill
                  sizes="48px"
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <span className="font-sans font-semibold text-sm leading-none text-center tracking-wide">
                TradeMad Brazil
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">{t("footer.brandDescription")}</p>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-950 shadow hover:bg-emerald-300 transition-colors cursor-pointer"
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
              <Download className="h-4 w-4" />
              {t("footer.downloadCatalog")}
            </div>
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
