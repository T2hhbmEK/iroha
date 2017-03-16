const path = require('path');
const srcPath = path.resolve(__dirname, 'src/app');
const buildPath = path.resolve(__dirname, 'src/www');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/app/index.jsx',
    'babel-polyfill'
  ],
  output: {
    filename: 'app.js',
    path: buildPath
  },
  devServer: {
    contentBase: 'src/www'
  },
  plugins: [
    new CopyWebpackPlugin([
      {from : 'src/www/index.html'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [
          'babel-loader',
        ],
        include: srcPath
      }
    ]
  }
};
