/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Number Balloons was split into single/double products; keep old links alive.
      { source: '/product/number-balloons', destination: '/product/double-number', permanent: true },
    ]
  },
}

module.exports = nextConfig
