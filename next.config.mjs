/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};
