import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import { UnderConstructionBanner } from "@/components/under-construction-banner"
import { BodyBackgroundActivator } from "@/components/body-background-activator"

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
  title: "TradeMad - Premium Wood Products Catalog",
  description: "Discover our exquisite collection of premium wood products",
  generator: "v0.app",
  icons: {
    icon: "/images/favicon-trademad.png",
    shortcut: "/images/favicon-trademad.png",
    apple: "/images/favicon-trademad.png",
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
        <Analytics />
      </body>
    </html>
  )
}
