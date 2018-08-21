const path = require("path")
const isDev = process.env.NODE_ENV === "development"
const createVueLoaderOptions = require("./vue-loader.config")
const config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "../dist")
  },
  resolve:{
    extensions:['*','.vue','.js','.jsx'],
    alias:{
      '@':path.resolve(__dirname,'../src'),
      // 'vue$': 'vue/dist/vue.common.js'      
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   extractCSS: isDev ? false : true
        // }
        options:createVueLoaderOptions(isDev)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/
      },
      {
        test: /\.(bmp|jpg|png|jpeg|gif|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit: 1024,
              name: 'resources/[path][name]-[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      }

    ]
  }
  
}

module.exports = config