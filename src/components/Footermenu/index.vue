<template>
  <div class="footermenu">
    <div class="f-left">
      <div class="link">关于网站</div>
      <div class="link">footer</div>
      </div>
    <div class="f-right">
      <div>&copy; 星海 2020</div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  created () {},
  methods: {}
}
</script>
<style lang="less" scoped>
.footermenu {
  margin-top: 50px;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  .f-left {
    float: left;
    padding: 10px;
    width: 20%;
    line-height: 2;
    border: 1px solid #fff;
    border-width: 0 1px;
  }
}
</style>
