// Dr. Del Rosario Medical Website Animation System
// Professional, accessible animations for healthcare website

import { Variants, Transition } from 'framer-motion';

// Medical-appropriate timing and easing
export const medicalTiming = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
} as const;

export const medicalEasing = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  professional: [0.4, 0, 0.2, 1],
} as const;

// Core Animation Variants
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: medicalTiming.medium,
      ease: medicalEasing.professional,
    }
  }
};

// Mobile-safe fadeIn with fallback
export const fadeInSafe: Variants = {
  hidden: { 
    opacity: 0.1, // Never fully hidden
    y: 10 // Less movement
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: medicalTiming.fast, // Faster on mobile
      ease: medicalEasing.professional,
    }
  }
};

export const slideFromLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: medicalTiming.medium,
      ease: medicalEasing.professional,
    }
  }
};

export const slideFromRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: medicalTiming.medium,
      ease: medicalEasing.professional,
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: medicalTiming.medium,
      ease: medicalEasing.professional,
    }
  }
};

// Stagger Container for Sequential Animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

// Medical Card Hover Effects
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: {
      duration: medicalTiming.fast,
      ease: medicalEasing.smooth,
    }
  }
};

// Hero Text Animation (for titles)
export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: medicalTiming.slow,
      ease: medicalEasing.professional,
      delay: index * 0.2,
    }
  })
};

// Professional Button Animation
export const buttonAnimation: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: medicalTiming.fast,
      ease: medicalEasing.smooth,
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
    }
  }
};

// Navigation Animation
export const navAnimation: Variants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: medicalTiming.medium,
      ease: medicalEasing.professional,
    }
  }
};

// Page Transition Animation
export const pageTransition: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: medicalTiming.medium,
      ease: medicalEasing.professional,
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: medicalTiming.fast,
      ease: medicalEasing.professional,
    }
  }
};

// Stats Counter Animation
export const statsCounter: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: medicalTiming.slow,
      ease: medicalEasing.bounce,
    }
  }
};

// Mobile Menu Animation
export const mobileMenuAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    x: '100%' 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: medicalTiming.fast,
      ease: medicalEasing.professional,
    }
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: medicalTiming.fast,
      ease: medicalEasing.professional,
    }
  }
};

// Accessibility: Respect user's motion preferences
export const getReducedMotionVariant = (variant: Variants): Variants => {
  const reducedMotion: Variants = {};
  
  Object.keys(variant).forEach(key => {
    const state = variant[key];
    if (typeof state === 'object' && 'transition' in state) {
      reducedMotion[key] = {
        ...state,
        transition: { duration: 0 }
      };
    } else {
      reducedMotion[key] = state;
    }
  });
  
  return reducedMotion;
};

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: "-50px", // Less aggressive margin for mobile
  amount: 0.1, // Trigger when just 10% is visible
} as const;

// Mobile-specific viewport configuration
export const mobileViewportConfig = {
  once: true,
  margin: "0px", // No margin for mobile
  amount: 0.1,
} as const;

// Mobile-optimized animation configurations
export const MOBILE_ANIMATION_CONFIG = {
  duration: 0.4, // Faster animations
  ease: "easeOut",
  stiffness: 400,
  damping: 25
};

export const DESKTOP_ANIMATION_CONFIG = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1],
  stiffness: 300,
  damping: 20
};

// Mobile-safe animations with reduced motion
export const mobileOptimizedFadeIn = {
  hidden: { 
    opacity: 0, 
    y: 20 // Reduced distance
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOBILE_ANIMATION_CONFIG
  }
};

export const mobileOptimizedSlideUp = {
  hidden: { 
    opacity: 0, 
    y: 30 // Gentle slide
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOBILE_ANIMATION_CONFIG
  }
};

export const mobileOptimizedScale = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 // Subtle scaling
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: MOBILE_ANIMATION_CONFIG
  }
};

// Utility function to get appropriate animation config
export const getAnimationConfig = (isMobile: boolean = false) => {
  return isMobile ? MOBILE_ANIMATION_CONFIG : DESKTOP_ANIMATION_CONFIG;
};