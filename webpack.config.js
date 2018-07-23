const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.mjs')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json']
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'less-loader'
          }]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader',
          {
            loader: 'img-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle-[hash].css'
    }),
    new HtmlWebpackPlugin({
      version: pkg.version
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 8000,
    https: true,
    overlay: true,
    open: true,
    historyApiFallback: {
      index: '/index.html'
    }
  }
};
