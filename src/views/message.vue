<template>
  <div class="blog-message">
    <h1 style="text-align: center;">留言互动</h1>
    <el-card class="box-card">
      <div style="width: 90%;margin: 0 auto;">
        <div id="wangEditor" class="blog-wangEditor"></div>
        <div style="margin-top: 3%;">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div style="margin-top: 3%;">
        <div>共149条评论</div>
        <div class="blog-message-pl">
          <h3 class="blog-message-h">王</h3>
          <div>
            <p>
              <label class="blog-message-label">让女生飞起来</label>
              <span class="blog-message-span">2020-10-11 10:45:30</span>
            </p>
            <p>是我是我是我是我是我是我是我是我是我</p>
          </div>
        </div>
        <div class="blog-message-pl">
          <h3 class="blog-message-h">王</h3>
          <div>
            <p>
              <label class="blog-message-label">让女生飞起来</label>
              <span class="blog-message-span">2020-10-11 10:45:30</span>
            </p>
            <p>是我是我是我是我是我是我是我是我是我</p>
          </div>
        </div>
        <div class="blog-message-pl">
          <h3 class="blog-message-h">王</h3>
          <div>
            <p>
              <label class="blog-message-label">让女生飞起来</label>
              <span class="blog-message-span">2020-10-11 10:45:30</span>
            </p>
            <p>是我是我是我是我是我是我是我是我是我</p>
          </div>
        </div>
        <div class="blog-message-pl">
          <h3 class="blog-message-h">王</h3>
          <div>
            <p>
              <label class="blog-message-label">让女生飞起来</label>
              <span class="blog-message-span">2020-10-11 10:45:30</span>
            </p>
            <p>是我是我是我是我是我是我是我是我是我</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import wangEditor from "wangeditor";
export default {
  name: "message",
  data() {
    return {
      editor: null,
      config: {
        focus: false,
        placeholder: "从我开始"
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const editor = new wangEditor("#wangEditor");
      editor.create();
      console.log(editor);
    });
  },
  methods: {
    reset() {
      this.editor.txt.clear();
    },
    submit() {
      console.log(this.editor.txt.html());
    }
  },
  beforeDestroy() {
    this.editor.destroy();
    this.editor = null;
  }
};
</script>

<style scoped="scoped" lang="less">
.blog-message {
  padding-top: 30px;
}
.box-card {
  margin-top: 30px;
  background-color: transparent;

  .blog-wangEditor {
    height: 100%;
    margin-top: 10px;
  }
}
.blog-message-h {
  width: 50px;
  min-width: 50px;
  height: 50px;
  background-color: rgb(103, 58, 183);
  color: rgb(183, 138, 255);
  margin-right: 20px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
}
.blog-message-pl {
  margin-top: 3%;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #ececec;
  > div {
    flex: 1;
    > p {
      margin-bottom: 10px;
    }
  }
  .blog-message-label {
    margin-bottom: 10px;
    color: #1abc9c;
    display: inline-block;
  }
  .blog-message-span {
    float: right;
    color: #999;
    font-size: 12px;
  }
}
</style>
