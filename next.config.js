/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
