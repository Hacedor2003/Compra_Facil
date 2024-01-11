const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

import { resolve } from "path";

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Compra Facil",
      short_name: "Compra Facil",
      description: "Pagina Falsa para vender productos",
      background_color: "#fff",
      theme_color: "#fff",
      icons: [
        {
          src: resolve("src/assets/icon.gif"),
          size: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPatternL: new RegExp("https://fakestoreapi.com/products"),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPatternL: new RegExp("https://compra-facil-1q5s.vercel.app/"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-syntax-dynamic-import"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
