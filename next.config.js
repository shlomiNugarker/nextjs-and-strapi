/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'nextjs-corporate-starter-production.up.railway.app',
        port: '', // Leave empty if there's no specific port
        pathname: '/uploads/**', // Adjust the pathname according to your needs
      },
    ],
  },
}

module.exports = nextConfig
