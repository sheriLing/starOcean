<template>
  <div class="navmenu">
    <el-menu class="el-menu-demo hidden-xs-only" router="true" mode="horizontal" background-color="#00456b" text-color="#eee" active-text-color="#fff">
      <el-menu-item index="/home">星海</el-menu-item>
      <el-menu-item index="/search">2D平面</el-menu-item>
      <el-menu-item index="3">3D立体</el-menu-item>
      <el-menu-item index="4">工艺</el-menu-item>
      <el-menu-item index="5">摄影</el-menu-item>
      <el-menu-item index="6">服饰</el-menu-item>
      <el-menu-item index="7">
        <el-button type="text" @click="loginVisible = true">登录</el-button>
        <el-dialog class="log_reg" title="登录/注册" :visible.sync="loginVisible">
          <login></login>
          <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog(false)">取 消</el-button>
            <el-button type="primary" @click="submitAccount()">确 定</el-button>
          </div>
        </el-dialog>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import Login from '@/components/Login'
export default {
  data: () => ({
    loginVisible: false
  }),
  created () {},
  methods: {
    closeDialog (bool) {
      this.loginVisible = bool
      // this.$emit('isVisible', this.loginVisible)
      console.log(this.loginVisible)
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
</style>
