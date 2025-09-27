'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, MapPin } from 'lucide-react';
import { 
  staggerContainer, 
  fadeIn, 
  fadeInSafe,
  scaleIn, 
  statsCounter,
  viewportConfig 
} from '@/lib/animations';
import { useMobileDetection } from '@/hooks/useMobileDetection';

// Animated counter hook
const useCountUp = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);
  
  return { count, setIsVisible };
};

const StatsSection = () => {
  const { t } = useLanguage();
  const { isMobile, isLowPowerMode } = useMobileDetection();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      icon: Award,
      number: 25,
      suffix: '+',
      text: t('stats.experience'),
    },
    {
      icon: Users,
      number: 5000,
      suffix: '+',
      text: t('stats.procedures'),
    },
    {
      icon: MapPin,
      number: 3,
      suffix: '',
      text: t('stats.locations'),
    },
  ];

  // Mobile-optimized version with selective animations
  if (isMobile || isLowPowerMode) {
    return (
      <section ref={ref} className="section-padding bg-background">
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
                <MobileStatCardWithFallback 
                  key={index} 
                  stat={stat} 
                  IconComponent={IconComponent} 
                  index={index}
                  isInView={isInView}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Full animated version for desktop
  return (
    <motion.section 
      ref={ref}
      className="section-padding bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.1 }}
      variants={fadeInSafe}
      style={{ opacity: 1 }} // Ensure visibility fallback
    >
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            variants={scaleIn}
          >
            {t('stats.title')}
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          style={{ opacity: 1 }} // Ensure visibility fallback
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <StatCard 
                key={index} 
                stat={stat} 
                IconComponent={IconComponent} 
                index={index}
                isInView={isInView}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Separate component for individual stat cards
const StatCard = ({ stat, IconComponent, index, isInView }: {
  stat: any;
  IconComponent: any;
  index: number;
  isInView: boolean;
}) => {
  const { count, setIsVisible } = useCountUp(stat.number);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView, setIsVisible]);
  
  return (
    <motion.div 
      className="medical-card text-center"
      variants={fadeInSafe}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
      style={{ opacity: 1 }} // Ensure visibility fallback
    >
      <motion.div 
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <IconComponent className="service-icon w-8 h-8" />
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="stat-number"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        {count.toLocaleString()}{stat.suffix}
      </motion.div>
      
      <p className="text-lg font-medium text-muted-foreground">
        {stat.text}
      </p>
    </motion.div>
  );
};

// Mobile-optimized stat card with robust counter animation
const MobileStatCard = ({ stat, IconComponent, index, isInView }: {
  stat: any;
  IconComponent: any;
  index: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Create our own intersection observer for more reliable detection
  useEffect(() => {
    if (!cardRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start counter animation
          const delay = index * 300; // Stagger timing
          setTimeout(() => {
            animateCounter();
          }, delay);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '0px'
      }
    );
    
    observer.observe(cardRef.current);
    
    return () => observer.disconnect();
  }, [index, hasAnimated]);
  
  const animateCounter = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();
    const startValue = 0;
    const endValue = stat.number;
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out animation
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutProgress);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };
  
  return (
    <div ref={cardRef} className="medical-card text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <IconComponent className="service-icon w-8 h-8" />
        </div>
      </div>
      
      {/* Animated counter for mobile */}
      <div className="stat-number">
        {count.toLocaleString()}{stat.suffix}
      </div>
      
      <p className="text-lg font-medium text-muted-foreground">
        {stat.text}
      </p>
    </div>
  );
};

// Fallback mobile component with animation attempt and static fallback
const MobileStatCardWithFallback = ({ stat, IconComponent, index, isInView }: {
  stat: any;
  IconComponent: any;
  index: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showStatic, setShowStatic] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Fallback timer - if animation doesn't start within 3 seconds, show static
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated && count === 0) {
        setShowStatic(true);
        setCount(stat.number); // Show final number immediately
      }
    }, 3000);
    
    return () => clearTimeout(fallbackTimer);
  }, [stat.number, hasAnimated, count]);
  
  // Intersection observer for animation trigger
  useEffect(() => {
    if (!cardRef.current || showStatic) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const delay = index * 300;
          setTimeout(() => {
            animateCounter();
          }, delay);
        }
      },
      {
        threshold: 0.3, // Lower threshold for better mobile detection
        rootMargin: '50px'
      }
    );
    
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index, hasAnimated, showStatic]);
  
  const animateCounter = () => {
    if (hasAnimated || showStatic) return;
    setHasAnimated(true);
    
    const duration = 1500;
    const startTime = Date.now();
    const endValue = stat.number;
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(endValue * easeOutProgress);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };
  
  return (
    <div ref={cardRef} className="medical-card text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <IconComponent className="service-icon w-8 h-8" />
        </div>
      </div>
      
      <div className="stat-number">
        {count.toLocaleString()}{stat.suffix}
      </div>
      
      <p className="text-lg font-medium text-muted-foreground">
        {stat.text}
      </p>
      
      {/* Debug info in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-muted-foreground mt-2">
          {showStatic ? 'Static' : hasAnimated ? 'Animated' : 'Waiting...'}
        </div>
      )}
    </div>
  );
};

export default StatsSection;