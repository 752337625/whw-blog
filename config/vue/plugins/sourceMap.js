const { isProductionFn } = require("../../utiles");
function configSourceMap(config) {
  config.devtool(isProductionFn() ? false : "cheap-eval-source-map");
}
module.exports = {
  configSourceMap
};
