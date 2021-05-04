function createReport(config) {
  config
    .plugin("webpack-bundle-analyzer")
    .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
}
module.exports = {
  createReport
};
