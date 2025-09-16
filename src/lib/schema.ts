// Schema.org structured data utilities for medical website

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Javier del Rosario",
  "jobTitle": "Urólogo",
  "description": "Médico especialista en urología con 25 años de experiencia en Panamá",
  "knowsAbout": [
    "Urología",
    "Cirugía de próstata",
    "Cálculos renales", 
    "Litotricia",
    "Vasectomía",
    "Biopsias de próstata",
    "Hiperplasia prostática benigna",
    "Disfunción eréctil"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Universidad especializada en medicina"
  },
  "memberOf": {
    "@type": "MedicalOrganization", 
    "name": "Sociedad Panameña de Urología"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Panamá"
  }
});

export const generateMedicalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic"],
  "name": "Dr. Javier del Rosario - The Panama Clinic",
  "description": "Clínica especializada en urología con atención personalizada y tecnología avanzada",
  "medicalSpecialty": "Urology",
  "founder": {
    "@type": "Person",
    "name": "Dr. Javier del Rosario"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "The Panama Clinic",
      "addressLocality": "Ciudad de Panamá", 
      "addressRegion": "Panamá",
      "addressCountry": "PA"
    },
    {
      "@type": "PostalAddress", 
      "streetAddress": "Clínica Hospital San Fernando Coronado",
      "addressLocality": "Coronado",
      "addressRegion": "Panamá Oeste", 
      "addressCountry": "PA"
    },
    {
      "@type": "PostalAddress", 
      "streetAddress": "Centro Médico del Caribe-Colón",
      "addressLocality": "Colón",
      "addressRegion": "Colón", 
      "addressCountry": "PA"
    }
  ],
  "telephone": "+507-6000-0000",
  "url": "https://drjavierdelrosario.com",
  "sameAs": [
    "https://wa.me/50760000000"
  ],
  "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
  "acceptedPaymentMethod": [
    "Cash",
    "CreditCard", 
    "Insurance"
  ],
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Urológicos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Vasectomía"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Litotricia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure", 
          "name": "Biopsia de próstata"
        }
      }
    ]
  }
});

export const generateMedicalConditionSchema = (condition: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": condition,
  "description": description,
  "possibleTreatment": {
    "@type": "MedicalTherapy",
    "name": `Tratamiento urológico para ${condition.toLowerCase()}`
  },
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Urología"
  }
});

export const generateMedicalProcedureSchema = (
  procedureName: string,
  description: string,
  indication: string,
  followup: string
) => ({
  "@context": "https://schema.org", 
  "@type": "MedicalProcedure",
  "name": procedureName,
  "description": description,
  "indication": indication,
  "followup": followup,
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Urología"
  },
  "performer": {
    "@type": "Person",
    "name": "Dr. Javier del Rosario",
    "jobTitle": "Urólogo"
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite", 
  "name": "Dr. Javier del Rosario - Urólogo Panamá",
  "url": "https://drjavierdelrosario.com",
  "description": "Sitio web oficial del Dr. Javier del Rosario, urólogo especialista en Panamá",
  "publisher": {
    "@type": "Person",
    "name": "Dr. Javier del Rosario"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://drjavierdelrosario.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "MedicalBusiness",
    "name": "Consulta Urológica Dr. Javier del Rosario"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const generateArticleSchema = (
  title: string,
  description: string,
  publishDate: string,
  modifiedDate: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": "Dr. Javier del Rosario",
    "jobTitle": "Urólogo"
  },
  "publisher": {
    "@type": "Person",
    "name": "Dr. Javier del Rosario"
  },
  "datePublished": publishDate,
  "dateModified": modifiedDate,
  "url": url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  "about": {
    "@type": "MedicalSpecialty",
    "name": "Urología"
  }
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://drjavierdelrosario.com",
  "name": "Dr. Javier del Rosario - Urólogo",
  "description": "Consulta urológica especializada en Panamá",
  "url": "https://drjavierdelrosario.com",
  "telephone": "+507-6000-0000",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Consultorios médicos",
    "addressLocality": "Ciudad de Panamá, Coronado, Colón", 
    "addressRegion": "Panamá",
    "postalCode": "00000",
    "addressCountry": "PA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.9824",
    "longitude": "-79.5199"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://wa.me/50760000000"
  ]
});