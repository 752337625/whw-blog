function configImg(config) {
  config.module
    .rule("images")
    .use("image-webpack-loader")
    .loader("image-webpack-loader")
    .options({
      bypassOnDebug: true
    })
    .end();
}
module.exports = {
  configImg
};
