<template>
  <div class="design">
    <h1 class="title">{{dscon.ds_title}}</h1>
    <div class="author-msg">
      authormsg
    </div>
    <div class="design-con">
      <div class="time">创建时间：{{dscon.ds_time}}</div>
      <div class="content" v-html="dscon.ds_content"></div>
    </div>
    <comment :dsid="dsid"></comment>
  </div>
</template>
<script>
import Comment from '@/components/Comment'
export default {
  name: 'design',
  data: () => ({
    dsid: 0,
    value: '',
    dscon: {}
  }),
  created () {
    this.getDesign()
  },
  methods: {
    async getDesign () {
      this.dsid = this.$route.query.dsid
      let { data: { status, message } } = await this.$http.get('/design?dsid=' + this.dsid)
      if (status !== 0) return console.log(message)
      console.log(message)
      this.dscon = message[0]
      this.dscon.ds_content = this.md2html(this.dscon.ds_content)
    }
  },
  components: {
    Comment
  }

}
</script>
<style lang="less" scoped>
.design {
  margin: 0 50px;
  text-align: left;

  h1 {
    color: #fff;
  }
  .author-msg {
    float: right;
    padding: 10px;
    box-sizing: border-box;
    width: 200px;
    background-color: #fff;
    border-radius: 5px;
  }
  .design-con {
    margin-right: 210px;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;

    .time {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #00456b;
    }
  }
}

</style>
