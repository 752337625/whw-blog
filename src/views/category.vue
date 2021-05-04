<template>
  <div class="blog-category">
    <ul>
      <li>全部</li>
      <li class="">Nginx</li>
      <li class="">Mysql</li>
      <li class="">Python</li>
      <li class="">Linux</li>
      <li class="">PHP</li>
      <li class="last">技术杂谈</li>
    </ul>
    <Article></Article>
  </div>
</template>

<script>
export default {
  name: "category",
  components: {
    Article: () => import("@/base/Barticle")
  }
};
</script>

<style scoped lang="less">
.blog-category {
  display: flex;
  width: 95%;
  margin: 0 auto;
  & > ul:first-child {
    width: 15%;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
  & > div:last-child {
    width: 88%;
  }
  li {
    padding: 5px 20px;
    text-align: center;
    line-height: 2;
    cursor: pointer;
  }
}
</style>
