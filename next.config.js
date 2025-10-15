/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No output: 'export' - this allows API routes to work on Vercel
  // Vercel will automatically handle serverless functions
}

module.exports = nextConfig
