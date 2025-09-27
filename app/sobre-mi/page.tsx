"use client";

import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, MapPin, GraduationCap, Globe2, Heart } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Dr. Javier del Rosario - Trayectoria de 25 Años en Urología",
      subtitle: "Especialista en Urología con Formación Internacional",
      story: {
        title: "Mi Historia Profesional",
        paragraphs: [
          "Soy el Dr. Javier del Rosario, graduado con honores de primer lugar de la Universidad de Panamá en la carrera de Medicina. Mi dedicación a la excelencia académica fue solo el inicio de un camino profesional marcado por la búsqueda constante del conocimiento y la mejora continua.",
          "En 2003, realicé mi especialización en Urología en Venezuela, donde desarrollé las bases sólidas de mi práctica médica. Posteriormente, tuve la oportunidad de entrenarme en la prestigiosa Cleveland Clinic de España, donde perfeccioné técnicas quirúrgicas avanzadas y adopté protocolos internacionales de atención.",
          "Mi formación se completó con un fellowship en Argentina, donde me especialicé en las técnicas más modernas de cirugía urológica. Esta experiencia internacional me permitió incorporar las mejores prácticas mundiales en mi consulta en Panamá.",
          "Durante estos 25 años de práctica, he realizado más de 5,000 procedimientos urológicos, siempre con el compromiso de brindar explicaciones claras y educativas a mis pacientes, como si fuera una clase universitaria. Creo firmemente que un paciente informado es un paciente que colabora mejor en su recuperación.",
        ],
      },
      philosophy: {
        title: "Mi Filosofía de Atención",
        content: "Mi enfoque va más allá del diagnóstico y tratamiento. Cada consulta es una oportunidad para educar, tranquilizar y acompañar al paciente en su proceso de sanación. Ofrezco seguimiento personalizado que se extiende más allá de la consulta inicial, porque entiendo que la medicina es una relación de confianza a largo plazo.",
      },
      stats: {
        title: "Experiencia Comprobada",
        items: [
          { number: "25+", label: "Años de Experiencia" },
          { number: "5,000+", label: "Procedimientos Realizados" },
          { number: "2", label: "Ubicaciones de Consulta" },
          { number: "100%", label: "Dedicación al Paciente" },
        ],
      },
      specialties: {
        title: "Áreas de Especialización",
        items: [
          "Cirugías de Próstata (RTU y Fotovaporización láser)",
          "Cirugías de Cálculos Renales (Ureteroscopía flexible y rígida)",
          "Biopsias de Próstata con seguimiento integral",
          "Ultrasonido Urológico diagnóstico",
          "Consulta integral con enfoque educativo",
        ],
      },
      cta: "Conoce mis servicios",
    },
    en: {
      title: "Dr. Javier del Rosario - 25 Years of Experience in Urology",
      subtitle: "Urology Specialist with International Training",
      story: {
        title: "My Professional Journey",
        paragraphs: [
          "I am Dr. Javier del Rosario, graduated with first-place honors from the University of Panama in Medicine. My dedication to academic excellence was just the beginning of a professional path marked by the constant pursuit of knowledge and continuous improvement.",
          "In 2003, I completed my specialization in Urology in Venezuela, where I developed the solid foundations of my medical practice. Subsequently, I had the opportunity to train at the prestigious Cleveland Clinic in Spain, where I perfected advanced surgical techniques and adopted international care protocols.",
          "My training was completed with a fellowship in Argentina, where I specialized in the most modern urological surgery techniques. This international experience allowed me to incorporate the world's best practices into my practice in Panama.",
          "During these 25 years of practice, I have performed more than 5,000 urological procedures, always with the commitment to provide clear and educational explanations to my patients, as if it were a university class. I firmly believe that an informed patient is a patient who collaborates better in their recovery.",
        ],
      },
      philosophy: {
        title: "My Care Philosophy",
        content: "My approach goes beyond diagnosis and treatment. Each consultation is an opportunity to educate, reassure, and accompany the patient in their healing process. I offer personalized follow-up that extends beyond the initial consultation, because I understand that medicine is a long-term trust relationship.",
      },
      stats: {
        title: "Proven Experience",
        items: [
          { number: "25+", label: "Years of Experience" },
          { number: "5,000+", label: "Procedures Performed" },
          { number: "2", label: "Consultation Locations" },
          { number: "100%", label: "Patient Dedication" },
        ],
      },
      specialties: {
        title: "Specialization Areas",
        items: [
          "Prostate Surgeries (TURP and Laser Photovaporization)",
          "Kidney Stone Surgeries (Flexible and Rigid Ureteroscopy)",
          "Prostate Biopsies with comprehensive follow-up",
          "Diagnostic Urological Ultrasound",
          "Comprehensive consultation with educational approach",
        ],
      },
      cta: "Learn about my services",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {currentContent.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {currentContent.subtitle}
                </p>
                <Link href="/servicios">
                  <Button className="btn-primary">
                    {currentContent.cta}
                  </Button>
                </Link>
              </div>
              
              {/* Professional Photo Placeholder */}
              <div className="flex justify-center">
                <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-primary">
                    <Award className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-semibold">Dr. Javier del Rosario</p>
                    <p className="text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {currentContent.story.title}
              </h2>
              <div className="space-y-6">
                {currentContent.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              {currentContent.stats.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.stats.items.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-number">{stat.number}</div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {currentContent.philosophy.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {currentContent.philosophy.content}
              </p>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                {currentContent.specialties.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent.specialties.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 medical-card">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              ¿Listo para tu Consulta?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="btn-primary">
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="btn-secondary">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}