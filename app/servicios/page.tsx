'use client'

import React from 'react';
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Activity, Zap, Target, ScanLine, DollarSign, Shield, Clock } from 'lucide-react';

const ServicesPage = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Servicios de Urología Especializada - Dr. Javier del Rosario",
      subtitle: "Procedimientos especializados con tecnología de vanguardia y seguimiento personalizado",
      services: [
        {
          icon: Activity,
          title: "Cirugías de Próstata",
          frequency: "4-5 procedimientos mensuales",
          procedures: [
            "RTU (Resección Transuretral de Próstata)",
            "Fotovaporización láser de próstata",
            "Evaluación pre y post operatoria completa",
            "Seguimiento personalizado durante recuperación"
          ],
          description: "Procedimientos especializados para el tratamiento de hiperplasia prostática benigna y otras condiciones de la próstata utilizando técnicas mínimamente invasivas.",
        },
        {
          icon: Zap,
          title: "Cirugías de Cálculos Renales",
          frequency: "8 procedimientos mensuales",
          procedures: [
            "Ureteroscopía flexible (URS-F)",
            "Ureteroscopía rígida (URS-R)",
            "Litotricia extracorpórea",
            "Nefrolitotomía percutánea"
          ],
          description: "Tratamiento integral de cálculos renales y ureterales con técnicas endoscópicas modernas que minimizan el tiempo de recuperación.",
        },
        {
          icon: Target,
          title: "Biopsias de Próstata",
          frequency: "Procedimiento más común",
          procedures: [
            "Biopsia transrectal ecoguiada",
            "Biopsia por fusión de imágenes",
            "Análisis histopatológico completo",
            "Interpretación y seguimiento de resultados"
          ],
          description: "Procedimiento diagnóstico esencial para la detección temprana del cáncer de próstata, realizado con técnicas de precisión y máximo confort para el paciente.",
        },
        {
          icon: ScanLine,
          title: "Servicios de Consultorio",
          frequency: "Disponible en cada consulta",
          procedures: [
            "Consulta urológica integral",
            "Ultrasonido urológico (sin costo adicional)",
            "Evaluación de laboratorios",
            "Plan de tratamiento personalizado"
          ],
          description: "Consulta completa que incluye evaluación clínica detallada y ultrasonido diagnóstico sin costo adicional para una valoración integral.",
        }
      ],
      pricing: {
        title: "Información de Consulta",
        items: [
          { label: "Consulta pacientes no jubilados", price: "$70" },
          { label: "Consulta pacientes jubilados", price: "$60" },
          { label: "Ultrasonido urológico", price: "Incluido sin costo" },
          { label: "Seguimiento post-operatorio", price: "Incluido" }
        ]
      },
      insurance: {
        title: "Seguros Médicos Aceptados",
        providers: [
          "Assa Compañía de Seguros",
          "Seguros Suramericana", 
          "Mapfre Panamá",
          "Seguros Fedpa",
          "Pan-American Life Insurance",
          "Seguros Vivir"
        ]
      },
      cta: "Agendar Consulta"
    },
    en: {
      title: "Specialized Urology Services - Dr. Javier del Rosario",
      subtitle: "Specialized procedures with cutting-edge technology and personalized follow-up",
      services: [
        {
          icon: Activity,
          title: "Prostate Surgeries",
          frequency: "4-5 monthly procedures",
          procedures: [
            "TURP (Transurethral Resection of the Prostate)",
            "Laser photovaporization of prostate",
            "Complete pre and post-operative evaluation",
            "Personalized follow-up during recovery"
          ],
          description: "Specialized procedures for the treatment of benign prostatic hyperplasia and other prostate conditions using minimally invasive techniques.",
        },
        {
          icon: Zap,
          title: "Kidney Stone Surgeries",
          frequency: "8 monthly procedures",
          procedures: [
            "Flexible ureteroscopy (F-URS)",
            "Rigid ureteroscopy (R-URS)",
            "Extracorporeal lithotripsy",
            "Percutaneous nephrolithotomy"
          ],
          description: "Comprehensive treatment of kidney and ureteral stones with modern endoscopic techniques that minimize recovery time.",
        },
        {
          icon: Target,
          title: "Prostate Biopsies",
          frequency: "Most common procedure",
          procedures: [
            "Transrectal echo-guided biopsy",
            "Image fusion biopsy",
            "Complete histopathological analysis",
            "Interpretation and follow-up of results"
          ],
          description: "Essential diagnostic procedure for early detection of prostate cancer, performed with precision techniques and maximum patient comfort.",
        },
        {
          icon: ScanLine,
          title: "Office Services",
          frequency: "Available in each consultation",
          procedures: [
            "Comprehensive urological consultation",
            "Urological ultrasound (no additional cost)",
            "Laboratory evaluation",
            "Personalized treatment plan"
          ],
          description: "Complete consultation that includes detailed clinical evaluation and diagnostic ultrasound at no additional cost for comprehensive assessment.",
        }
      ],
      pricing: {
        title: "Consultation Information",
        items: [
          { label: "Consultation non-retirees", price: "$70" },
          { label: "Consultation retirees", price: "$60" },
          { label: "Urological ultrasound", price: "Included at no cost" },
          { label: "Post-operative follow-up", price: "Included" }
        ]
      },
      insurance: {
        title: "Accepted Medical Insurance",
        providers: [
          "Assa Compañía de Seguros",
          "Seguros Suramericana",
          "Mapfre Panamá", 
          "Seguros Fedpa",
          "Pan-American Life Insurance",
          "Seguros Vivir"
        ]
      },
      cta: "Schedule Consultation"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="space-y-16">
              {currentContent.services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-primary font-medium">
                            {service.frequency}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link href="/contacto">
                        <Button className="btn-primary">
                          {currentContent.cta}
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="medical-card">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Procedimientos Incluidos:
                      </h3>
                      <ul className="space-y-3">
                        {service.procedures.map((procedure, pIndex) => (
                          <li key={pIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{procedure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {currentContent.pricing.title}
                </h2>
                <div className="space-y-4">
                  {currentContent.pricing.items.map((item, index) => (
                    <div key={index} className="medical-card">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {currentContent.insurance.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentContent.insurance.providers.map((provider, index) => (
                    <div key={index} className="medical-card text-center">
                      <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-sm font-medium text-muted-foreground">
                        {provider}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Atención Puntual
                </h3>
                <p className="text-muted-foreground">
                  Respetamos tu tiempo con citas programadas y atención puntual.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ScanLine className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Tecnología Avanzada
                </h3>
                <p className="text-muted-foreground">
                  Equipos de última generación para diagnósticos precisos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Seguimiento Integral
                </h3>
                <p className="text-muted-foreground">
                  Acompañamiento personalizado durante todo el tratamiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              ¿Tienes alguna pregunta sobre nuestros servicios?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="btn-primary">
                  Contactar Ahora
                </Button>
              </Link>
              <Link href="/sobre-mi">
                <Button variant="outline" className="btn-secondary">
                  Conoce al Dr. del Rosario
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;