import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
      
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    const checkLowPowerMode = () => {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
      
      // Check for reduced motion preference or low-end device indicators
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      const slowConnection = navigator.connection && navigator.connection.effectiveType === 'slow-2g';
      
      setIsLowPowerMode(reducedMotion || lowEndDevice || slowConnection);
    };

    checkMobile();
    checkLowPowerMode();

    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return { isMobile, isLowPowerMode };
};