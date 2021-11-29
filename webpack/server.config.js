const { rules, output } = require("./webpack.parts");

module.exports = {
  target: "node",
  mode: "development",
  output: { ...output(), libraryTarget: "commonjs2" },
  entry: "./server/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/react"],
        },
      },
    ],
  },
};
