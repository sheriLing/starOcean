<template>
  <div class="carousel">
    <!-- 轮播图播放 -->
    <el-carousel>
      <el-carousel-item v-for="item in carLi" :key="item.i_id">
        <img :src="item.i_img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data: () => ({
    carLi: []
  }),
  created () {
    this.getCarousel()
  },
  methods: {
    async getCarousel () {
      let { data: { status, message } } = await this.$http.get('/informations')
      if (status !== 0) {
        return this.$Toast(message)
      }
      this.carLi = message
    }

  }
}
</script>
<style lang="less" scoped>
.el-carousel__item {

  img {
    width: 100%;
  }

  &:nth-child(2n) {
    background-color: #99a9bf;
  }

  &:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>
