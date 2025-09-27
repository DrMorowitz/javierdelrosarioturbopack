import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import FeatureSection from '@/components/FeatureSection';
import BlogSection from '@/components/BlogSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import { 
  generatePersonSchema, 
  generateMedicalBusinessSchema, 
  generateWebsiteSchema,
  generateLocalBusinessSchema 
} from '@/lib/schema';
import type { Metadata } from 'next';

// Generate comprehensive schema markup for homepage
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateWebsiteSchema(),
    generatePersonSchema(),
    generateMedicalBusinessSchema(),
    generateLocalBusinessSchema()
  ]
};

export const metadata: Metadata = {
  title: "Dr. Javier del Rosario - Urólogo Especialista en Panamá | 25 Años de Experiencia",
  description: "Dr. Javier del Rosario, urólogo especialista en Panamá con 25 años de experiencia. Vasectomía, cálculos renales, próstata. Consultas en The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón. ☎️ Agenda tu cita.",
  keywords: "urólogo panamá, vasectomía panamá, cálculos renales panamá, próstata panamá, urólogo colón, urólogo coronado, biopsias próstata, hiperplasia prostática, disfunción eréctil",
  openGraph: {
    title: "Dr. Javier del Rosario - Urólogo Especialista en Panamá",
    description: "Urólogo especialista con 25 años de experiencia en Panamá. Consultas médicas especializadas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Javier del Rosario - Urólogo Especialista en Panamá",
    description: "Urólogo especialista con 25 años de experiencia en Panamá.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <FeatureSection />
        <BlogSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}