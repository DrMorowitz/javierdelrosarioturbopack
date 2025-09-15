import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X, MessageCircle } from 'lucide-react';
import CloudinaryLogo from './CloudinaryLogo';

const Header = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <picture>
              {/* Desktop */}
              <source
                media="(min-width: 1024px)"
                srcSet="/logo-desktop.png 1x, /logo-desktop-2x.png 2x"
              />
              {/* Tablet */}
              <source
                media="(min-width: 768px)"
                srcSet="/logo-tablet.png 1x, /logo-tablet-2x.png 2x"
              />
              {/* Mobile */}
              <source
                media="(max-width: 767px)"
                srcSet="/logo-mobile.png 1x, /logo-mobile-2x.png 2x"
              />
              {/* Fallback */}
              <img 
                src="/logo-desktop.png"
                alt="Dr. Javier del Rosario - Urólogo"
                className="h-8 md:h-10 lg:h-12 w-auto max-h-12"
                style={{ maxHeight: '48px' }}
              />
            </picture>
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

          {/* Desktop Language Toggle */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Lateral Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 mobile-backdrop"
            onClick={closeMobileMenu}
          />
          
          {/* Slide-out Menu */}
          <div className={`fixed top-0 right-0 h-screen w-72 max-w-[85vw] bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white flex-shrink-0">
                <div className="flex items-center">
                  <picture>
                    {/* Mobile */}
                    <source
                      media="(max-width: 767px)"
                      srcSet="/logo-mobile.png 1x, /logo-mobile-2x.png 2x"
                    />
                    {/* Fallback */}
                    <img 
                      src="/logo-mobile.png"
                      alt="Dr. Javier del Rosario - Urólogo"
                      className="h-8 w-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/logo.png';
                      }}
                    />
                  </picture>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="p-1 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 bg-white overflow-y-auto">
                <nav className="p-6 space-y-4">
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className={`text-lg font-medium transition-colors py-3 block ${
                      isActiveRoute('/') ? 'text-blue-600 border-l-4 border-blue-600 pl-4 -ml-6 pl-2' : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    {t('nav.home')}
                  </Link>
                  <Link
                    to="/sobre-mi"
                    onClick={closeMobileMenu}
                    className={`text-lg font-medium transition-colors py-3 block ${
                      isActiveRoute('/sobre-mi') ? 'text-blue-600 border-l-4 border-blue-600 pl-4 -ml-6 pl-2' : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    {t('nav.about')}
                  </Link>
                  <Link
                    to="/servicios"
                    onClick={closeMobileMenu}
                    className={`text-lg font-medium transition-colors py-3 block ${
                      isActiveRoute('/servicios') ? 'text-blue-600 border-l-4 border-blue-600 pl-4 -ml-6 pl-2' : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    {t('nav.services')}
                  </Link>
                  <Link
                    to="/contacto"
                    onClick={closeMobileMenu}
                    className={`text-lg font-medium transition-colors py-3 block ${
                      isActiveRoute('/contacto') ? 'text-blue-600 border-l-4 border-blue-600 pl-4 -ml-6 pl-2' : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    {t('nav.contact')}
                  </Link>
                </nav>
              </div>

              {/* Mobile Menu Actions - Fixed at Bottom */}
              <div className="flex-shrink-0 p-4 space-y-3 bg-white border-t border-gray-200">
                {/* Language Toggle */}
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center justify-center space-x-2 h-11"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === 'es' ? 'English' : 'Español'}</span>
                </Button>

                {/* WhatsApp Button */}
                <Button
                  onClick={() => {
                    handleWhatsApp();
                    closeMobileMenu();
                  }}
                  className="w-full btn-whatsapp flex items-center justify-center space-x-2 h-11"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;