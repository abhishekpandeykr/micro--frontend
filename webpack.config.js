const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  entry: {
    "root-application": "src/root-application/index.js",
    "common-dependencies": ["react", "react-dom"],
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  node: {
    fs: "empty",
  },
  resolve: {
    modules: [__dirname, "node_modules"],
  },
  optimization: {
    splitChunks: {
      name: "common-dependencies.js",
    },
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
  },
});