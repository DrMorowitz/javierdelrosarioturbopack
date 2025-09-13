import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Heart, Globe2 } from 'lucide-react';

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      title: t('why.education.title'),
      description: t('why.education.desc'),
    },
    {
      icon: Heart,
      title: t('why.followup.title'),
      description: t('why.followup.desc'),
    },
    {
      icon: Globe2,
      title: t('why.bilingual.title'),
      description: t('why.bilingual.desc'),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;