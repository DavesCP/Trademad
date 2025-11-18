"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { FlagIcon } from "@/components/flag-icon"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en", name: "English", countryCode: "us" },
    { code: "pt", name: "Português", countryCode: "br" },
    { code: "es", name: "Español", countryCode: "es" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
      return
    }

    // Para links de âncora (#products, #about, etc)
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerOffset = 80 // altura do header fixo
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }

      // Fecha o menu mobile após clicar
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border flex justify-center">
      <nav className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:scale-105">
              <Image
                src="/images/favicon-trademad.png"
                alt="TradeMad mark"
                fill
                sizes="(max-width: 768px) 56px, 64px"
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-foreground text-xl sm:text-2xl">TradeMad</span>
              <span className="uppercase tracking-[0.2em] text-muted-foreground text-[0.55rem] sm:text-xs">
                international timber trade
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => handleSmoothScroll(e, "/")}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#products"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => handleSmoothScroll(e, "#products")}
            >
              {t("nav.products")}
            </Link>
            <Link
              href="#services"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => handleSmoothScroll(e, "#services")}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => handleSmoothScroll(e, "#about")}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Language Selector, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent hover:bg-accent transition-colors w-10 h-10 p-0"
                >
                  <FlagIcon countryCode={currentLanguage.countryCode} className="w-6 h-5 rounded-sm" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer py-3 ${language === lang.code ? "bg-accent" : ""}`}
                  >
                    <FlagIcon countryCode={lang.countryCode} className="w-7 h-5 rounded-sm mr-3" />
                    <span className="font-medium">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => handleSmoothScroll(e, "/")}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="#products"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => handleSmoothScroll(e, "#products")}
              >
                {t("nav.products")}
              </Link>
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => handleSmoothScroll(e, "#services")}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
