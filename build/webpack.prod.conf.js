const merge = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
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
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      chunks: 'all'
    }
  }
})

module.exports = config