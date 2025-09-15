import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import CloudinaryLogo from './CloudinaryLogo';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
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
              Inicio
            </Link>
            <Link
              to="/sobre-mi"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/sobre-mi') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Sobre Mí
            </Link>
            <Link
              to="/servicios"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/servicios') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Servicios
            </Link>
            <Link
              to="/contacto"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/contacto') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Contacto
            </Link>
          </nav>


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

      {/* Mobile Menu - Complete Rebuild */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Container */}
          <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            {/* Header - Logo Only - Updated */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <img 
                src="/logo-mobile.png"
                alt="Dr. Javier del Rosario"
                className="h-8 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/logo.png';
                }}
              />
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation Menu - Takes remaining space */}
            <nav className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActiveRoute('/') 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  to="/sobre-mi"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActiveRoute('/sobre-mi') 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Sobre Mí
                </Link>
                <Link
                  to="/servicios"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActiveRoute('/servicios') 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Servicios
                </Link>
                <Link
                  to="/contacto"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActiveRoute('/contacto') 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contacto
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;