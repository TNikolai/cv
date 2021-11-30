const { rules, output } = require("./webpack.parts");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  stats: "minimal",
  entry: "./src/index.js",
  output: output(),
  module: { rules },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "" },
        { from: "public/fonts", to: "" },
      ],
    }),
  ],
};
