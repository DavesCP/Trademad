import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import { UnderConstructionBanner } from "@/components/under-construction-banner"
import { BodyBackgroundActivator } from "@/components/body-background-activator"
import { StructuredData } from "@/components/structured-data"

const SHOW_UNDER_CONSTRUCTION = false

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TradeMad Brazil - Premium Wood Products | Pine & Eucalyptus Lumber",
  description: "TradeMad Brazil specializes in high-quality engineered wood panels, solid lumber, veneers, and raw materials. Sustainably sourced pine and eucalyptus products from South America to global markets.",
  keywords: "wood products, lumber, plywood, pine lumber, eucalyptus lumber, engineered wood panels, moldings, flat jambs, scantling, stake lumber, Brazil wood export, South America timber, sustainable wood, wood chips, logs, international timber trade",
  authors: [{ name: "TradeMad Brazil" }],
  creator: "TradeMad Brazil",
  publisher: "TradeMad Brazil",
  applicationName: "TradeMad Brazil",
  category: "business",
  classification: "Wood Products & Timber Trading",
  robots: "index, follow",
  openGraph: {
    title: "TradeMad Brazil - Premium Wood Products from South America",
    description: "High-quality pine and eucalyptus lumber, engineered panels, and raw materials. Sustainable sourcing from South America to global markets.",
    url: "https://trademad.com.br",
    siteName: "TradeMad Brazil",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://trademad.com.br/images/logo-trademad.png",
        width: 1200,
        height: 630,
        alt: "TradeMad Brazil - Premium Wood Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeMad Brazil - Premium Wood Products",
    description: "High-quality pine and eucalyptus lumber from South America",
    images: ["https://trademad.com.br/images/logo-trademad.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-trademad.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-trademad.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/favicon-trademad.png",
    apple: [
      { url: "/images/favicon-trademad.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://trademad.com.br",
    languages: {
      "en": "https://trademad.com.br",
      "pt-BR": "https://trademad.com.br",
      "es": "https://trademad.com.br",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <BodyBackgroundActivator />
        <ThemeProvider>
          <LanguageProvider>
            {SHOW_UNDER_CONSTRUCTION && <UnderConstructionBanner />}
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}
