const Webpackbar = require("webpackbar");
function createWebpackBar(config) {
  config.plugin("bar").use(Webpackbar, [
    {
      name: "编译中：",
      color: "#BBE6D6"
    }
  ]);
}
module.exports = {
  createWebpackBar
};
