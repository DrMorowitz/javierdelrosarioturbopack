"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Stethoscope, Calendar, Clock, User, Activity, Zap, Target, Scissors } from 'lucide-react';
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
//   title: "Procedimientos Urológicos Explicados Paso a Paso - Dr. Javier del Rosario",
//   description: "Información detallada sobre los procedimientos urológicos más comunes. Comprende qué esperar antes, durante y después de tu tratamiento.",
//   keywords: "vasectomía panamá, ureteroscopia panama, laser calculos renales, terapia rezum panama, procedimientos urológicos",
// };

const Procedimientos = () => {
  const procedures = [
    {
      id: 1,
      title: 'Vasectomía en Panamá: Procedimiento Sin Bisturí',
      icon: Scissors,
      color: 'text-blue-600',
      duration: '20-30 min',
      anesthesia: 'Local',
      recovery: '3-7 días',
      effectiveness: '99.9%',
      description: 'La vasectomía es el método más efectivo de planificación familiar masculina permanente.',
      beforeProcedure: [
        'Consulta de evaluación con historia clínica completa',
        'Análisis de semen previo (opcional)',
        'Suspender anticoagulantes si los usa',
        'Preparación del área quirúrgica en casa',
        'Organizar transporte post-procedimiento'
      ],
      duringProcedure: [
        'Anestesia local en área escrotal',
        'Técnica sin bisturí para acceder a conductos deferentes',
        'Sección y cauterización de cada conducto',
        'Verificación de hemostasia',
        'Sutura con material reabsorbible'
      ],
      afterProcedure: [
        'Observación por 30 minutos en clínica',
        'Aplicación de hielo por 20 minutos cada hora (primeras 24h)',
        'Analgésicos según necesidad',
        'Reposo relativo por 48-72 horas',
        'Control post-operatorio a los 7 días',
        'Espermograma de control a los 3 meses'
      ],
      risks: [
        'Hematoma escrotal (2-5%)',
        'Dolor crónico (<1%)',
        'Granuloma espermático (2-3%)',
        'Recanalización (0.1%)'
      ],
      keywords: ['vasectomía panamá', 'vasectomía sin bisturí', 'planificación familiar']
    },
    {
      id: 2,
      title: 'Ureteroscopía para Cálculos Renales',
      icon: Activity,
      color: 'text-emerald-600',
      duration: '45-90 min',
      anesthesia: 'General/Regional',
      recovery: '1-2 días',
      effectiveness: '95-98%',
      description: 'Procedimiento mínimamente invasivo para extraer cálculos renales y ureterales usando láser.',
      beforeProcedure: [
        'Tomografía computada para localizar cálculo',
        'Exámenes pre-anestésicos completos',
        'Suspender anticoagulantes 5-7 días antes',
        'Ayuno de 8 horas previo al procedimiento',
        'Antibiótico profiláctico'
      ],
      duringProcedure: [
        'Colocación de ureteroscopio flexible',
        'Navegación hasta localizar el cálculo',
        'Fragmentación con láser holmium',
        'Extracción de fragmentos con canastilla',
        'Colocación de catéter ureteral si necesario'
      ],
      afterProcedure: [
        'Recuperación en sala post-anestésica',
        'Control del dolor con analgésicos',
        'Hidratación abundante (3-4L diarios)',
        'Posible hematuria leve por 24-48h',
        'Retiro de catéter ureteral en 3-7 días',
        'Filtrar orina para recoger fragmentos'
      ],
      risks: [
        'Infección urinaria (5-10%)',
        'Hematuria transitoria (común)',
        'Perforación ureteral (<1%)',
        'Necesidad de re-intervención (5%)'
      ],
      keywords: ['ureteroscopia panama', 'laser calculos renales', 'litotricia flexible']
    },
    {
      id: 3,
      title: 'Terapia Rezum para Hiperplasia Prostática',
      icon: Zap,
      color: 'text-purple-600',
      duration: '10-15 min',
      anesthesia: 'Local',
      recovery: '2-4 semanas',
      effectiveness: '80-90%',
      description: 'Tratamiento innovador con vapor de agua para reducir el tejido prostático agrandado.',
      beforeProcedure: [
        'Evaluación de síntomas con cuestionario IPSS',
        'Uroflujometría y medición de residuo post-miccional',
        'Ecografía prostática transrectal',
        'Cistoscopia diagnóstica',
        'Suspensión de anticoagulantes según indicación'
      ],
      duringProcedure: [
        'Anestesia local uretral',
        'Introducción del dispositivo Rezum',
        'Inyección de vapor de agua en tejido prostático',
        'Tratamiento de múltiples zonas según anatomía',
        'Retiro del equipo'
      ],
      afterProcedure: [
        'Colocación temporal de sonda vesical',
        'Analgésicos y antiinflamatorios',
        'Retiro de sonda en 3-7 días',
        'Síntomas pueden empeorar inicialmente',
        'Mejoría gradual en 2-6 semanas',
        'Control a los 3 y 6 meses'
      ],
      risks: [
        'Retención urinaria temporal (común)',
        'Disuria transitoria (frecuente)',
        'Hematuria leve (común)',
        'Eyaculación retrógrada (10-15%)'
      ],
      keywords: ['terapia rezum panama', 'vapor agua prostata', 'HPB tratamiento']
    },
    {
      id: 4,
      title: 'Circuncisión en Adultos',
      icon: Target,
      color: 'text-orange-600',
      duration: '30-45 min',
      anesthesia: 'Local/General',
      recovery: '2-3 semanas',
      effectiveness: '99%',
      description: 'Remoción del prepucio por razones médicas o elección personal con técnicas modernas.',
      beforeProcedure: [
        'Evaluación clínica del prepucio y glande',
        'Discusión de técnicas quirúrgicas disponibles',
        'Fotografías médicas si está indicado',
        'Preparación con antisépticos',
        'Elección de sutura según preferencia'
      ],
      duringProcedure: [
        'Anestesia local con bloqueo del nervio dorsal',
        'Marcado de líneas de incisión',
        'Técnica sleeve o freehand según caso',
        'Hemostasia cuidadosa',
        'Sutura con material reabsorbible'
      ],
      afterProcedure: [
        'Vendaje protector por 24-48 horas',
        'Baños de asiento con agua tibia',
        'Aplicación de pomada antibiótica',
        'Abstinencia sexual por 4-6 semanas',
        'Control post-operatorio semanal',
        'Remoción de puntos si no son reabsorbibles'
      ],
      risks: [
        'Sangrado post-operatorio (2-3%)',
        'Infección de herida (1-2%)',
        'Dolor prolongado (<1%)',
        'Resultado estético subóptimo (raro)'
      ],
      keywords: ['circuncision adultos panama', 'fimosis tratamiento', 'circuncision medica']
    }
  ];

  const recoveryTips = [
    {
      phase: 'Primeras 24 horas',
      tips: [
        'Seguir indicaciones de medicación al pie de la letra',
        'Aplicar hielo según recomendaciones médicas',
        'Mantener reposo y evitar esfuerzos',
        'Vigilar signos de alarma (sangrado excesivo, fiebre)',
        'Contactar al médico ante cualquier duda'
      ]
    },
    {
      phase: 'Primera semana',
      tips: [
        'Cumplir con citas de control post-operatorio',
        'Mantener área quirúrgica limpia y seca',
        'Evitar actividad física intensa',
        'Tomar abundantes líquidos si está indicado',
        'Usar ropa holgada y cómoda'
      ]
    },
    {
      phase: 'Recuperación completa',
      tips: [
        'Retomar actividades gradualmente',
        'Completar curso de antibióticos si fueron prescritos',
        'Asistir a controles de seguimiento',
        'Reportar cualquier síntoma anormal',
        'Mantener comunicación con el equipo médico'
      ]
    }
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
              <span className="text-foreground">Procedimientos Explicados</span>
            </nav>
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="section-padding bg-gradient-to-r from-purple-50 to-indigo-50"
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
                <Stethoscope className="w-8 h-8 text-purple-600" />
                <span className="text-purple-600 font-semibold">Procedimientos Urológicos</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Procedimientos Urológicos Explicados Paso a Paso
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                Información detallada sobre los procedimientos urológicos más comunes. 
                Comprende qué esperar antes, durante y después de tu tratamiento.
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

        {/* Procedures */}
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
                Procedimientos Más Frecuentes
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Guías detalladas para entender completamente cada procedimiento urológico.
              </p>
            </motion.div>

            <div className="space-y-16">
              {procedures.map((procedure, index) => {
                const IconComponent = procedure.icon;
                return (
                  <motion.div
                    key={procedure.id}
                    variants={fadeIn}
                    custom={index}
                    className="medical-card"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex items-start gap-4 mb-6 lg:mb-0">
                        <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 ${procedure.color.replace('text-', 'border-')}`}>
                          <IconComponent className={`w-8 h-8 ${procedure.color}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {procedure.title}
                          </h3>
                          <p className="text-muted-foreground text-lg mb-4">
                            {procedure.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2 min-w-[200px]">
                        <div className="text-center lg:text-right">
                          <div className="text-sm text-muted-foreground">Duración</div>
                          <div className="font-semibold">{procedure.duration}</div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-sm text-muted-foreground">Anestesia</div>
                          <div className="font-semibold">{procedure.anesthesia}</div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-sm text-muted-foreground">Recuperación</div>
                          <div className="font-semibold">{procedure.recovery}</div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-sm text-muted-foreground">Efectividad</div>
                          <div className="font-semibold text-green-600">{procedure.effectiveness}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content Tabs */}
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Before */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          Antes del Procedimiento
                        </h4>
                        <ul className="space-y-3">
                          {procedure.beforeProcedure.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* During */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Stethoscope className="w-5 h-5 text-purple-600" />
                          Durante el Procedimiento
                        </h4>
                        <ul className="space-y-3">
                          {procedure.duringProcedure.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* After */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-green-600" />
                          Después del Procedimiento
                        </h4>
                        <ul className="space-y-3">
                          {procedure.afterProcedure.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Risks & Keywords */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Posibles Complicaciones</h4>
                          <ul className="space-y-1">
                            {procedure.risks.map((risk, idx) => (
                              <li key={idx} className="text-muted-foreground text-sm">
                                • {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Palabras Clave</h4>
                          <div className="flex flex-wrap gap-2">
                            {procedure.keywords.map((keyword, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Recovery Guide */}
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
                Guía General de Recuperación
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Consejos universales para una recuperación exitosa después de cualquier procedimiento urológico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recoveryTips.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                  className="medical-card"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {phase.phase}
                  </h3>
                  <ul className="space-y-3">
                    {phase.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <Stethoscope className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Necesitas un Procedimiento Urológico?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Agenda tu consulta de evaluación para determinar el mejor tratamiento para tu condición. 
                Recibe información detallada y resuelve todas tus dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contacto">
                    Agendar Consulta de Evaluación
                  </Link>
                </Button>
                <WhatsAppButton message="Hola Dr. del Rosario, me interesa información sobre procedimientos urológicos.">
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

export default Procedimientos;