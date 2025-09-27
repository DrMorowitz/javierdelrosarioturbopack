import React, { useState, useEffect } from 'react';
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
  const [useCloudinary, setUseCloudinary] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  // Check if Cloudinary is configured
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  // If no cloud name or previous error, use direct Cloudinary fallback
  if (!cloudName || !useCloudinary || imageError) {
    return (
      <img 
        src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png" 
        alt={alt}
        className={className}
        onError={() => {
          console.warn('Cloudinary logo fallback also failed');
        }}
      />
    );
  }

  try {
    // Generate responsive Cloudinary URLs with multiple filename attempts
    const generateLogoUrl = (baseFilename: string, width: number) => {
      // Try multiple possible filenames
      const possibleFilenames = [
        `${baseFilename}.png`,
        `${baseFilename}`,
        `logo-desktop.png`,
        `logo.png`,
        `logo`
      ];
      
      // Use the first filename for now, we'll handle errors with fallback
      return cloudinary
        .image(`logos/${possibleFilenames[0]}`)
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

    const handleImageError = () => {
      console.warn('Cloudinary logo failed to load, switching to local fallback');
      setImageError(true);
      setUseCloudinary(false);
    };

    return (
      <picture className="contents">
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
          onError={handleImageError}
        />
      </picture>
    );
  } catch (error) {
    console.warn('Cloudinary logo configuration failed, using local fallback:', error);
    // Fallback to direct Cloudinary asset
    return (
      <img 
        src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1757887222/logo-desktop_uz8qvb.png" 
        alt={alt}
        className={className}
      />
    );
  }
};

export default CloudinaryLogo;