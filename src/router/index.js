import Vue from "vue";
import VueRouter from "vue-router";
import contextRouter from "./routerHandler";
Vue.use(VueRouter);
const routes = [...contextRouter];
const router = new VueRouter({
	base: process.env.VUE_APP_PUBLIC_PATH,
	routes
});
export default router;
