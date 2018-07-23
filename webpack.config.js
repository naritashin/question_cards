const path = require('path')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const HtmlWebpacPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postCSSImport(),
                postCSSNested(),
                autoprefixer({ browsers: 'last 2 version' })
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ejs', '.css', '.pcss'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      js: path.resolve(__dirname, 'src/js/'),
      css: path.resolve(__dirname, 'src/css/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
    new HtmlWebpacPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/components/pages/index.ejs')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  }
}

module.exports = config
