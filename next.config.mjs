// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // your Next.js config
  // reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
    //     domains: ['example.com', 'example.org'],
  },
}

export default withPlaiceholder(nextConfig)
