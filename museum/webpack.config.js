const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const pages = [
  'index.pug',
  'tours1.html',
  'tours2.html',
  'tours3.html',
  'tours4.html',
  'tours5.html',
  'tours6.html',
  'tours7.html',
];

const createHtmlWebpackPlugin = pages.map((item) => {
  if (item === 'index.pug') {
    return new HtmlWebpackPlugin({
      template: `src/pages/${item}`,
      favicon: './src/favicon.ico',
      filename: 'index.html',
    });
  } else if (item.startsWith('tours')) {
    return new HtmlWebpackPlugin({
      template: `src/pages/tours/${item}`,
      favicon: './src/favicon.ico',
      filename: `tours/${item}`,
    });
  } else {
    return new HtmlWebpackPlugin({
      template: `src/pages/${item}`,
      favicon: './src/favicon.ico',
      filename: item,
    });
  }
});

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          port: 8080,
          contentBase: './src',
        },
      };

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    index: './src/scripts/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[name][ext]',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/svg/[name][ext]',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    ...createHtmlWebpackPlugin,
    new StylelintPlugin({
      configFile: '.stylelintrc.json',
      fix: true,
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
    new ImageminWebpWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
  },
  ...devServer(development),
});
