const { isProductionFn } = require("../utiles");

function configOptimization(config) {
  config.when(isProductionFn(), config => {
    config.optimization.minimizer("terser").tap(args => {
      args[0].parallel = true;
      args[0].sourceMap = true;
      args[0].cache = true;
      args[0].extractComments = false;
      return args;
    });
  });
}
module.exports = {
  configOptimization
};
