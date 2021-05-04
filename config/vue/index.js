const { getPublicPath } = require("./getPath");
const { isProductionFn } = require("../utiles");
const { createDevServer } = require("./devServer");
const { createCss } = require("./css");
const { configResolve } = require("./resolve");
const { configModule } = require("./module");
const { configExternals } = require("./plugins/externals");
const { configPerformance } = require("./performance");
const { configCdn } = require("./plugins/cdn");
const { configSourceMap } = require("./plugins/sourceMap");
const { createGzip } = require("./plugins/gzip");
const { configHtml } = require("./plugins/html");
const { configOptimization } = require("./optimization");
//const { configVueLoaderPlugin } = require("./plugins/loaderPlugin");
//const { configVueLoader } = require("./loader/vue-loader");
const { createReport } = require("./plugins/report");
const { configImg } = require("./plugins/img");
const { createWebpackBar } = require("./plugins/processBar");
const { configDllReferencePlugin } = require("./plugins/dllReference");
function createVueConfig() {
  return {
    publicPath: getPublicPath(),
    lintOnSave:false,//!isProductionFn(),
    productionSourceMap: !isProductionFn(),
    devServer: createDevServer(),
    css: createCss(),
    configureWebpack:config =>{
      configResolve(config);
      configModule(config)
    },
    chainWebpack: config => {
      configExternals(config);
      configCdn(config);
      configSourceMap(config);
      configPerformance(config);
      configOptimization(config);
      configHtml(config);
      createGzip(config);
      configImg(config);
      createWebpackBar(config);
      configDllReferencePlugin(config);
      //configVueLoader(config);
      //configVueLoaderPlugin(config);
      createReport(config);
    }
  };
}
module.exports = {
  createVueConfig
};
