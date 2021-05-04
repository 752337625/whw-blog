function getEnvFn() {
  return process.env;
}
function isProductionFn() {
  return getEnvFn().NODE_ENV === "production";
}
function isDevFn() {
  return getEnvFn().NODE_ENV === "development";
}
function isTestFn() {
  return getEnvFn().NODE_ENV === "test";
}
module.exports = {
  getEnvFn,
  isProductionFn,
  isDevFn,
  isTestFn
};
