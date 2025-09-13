import React from 'react';
import { MedicalNavbar } from '@/components/ui/navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <MedicalNavbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;