// @ts-check
// import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
    //     domains: ['example.com', 'example.org'],
  },
}

module.exports = nextConfig
// export default withPlaiceholder(nextConfig)
