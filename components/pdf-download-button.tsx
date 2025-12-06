"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface PDFDownloadButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function PDFDownloadButton({ children, className, size = "lg" }: PDFDownloadButtonProps) {
  const { t } = useLanguage()

  const handleDownload = async () => {
    try {
      const response = await fetch('/files/TradeMad-catalog (2) (1).pdf')
      
      if (!response.ok) {
        throw new Error('PDF não encontrado')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Catalogo Trademad.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Erro ao baixar PDF:', error)
      // Fallback: tentar abrir em nova aba
      window.open('/files/TradeMad-catalog (2) (1).pdf', '_blank')
    }
  }

  return (
    <Button 
      size={size} 
      className={className}
      onClick={handleDownload}
    >
      {children}
    </Button>
  )
}


