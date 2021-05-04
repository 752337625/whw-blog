<template functional>
  <div class="blog-title">
    <i :class="['iconfont', props.iconfont]"></i>
    <strong>{{ props.title }}</strong>
  </div>
</template>

<script>
export default {
  name: "Btitle"
};
</script>

<style scoped="scoped" lang="less">
.icon-mingpian,
.icon-hot {
  font-size: 20px;
  margin-right: 4px;
}
.icon-mingpian {
  color: #ff9401;
}
.icon-hot {
  color: #e13455;
}
.icon-archive,
.icon-article {
  margin-right: 4px;
}
.icon-archive {
  color: #57aeea;
}
.icon-article {
  color: #266fff;
}
</style>
