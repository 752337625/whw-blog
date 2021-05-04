const headerRouter = [
  {
    path: "/index",
    name: "index",
    component: () => import(/* webpackChunkName: "index" */ "@/views/index")
  },
  {
    path: "/tags",
    name: "tags",
    component: () => import(/* webpackChunkName: "tags" */ "@/views/tags")
  },
  {
    path: "/message",
    name: "message",
    component: () => import(/* webpackChunkName: "message" */ "@/views/message")
  },
  {
    path: "/about",
    name: "aboutMe",
    component: () => import(/* webpackChunkName: "aboutMe" */ "@/views/aboutMe")
  },
  {
    path: "/category",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "@/views/category")
  },
  {
    path: "/archives",
    name: "archives",
    component: () =>
      import(/* webpackChunkName: "archives" */ "@/views/archives")
  },
  {
    path: "/link",
    name: "link",
    component: () => import(/* webpackChunkName: "link" */ "@/views/BlogLink")
  }
];
export default headerRouter;
