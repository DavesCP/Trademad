"use client";

import { useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Filter, Trees, Sprout, FileDown } from "lucide-react";
import { ProductModal } from "./product-modal";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

type Product = {
  id: string;
  nameKey: string;
  categoryKey: string;
  images: string[];
  speciesImages?: {
    softwood?: string[];
    hardwood?: string[];
  };
  descriptionKey: string;
  species: Array<"softwood" | "hardwood">;
  availability?: "cutToSize" | "underRequest";
  specificationsKeys: {
    dimensions: string;
    material: string;
    finish: string;
  };
};

// Edge Glued Panels - separating by species
const edgeGluedPanelSoftwoodImages = [
  "/images/fotos-produtos/Edge Glued Panels (Softwood)/103-5012-1_042523.jpg",
  "/images/fotos-produtos/Edge Glued Panels (Softwood)/103-5012-3_042523.jpg",
  "/images/fotos-produtos/Edge Glued Panels (Softwood)/Shopifypanel-wide_400x.jpg",
  "/images/fotos-produtos/Edge Glued Panels (Softwood)/softwood-boards-64307544-c3_600.jpg",
  "/images/fotos-produtos/Edge Glued Panels (Softwood)/images-4.jpeg",
  "/images/fotos-produtos/Edge Glued Panels (Softwood)/3924bc82-30ca-400a-b0dd-2523c6fc90be.e638cd23502eaa374962948d6a622c03.jpeg",
];

// Edge Glued Panels Hardwood - usando fotos da pasta específica
const edgeGluedPanelHardwoodImages = [
  "/images/fotos-produtos/Edge Glued Panels (Hardwood)/edge-glued-boardl_eucalyptus.jpg",
  "/images/fotos-produtos/Edge Glued Panels (Hardwood)/painel-17-mm1-06df41d39e0e122e7116929698938063-1024-1024.jpg",
];

const edgeGluedPanelImages = [
  ...edgeGluedPanelSoftwoodImages,
  ...edgeGluedPanelHardwoodImages,
];

// Round Glued Panels - usando fotos da pasta específica
const roundGluedPanelImages = [
  "/images/fotos-produtos/Round Glued Panels (Softwood)/images-5.jpeg",
  "/images/fotos-produtos/Round Glued Panels (Softwood)/Round-Pine-Edge-Glued-Board_96185a4d-f866-4773-aa25-67de80fe39f6_1.dd6a4243f9f14108552c2d20b3f59195.jpeg",
];

// Flat Jambs - apenas pinho - Raw e Primed
const flatJambRawImages = [
  "/images/fotos-produtos/Raw Flat Jambs (Softwood)/FJPMD-478-68.jpg",
  "/images/fotos-produtos/Raw Flat Jambs (Softwood)/images-8.jpeg",
];

const flatJambPrimedImages = [
  "/images/fotos-produtos/Raw Flat Jambs (Softwood)/primed-white-alexandria-moulding-casing-4203v-rv082c5d3-64_600.jpg",
  "/images/fotos-produtos/Primed Flat Jambs (Softwood)/Primed Flat Jambs (Softwood)/Hd65e05465e8446299c03659c2b222f05v(1).jpg",
  "/images/fotos-produtos/Primed Flat Jambs (Softwood)/Primed Flat Jambs (Softwood)/interior_door_jamb.jpg",
];

const flatJambImages = [...flatJambRawImages, ...flatJambPrimedImages];

// Moldings - apenas pinho - incluindo Raw e Primed
const moldingImages = [
  "/images/fotos-produtos/Raw Moldings (Softwood)/images-9.jpeg",
  "/images/fotos-produtos/Raw Moldings (Softwood)/images-10.jpeg",
  "/images/fotos-produtos/Primed Moldings (Softwood)/images-11.jpeg",
  "/images/fotos-produtos/Primed Moldings (Softwood)/images-12.jpeg",
];

// Scantling - separating by species
// Pine Scantling Softwood - usando fotos da subpasta dentro de Pine Stake
const scantlingSoftwoodImages = [
  "/images/fotos-produtos/Pine Stake (softwood)/Pine Scantling (Softwood)/BLANKS-PINE-FINGER-JOINT-LAYERED-LAMINATE-2.jpg",
  "/images/fotos-produtos/Pine Stake (softwood)/Pine Scantling (Softwood)/proyectos-perfiles-DDD.jpg",
];

const scantlingHardwoodImages = [
  "/images/fotos-produtos/Eucalyptus Scantling (Hardwood)/file_00000000729c720ea2d432ee785eadae.png",
  "/images/fotos-produtos/Eucalyptus Scantling (Hardwood)/H629a9fa487d247e5b7845e108eeb1cd9z.jpg",
];

const scantlingImages = [
  ...scantlingSoftwoodImages,
  ...scantlingHardwoodImages,
];

// Stake Lumber - usando fotos das pastas renomeadas
const stakeLumberSoftwoodImages = [
  "/images/fotos-produtos/Pine Stake (softwood)/s-l1200.jpg",
  "/images/fotos-produtos/Pine Stake (softwood)/Wood-Stakes-Pine-48PSX1-v2_1500x1500(1).jpg",
];

const stakeLumberHardwoodImages = [
  "/images/fotos-produtos/Eucalyptus Stake (Hardwood)/stake_eucalyptus_01.jpg",
  "/images/fotos-produtos/Eucalyptus Stake (Hardwood)/stake_eucalyptus_02.jpg",
];

const stakeLumberImages = [
  ...stakeLumberSoftwoodImages,
  ...stakeLumberHardwoodImages,
];

// Lumber - separating by species
const lumberSoftwoodImages = [
  "/images/fotos-produtos/Pine Lumber (Softwood)/IMG-20251128-WA0186.jpg",
  "/images/fotos-produtos/Pine Lumber (Softwood)/TABUAS-PINUS-1.jpg",
  "/images/fotos-produtos/Pine Lumber (Softwood)/Sem-Titulo-1-500x375.png",
];

const lumberHardwoodImages = [
  "/images/fotos-produtos/Eucalyptus Lumber (Hardwood)/2x4-Eucalyptus-LVL-Pine-High-Quality-Industrial-Style-Laminated-Veneer-Lumber-for-Exterior-Building-Construction-Meets-E1.jpg_300x300.jpg",
  "/images/fotos-produtos/Eucalyptus Lumber (Hardwood)/mini_347c38946edc73fd20a8979ba00899a3.jpg",
];

const lumberImages = [...lumberSoftwoodImages, ...lumberHardwoodImages];

// Plywood - agora tem pasta Softwood também
const plywoodSoftwoodImages = [
  "/images/fotos-produtos/Plywood (Softwood)/Pine18TG-01719000147-600x600.png",
  "/images/fotos-produtos/Plywood (Softwood)/s-l400.jpg",
];

const plywoodHardwoodImages = [
  "/images/fotos-produtos/Plywood (Hardwood)/images-6.jpeg",
  "/images/fotos-produtos/Plywood (Hardwood)/images-7.jpeg",
];

const plywoodImages = [...plywoodSoftwoodImages, ...plywoodHardwoodImages];

// Veneers/Laminas - separating by species
const veneersSoftwoodImages = [
  "/images/fotos-produtos/laminas (softwood)/pinho-lamina.jpeg",
]

const veneersHardwoodImages = [
  "/images/fotos-produtos/laminas (hardwood)/eucalypto-lamina.jpeg",
]

const veneersImages = [...veneersSoftwoodImages, ...veneersHardwoodImages]

// Logs & Chips - categoria isolada
const logsChipsImages = [
  "/images/fotos-produtos/Logs - Chips/IMG-20251017-WA0012.jpg",
  "/images/fotos-produtos/Logs - Chips/IMG-20251017-WA0013.jpg",
  "/images/fotos-produtos/Logs - Chips/IMG-20251017-WA0035.jpg",
];

const products: Product[] = [
  {
    id: "1",
    nameKey: "products.items.edgeGluedPanel.name",
    categoryKey: "products.items.edgeGluedPanel.category",
    images: edgeGluedPanelImages,
    speciesImages: {
      softwood: edgeGluedPanelSoftwoodImages,
      hardwood: edgeGluedPanelHardwoodImages,
    },
    descriptionKey: "products.items.edgeGluedPanel.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.edgeGluedPanel.dimensions",
      material: "products.items.edgeGluedPanel.material",
      finish: "products.items.edgeGluedPanel.finish",
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
    species: ["softwood"],
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
    species: ["softwood"],
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
    species: ["softwood"],
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
    images: stakeLumberImages,
    speciesImages: {
      softwood: stakeLumberSoftwoodImages,
      hardwood: stakeLumberHardwoodImages,
    },
    descriptionKey: "products.items.stakeLumber.description",
    species: ["softwood", "hardwood"],
    availability: "cutToSize",
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
    images: lumberImages,
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
      softwood: plywoodSoftwoodImages,
      hardwood: plywoodHardwoodImages,
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
    nameKey: "products.items.veneers.name",
    categoryKey: "products.items.veneers.category",
    images: veneersImages,
    speciesImages: {
      softwood: veneersSoftwoodImages,
      hardwood: veneersHardwoodImages,
    },
    descriptionKey: "products.items.veneers.description",
    species: ["softwood", "hardwood"],
    availability: "underRequest",
    specificationsKeys: {
      dimensions: "products.items.veneers.dimensions",
      material: "products.items.veneers.material",
      finish: "products.items.veneers.finish",
    },
  },
  {
    id: "10",
    nameKey: "products.items.logsChips.name",
    categoryKey: "products.items.logsChips.category",
    images: logsChipsImages,
    speciesImages: {
      softwood: logsChipsImages,
      hardwood: logsChipsImages,
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
];

const catalogPreviewImages = [
  {
    src: "/images/fotos-catalogo/1.png",
    className: "lg:-rotate-6 lg:-translate-y-4",
    alt: "Catalog cover preview",
  },
  {
    src: "/images/fotos-catalogo/3.png",
    className: "lg:translate-y-3",
    alt: "Catalog product spread",
  },
  {
    src: "/images/fotos-catalogo/5.png",
    className: "lg:rotate-6 lg:-translate-y-2",
    alt: "Catalog hardwood section",
  },
];

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilters, setActiveFilters] = useState<
    Array<"softwood" | "hardwood">
  >([]);
  const { t } = useLanguage();

  const preferredSpecies: "softwood" | "hardwood" | null =
    activeFilters.length === 1 ? activeFilters[0] : null;

  const getDisplayedImages = (product: Product) => {
    if (preferredSpecies && product.speciesImages?.[preferredSpecies]?.length) {
      return product.speciesImages[preferredSpecies]!;
    }

    if (!preferredSpecies && product.images.length) {
      return product.images;
    }

    const combinedImages = [
      ...(product.speciesImages?.softwood ?? []),
      ...(product.speciesImages?.hardwood ?? []),
    ];

    if (combinedImages.length) {
      return combinedImages;
    }

    return product.images;
  };

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
  ] as const;

  const toggleFilter = (value: (typeof filters)[number]["value"]) => {
    if (value === "all") {
      setActiveFilters([]);
      return;
    }

    setActiveFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
  };

  const filteredProducts = useMemo(() => {
    if (!activeFilters.length) return products;
    return products.filter((product) =>
      product.species.some((species) => activeFilters.includes(species))
    );
  }, [activeFilters]);

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
              const isActive =
                value !== "all"
                  ? activeFilters.includes(value)
                  : !activeFilters.length;
              return (
                <button
                  type="button"
                  key={value}
                  onClick={() => toggleFilter(value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background/80 dark:bg-card/80 border-border text-muted-foreground hover:text-foreground hover:bg-background dark:hover:bg-card"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const displayedImages = getDisplayedImages(product);
              return (
                <Card
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-border/40 bg-white/95 dark:bg-card/95 shadow-[0_12px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300 animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200/40 dark:bg-neutral-800/60">
                    <img
                      src={displayedImages[0] || "/placeholder.svg"}
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

                    {/* Species Tags */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1">
                      {product.species.includes("softwood") && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-100"
                        >
                          <Trees className="w-3 h-3 mr-1" />
                          {t("products.species.pine")}
                        </Badge>
                      )}
                      {product.species.includes("hardwood") && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900 dark:text-amber-100"
                        >
                          <Sprout className="w-3 h-3 mr-1" />
                          {t("products.species.eucalyptus")}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t(product.nameKey)}
                    </h3>
                    {product.availability && (
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                        {t(`products.availability.${product.availability}`)}
                      </div>
                    )}
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {t(product.descriptionKey)}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Catalog CTA */}
          <div className="mt-16">
            <Card className="overflow-hidden rounded-[32px] border border-border/40 bg-white/95 dark:bg-card/95 shadow-[0_25px_70px_rgba(15,23,42,0.22)]">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center p-6 sm:p-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    PDF 2025
                    <span className="text-muted-foreground text-[0.7rem] tracking-normal">
                      {t("catalogSection.secondary")}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                      {t("catalogSection.title")}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t("catalogSection.subtitle")}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {["one", "two"].map((key) => (
                      <li key={key} className="flex items-start gap-4">
                        <div className="rounded-2xl bg-primary/10 p-3">
                          <FileDown className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t(`catalogSection.bullets.${key}`)}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {t("catalogSection.secondary")}
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full px-10 py-6 text-base shadow-[0_15px_45px_rgba(15,23,42,0.25)]"
                    onClick={async () => {
                      try {
                        const response = await fetch(
                          "/files/TradeMad-catalog (5).pdf"
                        );
                        if (!response.ok) throw new Error("PDF não encontrado");
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement("a");
                        link.href = url;
                        link.download = "Catalogo Trademad.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                      } catch (error) {
                        console.error("Erro ao baixar PDF:", error);
                        window.open(
                          "/files/TradeMad-catalog (5).pdf",
                          "_blank"
                        );
                      }
                    }}
                  >
                    {t("catalogSection.cta")}
                    <FileDown className="ml-2 h-5 w-5" />
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
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="lg:hidden grid grid-cols-3 gap-3">
                    {catalogPreviewImages.map((image) => (
                      <div
                        key={`mobile-${image.src}`}
                        className="rounded-2xl overflow-hidden border border-white/50 shadow"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
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
        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          displayedImages={getDisplayedImages(selectedProduct)}
        />
      )}
    </>
  );
}
