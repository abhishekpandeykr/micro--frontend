const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
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
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.(js|ts)(\?.*)?$/i,
        include: /\.(js|ts|htm|html|scss|css)(\?.*)?$/i,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
  },
});
