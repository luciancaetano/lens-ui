/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

const banner = fs.readFileSync(path.join(__dirname, 'LICENSE')).toString('utf-8');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: 'index.min.js',
    path: path.join(__dirname, 'dist'),
    library: {
      name: 'lens-ui',
      type: 'umd',
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
  devtool: 'source-map',
  plugins: [
    isProduction && new webpack.BannerPlugin({
      banner,
      entryOnly: false,
    }),
    isProduction && new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    isProduction && new CssMinimizerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'scripts', 'getBemCssLocalIdent.js'), to: path.resolve(__dirname, 'dist', 'getBemCssLocalIdent.js') },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  optimization: {
    minimize: isProduction,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript"
              }
            }
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader"
        }
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
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
          MiniCssExtractPlugin.loader,
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
