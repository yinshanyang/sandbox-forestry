const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src')
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
