<template>
  <el-row type="flex" class="row-bg" justify="space-around">
    <el-col :sm="6" :md="6" class="content" v-for="item in designList" :key="item.ds_id">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="item.ds_cover" class="image">
        <div style="padding: 14px;">
          <span>{{item.ds_title}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.ds_time }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data: () => ({
    designList: [],
    currentDate: new Date(),
    isFin: false,
    dsIndex: 0,
    dsType: 0
  }),
  props: {
    'designType': {
      type: String
    }
  },
  created () {
    this.getDesigns()
  },
  methods: {
    async getDesigns () {
      if (this.isFin !== false) {
        return
      }
      ++this.dsIndex
      let { data: { status, message, count } } = await this.$http.get('/designs?dstype=' + this.designType + '&dsindex=' + this.dsIndex)
      if (status !== 0) {
        return this.$Toast(message)
      }
      this.designList = this.designList.concat(message)
      this.isFin = this.dsIndex * 3 >= count
    }
  }
}
</script>
<style lang="less" scoped>
.row-bg {
  flex-wrap: wrap;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
