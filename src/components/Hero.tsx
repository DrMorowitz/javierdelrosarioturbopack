import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { 
  heroTextReveal, 
  buttonAnimation, 
  staggerContainer, 
  fadeIn,
  viewportConfig 
} from '@/lib/animations';

const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  // Direct Cloudinary video URLs - Production ready
  const getVideoUrls = () => {
    return {
      // Primary video URLs from Cloudinary
      mp4: 'https://res.cloudinary.com/dp3gvxyft/video/upload/v1757887943/hero-video_zuaiqj.mp4',
      webm: 'https://res.cloudinary.com/dp3gvxyft/video/upload/v1757887943/hero-video_z1twn1.webm',
      // Mobile optimized versions with quality and size adjustments
      mobileMp4: 'https://res.cloudinary.com/dp3gvxyft/video/upload/w_768,q_auto:good/v1757887943/hero-video_zuaiqj.mp4',
      mobileWebm: 'https://res.cloudinary.com/dp3gvxyft/video/upload/w_768,q_auto:good/v1757887943/hero-video_z1twn1.webm'
    };
  };

  const videoUrls = getVideoUrls();

  return (
    <motion.section 
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Video Background - Responsive Cloudinary Implementation */}
      <motion.div 
        className="hero-video-bg"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{ opacity: 1, visibility: 'visible' }}
          onLoadedData={() => {
            console.log('Hero video loaded successfully');
          }}
          onError={(e) => {
            console.warn('Primary video failed to load:', e);
          }}
        >
          {/* Primary video sources - works across all devices */}
          <source
            src={videoUrls.webm}
            type="video/webm"
          />
          <source
            src={videoUrls.mp4}
            type="video/mp4"
          />
          
          {/* Fallback sources without media queries */}
          <source
            src={videoUrls.mobileMp4}
            type="video/mp4"
          />
          
          {/* Ultimate fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900" />
        </video>
      </motion.div>
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-20 section-container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="block"
              variants={heroTextReveal}
              custom={0}
            >
              Cuidado Urológico Integral
            </motion.span>
            <motion.span 
              className="block"
              variants={heroTextReveal}
              custom={1}
            >
              Con La Atención Que Usted Merece
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <motion.div
                variants={buttonAnimation}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  className="btn-primary w-full sm:w-auto group"
                  asChild
                >
                  <a href="/contacto" className="inline-flex items-center">
                    {t('hero.cta.primary')}
                    <motion.div
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <motion.div
                variants={buttonAnimation}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  className="btn-whatsapp w-full sm:w-auto"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('hero.cta.whatsapp')}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;