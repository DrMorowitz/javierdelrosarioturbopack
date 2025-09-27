"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useMobileDetection } from '@/hooks/useMobileDetection';

interface Feature {
  step: string;
  title: string;
  content: string;
  image: string;
}

const FeatureSection = () => {
  const { isMobile, isLowPowerMode } = useMobileDetection();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const autoPlayInterval = 4000;

  const features: Feature[] = [
    {
      step: 'Paso 1',
      title: 'Atención Personalizada',
      content: 'Cada paciente recibe atención individual y cuidado personalizado según sus necesidades específicas.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    },
    {
      step: 'Paso 2', 
      title: 'Explicación Dedicada de tu Condición',
      content: 'Te explicamos detalladamente tu condición médica de manera clara y comprensible para que tomes decisiones informadas.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    },
    {
      step: 'Paso 3',
      title: 'Tratamientos Oportunos',
      content: 'Implementamos tratamientos efectivos en el momento adecuado para garantizar los mejores resultados.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    },
  ];

  useEffect(() => {
    if (isMobile || isLowPowerMode) return; // Skip auto-play on mobile
    
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval, isMobile, isLowPowerMode]);

  // Mobile version with images
  if (isMobile || isLowPowerMode) {
    return (
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu Camino Empieza Aquí
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre por qué miles de pacientes confían en nuestra experiencia
            </p>
          </div>
          
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                {/* Image for mobile */}
                <div className="relative h-48 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={feature.image}
                    alt={feature.step}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm">
                      {feature.step}
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Full animated version for desktop
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground">
          Tu Camino Empieza Aquí
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Steps - Left Side */}
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 font-bold",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground text-muted-foreground",
                  )}
                  animate={{
                    scale: index === currentFeature ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg">✓</span>
                  ) : (
                    <span className="text-lg">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.content}
                  </p>
                  {/* Progress bar for current step */}
                  {index === currentFeature && (
                    <motion.div 
                      className="mt-3 h-1 bg-muted rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Images - Right Side */}
          <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl bg-muted">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -10 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 10 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          // Fallback for broken images
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {feature.step}
                        </h4>
                        <p className="text-white/80 text-sm">
                          {feature.title}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;