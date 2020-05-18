<template>
  <div class="search">
    <el-input placeholder="请输入搜索内容" v-model="sinput" class="input-with-select" @change="searchDesign">
      <el-button icon="el-icon-search" @click="searchDesign"></el-button>
    </el-input>
    <div class="search-li">
      <Content :designType="type" :sinput="sinput"></Content>
    </div>
  </div>
</template>

<script>

import Content from '@/components/Content'

export default {
  name: 'search',
  data: () => ({
    sinput: '',
    type: 'search',
    isSearch: false
  }),
  created () {},
  methods: {
    async searchDesign () {
      if (this.isSearch) return

      console.log(this.sinput)
    }
  },
  components: {
    Content
  }
}
</script>

<style lang="less" scoped>
</style>
