"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type Product = {
  id: string
  nameKey: string
  categoryKey: string
  images: string[]
  descriptionKey: string
  specificationsKeys: {
    dimensions: string
    material: string
    finish: string
  }
}

type ProductModalProps = {
  product: Product
  open: boolean
  onClose: () => void
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleContactClick = () => {
    onClose() // Close the modal first

    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const headerOffset = 80 // Height of fixed header
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onClose()
        }
      }}
    >
      <DialogContent className="w-full max-w-[95vw] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-4 sm:p-6 pb-0">
          <DialogTitle className="font-serif text-2xl sm:text-3xl text-foreground">{t(product.nameKey)}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-4 sm:p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${t(product.nameKey)} - ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Buttons */}
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 sm:h-10 sm:w-10"
                    onClick={prevImage}
                    aria-label={t("products.previousImage")}
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 sm:h-10 sm:w-10"
                    onClick={nextImage}
                    aria-label={t("products.nextImage")}
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </>
              )}

              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                {currentImageIndex + 1} {t("products.imageCounter")} {product.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="hidden sm:grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? "border-primary scale-95" : "border-transparent hover:border-primary/50"
                  }`}
                  aria-label={`${t(product.nameKey)} ${t("products.image")} ${index + 1}`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${t(product.nameKey)} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex sm:hidden gap-3 overflow-x-auto pb-1">
              {product.images.map((image, index) => (
                <button
                  key={`mobile-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative min-w-[80px] aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? "border-primary scale-95" : "border-transparent"
                  }`}
                  aria-label={`${t(product.nameKey)} ${t("products.image")} ${index + 1}`}
                >
                  <img src={image || "/placeholder.svg"} alt={`${t(product.nameKey)} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {t(product.categoryKey)}
              </h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">{t(product.descriptionKey)}</p>
            </div>

            {/* Specifications */}
            <div className="border-t border-border pt-4 sm:pt-6">
              <h4 className="font-semibold text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                {t("products.specifications")}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border gap-2 sm:gap-4 text-center sm:text-left">
                  <span className="text-sm sm:text-base text-muted-foreground">{t("products.dimensions")}</span>
                  <span className="font-medium text-sm sm:text-base text-foreground text-right">
                    {t(product.specificationsKeys.dimensions)}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border gap-2 sm:gap-4 text-center sm:text-left">
                  <span className="text-sm sm:text-base text-muted-foreground">{t("products.material")}</span>
                  <span className="font-medium text-sm sm:text-base text-foreground text-right">
                    {t(product.specificationsKeys.material)}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border gap-2 sm:gap-4 text-center sm:text-left">
                  <span className="text-sm sm:text-base text-muted-foreground">{t("products.finish")}</span>
                  <span className="font-medium text-sm sm:text-base text-foreground text-right">
                    {t(product.specificationsKeys.finish)}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 sm:pt-4">
              <Button size="lg" className="w-full rounded-full text-sm sm:text-base" onClick={handleContactClick}>
                {t("contact.title")}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
