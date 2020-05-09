<template>
  <el-tabs class="form_tab" type="card" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="注册" name="register">
      <el-form :model="form" :rules="rules">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.uname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.uphone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.upwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="closeData">取 消</el-button>
          <el-button type="primary" @click="setForm(2)">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="登录" name="login">
      <el-form :model="form" :rules="rules">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.uname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.upwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="closeData">取 消</el-button>
          <el-button type="primary" @click="setForm(1)">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data: () => ({
    activeName: 'login',
    form: {
      uname: '',
      upwd: '',
      uphone: ''
    },
    rules: {
      uname: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      upwd: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
      ]
    },
    closeVal: false,
    formLabelWidth: '80px'
  }),
  created () {
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    setForm (type) {
      this.form.type = type
      this.$emit('get-form', this.form)
    },
    closeData () {
      this.$emit('close-form', this.closeVal)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
