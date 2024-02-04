/** @type {import('next').NextConfig} */

// const withImages = require('next-images')
// module.exports = withImages()
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ttf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })

    return config
},
}

module.exports = nextConfig
