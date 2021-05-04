<template>
  <div class="blog-archives">
    <ul>
      <li>
        <el-badge :value="12" class="item">
          <el-button size="small">2020-10-10</el-button>
        </el-badge>
      </li>
      <li>
        <el-badge :value="12" class="item">
          <el-button size="small">2020-10-10</el-button>
        </el-badge>
      </li>
      <li>
        <el-badge :value="12" class="item">
          <el-button size="small">2020-10-10</el-button>
        </el-badge>
      </li>
      <li>
        <el-badge :value="12" class="item">
          <el-button size="small">2020-10-10</el-button>
        </el-badge>
      </li>
      <li>
        <el-badge :value="12" class="item">
          <el-button size="small">2020-10-10</el-button>
        </el-badge>
      </li>
    </ul>
    <Article></Article>
  </div>
</template>
<script>
export default {
  name: "archives",
  components: {
    Article: () => import("@/base/Barticle")
  }
};
</script>

<style scoped lang="less">
.blog-archives {
  display: flex;
  width: 95%;
  margin: 0 auto;
  & > ul:first-child {
    width: 23%;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-wrap: wrap;
    height: 42px;
  }
  & > div:last-child {
    width: 75%;
  }
  li {
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>
