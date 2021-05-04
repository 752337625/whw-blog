<template>
  <div>
    <el-card class="box-card" v-for="(item, key) in cardInfo" :key="key">
      <div class="item">
        <h1 class="title">我的博客第一天希望快乐</h1>
        <div class="bar">
          <i class="el-icon-user">作者&nbsp;{{ item.a }}</i>
          <i class="el-icon-s-unfold">分类&nbsp;{{ item.a }}</i>
          <i class="el-icon-view">阅读量&nbsp;{{ item.a }}</i>
          <i class="el-icon-time">发表于&nbsp;{{ item.a }}</i>
          <i class="el-icon-chat-dot-round">评论数&nbsp;{{ item.a }}</i>
        </div>
        <div class="desc">
          <p>
            我的第一天我的第一天我的第一天我的第一天我的第一天我的
            我的第一天我的第一天我的第一天第一天我的第一天我的第一天
            我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天
            我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天
            我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天
            我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天我的第一天
          </p>
        </div>
        <div class="more">
          <el-tag type="success" size="mini">标签三</el-tag>
          <el-tag type="success" size="mini">标签三</el-tag>
          <el-tag type="success" size="mini">标签三</el-tag>
          <el-tag type="success" size="mini">标签三</el-tag>
          <el-tag type="success" size="mini">标签三</el-tag>
          <el-tag type="success" size="mini">标签三</el-tag>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Barticle",
  data() {
    return {
      cardInfo: [
        {
          a: 5555
        },
        {
          a: 5555
        },
        {
          a: 5555
        },
        {
          a: 5555
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.box-card {
  margin-bottom: 10px;
  visibility: visible;
  background-color: transparent;
  .item {
    > h1 {
      font-size: 20px;
      font-weight: 700;
    }

    .bar {
      width: 100%;
      font-size: 13px;
      color: #999;
      padding: 10px 0;

      i {
        margin-right: 10px;
      }
    }

    .desc {
      width: 100%;
      font-size: 16px;
      line-height: 2;
      padding-bottom: 10px;

      p {
        overflow: hidden;
        position: relative;
        max-height: 95px;

        &::after {
          position: absolute;
          right: 0;
          bottom: 0;
          padding-left: 20px;
          background: linear-gradient(to right, transparent, #fff 50%);
          content: "...";
        }
      }
    }
    .more {
      .el-tag {
        margin-right: 5px;
      }
    }
  }
}
.el-icon-user:before,
.el-icon-s-unfold:before,
.el-icon-view:before,
.el-icon-time:before,
.el-icon-chat-dot-round:before {
  padding-right: 5px;
}
</style>
