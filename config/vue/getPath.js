const { getEnvFn } = require("../utiles");
const ENV = getEnvFn();
function getPublicPath() {
  return ENV.VUE_APP_PUBLIC_PATH;
}
module.exports = {
  getPublicPath
};
