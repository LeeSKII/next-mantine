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
      {
        protocol: 'https',
        hostname: 'bbs-static.miyoushe.com',
        
      },
      {
        protocol: 'https',
        hostname: 'upload-bbs.miyoushe.com',
        
      },
    ],
  },
};

export default nextConfig;
