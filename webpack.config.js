import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export default async (env, argv) => {
  const PORT = 11223;

  return {
    devServer: {
      port: PORT,
      allowedHosts: ['127.0.0.1', '.twitch.tv', '.youtube.com'],
      devMiddleware: {
        writeToDisk: true,
      },
      static: {
        directory: path.resolve('./build'),
      },
      client: {
        webSocketURL: {
          hostname: '127.0.0.1',
          protocol: 'ws',
        },
      },
    },
    entry: {
      twitchIconSelector: [
        "./src/index.js",
      ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve("./build"),
    },
    optimization: {
      minimize: true,
    },
    devtool: "eval", // "hidden-source-map" for production
    plugins: [
      new CopyPlugin({
        patterns: [{
          from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js',
        }]
      })
    ],
  }
}