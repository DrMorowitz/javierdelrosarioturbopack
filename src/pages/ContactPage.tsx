import React from 'react';
import { MedicalNavbar } from '@/components/ui/navbar';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, MessageCircle, Calendar, Shield } from 'lucide-react';

const ContactPage = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Contacto - Dr. Javier del Rosario Urólogo",
      subtitle: "Agenda tu consulta en nuestras ubicaciones en Colón y Coronado",
      locations: {
        title: "Nuestras Ubicaciones",
        colon: {
          name: "Consulta Colón",
          address: "Hospital Regional de Colón\nCalle Principal, Colón",
          schedule: "Lunes a Viernes: 8:00 AM - 5:00 PM"
        },
        coronado: {
          name: "Consulta Coronado", 
          address: "Centro Médico Coronado\nAv. Roberto Eisenmann, Coronado",
          schedule: "Martes y Jueves: 2:00 PM - 6:00 PM"
        }
      },
      contact: {
        title: "Información de Contacto",
        phone: {
          colon: "+507 441-9876",
          coronado: "+507 240-5432",
          whatsapp: "+507 6000-0000"
        }
      },
      cliniweb: {
        title: "Agenda en CliniWeb",
        description: "Sistema de citas en línea disponible 24/7",
        instructions: "1. Ingresa a CliniWeb\n2. Busca 'Dr. Javier del Rosario'\n3. Selecciona fecha y hora\n4. Confirma tu cita"
      },
      insurance: {
        title: "Seguros Aceptados",
        note: "Trabajamos con los principales seguros médicos de Panamá"
      }
    },
    en: {
      title: "Contact - Dr. Javier del Rosario Urologist", 
      subtitle: "Schedule your consultation at our locations in Colón and Coronado",
      locations: {
        title: "Our Locations",
        colon: {
          name: "Colón Office",
          address: "Regional Hospital of Colón\nMain Street, Colón",
          schedule: "Monday to Friday: 8:00 AM - 5:00 PM"
        },
        coronado: {
          name: "Coronado Office",
          address: "Coronado Medical Center\nRoberto Eisenmann Ave, Coronado", 
          schedule: "Tuesday and Thursday: 2:00 PM - 6:00 PM"
        }
      },
      contact: {
        title: "Contact Information",
        phone: {
          colon: "+507 441-9876",
          coronado: "+507 240-5432", 
          whatsapp: "+507 6000-0000"
        }
      },
      cliniweb: {
        title: "Schedule on CliniWeb",
        description: "Online appointment system available 24/7",
        instructions: "1. Go to CliniWeb\n2. Search 'Dr. Javier del Rosario'\n3. Select date and time\n4. Confirm your appointment"
      },
      insurance: {
        title: "Accepted Insurance",
        note: "We work with major medical insurance providers in Panama"
      }
    }
  };

  const currentContent = content[language];

  const handleWhatsApp = (location: string) => {
    const message = encodeURIComponent(
      `Hola Dr. del Rosario, me gustaría agendar una consulta en ${location}.`
    );
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  const handleCliniWeb = () => {
    window.open('https://cliniweb.com/dr-javier-del-rosario', '_blank');
  };

  const insuranceProviders = [
    "Assa Compañía de Seguros",
    "Seguros Suramericana",
    "Mapfre Panamá",
    "Seguros Fedpa", 
    "Pan-American Life Insurance",
    "Seguros Vivir"
  ];

  return (
    <div className="min-h-screen">
      <MedicalNavbar />
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

        {/* Contact Information Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Locations */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {currentContent.locations.title}
                </h2>
                
                <div className="space-y-8">
                  {/* Colón Location */}
                  <div className="medical-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {currentContent.locations.colon.name}
                        </h3>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {currentContent.locations.colon.address}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {currentContent.locations.colon.schedule}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button 
                            size="sm" 
                            className="btn-whatsapp"
                            onClick={() => handleWhatsApp('Colón')}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-1" />
                            {currentContent.contact.phone.colon}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coronado Location */}
                  <div className="medical-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {currentContent.locations.coronado.name}
                        </h3>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {currentContent.locations.coronado.address}
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {currentContent.locations.coronado.schedule}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button 
                            size="sm" 
                            className="btn-whatsapp"
                            onClick={() => handleWhatsApp('Coronado')}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-1" />
                            {currentContent.contact.phone.coronado}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CliniWeb Section */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {currentContent.cliniweb.title}
                </h2>
                
                <div className="medical-card">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {currentContent.cliniweb.description}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line text-sm">
                      {currentContent.cliniweb.instructions}
                    </p>
                  </div>
                  
                  <Button 
                    className="btn-primary w-full" 
                    onClick={handleCliniWeb}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Ir a CliniWeb
                  </Button>
                </div>

                {/* Google Maps Placeholder */}
                <div className="mt-8">
                  <div className="w-full h-64 bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Google Maps</p>
                      <p className="text-sm">Ubicaciones del Dr. del Rosario</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Insurance Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {currentContent.insurance.title}
              </h2>
              <p className="text-muted-foreground">
                {currentContent.insurance.note}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="medical-card text-center p-4">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {provider}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;