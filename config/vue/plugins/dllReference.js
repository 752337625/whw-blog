const { isProductionFn } = require("../../utiles");
const webpack = require("webpack");
const path = require("path");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
function configDllReferencePlugin(config) {
  config.when(isProductionFn(), config => {
    config.plugin("dllReference").use(webpack.DllReferencePlugin, [
      {
        context: process.cwd(),
        manifest: require(`../dll/vendor-manifest.json`)
      }
    ]);
    config.plugin("AddAssetHtmlPlugin").use(AddAssetHtmlPlugin, [
      {
        filepath: path.resolve(__dirname, "../dll/*.js"),
        publicPath: `${process.env.VUE_APP_PUBLIC_PATH}/vendor`,
        outputPath: './vendor'
      }
    ]);
  });
}

module.exports = {
  configDllReferencePlugin
};
