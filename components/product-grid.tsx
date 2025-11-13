"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { ProductModal } from "./product-modal"
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

const products: Product[] = [
  {
    id: "1",
    nameKey: "products.items.plywoodOsbCdx.name",
    categoryKey: "products.items.plywoodOsbCdx.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250221-WA0025-NULYUrrL3VHB1joFUY2lDQ9kj2n85m.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0030-CF2OfzLuhNuxlg5hcMgNrc6nTQBumV.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250221-WA0027-nnbpatzv8q4FadqjPzfifOguxEEC34.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250617-WA0077-tNZKE1X4LHRmTTg45FY1JP4kWsWOod.jpg",
    ],
    descriptionKey: "products.items.plywoodOsbCdx.description",
    specificationsKeys: {
      dimensions: "products.items.plywoodOsbCdx.dimensions",
      material: "products.items.plywoodOsbCdx.material",
      finish: "products.items.plywoodOsbCdx.finish",
    },
  },
  {
    id: "2",
    nameKey: "products.items.pineEucalyptusScantling.name",
    categoryKey: "products.items.pineEucalyptusScantling.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0034-CQPuQpmpX40P6zTHIcBKRGOFpz1oCp.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0022-uYGA3PgRqENNykZlItoEM32NBdcubw.jpg",
    ],
    descriptionKey: "products.items.pineEucalyptusScantling.description",
    specificationsKeys: {
      dimensions: "products.items.pineEucalyptusScantling.dimensions",
      material: "products.items.pineEucalyptusScantling.material",
      finish: "products.items.pineEucalyptusScantling.finish",
    },
  },
  {
    id: "3",
    nameKey: "products.items.pineLumber.name",
    categoryKey: "products.items.pineLumber.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251009-WA0082-8iR3eL5VaKV916EojoeTUuX2ZqqoZT.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0021-KtCNmdmg3Nfuvq9818YuhGE24W0VKh.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250807-WA0031-6pHSr8WcYTezvjsbSpjwz8M1p8rD33.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250506-WA0023-aSypfAdlofwQAbebFrqu9aHbhKvxnB.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0014-kzB5NiFoq2Upv5zyUxrK9bCw08uz3U.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0036-BgXTHqXmwllEXA0utfyYklaDaGkkSL.jpg",
    ],
    descriptionKey: "products.items.pineLumber.description",
    specificationsKeys: {
      dimensions: "products.items.pineLumber.dimensions",
      material: "products.items.pineLumber.material",
      finish: "products.items.pineLumber.finish",
    },
  },
  {
    id: "4",
    nameKey: "products.items.moldings.name",
    categoryKey: "products.items.moldings.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240921-WA0015-O8C1V3x6ApLIc5jRNUzb4MAyah3ioZ.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20241104-WA0106-9Jv2U4xLVOwdV9JqB4dQnrgToUzCzM.jpg",
    ],
    descriptionKey: "products.items.moldings.description",
    specificationsKeys: {
      dimensions: "products.items.moldings.dimensions",
      material: "products.items.moldings.material",
      finish: "products.items.moldings.finish",
    },
  },
  {
    id: "5",
    nameKey: "products.items.logsChips.name",
    categoryKey: "products.items.logsChips.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0013-d1OSOwofQ3RqWaZcrMSMYaTMkFZBcG.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0035-yEnreJojqJaDdul72URO4TCwfMdokk.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0012-hEvTADVjKwy1lmnx1y9WjKIzQ9125R.jpg",
    ],
    descriptionKey: "products.items.logsChips.description",
    specificationsKeys: {
      dimensions: "products.items.logsChips.dimensions",
      material: "products.items.logsChips.material",
      finish: "products.items.logsChips.finish",
    },
  },
  {
    id: "6",
    nameKey: "products.items.flatJambs.name",
    categoryKey: "products.items.flatJambs.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0020-BljA5P1nA66h4Uk6MylD7V7weJoVWu.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0053-6cCvYZkIHuG0hoAbD0daAErH77LTqp.jpg",
    ],
    descriptionKey: "products.items.flatJambs.description",
    specificationsKeys: {
      dimensions: "products.items.flatJambs.dimensions",
      material: "products.items.flatJambs.material",
      finish: "products.items.flatJambs.finish",
    },
  },
  {
    id: "7",
    nameKey: "products.items.eucalyptusLumber.name",
    categoryKey: "products.items.eucalyptusLumber.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0042-dw3SY1siiQDPXgs5MeaYzQfQAkf5D4.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251017-WA0024-svAsTeRO9PnGTz2ifHWGLGtu25Zvqx.jpg",
    ],
    descriptionKey: "products.items.eucalyptusLumber.description",
    specificationsKeys: {
      dimensions: "products.items.eucalyptusLumber.dimensions",
      material: "products.items.eucalyptusLumber.material",
      finish: "products.items.eucalyptusLumber.finish",
    },
  },
  {
    id: "8",
    nameKey: "products.items.edgeGluedPanels.name",
    categoryKey: "products.items.edgeGluedPanels.category",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250522-WA0100-sYdizk27Ya5DO01wckjh7ImtlikxQ7.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250904-WA0162-8JshNwdtwEXe6tXe0TGtpdFgx5r39M.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250904-WA0164-g3biKgDmMNLpT7KrlLt46BYXLDVOVO.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250930-WA0019-SFyuuLN9ZWTUbL2PjgJ5djrNAByEIr.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250925-WA0084-6yedzRnSc4t2171dzBntZP8q2p2BPf.jpg",
    ],
    descriptionKey: "products.items.edgeGluedPanels.description",
    specificationsKeys: {
      dimensions: "products.items.edgeGluedPanels.dimensions",
      material: "products.items.edgeGluedPanels.material",
      finish: "products.items.edgeGluedPanels.finish",
    },
  },
]

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { t } = useLanguage()

  return (
    <>
      <section id="products" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("categories.title")}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={t(product.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">{t(product.descriptionKey)}</p>
                </div>
              </Card>
            ))}
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
