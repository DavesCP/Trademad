"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import translations from "./translations.json"

type Language = "en" | "pt" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.toLowerCase()

  // Detecta português (pt, pt-br, pt-pt, etc)
  if (browserLang.startsWith("pt")) {
    return "pt"
  }

  // Detecta espanhol (es, es-mx, es-es, etc)
  if (browserLang.startsWith("es")) {
    return "es"
  }

  // Detecta inglês ou qualquer outro idioma não suportado (default: inglês)
  return "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null

    if (savedLang && ["en", "pt", "es"].includes(savedLang)) {
      setLanguage(savedLang)
    } else {
      const detectedLang = detectBrowserLanguage()
      setLanguage(detectedLang)
      localStorage.setItem("language", detectedLang)
    }

    setMounted(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  // Evita flash de conteúdo não traduzido
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
