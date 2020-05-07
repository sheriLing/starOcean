<template>
  <div class="navmenu">
    <el-menu class="el-menu-demo hidden-xs-only" router mode="horizontal" background-color="#00456b" text-color="#eee" active-text-color="#fff">
      <el-menu-item index="/home">星海</el-menu-item>
      <el-menu-item index="/search">2D平面</el-menu-item>
      <el-menu-item index="3">3D立体</el-menu-item>
      <el-menu-item index="4">工艺</el-menu-item>
      <el-menu-item index="5">摄影</el-menu-item>
      <el-menu-item index="6">服饰</el-menu-item>
      <el-menu-item>
        <el-input placeholder="请输入搜索内容" v-model="sinput" class="input-with-select">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>
      <el-menu-item>
        <el-button type="text" @click="loginVisible = true">登录</el-button>
        <el-dialog class="log_reg" title="登录/注册" :visible.sync="loginVisible">
          <login @get-form="getForm" @close-form="closeForm"></login>
        </el-dialog>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import Login from '@/components/Login'
export default {
  data: () => ({
    loginVisible: false,
    sinput: ''
  }),
  created () {},
  methods: {
    closeDialog (bool) {
      this.loginVisible = bool
      // this.$emit('isVisible', this.loginVisible)
      console.log(this.loginVisible)
    },
    async getForm (value) {
      let { data: { status, message } } = await this.$http.post('/loginuser', value)
      if (status !== 0) {
        return this.$Toast(message)
      }
      console.log(message)
    },
    closeForm (value) {
      this.loginVisible = value
    },
    submitAccount () {}
  },
  components: {
    Login
  }
}
</script>
<style lang="less" scoped>
.el-menu--horizontal {
  .el-menu-item:last-child {
    float: right;
  }
}
.input-with-select .el-input-group__prepend {
  color: #00456b;
}
</style>
