const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const { rules, output } = require("./webpack.parts");

module.exports = {
  mode: "production",
  entry: "./server/generateHtml.js",
  stats: "normal",
  module: { rules },
  output: output({ filename: "ignore.js", libraryTarget: "commonjs" }),
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
      globals: { window: {} },
    }),
  ],
};
