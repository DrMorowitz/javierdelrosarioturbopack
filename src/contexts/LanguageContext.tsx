'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Sobre Mí', en: 'About Me' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.appointment': { es: 'Agendar Cita', en: 'Schedule Appointment' },

  // Hero Section
  'hero.title': { 
    es: 'Cuidado Urológico Integral Con La Atención Que Usted Merece', 
    en: 'Comprehensive Urological Care With The Attention You Deserve' 
  },
  'hero.subtitle': { 
    es: 'Desde chequeos preventivos hasta cirugías especializadas, el Dr. Javier del Rosario ofrece tratamiento completo con el tiempo y la explicación que cada paciente necesita.', 
    en: 'From preventive checkups to specialized surgeries, Dr. Javier del Rosario offers complete treatment with the time and explanation each patient needs.' 
  },
  'hero.cta.primary': { es: 'Agendar Consulta', en: 'Schedule Consultation' },
  'hero.cta.whatsapp': { es: 'WhatsApp', en: 'WhatsApp' },

  // Stats Section
  'stats.title': { es: 'Experiencia que Inspira Confianza', en: 'Experience That Inspires Trust' },
  'stats.experience': { es: '25+ Años de Experiencia', en: '25+ Years of Experience' },
  'stats.procedures': { es: '5,000+ Procedimientos Realizados', en: '5,000+ Procedures Performed' },
  'stats.locations': { es: '3 Ubicaciones: The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón', en: '3 Locations: The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón' },

  // Services Section
  'services.title': { es: 'Servicios de Urología en Panamá', en: 'Urology Services in Panama' },
  'services.vasectomy.title': { es: 'Vasectomía en Panamá', en: 'Vasectomy in Panama' },
  'services.vasectomy.desc': { es: 'Procedimiento mínimamente invasivo con técnica sin bisturí y recuperación rápida', en: 'Minimally invasive procedure with no-scalpel technique and quick recovery' },
  'services.kidney.title': { es: 'Cálculos Renales - Litotricia', en: 'Kidney Stones - Lithotripsy' },
  'services.kidney.desc': { es: 'Ureteroscopía flexible y litotricia extracorpórea con tecnología avanzada', en: 'Flexible ureteroscopy and extracorporeal lithotripsy with advanced technology' },
  'services.prostate.title': { es: 'Hiperplasia Prostática (HPB)', en: 'Benign Prostatic Hyperplasia (BPH)' },
  'services.prostate.desc': { es: 'Terapia Rezum y cirugía láser para próstata agrandada sin incisiones', en: 'Rezum therapy and laser surgery for enlarged prostate without incisions' },
  'services.circumcision.title': { es: 'Circuncisión en Panamá', en: 'Circumcision in Panama' },
  'services.circumcision.desc': { es: 'Procedimiento para adultos y pediatría con técnica de mínima invasión', en: 'Adult and pediatric procedure with minimally invasive technique' },
  'services.learn.more': { es: 'Agendar evaluación', en: 'Schedule evaluation' },

  // Why Choose Section
  'why.title': { es: '¿Por qué elegir al Dr. del Rosario?', en: 'Why choose Dr. del Rosario?' },
  'why.education.title': { es: 'Explicaciones Educativas', en: 'Educational Explanations' },
  'why.education.desc': { es: 'Como una clase universitaria', en: 'Like a university class' },
  'why.followup.title': { es: 'Seguimiento Personalizado', en: 'Personalized Follow-up' },
  'why.followup.desc': { es: 'Más allá de la consulta', en: 'Beyond the consultation' },
  'why.bilingual.title': { es: 'Atención Bilingüe', en: 'Bilingual Care' },
  'why.bilingual.desc': { es: 'Español e inglés', en: 'Spanish and English' },

  // Testimonials Section
  'testimonials.title': { es: 'La Confianza de Miles de Pacientes', en: 'The Trust of Thousands of Patients' },
  'insurance.title': { es: 'Seguros Médicos Aceptados', en: 'Accepted Medical Insurance' },

  // Contact Section
  'contact.title': { es: '¿Listo para tu Consulta?', en: 'Ready for your Consultation?' },
  'contact.name': { es: 'Nombre completo', en: 'Full name' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.reason': { es: 'Motivo de consulta', en: 'Reason for consultation' },
  'contact.location': { es: 'Ubicación preferida', en: 'Preferred location' },
  'contact.insurance': { es: 'Seguro médico (opcional)', en: 'Medical insurance (optional)' },
  'contact.submit': { es: 'Enviar Consulta', en: 'Submit Consultation' },
  'contact.cliniweb': { es: 'Agendar en CliniWeb', en: 'Schedule on CliniWeb' },
  
  // Blog Section
  'blog.title': { es: 'Educación Urológica', en: 'Urological Education' },
  'blog.subtitle': { es: 'Información basada en evidencia científica para pacientes informados', en: 'Evidence-based information for informed patients' },
  'blog.condiciones.title': { es: 'Condiciones Comunes', en: 'Common Conditions' },
  'blog.condiciones.desc': { es: 'Cálculos renales, infecciones urinarias y más', en: 'Kidney stones, urinary infections and more' },
  'blog.sintomas.title': { es: 'Síntomas de Alerta', en: 'Warning Symptoms' },
  'blog.sintomas.desc': { es: 'Cuándo consultar urgentemente al urólogo', en: 'When to urgently consult a urologist' },
  'blog.prevencion.title': { es: 'Prevención y Cuidado', en: 'Prevention and Care' },
  'blog.prevencion.desc': { es: 'Consejos para una buena salud urológica', en: 'Tips for good urological health' },
  'blog.procedimientos.title': { es: 'Procedimientos Explicados', en: 'Procedures Explained' },
  'blog.procedimientos.desc': { es: 'Qué esperar en cada tratamiento', en: 'What to expect in each treatment' },
  'blog.preguntas.title': { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
  'blog.preguntas.desc': { es: 'Respuestas a dudas comunes sobre costos y procedimientos', en: 'Answers to common questions about costs and procedures' },
  'blog.visit.blog': { es: 'Ver todos los artículos', en: 'See all articles' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};