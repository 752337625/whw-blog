const { VueLoaderPlugin } = require("vue-loader");
function configVueLoaderPlugin(config) {
  config.plugin("vueLoaderPlugin").use(VueLoaderPlugin);
}
module.exports = { configVueLoaderPlugin };
