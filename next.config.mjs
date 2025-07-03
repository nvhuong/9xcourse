/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', //'caddy',
  output: 'standalone', //'nginx',
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
