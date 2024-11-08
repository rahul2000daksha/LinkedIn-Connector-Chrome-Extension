import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  mode: "development", // or 'production'
  entry: "./src/content.js",
  output: {
    path: path.resolve("dist"),
    filename: "content.js",
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  devtool: false, // Disables source mapping to prevent eval usage
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
        { from: "background.js", to: "background.js" },
        { from: "icon.png", to: "icon.png" },
        // Add any other files you need in the dist folder
      ]
    })
  ]
};
