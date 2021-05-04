const { isProductionFn } = require("../utiles");
function configExternals(config) {
  config.externals({
    vue: "Vue",
    vuex: "Vuex",
    axios: "axios",
    qs: "qs",
    nprogress: "NProgress",
    "vue-router": "VueRouter",
    "vue-lazyload": "VueLazyload",
    "element-ui": "ELEMENT",
    VueParticles: "vue-particles"
  });
}
module.exports = {
  configExternals
};
