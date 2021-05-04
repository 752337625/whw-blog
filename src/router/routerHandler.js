const path = require("path");
const files = require.context("./modules", true, /\.router\.js$/);
const modules = {};
files.keys().forEach(key => {
  const name = path.basename(key, ".router.js");
  modules[name] = files(key).default || files(key);
});
const contextRouter = Object.values(modules)
  .filter(item => {
    return Array.isArray(item);
  })
  .flat(Infinity)
  .filter(item => item.path.toLocaleLowerCase() === item.path);
export default contextRouter;
