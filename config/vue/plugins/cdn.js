const { isProductionFn } = require("../../utiles");
const cdn = {
  css: [
    "//cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.css",
    "//cdn.bootcdn.net/ajax/libs/element-ui/2.14.1/theme-chalk/index.min.css"
    //"//cdn.bootcdn.net/ajax/libs/wangEditor/3.1.1/wangEditor.css"
  ],
  js: [
    "//cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js",
    "//cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js",
    "//cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",
    "//cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js",
    "//cdn.bootcdn.net/ajax/libs/qs/6.9.4/qs.js",
    "//cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.js",
    "//cdn.bootcdn.net/ajax/libs/element-ui/2.14.1/index.js"
    //"//cdn.bootcdn.net/ajax/libs/wangEditor/3.1.1/wangEditor.js"
  ]
};

function configCdn(config) {
  config.when(isProductionFn(), config => {
    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      return args;
    });
  });
}
module.exports = {
  configCdn
};
