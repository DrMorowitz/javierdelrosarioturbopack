import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, MapPin } from 'lucide-react';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      number: '25+',
      text: t('stats.experience'),
    },
    {
      icon: Users,
      number: '5,000+',
      text: t('stats.procedures'),
    },
    {
      icon: MapPin,
      number: '2',
      text: t('stats.locations'),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('stats.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="medical-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="service-icon w-8 h-8" />
                  </div>
                </div>
                <div className="stat-number">{stat.number}</div>
                <p className="text-lg font-medium text-muted-foreground">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;