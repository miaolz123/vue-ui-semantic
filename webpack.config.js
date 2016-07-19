var webpack = require('webpack');
var version = require("./package.json").version;
var banner =
  "/**\n" +
  " * vue-ui-semantic v" + version + "\n" +
  " * https://github.com/miaolz123/vue-ui-semantic\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: './src/VueUiSemantic.js',
  output: {
    path: './dist',
    filename: 'vue-ui-semantic.js',
    library: 'VueUiSemantic',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner, { raw: true })
  ],
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }]
  },
}
