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
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.appointment': { es: 'Agendar Cita', en: 'Schedule Appointment' },

  // Hero Section
  'hero.title': { 
    es: 'Dr. Javier del Rosario - Urólogo Especialista en Panamá | 25 Años de Experiencia', 
    en: 'Dr. Javier del Rosario - Urology Specialist in Panama | 25 Years of Experience' 
  },
  'hero.subtitle': { 
    es: 'Especialista en cirugía de próstata, cálculos renales y biopsias. Con explicaciones claras como una clase universitaria y seguimiento personalizado.', 
    en: 'Specialist in prostate surgery, kidney stones, and biopsies. With clear explanations like a university class and personalized follow-up.' 
  },
  'hero.cta.primary': { es: 'Agendar Consulta', en: 'Schedule Consultation' },
  'hero.cta.whatsapp': { es: 'WhatsApp', en: 'WhatsApp' },

  // Stats Section
  'stats.title': { es: 'Experiencia que Inspira Confianza', en: 'Experience That Inspires Trust' },
  'stats.experience': { es: '25+ Años de Experiencia', en: '25+ Years of Experience' },
  'stats.procedures': { es: '5,000+ Procedimientos Realizados', en: '5,000+ Procedures Performed' },
  'stats.locations': { es: '2 Ubicaciones: Colón y Coronado', en: '2 Locations: Colón and Coronado' },

  // Services Section
  'services.title': { es: 'Servicios Especializados', en: 'Specialized Services' },
  'services.prostate.title': { es: 'Cirugías de Próstata', en: 'Prostate Surgeries' },
  'services.prostate.desc': { es: 'RTU y Fotovaporización láser', en: 'TURP and Laser Photovaporization' },
  'services.kidney.title': { es: 'Cirugías de Cálculos Renales', en: 'Kidney Stone Surgeries' },
  'services.kidney.desc': { es: 'Ureteroscopía flexible y rígida', en: 'Flexible and Rigid Ureteroscopy' },
  'services.biopsy.title': { es: 'Biopsias de Próstata', en: 'Prostate Biopsies' },
  'services.biopsy.desc': { es: 'Procedimiento más común con seguimiento', en: 'Most common procedure with follow-up' },
  'services.ultrasound.title': { es: 'Ultrasonido Urológico', en: 'Urological Ultrasound' },
  'services.ultrasound.desc': { es: 'Incluido sin costo adicional', en: 'Included at no additional cost' },
  'services.learn.more': { es: 'Ver más', en: 'Learn more' },

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