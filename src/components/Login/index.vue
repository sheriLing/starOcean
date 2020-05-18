<template>
  <el-tabs class="form_tab" type="card" v-model="activeName">
    <el-tab-pane label="注册" name="register">
      <el-form :model="regform" :rules="rules" ref="regform" label-width="120px" label-position="right">
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="regform.uname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input type="password" v-model="regform.upwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="uemail">
          <el-input v-model="regform.uemail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱验证码" prop="uecode">
          <el-input v-model="regform.uecode" autocomplete="off">
            <template slot="append">
              <el-button @click.prevent="verifyEmail()">{{sendText}}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="closeData">取 消</el-button>
          <el-button type="primary" @click="setForm(2, 'regform', regform)">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="登录" name="login">
      <el-form :model="logform" :rules="rules" ref="logform" label-width="120px" label-position="right">
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="logform.uname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input type="password" v-model="logform.upwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="closeData">取 消</el-button>
          <el-button type="primary" @click="setForm(1, 'logform', logform)">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data: () => ({
    activeName: 'login',
    regform: {
      uname: '',
      upwd: '',
      uemail: '',
      uecode: ''
    },
    logform: {
      uname: '',
      upwd: ''
    },
    rules: {
      uname: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
      ],
      upwd: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
      ],
      uemail: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ],
      uecode: [
        { required: true, message: '请输入验证码', trigger: 'blur' }
      ]
    },
    timer: '',
    sendText: '发送验证码',
    sendTime: localStorage.getItem('sendtime') || 60,
    isSend: localStorage.getItem('issend') || false,
    closeVal: false
  }),
  created () {
    this.verifySecond()
  },
  methods: {
    async verifyEmail () {
      if (this.regform.uemail === '') {
        return this.$message('邮箱为空')
      }
      if (this.isSend) return this.$message(this.sendTime + 's后才能重新发送')
      let { data: { status, message } } = await this.$http.get('/email?uemail=' + this.regform.uemail)
      if (status !== 0) return this.$message(message)
      this.isSend = true
      this.verifySecond()
      this.$message(message)
    },
    verifySecond () {
      if (!this.isSend) return
      localStorage.setItem('issend', this.isSend)
      this.timer = setInterval(() => {
        --this.sendTime
        this.sendText = this.sendTime + 's后重新发送'
        localStorage.setItem('sendtime', this.sendTime)
        if (this.sendTime <= 0) {
          clearInterval(this.timer)
          this.sendText = '发送验证码'
          this.isSend = false
          localStorage.removeItem('sendtime')
          localStorage.removeItem('issend')
        }
      }, 1000)
    },
    setForm (type, formName, formCon) {
      formCon.type = type
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('get-form', formCon)
        } else {
          return false
        }
      })
    },
    closeData () {
      this.$emit('close-form', this.closeVal)
    }
  }
}
</script>
<style lang="less" scoped>
.el-input-group__append {
  button.el-button {
    background-color: rgb(0, 69, 107);
    color: #fff;
  }
}
</style>
