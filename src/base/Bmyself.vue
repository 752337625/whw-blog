<template functional>
  <div class="blog-myself">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <slot name="header-title"></slot>
      </div>
      <slot name="content"></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Bmyself"
};
</script>

<style scoped="scoped" lang="less">
.blog-myself {
  margin-bottom: 10px;
  .el-card {
    background-color: transparent;
  }
}
</style>
