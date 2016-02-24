var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolveBowerPath(componentPath) {
  return path.join(__dirname, 'src', 'vendor', 'bower', componentPath);
}

module.exports = {
  eslint: {
    configFile: '.eslintrc'
  },
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      jquery: resolveBowerPath('/jquery/dist/jquery.js')
    },
    modulesDirectories: [
      'src/vendor',
      'node_modules',
      'web_modules',
      'src/vendor/bower'
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx|es6)$/,
        loaders: ['eslint'],
        exclude: /(node_modules|vendor|bower)/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /(node_modules|vendor|bower)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract('style', 'css', 'sass')
      },
      {
        test: /\.less$/,
        loaders: ExtractTextPlugin.extract('style', 'css', 'less')
      },
      {
        test: /\.styl$/,
        loaders: ExtractTextPlugin.extract('style', 'css', 'stylus')
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        loaders: ['url?limit=8192']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loaders: ['file']
      },
      {
        test: /\.html$/,
        loaders: ['html']
      }
    ]
  }
};
