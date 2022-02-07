const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { appendFile } = require('fs');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node-modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'],
      },
    ],
  },
};