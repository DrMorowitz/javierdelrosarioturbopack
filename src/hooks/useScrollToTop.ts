'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Custom hook that scrolls to top when component mounts or route changes
 * Handles both regular navigation and hash navigation for blog posts
 */
export const useScrollToTop = (options?: {
  behavior?: 'smooth' | 'auto';
  delay?: number;
  offset?: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { behavior = 'smooth', delay = 0, offset = 0 } = options || {};

  useEffect(() => {
    const scrollToTop = () => {
      // Check if there's a hash in the URL (like #hero)
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // Calculate position accounting for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const finalPosition = Math.max(0, elementPosition - offset);
          
          window.scrollTo({
            top: finalPosition,
            behavior
          });
          return;
        }
      }
      
      // Default scroll to top
      window.scrollTo({
        top: 0,
        behavior
      });
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [pathname, searchParams, behavior, delay, offset]);
};

/**
 * Hook specifically for blog posts that need to scroll to hero sections
 */
export const useBlogScrollToHero = () => {
  useScrollToTop({
    behavior: 'smooth',
    delay: 100, // Small delay to ensure DOM is ready
    offset: 80   // Account for fixed header height
  });
};

/**
 * Hook for immediate scroll to top (no animations)
 */
export const useInstantScrollToTop = () => {
  useScrollToTop({
    behavior: 'auto',
    delay: 0
  });
};

/**
 * Programmatic scroll to top function
 */
export const scrollToTop = (options?: {
  behavior?: 'smooth' | 'auto';
  offset?: number;
}) => {
  const { behavior = 'smooth', offset = 0 } = options || {};
  
  window.scrollTo({
    top: offset,
    behavior
  });
};

/**
 * Scroll to specific element by ID
 */
export const scrollToElement = (elementId: string, options?: {
  behavior?: 'smooth' | 'auto';
  offset?: number;
}) => {
  const { behavior = 'smooth', offset = 80 } = options || {};
  const element = document.getElementById(elementId.replace('#', ''));
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const finalPosition = Math.max(0, elementPosition - offset);
    
    window.scrollTo({
      top: finalPosition,
      behavior
    });
  }
};