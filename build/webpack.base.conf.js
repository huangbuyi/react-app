'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = function (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    index: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {

    }
  },
  module: {
    rules: [{
      test: /\.(js|ts)(\?.*)?$/,
      use: ['eslint-loader', 'babel-loader'],
      include: [resolve('src')]
    }, {
      test: /\.css$/,
      loader: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development'
        }
      }, 'css-loader']
    }, {
      test: /\.scss$/,
      loader: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development'
        }
      }, 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}