"use client"

import { useMemo, useState } from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Filter, Trees, Sprout, FileDown } from "lucide-react"
import { ProductModal } from "./product-modal"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

type Product = {
  id: string
  nameKey: string
  categoryKey: string
  images: string[]
  speciesImages?: {
    softwood?: string[]
    hardwood?: string[]
  }
  descriptionKey: string
  species: Array<"softwood" | "hardwood">
  availability: "cutToSize" | "underRequest"
  specificationsKeys: {
    dimensions: string
    material: string
    finish: string
  }
}

const edgeGluedPanelImages = [
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250522-WA0100.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250904-WA0162.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250904-WA0164.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250925-WA0084.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250930-WA0019.jpg",
]

const roundGluedPanelImages = [
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250904-WA0162.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250904-WA0164.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250925-WA0084.jpg",
  "/images/Edge Glued Panels Pine-Eucalyptus/IMG-20250930-WA0019.jpg",
]

const flatJambImages = [
  "/images/Flat Jambs/IMG-20251017-WA0020.jpg",
  "/images/Flat Jambs/IMG-20251017-WA0053.jpg",
]

const moldingImages = [
  "/images/Moldings/IMG-20240921-WA0015.jpg",
  "/images/Moldings/IMG-20241104-WA0106.jpg",
]

const scantlingSoftwoodImages = ["/images/Pine-Eucalyptus Scantling/IMG-20251017-WA0022.jpg"]
const scantlingHardwoodImages = ["/images/Pine-Eucalyptus Scantling/IMG-20251017-WA0034.jpg"]
const scantlingImages = [...scantlingSoftwoodImages, ...scantlingHardwoodImages]

const stakeSoftwoodImages = [
  "/images/Pine Lumber/IMG-20250506-WA0023.jpg",
  "/images/Pine Lumber/IMG-20250807-WA0031.jpg",
]

const stakeHardwoodImages = ["/images/Eucalyptus Lumber/IMG-20251017-WA0024.jpg"]

const lumberSoftwoodImages = [
  "/images/Pine Lumber/IMG-20251017-WA0036.jpg",
  "/images/Pine Lumber/IMG-20251009-WA0082.jpg",
  "/images/Pine Lumber/IMG-20251017-WA0014.jpg",
  "/images/Pine Lumber/IMG-20251017-WA0021.jpg",
]

const lumberHardwoodImages = ["/images/Eucalyptus Lumber/IMG-20251017-WA0042.jpg"]

const plywoodImages = [
  "/images/Plywood OSB - CDX/IMG-20250221-WA0027.jpg",
  "/images/Plywood OSB - CDX/IMG-20250617-WA0077.jpg",
  "/images/Plywood OSB - CDX/IMG-20250221-WA0025.jpg",
  "/images/Plywood OSB - CDX/IMG-20251017-WA0030.jpg",
]

const woodChipsSoftwoodImages = ["/images/Logs - Chips/IMG-20251017-WA0012.jpg"]
const woodChipsHardwoodImages = [
  "/images/Logs - Chips/IMG-20251017-WA0035.jpg",
  "/images/Logs - Chips/IMG-20251017-WA0013.jpg",
]

const products: Product[] = [
  {
    id: "1",
    nameKey: "products.items.edgeGluedPanels.name",
    categoryKey: "products.items.edgeGluedPanels.category",
    images: edgeGluedPanelImages,
    speciesImages: {
      softwood: edgeGluedPanelImages,
      hardwood: edgeGluedPanelImages,
    },
    descriptionKey: "products.items.edgeGluedPanels.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.edgeGluedPanels.dimensions",
      material: "products.items.edgeGluedPanels.material",
      finish: "products.items.edgeGluedPanels.finish",
    },
  },
  {
    id: "2",
    nameKey: "products.items.roundGluedPanels.name",
    categoryKey: "products.items.roundGluedPanels.category",
    images: roundGluedPanelImages,
    speciesImages: {
      softwood: roundGluedPanelImages,
      hardwood: roundGluedPanelImages,
    },
    descriptionKey: "products.items.roundGluedPanels.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.roundGluedPanels.dimensions",
      material: "products.items.roundGluedPanels.material",
      finish: "products.items.roundGluedPanels.finish",
    },
  },
  {
    id: "3",
    nameKey: "products.items.flatJambs.name",
    categoryKey: "products.items.flatJambs.category",
    images: flatJambImages,
    speciesImages: {
      softwood: flatJambImages,
      hardwood: flatJambImages,
    },
    descriptionKey: "products.items.flatJambs.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.flatJambs.dimensions",
      material: "products.items.flatJambs.material",
      finish: "products.items.flatJambs.finish",
    },
  },
  {
    id: "4",
    nameKey: "products.items.moldings.name",
    categoryKey: "products.items.moldings.category",
    images: moldingImages,
    speciesImages: {
      softwood: moldingImages,
      hardwood: moldingImages,
    },
    descriptionKey: "products.items.moldings.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.moldings.dimensions",
      material: "products.items.moldings.material",
      finish: "products.items.moldings.finish",
    },
  },
  {
    id: "5",
    nameKey: "products.items.scantling.name",
    categoryKey: "products.items.scantling.category",
    images: scantlingImages,
    speciesImages: {
      softwood: scantlingSoftwoodImages,
      hardwood: scantlingHardwoodImages,
    },
    descriptionKey: "products.items.scantling.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.scantling.dimensions",
      material: "products.items.scantling.material",
      finish: "products.items.scantling.finish",
    },
  },
  {
    id: "6",
    nameKey: "products.items.stakeLumber.name",
    categoryKey: "products.items.stakeLumber.category",
    images: [...stakeSoftwoodImages, ...stakeHardwoodImages],
    speciesImages: {
      softwood: stakeSoftwoodImages,
      hardwood: stakeHardwoodImages,
    },
    descriptionKey: "products.items.stakeLumber.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.stakeLumber.dimensions",
      material: "products.items.stakeLumber.material",
      finish: "products.items.stakeLumber.finish",
    },
  },
  {
    id: "7",
    nameKey: "products.items.lumber.name",
    categoryKey: "products.items.lumber.category",
    images: [...lumberSoftwoodImages, ...lumberHardwoodImages],
    speciesImages: {
      softwood: lumberSoftwoodImages,
      hardwood: lumberHardwoodImages,
    },
    descriptionKey: "products.items.lumber.description",
    species: ["softwood", "hardwood"],
    availability: "cutToSize",
    specificationsKeys: {
      dimensions: "products.items.lumber.dimensions",
      material: "products.items.lumber.material",
      finish: "products.items.lumber.finish",
    },
  },
  {
    id: "8",
    nameKey: "products.items.plywoodOsbCdx.name",
    categoryKey: "products.items.plywoodOsbCdx.category",
    images: plywoodImages,
    speciesImages: {
      softwood: plywoodImages,
      hardwood: plywoodImages,
    },
    descriptionKey: "products.items.plywoodOsbCdx.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.plywoodOsbCdx.dimensions",
      material: "products.items.plywoodOsbCdx.material",
      finish: "products.items.plywoodOsbCdx.finish",
    },
  },
  {
    id: "9",
    nameKey: "products.items.logsChips.name",
    categoryKey: "products.items.logsChips.category",
    images: [...woodChipsSoftwoodImages, ...woodChipsHardwoodImages],
    speciesImages: {
      softwood: woodChipsSoftwoodImages,
      hardwood: woodChipsHardwoodImages,
    },
    descriptionKey: "products.items.logsChips.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.logsChips.dimensions",
      material: "products.items.logsChips.material",
      finish: "products.items.logsChips.finish",
    },
  },
]

const catalogPreviewImages = [
  { src: "/images/fotos-catalogo/1.png", className: "lg:-rotate-6 lg:-translate-y-4", alt: "Catalog cover preview" },
  { src: "/images/fotos-catalogo/5.png", className: "lg:translate-y-3", alt: "Catalog product spread" },
  { src: "/images/fotos-catalogo/7.png", className: "lg:rotate-6 lg:-translate-y-2", alt: "Catalog hardwood section" },
]

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeFilters, setActiveFilters] = useState<Array<"softwood" | "hardwood">>([])
  const { t } = useLanguage()

  const preferredSpecies: "softwood" | "hardwood" | null =
    activeFilters.length === 1 ? activeFilters[0] : null

  const getDisplayedImages = (product: Product) => {
    if (preferredSpecies && product.speciesImages?.[preferredSpecies]?.length) {
      return product.speciesImages[preferredSpecies]!
    }

    if (!preferredSpecies && product.images.length) {
      return product.images
    }

    const combinedImages = [
      ...(product.speciesImages?.softwood ?? []),
      ...(product.speciesImages?.hardwood ?? []),
    ]

    if (combinedImages.length) {
      return combinedImages
    }

    return product.images
  }

  const filters = [
    {
      value: "all",
      label: t("products.filters.all") ?? "All",
      icon: Filter,
    },
    {
      value: "softwood",
      label: t("products.filters.softwood") ?? "Softwood (Pine)",
      icon: Trees,
    },
    {
      value: "hardwood",
      label: t("products.filters.hardwood") ?? "Hardwood (Eucalyptus)",
      icon: Sprout,
    },
  ] as const

  const toggleFilter = (value: (typeof filters)[number]["value"]) => {
    if (value === "all") {
      setActiveFilters([])
      return
    }

    setActiveFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      }
      return [...prev, value]
    })
  }

  const filteredProducts = useMemo(() => {
    if (!activeFilters.length) return products
    return products.filter((product) => product.species.some((species) => activeFilters.includes(species)))
  }, [activeFilters])

  return (
    <>
      <section id="products" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("categories.title")}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center mb-12">
            {filters.map(({ value, label, icon: Icon }) => {
              const isActive = value !== "all" ? activeFilters.includes(value) : !activeFilters.length
              return (
                <button
                  type="button"
                  key={value}
                  onClick={() => toggleFilter(value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isActive ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-white/80 border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              )
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const displayedImages = getDisplayedImages(product)
              const mainImage = displayedImages[0] || "/placeholder.svg"

              return (
                <Card
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-border/40 bg-white/95 dark:bg-card/95 shadow-[0_12px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300 animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProduct({ ...product, images: displayedImages })}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200/40 dark:bg-neutral-800/60">
                    <img
                      src={mainImage}
                      alt={t(product.nameKey)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="rounded-full">
                        <Eye className="mr-2 h-5 w-5" />
                        {t("products.viewDetails")}
                      </Button>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {t(product.categoryKey)}
                    </Badge>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t(product.nameKey)}
                    </h3>
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                      {t(`products.availability.${product.availability}`)}
                    </div>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">{t(product.descriptionKey)}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Catalog CTA */}
          <div className="mt-16">
            <Card className="overflow-hidden rounded-[32px] border border-border/40 bg-white/95 dark:bg-card/95 shadow-[0_25px_70px_rgba(15,23,42,0.22)]">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center p-6 sm:p-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    PDF 2025
                    <span className="text-muted-foreground text-[0.7rem] tracking-normal">{t("catalogSection.secondary")}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">{t("catalogSection.title")}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{t("catalogSection.subtitle")}</p>
                  </div>
                  <ul className="space-y-3">
                    {["one", "two"].map((key) => (
                      <li key={key} className="flex items-start gap-4">
                        <div className="rounded-2xl bg-primary/10 p-3">
                          <FileDown className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{t(`catalogSection.bullets.${key}`)}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {t("catalogSection.secondary")}
                  </p>
                  <Button size="lg" className="rounded-full px-10 py-6 text-base shadow-[0_15px_45px_rgba(15,23,42,0.25)]" asChild>
                    <a href="/files/catalogo-trademad.pdf" target="_blank" rel="noopener noreferrer">
                      {t("catalogSection.cta")}
                      <FileDown className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>

                <div className="relative">
                  <div className="hidden lg:flex items-center justify-center gap-8">
                    {catalogPreviewImages.map((image, index) => (
                      <div
                        key={image.src}
                        className={cn(
                          "w-48 h-72 rounded-[28px] border border-white/70 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.2)] overflow-hidden transition-all",
                          image.className
                        )}
                        style={{ zIndex: index + 1 }}
                      >
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="lg:hidden grid grid-cols-3 gap-3">
                    {catalogPreviewImages.map((image) => (
                      <div key={`mobile-${image.src}`} className="rounded-2xl overflow-hidden border border-white/50 shadow">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} open={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}
