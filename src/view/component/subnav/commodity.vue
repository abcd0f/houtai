<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-menu :default-active="$route.path" router>
    <el-menu-item>商品管理</el-menu-item>
    <el-menu-item index="/shoplist">商品管理</el-menu-item>
    <el-menu-item index="/ceshi">测试页面</el-menu-item>
  </el-menu>
</template>

<script>
export default {};
</script>

<style scoped>
.el-menu .el-menu-item {
  height: 50px;
  line-height: 50px;
  color: #666;
}

.el-menu .el-menu-item:nth-child(1) {
  text-align: left;
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: rgba(249, 249, 249, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(233, 233, 233, 1);
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size: 14px;
  color: #999;
}

.el-menu .el-menu-item.is-active {
  background-color: #f0f6ff;
  color: #409eff;
}

.el-menu .el-menu-item.is-active::after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: #409eff;
  top: 0px;
  left: 137px;
}
</style>
