var path = require('path')
var postCSSImport = require('postcss-import')
var postCSSNesting = require('postcss-nesting')
var autoprefixer = require('autoprefixer')
var htmlWebpacPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'index.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.ejs$/,
        use: 'ejs-loader'
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [postCSSNesting(), postCSSImport(), autoprefixer()]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, 'src/component/')
    }
  },
  plugins: [new htmlWebpacPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  }
}

export default config
