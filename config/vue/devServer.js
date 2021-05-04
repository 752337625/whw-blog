const { getEnvFn } = require("../utiles");

const ENV = getEnvFn();
let proxyList = ENV.VUE_APP_PROXY || [];
function createDevServer() {
  return {
    disableHostCheck: true,
    open: false,
    hot: true,
    inline: true,
    compress: true,
    host: "0.0.0.0",
    port: ENV.VUE_APP_PORT,
    https: false,
    clientLogLevel: "warn",
    overlay: {
      warnings: true,
      errors: true
    },
    ...creatProxy()
  };
}
function creatProxy() {
  const proxyResult = {};
  try {
    proxyList = JSON.parse(proxyList);
    if (!Array.isArray(proxyList) || proxyList.length <= 0) {
      return {};
    }
    for (const [key, target] of proxyList) {
      proxyResult[key] = {
        target: target,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ["^" + key]: ""
        }
      };
    }
    return {
      proxy: proxyResult
    };
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return {};
}
module.exports = {
  createDevServer
};
