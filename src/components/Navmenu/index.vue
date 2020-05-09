<template>
  <div class="navmenu">
    <el-menu class="el-menu-demo hidden-xs-only" router mode="horizontal">
      <el-menu-item index="/home">星海</el-menu-item>
      <el-menu-item index="/search">2D平面</el-menu-item>
      <el-menu-item index="3">3D立体</el-menu-item>
      <el-menu-item index="4">工艺</el-menu-item>
      <el-menu-item index="5">摄影</el-menu-item>
      <el-menu-item index="6">服饰</el-menu-item>
      <el-menu-item>
        <el-input placeholder="请输入搜索内容" v-model="sinput" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>
      <el-menu-item>
        <el-button type="text" @click="loginVisible = true">登录</el-button>
        <el-dialog class="log_reg" :visible.sync="loginVisible">
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
    async getForm (value) {
      if (value.type === 1) {
        let { data: { status, message } } = await this.$http.post('/loginuser', value)
        if (status !== 0) {
          return this.$alert(message)
        }
        console.log(message)
      } else if (value.type === 2) {
        let { data: { status, message } } = await this.$http.post('/user', value)
        if (status !== 0) {
          return this.$alert(message)
        }
      }
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
.navmenu {

  .el-menu--horizontal {
    background: rgba(0, 0, 0, .4);
    border-color: rgb(0, 69, 107);

    .el-menu-item {
      color: #eee;

      &:not(.is-disabled) {
        color: #fff;
      }

      &:not(.is-disabled):focus, &:not(.is-disabled):hover {
        color: rgb(0, 69, 107);
      }

      &.is-active {
        font-weight: 700;
        border-color: rgb(0, 69, 107);
      }

      &:last-child {
        float: right;
        &:not(.is-disabled):hover {
          background: none;
        }
      }
    }
  }

}
.input-with-select .el-input-group__prepend {
  color: #00456b;
}
</style>
