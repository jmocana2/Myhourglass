const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devServer : {
    port: 8080,
    disableHostCheck: true,
    hot: true,
    contentBase: './dist/',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']   
          }
        }
      },    
      {
        test: /\.(jpg|png|gif|woff)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'img/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 100000,
            name: 'videos/[name].[hash].[ext]'
          }
        }
      }
    ]
  }, 
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Hourglass',
      myPageHeader: 'My Hourglass',
      template: './src/index.html',
      filename: './index.html' //relative to root of the application
    })   
  ]
}