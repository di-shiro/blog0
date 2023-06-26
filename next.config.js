/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'imgix',
    // path: '',
    domains: ['images.microcms-assets.io'],
    //     domains: ['example.com', 'example.org'],
  },
}

module.exports = nextConfig
