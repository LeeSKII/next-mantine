/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staticedu-wps.cache.iciba.com',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
