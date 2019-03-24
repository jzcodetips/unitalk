const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
            process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        use: {
          loader: "json-loader"
        }
      },
    ]
  },
  devServer: process.env.NODE_ENV === 'production' ? {} : {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    after: (app) => {
        app.get('*', (req, res, next) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
                if (err) {
                    res.status(err.status).send(err)
                }
            })
        })
    }
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
        src: path.resolve(__dirname, 'src'),
        resources: path.resolve(__dirname, 'src/resources/'),
        images: path.resolve(__dirname, 'src/resources/images/'),
        models: path.resolve(__dirname, 'src/resources/models/'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      favicon: 'src/resources/images/favicon.png',
      template: "src/resources/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/resources/models",
        to: "models"
      }
    ]),
  ]
}