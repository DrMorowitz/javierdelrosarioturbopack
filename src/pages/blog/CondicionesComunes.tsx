import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import SEO from '@/components/SEO';
import { 
  generateBreadcrumbSchema, 
  generateArticleSchema,
  generateMedicalConditionSchema 
} from '@/lib/schema';
import { 
  fadeIn, 
  staggerContainer,
  scaleIn,
  viewportConfig 
} from '@/lib/animations';

const CondicionesComunes = () => {
  // Generate SEO schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Condiciones Comunes', url: '/blog/condiciones-comunes' }
  ]);

  const articleSchema = generateArticleSchema(
    'Condiciones Urológicas Comunes en Panamá',
    'Guía completa sobre las condiciones urológicas más frecuentes: cálculos renales, infecciones urinarias, hiperplasia prostática y disfunción eréctil.',
    '2025-09-15T00:00:00Z',
    '2025-09-15T00:00:00Z',
    '/blog/condiciones-comunes'
  );

  const medicalConditionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      articleSchema,
      generateMedicalConditionSchema(
        'Cálculos Renales',
        'Depósitos sólidos de minerales que se forman en los riñones, comunes en clima tropical.'
      ),
      generateMedicalConditionSchema(
        'Hiperplasia Prostática Benigna',
        'Agrandamiento no canceroso de la próstata que afecta la micción en hombres mayores de 50 años.'
      )
    ]
  };

  const articles = [
    {
      id: 1,
      title: 'Cálculos Renales en Panamá: Síntomas, Causas y Tratamiento',
      excerpt: 'Los cálculos renales afectan al 10% de la población panameña. Conoce los síntomas de alerta, factores de riesgo y opciones de tratamiento modernas.',
      readTime: '8 min',
      date: '15 Sep 2025',
      keywords: ['cálculos renales panamá', 'litotricia panamá', 'ureteroscopía'],
      content: `
        <h2>¿Qué son los cálculos renales?</h2>
        <p>Los cálculos renales son depósitos sólidos de minerales y sales que se forman dentro de los riñones. En Panamá, representan una de las consultas urológicas más frecuentes.</p>
        
        <h3>Síntomas principales</h3>
        <ul>
          <li>Dolor intenso en la espalda o costado</li>
          <li>Dolor que se irradia hacia el abdomen y la ingle</li>
          <li>Dolor al orinar</li>
          <li>Orina rosada, roja o marrón</li>
          <li>Náuseas y vómitos</li>
        </ul>

        <h3>Factores de riesgo en Panamá</h3>
        <p>El clima tropical y la alta humedad aumentan el riesgo de deshidratación, principal factor de riesgo para cálculos renales.</p>
        
        <h3>Tratamientos disponibles</h3>
        <p><strong>Litotricia extracorpórea:</strong> Ondas de choque para fragmentar cálculos</p>
        <p><strong>Ureteroscopía flexible:</strong> Extracción directa con láser</p>
        <p><strong>Nefrolitotomía percutánea:</strong> Para cálculos grandes</p>
        
        <h3>Prevención</h3>
        <p>Beber 2-3 litros de agua diarios es fundamental en el clima panameño.</p>
      `
    },
    {
      id: 2,
      title: 'Infecciones Urinarias: Cuándo Consultar al Urólogo',
      excerpt: 'Las infecciones urinarias recurrentes requieren evaluación especializada. Aprende a identificar síntomas y cuándo buscar tratamiento urológico.',
      readTime: '6 min',
      date: '12 Sep 2025',
      keywords: ['infección urinaria panamá', 'urólogo cistitis', 'ITU recurrente'],
      content: `
        <h2>Infecciones Urinarias en Adultos</h2>
        <p>Las infecciones del tracto urinario (ITU) son más comunes en mujeres, pero requieren atención urológica cuando son recurrentes o complicadas.</p>
        
        <h3>Síntomas de alarma</h3>
        <ul>
          <li>Ardor o dolor al orinar</li>
          <li>Urgencia urinaria frecuente</li>
          <li>Dolor suprapúbico</li>
          <li>Fiebre y escalofríos</li>
          <li>Sangre en la orina</li>
        </ul>

        <h3>Cuándo consultar al urólogo</h3>
        <p>• Más de 3 episodios al año</p>
        <p>• ITU en hombres</p>
        <p>• Síntomas que no mejoran con antibióticos</p>
        <p>• Fiebre alta o dolor en flancos</p>
        
        <h3>Estudios diagnósticos</h3>
        <p>Urocultivo, ecografía renal y cistoscopia cuando está indicada.</p>
        
        <h3>Tratamiento especializado</h3>
        <p>Antibioterapia dirigida, profilaxis en casos recurrentes y corrección de factores anatómicos.</p>
      `
    },
    {
      id: 3,
      title: 'Hiperplasia Prostática (HPB): Síntomas y Tratamiento',
      excerpt: 'La próstata agrandada afecta al 50% de hombres después de los 50 años. Conoce los síntomas, evaluación y opciones de tratamiento modernas.',
      readTime: '10 min',
      date: '08 Sep 2025',
      keywords: ['próstata agrandada panamá', 'HPB síntomas', 'terapia rezum'],
      content: `
        <h2>Hiperplasia Prostática Benigna (HPB)</h2>
        <p>La HPB es el agrandamiento no canceroso de la próstata que afecta la calidad de vida masculina después de los 50 años.</p>
        
        <h3>Síntomas principales</h3>
        <ul>
          <li>Dificultad para iniciar la micción</li>
          <li>Chorro urinario débil o interrumpido</li>
          <li>Sensación de vaciado incompleto</li>
          <li>Necesidad de orinar frecuentemente</li>
          <li>Urgencia urinaria, especialmente de noche</li>
        </ul>

        <h3>Evaluación diagnóstica</h3>
        <p>• Cuestionario de síntomas (IPSS)</p>
        <p>• Tacto rectal</p>
        <p>• PSA sérico</p>
        <p>• Ecografía prostática</p>
        <p>• Uroflujometría</p>
        
        <h3>Opciones de tratamiento</h3>
        <p><strong>Medicamentos:</strong> Alfabloqueadores e inhibidores de 5-alfa reductasa</p>
        <p><strong>Terapia Rezum:</strong> Vapor de agua para reducir tejido prostático</p>
        <p><strong>Láser prostático:</strong> Vaporización con láser verde</p>
        <p><strong>RTU prostática:</strong> Resección transuretral cuando está indicada</p>
      `
    },
    {
      id: 4,
      title: 'Disfunción Eréctil: Evaluación y Tratamiento Integral',
      excerpt: 'La disfunción eréctil afecta al 40% de hombres después de los 40 años. Conoce las causas, evaluación médica y opciones terapéuticas disponibles.',
      readTime: '12 min',
      date: '05 Sep 2025',
      keywords: ['disfunción eréctil panamá', 'impotencia tratamiento', 'andrologo panama'],
      content: `
        <h2>Disfunción Eréctil: Enfoque Integral</h2>
        <p>La disfunción eréctil es la incapacidad persistente para lograr o mantener una erección suficiente para una actividad sexual satisfactoria.</p>
        
        <h3>Causas principales</h3>
        <p><strong>Físicas:</strong> Diabetes, hipertensión, enfermedad cardiovascular, obesidad</p>
        <p><strong>Psicológicas:</strong> Ansiedad, depresión, estrés</p>
        <p><strong>Medicamentos:</strong> Antidepresivos, antihipertensivos</p>
        
        <h3>Evaluación médica</h3>
        <ul>
          <li>Historia clínica detallada</li>
          <li>Examen físico completo</li>
          <li>Estudios de laboratorio (testosterona, glucosa, lípidos)</li>
          <li>Evaluación vascular cuando está indicada</li>
        </ul>

        <h3>Opciones de tratamiento</h3>
        <p><strong>Primera línea:</strong> Inhibidores de PDE5 (sildenafil, tadalafil)</p>
        <p><strong>Segunda línea:</strong> Inyecciones intracavernosas</p>
        <p><strong>Terapia de ondas:</strong> Ondas de choque de baja intensidad</p>
        <p><strong>Dispositivos:</strong> Bombas de vacío</p>
        <p><strong>Cirugía:</strong> Prótesis peneana en casos seleccionados</p>
        
        <h3>Prevención</h3>
        <p>Control de factores de riesgo cardiovascular, ejercicio regular, dieta saludable y manejo del estrés.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Condiciones Urológicas Comunes en Panamá - Dr. Javier del Rosario"
        description="Guía completa sobre condiciones urológicas frecuentes en Panamá: cálculos renales, infecciones urinarias, hiperplasia prostática y disfunción eréctil. Síntomas, causas y tratamientos."
        keywords="cálculos renales panamá, infección urinaria panamá, próstata agrandada, disfunción eréctil panamá, HPB síntomas, litotricia panamá, condiciones urológicas comunes"
        schema={medicalConditionsSchema}
        type="article"
        publishDate="2025-09-15T00:00:00Z"
        modifiedDate="2025-09-15T00:00:00Z"
      />
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
              <Link to="/" className="hover:text-primary">Inicio</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Condiciones Comunes</span>
            </nav>
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="section-padding bg-gradient-to-r from-blue-50 to-blue-100"
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
                  <Link to="/blog" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al Blog
                  </Link>
                </Button>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                variants={scaleIn}
              >
                Condiciones Urológicas Comunes en Panamá
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                Información completa sobre las condiciones urológicas más frecuentes: 
                cálculos renales, infecciones urinarias, hiperplasia prostática y disfunción eréctil.
              </motion.p>
              <motion.div 
                className="flex items-center gap-4 text-sm text-muted-foreground"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
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

        {/* Articles Grid */}
        <motion.section 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <div className="section-container">
            <div className="grid gap-8 md:gap-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  variants={fadeIn}
                  custom={index}
                  className="max-w-none"
                >
                  <div className="medical-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {article.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="prose prose-lg max-w-none text-foreground"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.keywords.map((keyword, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div 
              className="mt-16 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="medical-card bg-primary/5">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Presentas alguno de estos síntomas?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Una evaluación temprana puede prevenir complicaciones y mejorar tu calidad de vida. 
                  Agenda tu consulta con el Dr. Javier del Rosario.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contacto">
                      Agendar Evaluación
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => {
                    const message = encodeURIComponent('Hola Dr. del Rosario, tengo síntomas urológicos y me gustaría agendar una consulta.');
                    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
                  }}>
                    Consultar por WhatsApp
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

export default CondicionesComunes;