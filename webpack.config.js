'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      sideEffects: false
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ]
}
