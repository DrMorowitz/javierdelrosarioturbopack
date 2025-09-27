"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeIn, staggerContainer } from '@/lib/animations';

const FAQAccordion = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: "¿Qué incluye una consulta urológica?",
      answer: "La consulta incluye una evaluación completa de su historial médico, examen físico dirigido, y las explicaciones educativas que necesita para entender su condición. Se programan los estudios necesarios y se establece un plan de tratamiento personalizado."
    },
    {
      question: "¿Cuánto cuesta una vasectomía en Panamá?",
      answer: "El costo de la vasectomía varía según la ubicación y el método utilizado. Ofrecemos la técnica sin bisturí con mínima invasión. Para información específica sobre costos y seguros aceptados, contáctenos directamente."
    },
    {
      question: "¿Qué seguros médicos aceptan?",
      answer: "Aceptamos la mayoría de seguros médicos principales en Panamá. Para verificar si su seguro está incluido, puede contactarnos directamente o consultar en la recepción de cada ubicación."
    },
    {
      question: "¿Cómo puedo agendar una cita?",
      answer: "Puede agendar su cita a través de CliniWeb, llamando directamente a nuestras ubicaciones, o enviándonos un mensaje por WhatsApp. También puede usar el formulario de contacto en nuestro sitio web."
    },
    {
      question: "¿Qué debo llevar a mi primera consulta?",
      answer: "Traiga su cédula, tarjeta de seguro médico (si aplica), listado de medicamentos actuales, y cualquier estudio urológico previo que tenga. También prepare una lista de sus síntomas y preguntas."
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto"
    >
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-white/80 backdrop-blur-sm rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionItem value={`item-${index}`} className="border-none">
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4 text-lg font-semibold text-gray-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default FAQAccordion;