<template>
  <div :class="['blog-index']">
    <Barticle></Barticle>
    <div>
      <Bmyself v-for="item in componentInfo" :key="item.iconfont">
        <div slot="header-title" class="clearfix">
          <Btitle :title="item.title" :iconfont="item.iconfont"></Btitle>
        </div>
        <div slot="content">
          <component :is="item.name" :data="item.data"></component>
        </div>
      </Bmyself>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    Barticle: () => import("@/base/Barticle"),
    Btitle: () => import("@/base/Btitle"),
    Bmyself: () => import("@/base/Bmyself"),
    MyselfContent: () => import("@/components/RightSide/myselfContent"),
    ArticleContent: () => import("@/components/RightSide/articleContent")
  },
  data() {
    return {
			
      componentInfo: [
        {
          title: "我的名片",
          iconfont: "icon-mingpian",
          name: "MyselfContent",
          data: "555556666665"
        },
        {
          title: "最热文章",
          iconfont: "icon-hot",
          name: "ArticleContent",
          data: "556666665"
        },
        {
          title: "文章归档",
          iconfont: "icon-archive",
          name: "ArticleContent",
          data: "5566665"
        },
        {
          title: "最新文章",
          iconfont: "clearfix",
          name: "ArticleContent",
          data: "555"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped="scoped">
.blog-index {
  display: flex;
  justify-content: space-around;
  & > div:first-child {
    width: 65%;
  }
  & > div:last-child {
    width: 30%;
  }
}
</style>
