import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Activity, Zap, Target, ScanLine } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Activity,
      title: t('services.prostate.title'),
      description: t('services.prostate.desc'),
      color: 'text-blue-600',
    },
    {
      icon: Zap,
      title: t('services.kidney.title'),
      description: t('services.kidney.desc'),
      color: 'text-emerald-600',
    },
    {
      icon: Target,
      title: t('services.biopsy.title'),
      description: t('services.biopsy.desc'),
      color: 'text-purple-600',
    },
    {
      icon: ScanLine,
      title: t('services.ultrasound.title'),
      description: t('services.ultrasound.desc'),
      color: 'text-orange-600',
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="medical-card group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className={`w-8 h-8 text-primary`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <Link to="/servicios">
                  <Button variant="ghost" className="w-full justify-start p-0 text-primary hover:text-primary-hover">
                    {t('services.learn.more')} →
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;