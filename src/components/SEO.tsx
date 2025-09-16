import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title = "Dr. Javier del Rosario - Urólogo Especialista en Panamá | 25 Años de Experiencia",
  description = "Dr. Javier del Rosario, urólogo especialista en Panamá con 25 años de experiencia. Cirugías de próstata, cálculos renales y biopsias. Consultas en The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón. Seguros médicos aceptados.",
  keywords = "urólogo panamá, vasectomía panamá, cálculos renales, próstata, biopsias, urólogo colón, urólogo coronado",
  image = "https://res.cloudinary.com/dp3gvxyft/image/upload/c_scale,w_1200,h_630,f_auto,q_auto/logos/logo",
  url,
  type = 'website',
  author = "Dr. Javier del Rosario",
  publishDate,
  modifiedDate,
  schema
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const siteName = "Dr. Javier del Rosario - Urólogo Panamá";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_PA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {type === 'article' && publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {type === 'article' && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Medical specific meta tags */}
      <meta name="medical-specialty" content="Urology" />
      <meta name="geo.region" content="PA" />
      <meta name="geo.placename" content="Panamá" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;