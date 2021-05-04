const { join } = require("path");
const baseAlias = {
  "@": "src",
  assetsJS: "src/assets/js",
  assetsCSS: "src/assets/css",
  assetsIMG: "src/assets/img"
};

function resolve(item) {
  return join(__dirname, "../../", baseAlias[item]);
}
function configResolve(config) {
  config.resolve.extensions = [".js", ".vue", ".json"];
  Object.keys(baseAlias).forEach(item => {
    config.resolve.alias[item] = resolve(item);
  });
}

module.exports = {
  configResolve
};
