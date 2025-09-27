/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', // Cloudinary domain
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  // Enable compression for better performance
  compress: true,
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Disable x-powered-by header for security
  poweredByHeader: false,
  // Configure redirects for better SEO
  async redirects() {
    return [
      // Add any redirects here if needed
    ];
  },
};

module.exports = nextConfig;