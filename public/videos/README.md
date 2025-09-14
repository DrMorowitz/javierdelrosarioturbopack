# Video Assets for Hero Background

## Required Files:
- `hero-video.webm` (Primary format - 3MB, optimized)
- `hero-video.mp4` (Fallback format - 4.3MB, compatibility)

## File Placement:
Place both video files directly in this `/public/videos/` directory.

## Specifications:
- **Duration**: 10 seconds (seamless loop)
- **Resolution**: HD quality
- **WebM**: Primary format (better compression, modern browsers)
- **MP4**: Fallback format (wider browser support)
- **Autoplay**: Muted, loops automatically
- **Performance**: Metadata preload, reduced motion support

## Local Testing:
1. Copy your video files here
2. Run `npm run dev`
3. Visit homepage to see video background in hero section

## Production Deployment:
After local testing, videos will be migrated to Cloudinary for CDN delivery.