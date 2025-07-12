/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
