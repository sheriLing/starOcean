<template>
  <div class="information">
    个人信息 information page
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="first">个人信息</el-tab-pane>
      <el-tab-pane label="标记的星球" name="second">标记的星球</el-tab-pane>
      <el-tab-pane label="创造的星球" name="third">创造的星球</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeName: 'first'
  }),
  created () {},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
