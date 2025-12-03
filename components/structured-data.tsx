export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TradeMad Brazil",
    "alternateName": "TradeMad Brasil",
    "url": "https://trademad.com.br",
    "logo": "https://trademad.com.br/images/logo-trademad.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-47-99101-050",
      "contactType": "sales",
      "availableLanguage": ["en-US", "pt-BR", "es"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Peterson André Machado, 103 - Apto 00140",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://wa.me/554799101050"
    ],
    "description": "TradeMad Brazil specializes in high-quality engineered wood panels, solid lumber, veneers, and raw materials. Sustainably sourced pine and eucalyptus products from South America to global markets.",
    "industry": "Timber Trading",
    "foundingLocation": "Brazil",
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Wood Products",
      "Lumber Trading", 
      "Pine Lumber",
      "Eucalyptus Lumber",
      "Engineered Wood Panels",
      "International Timber Trade",
      "Wood Manufacturing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wood Products Catalog",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Edge Glued Panels",
          "category": "Engineered Wood Panels",
          "material": "Pine & Eucalyptus"
        },
        {
          "@type": "Product", 
          "name": "Lumber",
          "category": "Solid Wood Lumber",
          "material": "Pine & Eucalyptus"
        },
        {
          "@type": "Product",
          "name": "Plywood",
          "category": "Engineered Panels", 
          "material": "Pine & Eucalyptus"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
