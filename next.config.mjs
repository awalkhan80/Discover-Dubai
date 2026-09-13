/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/tours/buggy-adventure', destination: '/dune-buggy-dubai', permanent: true },
      { source: '/tours/quad-bike', destination: '/quad-bike-dubai', permanent: true },
      { source: '/tours/desert-safari', destination: '/desert-safari', permanent: true },
      { source: '/tours/dubai-city-tour', destination: '/city-tours', permanent: true },
      { source: '/tours/abu-dhabi-grand-day', destination: '/abu-dhabi-city-tour', permanent: true },
    ]
  },
}

export default nextConfig
