const path = require("path");

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ["react-hot-loader/webpack", "babel-loader"],
  },
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
];

const output = (overrides) => ({
  path: path.resolve("build"),
  filename: "bundle.js",
  ...overrides,
});

module.exports = { rules, output };
