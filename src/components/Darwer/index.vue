<template>
  <div class="darwer">
    <el-drawer
    title="我是标题"
    :visible.sync="drawer"
    :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false
  }),
  created () {},
  methods: {}
}
</script>
<style lang="less" scoped>
</style>
