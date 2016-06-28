var webpack = require('webpack');
var version = require("./package.json").version;
var banner =
  "/**\n" +
  " * vue-semantic-ui v" + version + "\n" +
  " * https://github.com/miaolz123/vue-semantic-ui\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: './src/build.js',
  output: {
    path: './dist',
    filename: 'vue-semantic-ui.js',
    library: 'VueSemanticUi',
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
