/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sanity'],
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
