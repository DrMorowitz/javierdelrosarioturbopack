import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';
import { getHeroVideoUrl } from '@/config/cloudinary';

const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola Dr. del Rosario, me gustaría agendar una consulta.');
    window.open(`https://wa.me/50760000000?text=${message}`, '_blank');
  };

  // Get optimized Cloudinary video URLs
  const getVideoUrls = () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    if (cloudName) {
      try {
        const baseUrl = `https://res.cloudinary.com/${cloudName}/video/upload`;
        return {
          mp4: `${baseUrl}/f_mp4,q_auto:good,w_1920,c_limit/video/hero-video`,
          webm: `${baseUrl}/f_webm,q_auto:good,w_1920,c_limit/video/hero-video`,
          mobileMp4: `${baseUrl}/f_mp4,q_auto:good,w_768,c_limit/video/hero-video`,
          mobileWebm: `${baseUrl}/f_webm,q_auto:good,w_768,c_limit/video/hero-video`
        };
      } catch (error) {
        console.warn('Cloudinary video URLs failed to generate, using fallback:', error);
      }
    }
    return {
      mp4: '/videos/hero-video.mp4',
      webm: '/videos/hero-video.webm',
      mobileMp4: '/videos/hero-video.mp4',
      mobileWebm: '/videos/hero-video.webm'
    };
  };

  const videoUrls = getVideoUrls();

  return (
    <section className="hero-section">
      {/* Video Background - Responsive Cloudinary Implementation */}
      <div className="hero-video-bg">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => {
            console.warn('Cloudinary video failed to load, using fallback');
          }}
        >
          {/* Desktop optimized sources */}
          <source
            src={videoUrls.webm}
            type="video/webm"
            media="(min-width: 1024px)"
          />
          <source
            src={videoUrls.mp4}
            type="video/mp4"
            media="(min-width: 1024px)"
          />
          
          {/* Mobile optimized sources */}
          <source
            src={videoUrls.mobileWebm}
            type="video/webm"
            media="(max-width: 1023px)"
          />
          <source
            src={videoUrls.mobileMp4}
            type="video/mp4"
            media="(max-width: 1023px)"
          />
          
          {/* Fallback sources */}
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          
          {/* Ultimate fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        </video>
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-20 section-container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-primary w-full sm:w-auto"
              asChild
            >
              <a href="/contacto">
                {t('hero.cta.primary')}
              </a>
            </Button>
            
            <Button 
              className="btn-whatsapp w-full sm:w-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('hero.cta.whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;