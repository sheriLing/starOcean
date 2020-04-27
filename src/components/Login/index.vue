<template>
  <el-form :model="form" :rules="rules">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="form.uname" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.upwd" autocomplete="off"></el-input>
    </el-form-item>
    <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
  </el-form>
</template>
<script>
export default {
  data: () => ({
    form: {
      uname: '',
      upwd: ''
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
    formLabelWidth: '80px'
  }),
  created () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>
