<template>
  <div class="dseditor">
    <el-input>title</el-input>
    <mavon-editor v-model="value" @save="saveDesign"></mavon-editor>
  </div>
</template>
<script>
export default {
  name: 'dseditor',
  data: () => ({
    value: 'first'
  }),
  created () {},
  methods: {
    saveDesign (md, html) {
      console.log(md, html)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
