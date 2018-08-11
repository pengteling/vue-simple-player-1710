const baseConfig = require("./webpack.config.base")
const webpack = require("webpack")
const merge = require("webpack-merge")
const path = require("path")
const isDev = process.env.NODE_ENV === "development"
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

const defaultPlugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html'
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': isDev ? JSON.stringify("development") : JSON.stringify("production")
  })
]
let config
if (isDev) {
  config = merge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: 'dist',
      port: 8080,
      host: '0.0.0.0',
      hot: true,
      /* webpack两种刷新模式iframe和inline */
      inline: true,
      historyApiFallback: true,
      open: true
    },
    module: {
      rules: [
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
              loader: 'postcss-loader',
              options: {
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
      ]
    },
    plugins:defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ])
  })
  //config.devtool = 'cheap-module-eval-source-map'
  // config.devServer = {
  //   contentBase: 'dist',
  //   port: 8080,
  //   host: '0.0.0.0',
  //   hot: true,
  //   /* webpack两种刷新模式iframe和inline */
  //   inline:true,
  //   historyApiFallback: true,
  //   open:true
  // }
  // config.plugins.push(
  //   new webpack.HotModuleReplacementPlugin()
  // )
  // config.module.rules.push(
  //   {
  //     test: /\.scss$/,
  //     use: [
  //       {
  //         loader: 'style-loader'
  //       }
  //       ,
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       },
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       },
  //       {
  //         loader: 'sass-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       }
  //     ]
  //   }
  // )
} else {
  config = merge(baseConfig,{
    entry:{
      app: path.resolve(__dirname, '../src/index.js'),
      vendor: ['vue']
    },
    output:{
      filename:'[name]-[chunkhash:8].js'
    },
    module:{
      rules:[
        {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  //sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
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
      ]
    },
    plugins:[
      new ExtractTextWebpackPlugin('stye-[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ]
  })
  // config.entry = {
  //   app: path.resolve(__dirname, 'src/index.js'),
  //   vendor: ['vue']
  // }
  // config.plugins.push(
  //   new ExtractTextWebpackPlugin('stye-[contentHash:8].css'),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor'
  //   }),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'runtime'
  //   })
  // )
  // config.output.filename = '[name]-[chunkhash:8].js'
  // config.module.rules.push(
  //   {
  //     test: /\.scss$/,
  //     use: ExtractTextWebpackPlugin.extract({
  //       fallback: 'style-loader',
  //       use: [
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             //sourceMap: true
  //           }
  //         },
  //         {
  //           loader: 'postcss-loader',
  //           options: {
  //             sourceMap: true
  //           }
  //         },
  //         {
  //           loader: 'sass-loader',
  //           options: {
  //             //sourceMap: true
  //           }
  //         }]
  //     })


  //   }
  //)
}
module.exports = config