import path from "path";
import got from "got";

export default async (env, argv) => {
  const PORT = 11223;
  const ENDPOINT = "https://api.probius.dev/twitch-icons/cdn/";

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
      setupMiddlewares: (middlewares) => {
        middlewares.push((req, res) =>
          got
            .stream(`${ENDPOINT}${req.path}`)
            .on('error', () => res.sendStatus(404))
            .pipe(res)
        );

        return middlewares;
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
      minimize: false,
    },
    devtool: "eval", // "hidden-source-map" for production

  }
}