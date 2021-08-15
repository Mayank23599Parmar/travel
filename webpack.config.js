var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var config = {
  module: {}
};
module.sorceEnable = false;

const returnAll = watchFile => {
  var allPages = Object.assign({}, config, {
    entry: ["@babel/polyfill", "./javascript/app.js"],
    watch: watchFile,
    output: {
      path: __dirname,
      filename: "./assest/index.js"
    },
    module: {
      rules: [
        {
          test: /\.(s(a|c)ss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: __dirname
              }
            },
            "css-loader",
            "sass-loader",
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        },{
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./assest/style.css"
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  });
  return [
    // checkoutPage,
    allPages,
  ];
}
// Return Array of Configurations
module.exports = (env, argv) => {
  let watchFile = false;
  if (argv.mode === "development") {
    watchFile = true;
  }
  return returnAll(watchFile);

};
