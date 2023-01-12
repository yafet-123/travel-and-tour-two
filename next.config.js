/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'drive.google.com',
      'www.shadowsofafrica.com',
      'www.responsibletravel.com',
      'img.freepik.com',
      'accounting.binus.ac.id',
      'rmi.org',
      'media.istockphoto.com',
      'lp-cms-production.imgix.net',
      'jonesbrotherscoffee.com',
      'cdn.cnn.com',
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
