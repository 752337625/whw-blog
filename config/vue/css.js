const { isProductionFn } = require("../utiles");

function createCss() {
  return {
    requireModuleExtension: true,
    sourceMap: false,
    extract: isProductionFn() ? { ignoreOrder: true } : false,
    loaderOptions: {}
  };
}

module.exports = {
  createCss
};
