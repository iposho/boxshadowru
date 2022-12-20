const HtmlWebPackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DefinePlugin } = require('webpack');

const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const getTemplateParameters = require('../parameters');

const babelConfig = `${rootDir}/configs/babel.config.js`;
const postcssConfig = `${rootDir}/configs/postcss.config.js`;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: `${rootDir}/src/index.js`,
  output: {
    path: `${rootDir}/dist`,
    filename: 'assets/js/[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: postcssConfig,
              },
            },
          },
        ],
        include: /\.module\.(sa|sc|c)ss$/,
      },
      {
        test: (/\.(sa|sc|c)ss$/),
        exclude: [/node_modules/, /\.module\.(sa|sc|c)ss$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: postcssConfig,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]?[contenthash]',
        },
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]?[contenthash]',
        },
      },
    ],
  },
  plugins: [
    new WebpackBar({
      profile: true,
    }),
    new DefinePlugin({
      process: { env: { development: false } },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${rootDir}/static/robots.txt`,
          to: 'robots.txt',
        },
        {
          from: `${rootDir}/static/manifest.json`,
          to: 'manifest.json',
        },
        {
          from: `${rootDir}/static/logo192.png`,
          to: 'logo192.png',
        },
        {
          from: `${rootDir}/static/logo512.png`,
          to: 'logo512.png',
        },
        {
          from: `${rootDir}/static/preview.png`,
          to: 'assets/images/preview.png',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css?[contenthash]',
      chunkFilename: '[id].css?[contenthash]',
    }),
    new HtmlWebPackPlugin({
      template: `${rootDir}/static/index.html`,
      filename: 'index.html',
      inject: 'body',
      favicon: `${rootDir}/static/favicon.ico`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      templateParameters: getTemplateParameters,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {
        source: false,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        terserOptions: {
          sourceMap: true,
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },
  stats: 'normal',
};
