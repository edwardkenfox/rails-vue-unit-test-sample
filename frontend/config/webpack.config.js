var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    application: './src/javascripts/main.js',
  },
  output: {
    path: '../app/assets/javascripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
