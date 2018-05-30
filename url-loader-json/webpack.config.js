const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
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
    new ExtractTextPlugin("css/[name].css")
  ]
}