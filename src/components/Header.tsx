import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import CloudinaryLogo from './CloudinaryLogo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { 
  navAnimation, 
  mobileMenuAnimation, 
  buttonAnimation,
  staggerContainer,
  fadeIn 
} from '@/lib/animations';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(50);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
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

  // Force Netlify cache clear - complete rebuild required
  // This comment forces a new deployment with fresh cache


  return (
    <motion.header 
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 shadow-md border-border/50' 
          : 'bg-background/80'
      }`}
      initial="hidden"
      animate="visible"
      variants={navAnimation}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
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
                  className="h-8 md:h-10 lg:h-12 w-auto max-h-12"
                  style={{ maxHeight: '48px' }}
                />
              </picture>
            </Link>
          </motion.div>

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
              to="/blog"
              className={`font-medium transition-colors hover:text-primary ${
                isActiveRoute('/blog') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Blog
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Animated Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu Container with Slide Animation */}
            <motion.div 
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
              variants={mobileMenuAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header - Logo Only - Updated */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887221/logo-mobile_kiu9br.png"
                  alt="Dr. Javier del Rosario"
                  className="h-8 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png';
                  }}
                />
                <motion.button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-md"
                  aria-label="Cerrar menú"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Navigation Menu with Stagger Animation */}
              <motion.nav 
                className="flex-1 p-6 space-y-6 bg-white overflow-y-auto"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  { to: "/", label: "Inicio" },
                  { to: "/sobre-mi", label: "Sobre Mí" },
                  { to: "/servicios", label: "Servicios" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contacto", label: "Contacto" }
                ].map((item, index) => (
                  <motion.div key={item.to} variants={fadeIn}>
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={`text-lg font-medium transition-colors py-2 block ${
                        isActiveRoute(item.to) 
                          ? 'text-blue-600 border-l-4 border-blue-600 pl-4' 
                          : 'text-gray-900 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* WhatsApp Button with Animation */}
              <motion.div 
                className="flex-shrink-0 p-4 border-t border-gray-200"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={() => {
                    handleWhatsApp();
                    closeMobileMenu();
                  }}
                  className="gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full btn-whatsapp flex items-center justify-center space-x-2"
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;