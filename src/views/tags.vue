<template>
  <div class="blog-tag">
    <ul>
      <li v-for="(item, index) in sj" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tags",
  data() {
    return {
      sj: [
        "PHP",
        "MySQL",
        "Python",
        "数据库",
        "MongoDB",
        "Oracle",
        "Yii2",
        "web",
        "监控",
        "Url",
        "服务器",
        "Nginx",
        "Centos7",
        "Apache",
        "Linux",
        "Svn服务",
        "前端",
        "Javascript",
        "排序冒泡",
        "three.js",
        "设计模式",
        "后端",
        "ThinkPHP",
        "Layui",
        "爬虫",
        "多线程",
        "Yii工作项目",
        "虚拟机",
        "Influx",
        "DBComposer",
        "内网",
        "Git",
        "Laravel",
        "事务",
        "面试",
        "核心技术框架",
        "反爬虫",
        "题解",
        "leetcode",
        "Hexo",
        "性能",
        "Docker",
        "Curl",
        "window",
        "Scrapy",
        "代理",
        "邮箱",
        "Redis",
        "Django",
        "Memcache",
        "缓存"
      ]
    };
  }
};
</script>

<style scoped lang="less">
.blog-tag {
  width: 50%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    line-height: 5;
    justify-content: space-between;
    li {
      padding: 0 5px;
    }
  }
}
</style>
