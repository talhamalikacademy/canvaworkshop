/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
