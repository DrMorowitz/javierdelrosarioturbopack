"use client";

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

// Metadata moved to layout.tsx since this is now a client component

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
        {/* Temporarily commented out components causing build issues */}
        {/* <ServicesSection />
        <FeatureSection />
        <BlogSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection /> */}
      </main>
    </div>
  );
}