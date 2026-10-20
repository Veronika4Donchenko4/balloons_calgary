/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Number Balloons was split into single/double products; keep old links alive.
      { source: '/product/number-balloons', destination: '/product/double-number', permanent: true },
      // Old For Him / For Her / For Kids pages are now pre-filtered Ready Sets.
      { source: '/collections/for-him', destination: '/ready-sets?occasion=for-him', permanent: true },
      { source: '/collections/for-her', destination: '/ready-sets?occasion=for-her', permanent: true },
      { source: '/collections/for-kids', destination: '/ready-sets?occasion=for-kids', permanent: true },
    ]
  },
}

module.exports = nextConfig
