function configModule(config) {
  config.module.noParse = /^(vue|vue-router|vuex|vuex-router-sync)$/;
}
module.exports = {
  configModule
};
