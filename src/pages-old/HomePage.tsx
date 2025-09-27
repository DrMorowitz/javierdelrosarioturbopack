import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import FeatureSection from '@/components/FeatureSection';
import BlogSection from '@/components/BlogSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import { 
  generatePersonSchema, 
  generateMedicalBusinessSchema, 
  generateWebsiteSchema,
  generateLocalBusinessSchema 
} from '@/lib/schema';

const HomePage = () => {
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Dr. Javier del Rosario - Urólogo Especialista en Panamá | 25 Años de Experiencia"
        description="Dr. Javier del Rosario, urólogo especialista en Panamá con 25 años de experiencia. Vasectomía, cálculos renales, próstata. Consultas en The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón. ☎️ Agenda tu cita."
        keywords="urólogo panamá, vasectomía panamá, cálculos renales panamá, próstata panamá, urólogo colón, urólogo coronado, biopsias próstata, hiperplasia prostática, disfunción eréctil"
        schema={combinedSchema}
        type="website"
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
};

export default HomePage;