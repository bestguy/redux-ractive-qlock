'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './public/scripts/index'
  ],
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

