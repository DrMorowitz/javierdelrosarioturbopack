"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HelpCircle, ChevronDown, Calendar, User, DollarSign, Clock, Shield } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
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
//   title: "Preguntas Frecuentes sobre Urología en Panamá - Dr. Javier del Rosario",
//   description: "Respuestas a las preguntas más frecuentes sobre consultas urológicas en Panamá: costos, síntomas, procedimientos y prevención. Información médica confiable del Dr. del Rosario.",
//   keywords: "cuánto cobra urólogo panamá, cuándo consultar urólogo, qué hace urólogo, preguntas frecuentes urología, consulta urológica panamá, precios urología",
// };

const PreguntasFrecuentes = () => {

  const faqCategories = [
    {
      category: 'Consultas y Costos',
      icon: DollarSign,
      color: 'text-green-600',
      faqs: [
        {
          question: '¿Cuánto cobra un urólogo en Panamá?',
          answer: `Los costos de consulta urológica en Panamá varían según la complejidad:
          
          <strong>Consulta inicial:</strong> $80-120
          <strong>Consulta de seguimiento:</strong> $60-80
          <strong>Consulta con estudios:</strong> $100-150
          
          Los precios pueden variar según la ubicación, experiencia del médico y si requiere estudios adicionales como ecografía o cistoscopia.`
        },
        {
          question: '¿Los seguros médicos cubren consultas urológicas?',
          answer: `La mayoría de seguros médicos en Panamá cubren consultas urológicas cuando son referidas por médico general:
          
          <strong>Seguros que típicamente cubren:</strong>
          • Seguros del Estado (CSS, MINSA)
          • Seguros privados con cobertura médica especializada
          • Pólizas empresariales con medicina especializada
          
          <strong>Recomendación:</strong> Verificar cobertura antes de la cita y llevar referencia médica cuando sea requerida.`
        },
        {
          question: '¿Qué incluye una consulta urológica completa?',
          answer: `Una consulta urológica integral incluye:
          
          <strong>Historia clínica detallada:</strong>
          • Síntomas actuales y evolución
          • Antecedentes médicos y quirúrgicos
          • Medicamentos y alergias
          
          <strong>Examen físico:</strong>
          • Examen abdominal
          • Examen genital externo
          • Tacto rectal (cuando está indicado)
          
          <strong>Estudios complementarios si necesarios:</strong>
          • Ecografía urológica
          • Análisis de orina
          • Estudios de función renal`
        }
      ]
    },
    {
      category: 'Síntomas y Cuándo Consultar',
      icon: HelpCircle,
      color: 'text-blue-600',
      faqs: [
        {
          question: '¿Cuándo es necesario consultar a un urólogo?',
          answer: `Debe consultar a un urólogo cuando presente:
          
          <strong>Síntomas de alarma inmediatos:</strong>
          • Sangre en la orina (hematuria)
          • Dolor intenso en flancos o abdomen bajo
          • Dificultad completa para orinar
          • Dolor testicular súbito
          
          <strong>Síntomas que requieren evaluación:</strong>
          • Ardor al orinar persistente
          • Levantarse frecuentemente a orinar de noche
          • Chorro urinario débil o interrumpido
          • Dolor pélvico crónico
          
          <strong>Chequeos preventivos:</strong>
          • Hombres mayores de 50 años (45 si hay antecedentes familiares)
          • Evaluación anual de próstata y función renal`
        },
        {
          question: '¿Qué enfermedades detecta un urólogo?',
          answer: `Los urólogos diagnostican y tratan:
          
          <strong>Condiciones renales:</strong>
          • Cálculos renales
          • Infecciones renales
          • Quistes renales
          • Cáncer de riñón
          
          <strong>Problemas prostáticos:</strong>
          • Hiperplasia prostática benigna (HPB)
          • Prostatitis
          • Cáncer de próstata
          
          <strong>Condiciones de vejiga:</strong>
          • Infecciones urinarias recurrentes
          • Cáncer de vejiga
          • Incontinencia urinaria
          
          <strong>Problemas sexuales masculinos:</strong>
          • Disfunción eréctil
          • Eyaculación precoz
          • Infertilidad masculina`
        },
        {
          question: '¿Es normal tener sangre en la orina?',
          answer: `La sangre en la orina NUNCA es normal y siempre requiere evaluación médica.
          
          <strong>Hematuria visible (orina roja o rosada):</strong>
          • Requiere consulta inmediata
          • Puede indicar cálculos, infección o cáncer
          • No ignorar aunque no haya dolor
          
          <strong>Hematuria microscópica:</strong>
          • Solo detectada en exámenes de laboratorio
          • También requiere evaluación urológica
          • Puede ser primer signo de enfermedad
          
          <strong>Posibles causas:</strong>
          • Cálculos renales o ureterales
          • Infecciones del tracto urinario
          • Cáncer de vejiga, riñón o próstata
          • Traumatismos
          • Medicamentos anticoagulantes`
        }
      ]
    },
    {
      category: 'Procedimientos Comunes',
      icon: Shield,
      color: 'text-purple-600',
      faqs: [
        {
          question: '¿Qué se hace en la primera cita con el urólogo?',
          answer: `En su primera consulta urológica:
          
          <strong>Antes de la cita:</strong>
          • Traer resultados de estudios previos
          • Lista de medicamentos actuales
          • Historia de síntomas y su evolución
          
          <strong>Durante la consulta:</strong>
          • Historia clínica detallada (30-45 minutos)
          • Examen físico apropiado según síntomas
          • Explicación clara de hallazgos
          • Plan de estudios adicionales si necesarios
          
          <strong>Al final de la consulta:</strong>
          • Diagnóstico preliminar o diferencial
          • Plan de tratamiento explicado
          • Próxima cita programada
          • Instrucciones claras por escrito`
        },
        {
          question: '¿La vasectomía es reversible?',
          answer: `La vasectomía puede revertirse, pero es un procedimiento más complejo:
          
          <strong>Reversión de vasectomía:</strong>
          • Cirugía microscópica de 2-4 horas
          • Tasa de éxito: 70-90% para permeabilidad
          • Tasa de embarazo: 50-70%
          • Costo: 3-5 veces más que vasectomía original
          
          <strong>Factores que afectan el éxito:</strong>
          • Tiempo transcurrido desde la vasectomía
          • Técnica original utilizada
          • Presencia de anticuerpos antiesperma
          
          <strong>Alternativas:</strong>
          • Fertilización in vitro con aspiración espermática
          • Congelación de esperma antes de vasectomía
          
          <strong>Recomendación:</strong> Considerar la vasectomía como permanente al tomar la decisión.`
        },
        {
          question: '¿Duele la biopsia de próstata?',
          answer: `La biopsia prostática causa molestias tolerables con preparación adecuada:
          
          <strong>Durante el procedimiento:</strong>
          • Anestesia local en área perineal
          • Molestia durante inserción de la aguja
          • Procedimiento dura 10-15 minutos
          • La mayoría de pacientes lo toleran bien
          
          <strong>Después del procedimiento:</strong>
          • Sangrado rectal leve por 1-2 días
          • Sangre en orina por 2-3 días
          • Sangre en semen hasta por 4 semanas
          • Analgésicos simples controlan molestias
          
          <strong>Para minimizar molestias:</strong>
          • Enema de limpieza previa
          • Antibiótico profiláctico
          • Analgésico 1 hora antes
          • Técnica transperineal es menos molesta que transrectal`
        }
      ]
    },
    {
      category: 'Cuidados y Prevención',
      icon: Clock,
      color: 'text-orange-600',
      faqs: [
        {
          question: '¿Cómo prevenir cálculos renales en el clima de Panamá?',
          answer: `En el clima tropical de Panamá es especialmente importante:
          
          <strong>Hidratación adecuada:</strong>
          • Beber 2.5-3 litros de agua diarios
          • Aumentar durante ejercicio y exposición al sol
          • Orina debe ser amarillo claro
          • Evitar bebidas azucaradas en exceso
          
          <strong>Modificaciones dietéticas:</strong>
          • Reducir sal a menos de 2.3g diarios
          • Limitar oxalatos: espinacas, nueces, té negro
          • Consumir calcio de fuentes alimentarias
          • Reducir proteína animal excesiva
          
          <strong>En el trópico específicamente:</strong>
          • Reponer electrolitos durante ejercicio intenso
          • Beber agua antes de sentir sed
          • Considerar suplemento de citrato si hay antecedentes
          • Monitorear color de orina como indicador`
        },
        {
          question: '¿Con qué frecuencia debo hacerme chequeos urológicos?',
          answer: `Frecuencia recomendada según edad y factores de riesgo:
          
          <strong>20-40 años (sin síntomas):</strong>
          • Cada 2-3 años si no hay antecedentes
          • Anual si hay antecedentes familiares
          
          <strong>40-50 años:</strong>
          • Cada 1-2 años
          • Inicio de screening prostático
          • Evaluación de función renal
          
          <strong>50+ años:</strong>
          • Anualmente
          • PSA y tacto rectal
          • Ecografía prostática y renal
          
          <strong>Factores que aumentan frecuencia:</strong>
          • Antecedentes familiares de cáncer urológico
          • Diabetes o hipertensión
          • Historia de cálculos renales
          • Infecciones urinarias recurrentes`
        },
        {
          question: '¿Los problemas de próstata siempre requieren cirugía?',
          answer: `No, la mayoría de problemas prostáticos se manejan inicialmente con tratamiento médico:
          
          <strong>Hiperplasia Prostática Benigna (HPB):</strong>
          
          <strong>Tratamiento médico (primera línea):</strong>
          • Alfabloqueadores (tamsulosina, doxazosina)
          • Inhibidores de 5-alfa reductasa (finasteride)
          • Combinaciones de medicamentos
          • 70-80% mejoran con medicamentos
          
          <strong>Tratamientos mínimamente invasivos:</strong>
          • Terapia Rezum (vapor de agua)
          • Láser prostático
          • Embolización de arterias prostáticas
          
          <strong>Cirugía (cuando otros fallan):</strong>
          • RTU prostática
          • Prostatectomía simple
          • Solo 10-15% requieren cirugía
          
          <strong>El tratamiento se escoge según:</strong>
          • Severidad de síntomas
          • Tamaño de la próstata
          • Edad y condición general del paciente
          • Respuesta a tratamientos previos`
        }
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
              <span className="text-foreground">Preguntas Frecuentes</span>
            </nav>
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="section-padding bg-gradient-to-r from-orange-50 to-yellow-50"
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
                <HelpCircle className="w-8 h-8 text-orange-600" />
                <span className="text-orange-600 font-semibold">Preguntas y Respuestas</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Preguntas Frecuentes sobre Urología en Panamá
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                Respuestas a las dudas más comunes sobre consultas, procedimientos, costos 
                y cuidados urológicos. Información clara y basada en evidencia.
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

        {/* FAQ Categories */}
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
                Encuentra Respuestas a Tus Dudas
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Organizamos las preguntas más frecuentes en categorías para que encuentres rápidamente la información que buscas.
              </p>
            </motion.div>

            <FAQAccordion faqCategories={faqCategories} />
          </div>
        </motion.section>

        {/* Quick Contact */}
        <motion.section 
          className="section-padding bg-primary/5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <HelpCircle className="w-16 h-16 text-orange-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿No Encontraste tu Pregunta?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Si tienes una duda específica que no está cubierta aquí, no dudes en contactarnos. 
                Estamos aquí para resolver todas tus inquietudes sobre salud urológica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contacto">
                    Agendar Consulta
                  </Link>
                </Button>
                <WhatsAppButton message="Hola Dr. del Rosario, tengo una pregunta específica sobre urología.">
                  Preguntar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Additional Resources */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Recursos Adicionales
              </h2>
              <p className="text-muted-foreground text-lg">
                Explora más contenido educativo en nuestro blog
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Condiciones Comunes', route: '/blog/condiciones-comunes', color: 'bg-blue-500' },
                { title: 'Síntomas de Alerta', route: '/blog/sintomas-alerta', color: 'bg-red-500' },
                { title: 'Prevención', route: '/blog/prevencion', color: 'bg-green-500' },
                { title: 'Procedimientos', route: '/blog/procedimientos', color: 'bg-purple-500' }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                  className="medical-card group cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href={resource.route} className="block">
                    <div className={`${resource.color} h-32 rounded-lg mb-4 flex items-center justify-center`}>
                      <span className="text-white font-semibold">{resource.title}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        Leer más
                      </span>
                      <ChevronDown className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform rotate-[-90deg]" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default PreguntasFrecuentes;