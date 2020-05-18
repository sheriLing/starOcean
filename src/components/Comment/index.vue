<template>
  <div class="comment">
    <div class="c-editor">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="commentCon">
      </el-input>
      <el-button @click="setComment">发送</el-button>
    </div>
    <div class="title">交流区</div>
    <div class="comment-list">
      <div class="comment-con" v-for="item in commentsLi" :key="item.c_id">
        <div class="user-msg">
          <el-avatar :size="30" :src="item.u_himg">{{item.u_name}}</el-avatar>
          <div>{{item.u_name}}</div>
          <div>{{item.c_time}}</div>
        </div>
        <div class="msg">{{item.c_content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dsid: 0,
    commentCon: '',
    commentForm: {},
    commentsLi: []
  }),
  created () {
    this.getComment()
  },
  methods: {
    async getComment () {
      this.dsid = this.$route.query.dsid
      let { data: { status, message } } = await this.$http.get('/comments/' + this.dsid)
      if (status !== 0) return this.$alert(message)
      this.commentsLi = message
    },
    async setComment () {
      this.commentForm.u_id = localStorage.getItem('uid')
      this.commentForm.ds_id = this.dsid
      this.commentForm.c_content = this.commentCon
      if (!this.commentForm.u_id) return this.$alert('请先登录再评论哦~')
      if (this.commentForm.c_content === '') return this.$message('评论不能为空')
      let { data: { status, message } } = await this.$http.post('/comment', this.commentForm)
      if (status !== 0) return this.$alert(message)
      this.commentCon = ''
      this.getComment()
    }
  }
}
</script>
<style lang="less" scoped>
.comment {
  margin-top: 50px;
  border-radius: 5px;
  overflow: hidden;

  .title {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  .comment-list {
    background-color: #fff;
    padding: 10px;

    .user-msg {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;

      div {
        margin: 0 5px;
      }
    }

    .comment-con {

      .msg {
        padding: 1% 2% 2%;
      }
    }
  }
}
</style>
