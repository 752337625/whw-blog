<template>
  <div>
    {{ data }}
    <div class="blog-index-p">
      <div style="text-align-last: justify;font-weight: 600;">
        <p>网名：</p>
        <p>职业：</p>
        <p>现居：</p>
        <p>Email：</p>
        <p>QQ：</p>
      </div>
      <div>
        <p>我的名片我的名我的名片片</p>
        <p>我的名片我的名片我的名片</p>
        <p>我的名片我的名片我的名片</p>
        <p>我的名片我的名片我的名片</p>
        <p>我的名片我的名片我的名片</p>
      </div>
    </div>
    <div class="me-tool">
      <span><i class="iconfont icon-QQ" style="color: #1BC1FA"></i></span>
      <span><i class="iconfont icon-wechat1" style="color: #15C434"></i></span>
      <span><i class="iconfont icon-email" style="color: #2F77F1"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogContent",
  props: {
    data: {
      type: String,
      default: "5999"
    }
  }
};
</script>

<style scoped lang="less">
.blog-index-p {
  display: flex;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 35px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
.me-tool {
  text-align: center;
  padding-top: 20px;
  span {
    margin: 0 5px;
    i {
      cursor: pointer;
      padding: 4px 10px;
      font-size: 30px;
    }
  }
}
</style>
