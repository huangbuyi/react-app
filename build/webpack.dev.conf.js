const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')

const resolve = function (dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = merge(baseWebpackConfig, {
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: '9000'
  }
})

module.exports = config