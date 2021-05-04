<template>
  <div id="app" v-cloak>
    <el-container>
      <el-header>
        <div class="header">
          <div class="logo-site-title">
            <router-link to="/index">
              <span class="log">Mr.Wang</span>
            </router-link>
          </div>
          <el-collapse-transition>
            <ul class="nav">
              <router-link
                tag="li"
                v-for="item in header"
                :to="item.to"
                :key="item.title"
                ><i :class="['iconfont', item.class]"></i>{{ item.title }}
              </router-link>
            </ul>
          </el-collapse-transition>
          <a>
            <svg
              width="80"
              height="60"
              viewBox="0 0 250 250"
              style="fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: -10px;"
              aria-hidden="true"
            >
              <path
                d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
              ></path>
              <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor"
                style="transform-origin: 130px 106px;"
              ></path>
              <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </el-header>
      <el-main>
        <div style="min-width: 1100px;width: 55%;margin: 0 auto;opacity: .9;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: [
        {
          title: "首页",
          to: "/index",
          class: "icon-home",
          flag: true
        },
        {
          title: "标签",
          to: "/tags",
          class: "icon-tags",
          flag: false
        },
        {
          title: "分类",
          to: "/category",
          class: "icon-category",
          flag: false
        },
        {
          title: "归档",
          to: "/archives",
          class: "icon-archive",
          flag: false
        },
        {
          title: "关于",
          to: "/about",
          class: "icon-user1",
          flag: false
        },
        {
          title: "友链",
          to: "/link",
          class: "icon-link",
          flag: false
        },
        {
          title: "留言板",
          to: "/message",
          class: "icon-comment",
          flag: false
        },
        {
          title: "创作中心",
          to: "/message",
          class: "icon-article",
          flag: false
        }
      ]
    };
  },
  created() {
    const bgCanvas = document.getElementById("bgCanvas");
    bgCanvas.style.backgroundColor = "";
  }
};
</script>
<style lang="less" scoped="scoped">
#app,
.el-container {
  height: 100%;
}

.el-header {
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2020;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  .header {
    min-width: 1200px;
    width: 65%;
    height: 100%;
    line-height: 60px;
    margin: 0 auto;
    display: flex;

    .logo-site-title {
      width: 25%;
    }

    .log {
      font-family: Lato, PingFang SC, Microsoft YaHei, sans-serif;
      font-size: 22px;
      font-weight: bolder;
      color: #333333;
      border-bottom: 2px solid;
      border-top: 2px solid;
      padding: 6px 0;
      transition: all 0.4s;
    }

    .nav {
      display: flex;

      li {
        padding: 0 20px;
        cursor: pointer;

        &:hover {
          background-color: #ecf5ff;
          border-bottom: 5px solid #0d68c7;
        }

        i {
          color: #909399;
          vertical-align: bottom;
          margin-right: 3px;

          &.con_font_size {
            font-size: 15px;
          }
        }
      }
    }
  }
}

.el-main {
  width: 100%;
  margin-top: 60px;
  padding-top: 40px;
}
</style>
