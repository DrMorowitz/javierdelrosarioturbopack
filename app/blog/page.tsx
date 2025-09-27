"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import { 
  fadeIn, 
  staggerContainer,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';

const BlogPage = () => {
  const blogCategories = [
    {
      id: 'condiciones-comunes',
      title: 'Condiciones Comunes',
      description: 'Información sobre las condiciones urológicas más frecuentes, sus síntomas y tratamientos modernos.',
      articleCount: 8,
      color: 'bg-blue-500',
      icon: BookOpen,
      route: '/blog/condiciones-comunes',
      image: 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887943/blog-condiciones_abc123.jpg'
    },
    {
      id: 'sintomas-alerta',
      title: 'Síntomas de Alerta',
      description: 'Cuándo consultar urgentemente: signos que requieren atención urológica inmediata.',
      articleCount: 6,
      color: 'bg-red-500',
      icon: Calendar,
      route: '/blog/sintomas-alerta',
      image: 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887943/blog-sintomas_def456.jpg'
    },
    {
      id: 'prevencion',
      title: 'Prevención y Cuidado',
      description: 'Consejos para mantener una buena salud urológica y prevenir enfermedades.',
      articleCount: 10,
      color: 'bg-green-500',
      icon: User,
      route: '/blog/prevencion',
      image: 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887943/blog-prevencion_ghi789.jpg'
    },
    {
      id: 'procedimientos',
      title: 'Procedimientos Explicados',
      description: 'Guías detalladas sobre procedimientos urológicos: qué esperar, riesgos y recuperación.',
      articleCount: 12,
      color: 'bg-purple-500',
      icon: BookOpen,
      route: '/blog/procedimientos',
      image: 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887943/blog-procedimientos_jkl012.jpg'
    },
    {
      id: 'preguntas-frecuentes',
      title: 'Preguntas Frecuentes',
      description: 'Respuestas a las dudas más comunes sobre urología, costos y seguros médicos.',
      articleCount: 15,
      color: 'bg-orange-500',
      icon: Calendar,
      route: '/blog/preguntas-frecuentes',
      image: 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887943/blog-faq_mno345.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="section-padding bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Blog del Dr. Javier del Rosario
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                Educación urológica moderna para pacientes informados. 
                Información basada en evidencia científica y experiencia clínica.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Blog Categories */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <div className="section-container">
            <motion.div 
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Categorías de Contenido
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Encuentra información especializada organizada por temas para tu consulta rápida.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    variants={fadeIn}
                    custom={index}
                    className="medical-card group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link href={category.route} className="block">
                      <div className="relative mb-6 overflow-hidden rounded-lg">
                        <div className={`${category.color} h-48 flex items-center justify-center`}>
                          <IconComponent className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {category.articleCount} artículos
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground">
                            Leer artículos
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="section-padding bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Tienes alguna pregunta específica?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Si no encuentras la información que buscas, agenda una consulta personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contacto">
                    Agendar Consulta
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`https://wa.me/50760000000?text=${encodeURIComponent('Hola Dr. del Rosario, tengo una pregunta sobre urología.')}`} target="_blank">
                  WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default BlogPage;