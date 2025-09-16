import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, AlertTriangle, Shield, Stethoscope, HelpCircle, ArrowRight } from 'lucide-react';
import { 
  staggerContainer, 
  fadeIn, 
  fadeInSafe,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const BlogSection = () => {
  const { t } = useLanguage();
  const { isMobile, isLowPowerMode } = useMobileDetection();

  const blogCategories = [
    {
      icon: BookOpen,
      title: t('blog.condiciones.title'),
      description: t('blog.condiciones.desc'),
      color: 'text-blue-600',
      route: '/blog/condiciones-comunes',
      articleCount: 8,
    },
    {
      icon: AlertTriangle,
      title: t('blog.sintomas.title'),
      description: t('blog.sintomas.desc'),
      color: 'text-red-600',
      route: '/blog/sintomas-alerta',
      articleCount: 6,
    },
    {
      icon: Shield,
      title: t('blog.prevencion.title'),
      description: t('blog.prevencion.desc'),
      color: 'text-green-600',
      route: '/blog/prevencion',
      articleCount: 10,
    },
    {
      icon: Stethoscope,
      title: t('blog.procedimientos.title'),
      description: t('blog.procedimientos.desc'),
      color: 'text-purple-600',
      route: '/blog/procedimientos',
      articleCount: 12,
    },
    {
      icon: HelpCircle,
      title: t('blog.preguntas.title'),
      description: t('blog.preguntas.desc'),
      color: 'text-orange-600',
      route: '/blog/preguntas-frecuentes',
      articleCount: 15,
    },
  ];

  // Use simple div on mobile/low power devices for better compatibility
  if (isMobile || isLowPowerMode) {
    return (
      <section className="section-padding bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {blogCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="medical-card group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="text-sm text-primary font-medium mb-4">
                      {category.articleCount} artículos disponibles
                    </div>
                  </div>
                  
                  <Link to={category.route}>
                    <Button variant="ghost" className="w-full justify-start p-0 text-primary hover:text-primary-hover group">
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="gap-2">
                {t('blog.visit.blog')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full animated version for desktop
  return (
    <motion.section 
      className="section-padding bg-gradient-to-r from-primary/5 via-background to-primary/5"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInSafe}
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
            {t('blog.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            {t('blog.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
        >
          {blogCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={index} 
                className="medical-card group"
                variants={fadeInSafe}
                whileHover="hover"
                initial="rest"
                custom={index}
                style={{ opacity: 1 }} // Ensure visibility fallback
              >
                <div className="mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-primary font-medium mb-4">
                    {category.articleCount} artículos disponibles
                  </div>
                </div>
                
                <Link to={category.route}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button variant="ghost" className="w-full justify-start p-0 text-primary hover:text-primary-hover group">
                      Leer más
                      <motion.span
                        className="ml-2 inline-block"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.4 }}
        >
          <Link to="/blog">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" className="gap-2">
                {t('blog.visit.blog')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogSection;