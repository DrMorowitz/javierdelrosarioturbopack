import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { cloudinary, getLogoUrl } from '@/config/cloudinary';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

interface CloudinaryLogoProps {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  filename?: string;
}

const CloudinaryLogo: React.FC<CloudinaryLogoProps> = ({
  className = "h-10 w-auto max-h-10",
  alt = "Dr. Javier del Rosario - Urólogo",
  width = 200,
  height = 80,
  filename = "logo"
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
    // Create optimized image with Cloudinary
    const logoImage = cloudinary
      .image(`logos/${filename}`)
      .delivery(format('auto'))
      .delivery(quality('auto'))
      .resize(auto().width(width).height(height).gravity(autoGravity()));

    return (
      <AdvancedImage
        cldImg={logoImage}
        alt={alt}
        className={className}
        loading="eager"
        onError={(e) => {
          // Fallback to local asset on error
          const target = e.target as HTMLImageElement;
          target.src = '/logo.png';
        }}
      />
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