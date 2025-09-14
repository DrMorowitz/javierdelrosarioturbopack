import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import CloudinaryLogo from './CloudinaryLogo';

const Header = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <CloudinaryLogo 
              alt="Dr. Javier del Rosario - Urólogo" 
              className="h-10 w-auto max-h-10"
              filename="logo"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/sobre-mi"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/sobre-mi') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/servicios"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/servicios') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/contacto"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/contacto') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* CTA and Language Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            
            <Link to="/contacto">
              <Button className="btn-primary text-sm lg:text-base px-4 lg:px-8 py-2 lg:py-4">
                {t('nav.appointment')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;