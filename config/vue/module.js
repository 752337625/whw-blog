function configModule(config) {
  config.module.noParse = /^(vue|vue-router|vuex)$/;
}
module.exports = {
  configModule
};
