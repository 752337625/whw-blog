<template>
  <div class="blog-link">
    <h1>目前共计55个标签</h1>
    <ul>
      <li v-for="(item, index) in sj" :key="index">
        <el-card shadow="hover">
          <h4>我是标题</h4>
          <p>
            鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示
            鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示
            鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示鼠标悬浮时显示
          </p>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogLink",
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
.blog-link {
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  ul {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    width: 98%;
    li {
      width: 24%;
      margin: 6px 5px;
      height: 120px;
      overflow: hidden;
      h4 {
        margin-bottom: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      p {
        text-align: start;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-height: 1.5;
        font-size: 13px;
      }
    }
  }
}
</style>
