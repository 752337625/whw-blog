const { getEnvFn } = require("../../utiles");

function getMergeCommonOptions() {
  const minify = {
    html5: true,
    ignoreCustomComments: [/^!/], // 保留的注释
    sortClassName: true, // class排序
    sortAttributes: true, // 属性排序
    processConditionalComments: true, // 处理条件注释(IE)
    removeStyleLinkTypeAttributes: true, // 去 link type="text/css"
    useShortDoctype: true,
    removeEmptyAttributes: true,
    keepClosingSlash: true,
    removeComments: true, // 移除注释
    collapseWhitespace: true, // 去多余空格
    removeAttributeQuotes: true, // 去属性括号
    collapseBooleanAttributes: true, // Boolean属性简写
    removeScriptTypeAttributes: true, // 去script type属性
    minifyJS: { output: { comments: /^!/ } }, // 压缩script标签里的js
    minifyCSS: true,
    minifyURLs: true
  };
  return { minify, inject: true };
}
function configHtml(config) {
  config.plugin("html").tap(args => {
    const { minify } = getMergeCommonOptions();
    args[0].title = getEnvFn().VUE_APP_PAGE_TITLE;
    args[0].minify = minify;
    return args;
  });
}
module.exports = {
  configHtml
};
