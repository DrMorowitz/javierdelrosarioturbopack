import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  return (
    <section className="hero-section">
      {/* Video Background Placeholder */}
      <div className="hero-video-bg">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          {/* This would be replaced with actual video */}
        </div>
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-20 section-container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-primary w-full sm:w-auto"
              asChild
            >
              <a href="/contacto">
                {t('hero.cta.primary')}
              </a>
            </Button>
            
            <Button 
              className="btn-whatsapp w-full sm:w-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('hero.cta.whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;