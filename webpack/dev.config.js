const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { rules, output } = require("./webpack.parts");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: output(),
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve("public/index.html") }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "" },
        { from: "public/fonts", to: "" },
      ],
    }),
  ],
  devServer: {
    static: path.resolve("build"),
    devMiddleware: { publicPath: "/" },
  },

  devtool: "eval",
};
