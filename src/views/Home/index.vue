<template>
  <el-container class="home">
    <el-main>
      <Carousel />
      <div class="content">
        <div class="con_title">
          推荐作品
          <div class="more">更多 <i class="el-icon-d-arrow-right"></i></div>
        </div>
        <Content :designType="recom" />
        <div class="con_title">
          热门作品
          <div class="more">更多 <i class="el-icon-d-arrow-right"></i></div>
        </div>
        <Content :designType="hot" />
      </div>
    </el-main>
  </el-container>
</template>

<script>

import Carousel from '@/components/Carousel'
import Content from '@/components/Content'

export default {
  name: 'home',
  data: () => ({
    recom: 'recom',
    hot: 'hot'
  }),
  components: {
    // HelloWorld,
    Carousel,
    Content
  }
}
</script>

<style lang="less" scoped>
.el-main {
  padding: 0;
  .con_title {
    padding: 50px 0 20px;
    color: #fff;

    .more {
      margin-right: 10px;
      float: right;
    }
  }
}
</style>
