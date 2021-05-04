const { isProductionFn} = require('../utiles');

function configPerformance(config) {
  config.optimization.minimize(isProductionFn());
  config.cache(true);
  config.resolve.symlinks(true);
  config.performance.hints(false);
  config.plugins.delete("prefetch").delete("preload");
  config.watchOptions({ ignored: /node_modules/ });
}
module.exports = {
  configPerformance
};
