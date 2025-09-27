'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Stethoscope, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import CloudinaryLogo from './CloudinaryLogo';

const Footer = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría más información sobre sus servicios.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <picture>
                {/* Desktop */}
                <source
                  media="(min-width: 1024px)"
                  srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png 1x, https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887223/logo-desktop-2x_gezmzg.png 2x"
                />
                {/* Tablet */}
                <source
                  media="(min-width: 768px)"
                  srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887220/logo-tablet-2x_rodw5h.png"
                />
                {/* Mobile */}
                <source
                  media="(max-width: 767px)"
                  srcSet="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887221/logo-mobile_kiu9br.png"
                />
                {/* Fallback */}
                <img 
                  src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png"
                  alt="Dr. Javier del Rosario - Urólogo" 
                  className="h-10 w-auto md:h-12"
                />
              </picture>
              <span className="font-bold text-xl">Dr. Javier del Rosario</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Urólogo especialista con 25 años de experiencia. Cirugías de próstata, cálculos renales y biopsias. 
              Explicaciones claras y seguimiento personalizado en 3 ubicaciones.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-accent hover:bg-accent/90 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-background/80 hover:text-background transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-background/80 hover:text-background transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-background/80 hover:text-background transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">+507 441-9876</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-background/60" />
                <span className="text-background/80 text-sm">+507 6000-0000</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-sm">Horarios</h4>
              <p className="text-background/80 text-sm">
                Panama Clinic: Lun - Vie 8:00-17:00<br />
                CHSF-Coronado: Mar - Jue 14:00-18:00<br />
                Centro Caribe-Colón: Mié - Vie 9:00-13:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Dr. Javier del Rosario. Todos los derechos reservados.
            </p>
            <p className="text-background/60 text-sm mt-2 md:mt-0">
              Consulta $70 no jubilados - $60 jubilados | Ultrasonido incluido
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;