import React from 'react';
import { cloudinary } from '@/config/cloudinary';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { scale } from '@cloudinary/url-gen/actions/resize';

interface CloudinaryLogoProps {
  className?: string;
  alt?: string;
}

const CloudinaryLogo: React.FC<CloudinaryLogoProps> = ({
  className = "h-10 w-auto max-h-10",
  alt = "Dr. Javier del Rosario - Urólogo"
}) => {
  // Check if Cloudinary is configured
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName) {
    // Fallback to local asset if Cloudinary not configured
    return (
      <img 
        src="/logo.png" 
        alt={alt}
        className={className}
      />
    );
  }

  try {
    // Generate responsive Cloudinary URLs
    const generateLogoUrl = (filename: string, width: number) => {
      return cloudinary
        .image(`logos/${filename}`)
        .delivery(format('auto'))
        .delivery(quality('auto'))
        .resize(scale().width(width))
        .toURL();
    };

    // Generate all responsive logo URLs
    const logoMobile1x = generateLogoUrl('logo-mobile', 120);
    const logoMobile2x = generateLogoUrl('logo-mobile-2x', 240);
    const logoTablet1x = generateLogoUrl('logo-tablet', 180);
    const logoTablet2x = generateLogoUrl('logo-tablet-2x', 360);
    const logoDesktop1x = generateLogoUrl('logo-desktop', 240);
    const logoDesktop2x = generateLogoUrl('logo-desktop-2x', 480);

    return (
      <picture className={className}>
        {/* Desktop */}
        <source
          media="(min-width: 1024px)"
          srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
        />
        {/* Tablet */}
        <source
          media="(min-width: 768px)"
          srcSet={`${logoTablet1x} 1x, ${logoTablet2x} 2x`}
        />
        {/* Mobile */}
        <source
          media="(max-width: 767px)"
          srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
        />
        {/* Fallback */}
        <img
          src={logoDesktop1x}
          alt={alt}
          className={className}
          loading="eager"
          onError={(e) => {
            // Fallback to local asset on error
            const target = e.target as HTMLImageElement;
            target.src = '/logo.png';
          }}
        />
      </picture>
    );
  } catch (error) {
    console.warn('Cloudinary logo failed to load, falling back to local asset:', error);
    // Fallback to local asset
    return (
      <img 
        src="/logo.png" 
        alt={alt}
        className={className}
      />
    );
  }
};

export default CloudinaryLogo;