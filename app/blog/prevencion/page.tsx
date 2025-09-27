"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Droplets, Heart, Activity, Calendar, User, CheckCircle } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  fadeIn, 
  staggerContainer,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';
// import { Metadata } from 'next';

// Metadata cannot be exported from client components in Next.js
// export const metadata: Metadata = {
//   title: "Prevención y Cuidado de la Salud Urológica - Dr. Javier del Rosario",
//   description: "La prevención es la mejor medicina. Descubre cómo mantener una salud urológica óptima con hábitos de vida saludables y controles médicos apropiados.",
//   keywords: "prevención urológica, cuidados próstata, prevenir cálculos renales, salud masculina panamá, chequeos urológicos",
// };

const Prevencion = () => {
  const preventionAreas = [
    {
      id: 1,
      title: 'Prevención de Cálculos Renales',
      icon: Droplets,
      color: 'text-blue-600',
      description: 'Los cálculos renales se pueden prevenir con cambios en el estilo de vida y dieta apropiada.',
      tips: [
        {
          title: 'Hidratación Adecuada',
          description: 'Beber 2.5-3 litros de agua diarios, especialmente en el clima tropical de Panamá.',
          details: 'La orina debe ser de color amarillo claro. Aumentar ingesta durante ejercicio y calor.'
        },
        {
          title: 'Control de Sodio',
          description: 'Limitar sal a menos de 2.3g diarios para reducir excreción de calcio.',
          details: 'Evitar alimentos procesados, embutidos y comidas rápidas altas en sodio.'
        },
        {
          title: 'Calcio Moderado',
          description: '1000-1200mg de calcio diarios de fuentes alimentarias, no suplementos.',
          details: 'Lácteos, vegetales verdes y pescado. Evitar suplementos de calcio sin supervisión.'
        },
        {
          title: 'Reducir Oxalatos',
          description: 'Moderar consumo de espinacas, nueces, té negro y chocolate.',
          details: 'Combinar alimentos ricos en oxalato con productos lácteos para reducir absorción.'
        }
      ]
    },
    {
      id: 2,
      title: 'Salud Prostática Preventiva',
      icon: Shield,
      color: 'text-green-600',
      description: 'Mantener la salud prostática es clave para la calidad de vida masculina después de los 40.',
      tips: [
        {
          title: 'Ejercicio Regular',
          description: 'Actividad física 150 minutos semanales reduce riesgo de HPB y cáncer prostático.',
          details: 'Caminar, nadar, ciclismo. Evitar ejercicios que presionen el perineo excesivamente.'
        },
        {
          title: 'Dieta Antiinflamatoria',
          description: 'Alimentos ricos en licopeno, zinc y omega-3 protegen la próstata.',
          details: 'Tomates, pescado graso, semillas de calabaza, té verde. Limitar carnes rojas.'
        },
        {
          title: 'Control de Peso',
          description: 'Mantener IMC entre 18.5-24.9 reduce inflamación prostática.',
          details: 'La obesidad aumenta niveles de hormonas que promueven crecimiento prostático.'
        },
        {
          title: 'Evaluaciones Regulares',
          description: 'Chequeo anual después de los 50 años (45 si hay historia familiar).',
          details: 'Tacto rectal, PSA sérico y evaluación de síntomas urinarios.'
        }
      ]
    },
    {
      id: 3,
      title: 'Prevención de Infecciones Urinarias',
      icon: Activity,
      color: 'text-purple-600',
      description: 'Las ITU recurrentes se pueden prevenir con medidas de higiene y hábitos apropiados.',
      tips: [
        {
          title: 'Higiene Adecuada',
          description: 'Limpieza de adelante hacia atrás, especialmente después de defecar.',
          details: 'Usar jabón neutro, evitar duchas vaginales y productos perfumados en área genital.'
        },
        {
          title: 'Vaciado Completo',
          description: 'Orinar completamente y no retener orina por períodos prolongados.',
          details: 'Orinar cada 3-4 horas durante el día y después de relaciones sexuales.'
        },
        {
          title: 'Hidratación Constante',
          description: 'Beber abundante agua para diluir bacterias y favorecer su eliminación.',
          details: 'Jugo de arándano sin azúcar puede ayudar a prevenir adherencia bacteriana.'
        },
        {
          title: 'Ropa Apropiada',
          description: 'Usar ropa interior de algodón y evitar prendas muy ajustadas.',
          details: 'Cambiar ropa interior diariamente y después del ejercicio o sudoración.'
        }
      ]
    },
    {
      id: 4,
      title: 'Prevención de Disfunción Eréctil',
      icon: Heart,
      color: 'text-red-600',
      description: 'La función eréctil se mantiene con un estilo de vida saludable y control de factores de riesgo.',
      tips: [
        {
          title: 'Ejercicio Cardiovascular',
          description: 'Actividad aeróbica mejora flujo sanguíneo y función endotelial.',
          details: '30 minutos diarios de ejercicio moderado. Ejercicios de Kegel fortalecen músculos del suelo pélvico.'
        },
        {
          title: 'Control de Factores de Riesgo',
          description: 'Manejar diabetes, hipertensión y colesterol alto.',
          details: 'Estas condiciones afectan los vasos sanguíneos que irrigan el pene.'
        },
        {
          title: 'Evitar Tabaco y Alcohol',
          description: 'El tabaquismo daña los vasos sanguíneos. Limitar alcohol a 2 tragos diarios.',
          details: 'La nicotina reduce flujo sanguíneo. El alcohol en exceso afecta la respuesta sexual.'
        },
        {
          title: 'Manejo del Estrés',
          description: 'Técnicas de relajación y buen descanso mejoran la función sexual.',
          details: 'Dormir 7-9 horas, meditación, yoga. El estrés crónico reduce testosterona.'
        }
      ]
    }
  ];

  const checkupSchedule = [
    { age: '20-40 años', frequency: 'Cada 2-3 años', focus: 'Evaluación básica, detección temprana' },
    { age: '40-50 años', frequency: 'Cada 1-2 años', focus: 'Inicio de screening prostático' },
    { age: '50+ años', frequency: 'Anualmente', focus: 'Screening completo, prevención activa' },
    { age: '65+ años', frequency: 'Cada 6-12 meses', focus: 'Monitoreo intensivo, calidad de vida' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <motion.section 
          className="section-padding-sm bg-muted/30"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="section-container">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Prevención y Cuidado</span>
            </nav>
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="section-padding bg-gradient-to-r from-green-50 to-emerald-50"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="max-w-4xl">
              <motion.div 
                className="flex items-center gap-2 mb-4"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/blog" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al Blog
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 mb-4"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-8 h-8 text-green-600" />
                <span className="text-green-600 font-semibold">Medicina Preventiva</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Prevención y Cuidado de la Salud Urológica
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                La prevención es la mejor medicina. Descubre cómo mantener una salud urológica óptima 
                con hábitos de vida saludables y controles médicos apropiados.
              </motion.p>
              <motion.div 
                className="flex items-center gap-4 text-sm text-muted-foreground"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Dr. Javier del Rosario
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Actualizado Sep 2025
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Prevention Areas */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <div className="section-container">
            <motion.div 
              className="text-center mb-12"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Áreas Clave de Prevención Urológica
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Estrategias basadas en evidencia científica para prevenir las condiciones urológicas más comunes.
              </p>
            </motion.div>

            <div className="space-y-12">
              {preventionAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    variants={fadeIn}
                    custom={index}
                    className="medical-card"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 ${area.color.replace('text-', 'border-')}`}>
                        <IconComponent className={`w-8 h-8 ${area.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {area.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {area.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex items-start gap-3 mb-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                {tip.title}
                              </h4>
                              <p className="text-muted-foreground mb-3 text-sm">
                                {tip.description}
                              </p>
                              <div className="bg-white p-3 rounded border-l-4 border-l-primary">
                                <p className="text-xs text-muted-foreground">
                                  <strong>Detalles:</strong> {tip.details}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Checkup Schedule */}
        <motion.section 
          className="section-padding bg-primary/5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Programa de Chequeos Urológicos Preventivos
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Calendario recomendado para evaluaciones urológicas según la edad y factores de riesgo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {checkupSchedule.map((schedule, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                  className="medical-card text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {schedule.age}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {schedule.frequency}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {schedule.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Lifestyle Tips */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                10 Hábitos Diarios para la Salud Urológica
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Beber 8-10 vasos de agua al día',
                  'Orinar cada 3-4 horas sin retener',
                  'Mantener higiene genital adecuada',
                  'Hacer ejercicio 30 minutos diarios',
                  'Consumir frutas y vegetales variados',
                  'Limitar sal y alimentos procesados',
                  'Evitar tabaco y limitar alcohol',
                  'Manejar el estrés con técnicas de relajación',
                  'Dormir 7-9 horas por noche',
                  'Realizar controles médicos regulares'
                ].map((habit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{habit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="section-padding bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Inicia Tu Plan de Prevención Urológica
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                La prevención es una inversión en tu salud futura. Agenda tu chequeo preventivo 
                y recibe un plan personalizado según tu edad y factores de riesgo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contacto">
                    Agendar Chequeo Preventivo
                  </Link>
                </Button>
                <WhatsAppButton message="Hola Dr. del Rosario, me interesa un chequeo preventivo urológico.">
                  Consultar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Prevencion;