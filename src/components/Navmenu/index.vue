<template>
  <div class="navmenu">
    <el-menu class="el-menu-demo hidden-xs-only" router mode="horizontal">
      <el-menu-item index="/home">星海</el-menu-item>
      <el-menu-item index="/category">2D平面</el-menu-item>
      <el-menu-item index="/category">3D立体</el-menu-item>
      <el-menu-item index="/category">工艺</el-menu-item>
      <el-menu-item index="/category">摄影</el-menu-item>
      <el-menu-item index="/category">服饰</el-menu-item>
      <el-menu-item>
        <el-input placeholder="请输入搜索内容" v-model="sinput" class="input-with-select" clearable>
          <router-link slot="append" :to="{ name: 'search', query: {searchcon: sinput}}">
          <el-button icon="el-icon-search"></el-button>
          </router-link>
        </el-input>
      </el-menu-item>
      <el-menu-item v-if="uid===0">
        <el-button type="text" @click="loginVisible = true">登录</el-button>
        <el-dialog class="log_reg" :visible.sync="loginVisible">
          <login @get-form="getForm" @close-form="closeForm"></login>
        </el-dialog>
      </el-menu-item>
      <el-submenu v-else index="">
        <template slot="title">
          <el-avatar :size="40" :src="userMsg.u_himg">{{userMsg.u_name}}</el-avatar>
        </template>
        <el-menu-item index="information">个人中心</el-menu-item>
        <el-menu-item index="design/editor">创建作品</el-menu-item>
        <el-menu-item @click="loginOut">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import Login from '@/components/Login'
export default {
  data: () => ({
    loginVisible: false,
    sinput: '',
    uid: localStorage.getItem('uid') || 0,
    userMsg: {}
  }),
  created () {
    this.autoLogin()
  },
  methods: {
    async getForm (value) {
      if (value.type === 1) {
        let { data: { status, message } } = await this.$http.post('/user/login', value)
        if (status !== 0) return this.$alert(message)
        this.uid = message[0].u_id
        this.userMsg = message[0]
        console.log(message)
        localStorage.setItem('uid', this.uid)
      } else if (value.type === 2) {
        let { data: { status, message } } = await this.$http.post('/user', value)
        if (status !== 0) return this.$alert(message)
      }
    },
    closeForm (value) {
      this.loginVisible = value
    },
    async autoLogin () {
      let { data: { status, message } } = await this.$http.get('/user', this.uid)
      if (status !== 0) {
        this.uid = 0
        localStorage.removeItem('uid')
        return
      }
      this.userMsg = message[0]
    },
    async loginOut () {
      this.uid = 0
      localStorage.removeItem('uid')
      await this.$http.get('/user/loginout')
    }
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

    .el-submenu {
      float: right;
    }
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
