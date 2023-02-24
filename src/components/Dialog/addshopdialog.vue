<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="display: inline-block; padding: 0 10px 0 0">
    <div>
      <el-dialog v-model="addshop" title="添加商品">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="商品采集信息折叠" name="1">
            1111111111111
          </el-collapse-item>
        </el-collapse>
      </el-dialog>
    </div>

    <el-button type="primary" style="padding: 8px 10px" @click="addshop = true">
      <el-icon class="el-icon--left">
        <Plus />
      </el-icon>
      <span>添加商品</span>
    </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        addshop: false,
      };
    },
  };
</script>

<style lang="less" scoped>
  :deep(.el-dialog__header) {
    background-color: #f5f5f5;
    margin-right: 0;
    padding: 15px 20px;
    border-radius: 2px 2px 0 0;

    .el-dialog__title {
      font-size: 14px;
      font-weight: 700;
      color: #666;
    }

    .el-dialog__headerbtn {
      margin-top: -3px;
    }
  }
</style>
