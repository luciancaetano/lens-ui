/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const loaderUtils = require('loader-utils');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    regenerator: 'regenerator-runtime/runtime',
    index: './src/index.ts',
  },
  externals: [nodeExternals()],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CssMinimizerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'scripts'), to: path.resolve(__dirname, 'build', 'scripts') },
        { from: path.resolve(__dirname, 'node_modules', 'reset-css', 'reset.css'), to: path.resolve(__dirname, 'build', 'reset.css') },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.module.scss', '.module.css'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/react', ['@babel/env', {
              modules: false,
              targets: {
                edge: '17',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
              },
              useBuiltIns: 'usage',
              corejs: '3',
            }]],
            plugins: ['@babel/plugin-transform-typescript'],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
                getLocalIdent: (context, _, exportName, options) => {
                  const relativePath = path
                    .relative(context.rootContext, context.resourcePath)
                    .replace(/\\+/g, '/');

                  const hash = loaderUtils.getHashDigest(
                    Buffer.from(`${relativePath}`),
                    'sha1',
                    'base64',
                    128,
                  );

                  return (
                    loaderUtils
                      .interpolateName(
                        context,
                        `lens-ui__${exportName}__${hash}`,
                        options,
                      )
                      .replace(
                        /\.module_/,
                        '_',
                      )
                      .replace(/[^a-zA-Z0-9-_]/g, '_')
                      .replace(/^(\d|--|-\d)/, '__$1')
                  );
                },
              },
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
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
