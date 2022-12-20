const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const { DefinePlugin } = require('webpack');

const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const getTemplateParameters = require('../parameters');

const babelConfig = `${rootDir}/configs/babel.config.js`;

module.exports = {
  context: __dirname,
  entry: `${rootDir}/src/index.js`,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
  },
  output: {
    path: `${rootDir}dist`,
    filename: 'assets/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: babelConfig,
            },
          },
        ],
      },
      {
        test: (/\.(sa|sc|c)ss$/),
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: (/\.(sa|sc|c)ss$/),
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: /\.module\.(sa|sc|c)ss$/,
      },
      {
        test: (/\.(sa|sc|c)ss$/),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
        exclude: /\.module\.(sa|sc|c)ss$/,
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new WebpackBar({
      profile: true,
    }),
    new DefinePlugin({
      process: {
        env: {
          development: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: `${rootDir}/static/index.html`,
      filename: 'index.html',
      inject: 'body',
      favicon: `${rootDir}/static/favicon.ico`,
      templateParameters: getTemplateParameters,
    }),
  ],
  stats: 'detailed',
};
