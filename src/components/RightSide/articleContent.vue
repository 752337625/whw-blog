<template>
  <div class="blog-link">
    <el-link
      href="https://element.eleme.io"
      target="_blank"
      :underline="false"
      v-for="(item, index) in link"
      :key="index"
    >
      <i>{{ index }}</i
      >我的第一篇文章就是这样的我的第一篇文章就是这样的我的第一篇文章就是这样的我的第一篇文章就是这样的
    </el-link>
  </div>
</template>

<script>
export default {
  name: "articleContent",
  data() {
    return {
      link: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style scoped lang="less">
.blog-link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 90%;
  display: flex;
  flex-direction: column;
  i {
    font-size: 14px;
    color: #437dff;
    font-weight: 700;
    padding: 0 10px 0 0;
  }
}
/deep/ .el-link {
  width: 100%;
  line-height: 2;
  span {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
