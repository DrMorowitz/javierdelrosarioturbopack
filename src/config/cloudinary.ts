import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

// Initialize Cloudinary instance
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }
});

// Folder paths
export const CLOUDINARY_FOLDERS = {
  logos: process.env.NEXT_PUBLIC_CLOUDINARY_LOGO_FOLDER || 'logos',
  videos: process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_FOLDER || 'video',
  favicons: process.env.NEXT_PUBLIC_CLOUDINARY_FAVICON_FOLDER || 'favicon'
};

// Helper functions for common transformations
export const getOptimizedImage = (publicId: string, width?: number, height?: number) => {
  let img = cloudinary.image(publicId);
  
  // Apply automatic format and quality optimization
  img = img.delivery(format('auto')).delivery(quality('auto'));
  
  // Apply responsive sizing if dimensions provided
  if (width || height) {
    img = img.resize(auto().width(width).height(height)).resize(auto().gravity(autoGravity()));
  }
  
  return img.toURL();
};

export const getOptimizedVideo = (publicId: string) => {
  return cloudinary.video(publicId)
    .delivery(format('auto'))
    .delivery(quality('auto'))
    .toURL();
};

// Specific asset helpers
export const getLogoUrl = (filename: string = 'logo', width?: number, height?: number) => {
  const publicId = `${CLOUDINARY_FOLDERS.logos}/${filename}`;
  return getOptimizedImage(publicId, width, height);
};

export const getHeroVideoUrl = (filename: string = 'hero-video') => {
  const publicId = `${CLOUDINARY_FOLDERS.videos}/${filename}`;
  return getOptimizedVideo(publicId);
};

export const getFaviconUrl = (filename: string = 'favicon', size: number = 32) => {
  const publicId = `${CLOUDINARY_FOLDERS.favicons}/${filename}`;
  return getOptimizedImage(publicId, size, size);
};