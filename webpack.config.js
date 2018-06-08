const webpack = require("webpack")
const path = require("path")
const isDev = process.env.NODE_ENV === "development"
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist")
  },
  resolve:{
    extensions:['*','.vue','.js','.jsx'],
    alias:{
      '@':path.resolve(__dirname,'src'),
      // 'vue$': 'vue/dist/vue.common.js'      
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isDev ? false : true
        }
        // options:
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(bmp|jpg|png|jpeg|gif|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit: 1024,
              name: '[name]-[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDev ? JSON.stringify("development") : JSON.stringify("production")
    })
  ]
}
if (isDev) {
  config.devtool = 'cheap-module-eval-source-map'
  config.devServer = {
    contentBase: 'dist',
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    /* webpack两种刷新模式iframe和inline */
    inline:true,
    historyApiFallback: true,
    open:true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        }
        ,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader:'postcss-loader',
          options:{
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
  )
} else {
  config.entry = {
    app: path.resolve(__dirname,'src/index.js'),
    vendor: ['vue']
  }
  config.plugins.push(
    new ExtractTextWebpackPlugin('stye-[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'runtime'
    })
  )
  config.output.filename = '[name]-[chunkhash:8].js'
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback:'style-loader',
        use: [        
        {
          loader: 'css-loader',
          options: {
            //sourceMap: true
          }
        },
        {
          loader:'postcss-loader',
          options:{
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            //sourceMap: true
          }
        }]
      })


    }
  )
}
module.exports = config