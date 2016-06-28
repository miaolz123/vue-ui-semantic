var webpack = require("webpack");
var version = require("./package.json").version;
var banner =
  "/**\n" +
  " * vue-semantic-ui v" + version + "\n" +
  " * https://github.com/miaolz123/vue-semantic-ui\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: "./src/VueSemanticUi.js",
  target: "node",
  output: {
    path: "./dist",
    filename: "vue-semantic-ui.common.js",
    library: "VueSemanticUi",
    libraryTarget: "umd"
  },
  externals: /^[^.]/,
  plugins: [
    new webpack.BannerPlugin(banner, { raw: true })
  ],
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue"
    }, {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }]
  },
}
