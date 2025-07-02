/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', //'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

export default nextConfig
