import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: "El Dr. del Rosario explicó mi procedimiento de manera tan clara que me sentí completamente tranquilo. Su seguimiento post-operatorio es excepcional.",
      author: "Paciente masculino, 68 años",
      rating: 5,
    },
    {
      text: "Después de 25 años de experiencia, se nota su expertise. La cirugía de próstata fue un éxito total y mi recuperación fue más rápida de lo esperado.",
      author: "Paciente masculino, 72 años", 
      rating: 5,
    },
    {
      text: "Su capacidad para explicar conceptos médicos complejos de manera simple es impresionante. Me sentí muy bien informado durante todo el proceso.",
      author: "Paciente masculino, 55 años",
      rating: 5,
    },
  ];

  const insuranceProviders = [
    "Assa Compañía de Seguros",
    "Seguros Suramericana",
    "Mapfre Panamá",
    "Seguros Fedpa",
    "Pan-American Life Insurance",
    "Seguros Vivir",
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="medical-card">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary mr-3" />
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-medium text-foreground">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* Insurance Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            {t('insurance.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {insuranceProviders.map((provider, index) => (
              <div key={index} className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-colors">
                <p className="text-sm font-medium text-muted-foreground text-center">
                  {provider}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;