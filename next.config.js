/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static HTML for each page (SSG)
  output: 'export',

  // Trailing slashes for consistency
  trailingSlash: false,

  // Image optimization config
  images: {
    unoptimized: true, // Required for static export
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Strict mode for better debugging
  reactStrictMode: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prompt-theory-api.onrender.com',
  },
}

module.exports = nextConfig
