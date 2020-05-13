<template>
  <div class="comment">
    <div class="title">交流区</div>
    <div class="comment-list">
      <div class="comment-con" v-for="item in 3" :key="item">
        评论{{item}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created () {},
  methods: {}
}
</script>
<style lang="less" scoped>
.comment {
  margin-top: 50px;
  border-radius: 5px;
  overflow: hidden;

  .title {
    padding: 10px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
  }

  .comment-list {
    background-color: #fff;
    padding: 10px;
  }
}
</style>
