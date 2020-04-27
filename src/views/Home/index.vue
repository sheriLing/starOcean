<template>
  <el-container class="home">
    <el-main>
      <Carousel />
      <Content />
    </el-main>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel'
import Content from '@/components/Content'

export default {
  name: 'home',
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
}
</style>
