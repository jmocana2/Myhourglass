const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
           use: 'css-loader'
        })
      },
      {
        test: /\.(jpg|png|gif|woff)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
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
    new ExtractTextPlugin("css/[name].css"),
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