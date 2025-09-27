"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, Calendar, Clock, User, Phone } from 'lucide-react';
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
//   title: "Síntomas de Alerta Urológica - Cuándo Consultar Inmediatamente",
//   description: "Reconoce los síntomas urológicos de emergencia: sangre en orina, dolor testicular, retención urinaria. Una respuesta rápida puede salvar tu riñón, vejiga o testículo.",
//   keywords: "sangre en orina, dolor testicular agudo, retención urinaria, emergencia urológica panamá, síntomas alarma urología, cuándo consultar urólogo urgente",
// };

const SintomasAlerta = () => {
  const emergencySymptoms = [
    {
      id: 1,
      title: 'Sangre en la Orina (Hematuria): Cuándo es Urgente',
      severity: 'Alta',
      timeframe: 'Consulta inmediata',
      description: 'La sangre visible en la orina siempre requiere evaluación médica urgente.',
      symptoms: [
        'Orina rosada, roja o color cola',
        'Coágulos de sangre en la orina',
        'Dolor al orinar con sangrado',
        'Sangrado sin dolor (más preocupante)'
      ],
      causes: [
        'Cáncer de vejiga o riñón',
        'Cálculos renales',
        'Infección urinaria severa',
        'Traumatismo renal'
      ],
      action: 'Consultar urólogo dentro de 24-48 horas. Si hay dolor severo o fiebre, acudir a emergencias.'
    },
    {
      id: 2,
      title: 'Dolor de Flanco Severo: Cálculos Renales vs Otras Causas',
      severity: 'Alta',
      timeframe: 'Emergencia',
      description: 'Dolor intenso en la espalda o costado que puede indicar cálculo renal u otras condiciones graves.',
      symptoms: [
        'Dolor que viene en oleadas',
        'Dolor que se irradia a la ingle',
        'Náuseas y vómitos',
        'Imposibilidad de encontrar posición cómoda'
      ],
      causes: [
        'Cálculo renal obstructivo',
        'Pielonefritis (infección renal)',
        'Torsión testicular',
        'Ruptura de quiste renal'
      ],
      action: 'Acudir inmediatamente a emergencias. El dolor de cálculo renal es una de las experiencias más intensas.'
    },
    {
      id: 3,
      title: 'Retención Urinaria: Incapacidad para Orinar',
      severity: 'Crítica',
      timeframe: 'Emergencia inmediata',
      description: 'La incapacidad completa para orinar es una urgencia urológica que requiere atención inmediata.',
      symptoms: [
        'Imposibilidad total para orinar',
        'Dolor suprapúbico intenso',
        'Sensación de vejiga llena',
        'Distensión abdominal'
      ],
      causes: [
        'Obstrucción prostática severa',
        'Coágulos en vejiga',
        'Medicamentos (antihistamínicos, antidepresivos)',
        'Estreñimiento severo'
      ],
      action: 'EMERGENCIA: Acudir inmediatamente al hospital. Puede requerir cateterización urgente.'
    },
    {
      id: 4,
      title: 'Dolor Testicular Agudo en Jóvenes',
      severity: 'Crítica',
      timeframe: 'Emergencia - 6 horas',
      description: 'El dolor testicular súbito en adolescentes y jóvenes puede indicar torsión testicular.',
      symptoms: [
        'Dolor testicular súbito y severo',
        'Hinchazón escrotal',
        'Náuseas y vómitos',
        'Testículo elevado y horizontal'
      ],
      causes: [
        'Torsión testicular (emergencia)',
        'Torsión de apéndice testicular',
        'Epididimitis aguda',
        'Traumatismo escrotal'
      ],
      action: 'EMERGENCIA CRÍTICA: Menos de 6 horas para salvar el testículo. Cirugía urgente puede ser necesaria.'
    },
    {
      id: 5,
      title: 'Fiebre con Síntomas Urinarios',
      severity: 'Alta',
      timeframe: 'Urgente - 24 horas',
      description: 'La combinación de fiebre y síntomas urinarios puede indicar infección renal.',
      symptoms: [
        'Fiebre mayor a 38.5°C',
        'Escalofríos y malestar general',
        'Dolor en flancos',
        'Síntomas urinarios (ardor, frecuencia)'
      ],
      causes: [
        'Pielonefritis (infección renal)',
        'Prostatitis aguda',
        'Sepsis urinaria',
        'Absceso renal'
      ],
      action: 'Consulta urgente dentro de 24 horas. Puede requerir hospitalización y antibióticos intravenosos.'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítica': return 'bg-red-100 text-red-800 border-red-200';
      case 'Alta': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

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
              <span className="text-foreground">Síntomas de Alerta</span>
            </nav>
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="section-padding bg-gradient-to-r from-red-50 to-orange-50"
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
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <span className="text-red-600 font-semibold">Urgencias Urológicas</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Síntomas de Alerta Urológica: Cuándo Consultar Inmediatamente
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                Reconoce los síntomas que requieren atención médica urgente. 
                Una respuesta rápida puede salvar tu riñón, vejiga o testículo.
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

        {/* Emergency Alert */}
        <motion.section 
          className="section-padding-sm bg-red-600 text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="section-container">
            <div className="flex items-center justify-center gap-4 text-center">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">¿Emergencia Urológica?</p>
                <p className="text-red-100">Llama inmediatamente al 911 o acude al hospital más cercano</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms Grid */}
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
                5 Síntomas que NO Debes Ignorar
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Estos síntomas requieren evaluación médica urgente. El tiempo puede ser crítico para preservar la función orgánica.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {emergencySymptoms.map((symptom, index) => (
                <motion.div
                  key={symptom.id}
                  variants={fadeIn}
                  custom={index}
                  className="medical-card border-l-4 border-l-red-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {symptom.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {symptom.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4 lg:mb-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(symptom.severity)}`}>
                        {symptom.severity}
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {symptom.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Síntomas</h4>
                      <ul className="space-y-2">
                        {symptom.symptoms.map((s, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Posibles Causas</h4>
                      <ul className="space-y-2">
                        {symptom.causes.map((cause, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-2 lg:col-span-1">
                      <h4 className="font-semibold text-foreground mb-3">Acción Recomendada</h4>
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-l-red-600">
                        <p className="text-sm font-medium text-red-800">
                          {symptom.action}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Prevention Tips */}
            <motion.div 
              className="mt-16"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="medical-card bg-green-50 border border-green-200">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Prevención de Urgencias Urológicas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Hábitos Preventivos</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Mantener hidratación adecuada (2-3L diarios)</li>
                      <li>• Vaciar la vejiga completamente</li>
                      <li>• Higiene genital apropiada</li>
                      <li>• Evitar retener orina por períodos prolongados</li>
                      <li>• Controles urológicos regulares después de los 45 años</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Factores de Riesgo</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Historia familiar de cáncer urológico</li>
                      <li>• Infecciones urinarias recurrentes</li>
                      <li>• Diabetes mellitus</li>
                      <li>• Tabaquismo</li>
                      <li>• Exposición a químicos industriales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emergency CTA */}
            <motion.div 
              className="mt-16 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="medical-card bg-primary/5">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Presentas alguno de estos síntomas de alarma?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  No esperes. Los síntomas de alerta urológica pueden indicar condiciones que requieren tratamiento inmediato.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppButton 
                    message="URGENTE: Tengo síntomas de alarma urológica y necesito consulta inmediata."
                    variant="default"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Contacto de Emergencia
                  </WhatsAppButton>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contacto">
                      Agendar Consulta Preventiva
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default SintomasAlerta;