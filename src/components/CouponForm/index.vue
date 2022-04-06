<template>
  <el-form ref="couponForm" :model="formData" class="coupon-form">
    <el-form-item prop="discount">
      <el-input v-model="formData.discount" placeholder="Enter discount code here" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="no-border btn-save w-full font-medium" @click="onSubmit('couponForm')">
        Save
      </el-button>
      <el-button type="text" class="btn-cancel w-full font-medium" @click="onCancel">
        Cancel
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      formData: {
        discount: ''
      }
    }
  },
  // 方法集合
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        // if (valid) {
        // }
      })
    },
    onCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.coupon-form {
  .el-form-item {
    margin-bottom: 10px;
  }
  ::v-deep {
    .el-input__inner {
      padding: 6px 12px;
      margin-top: 4px;
      line-height: 32px;
      font-size: 16px;
      color: #374151;
      border-color: #dedede;
    }
  }
  .el-button {
    font-size: 16px;
  }
  .el-button + .el-button {
    margin-left: 0;
    margin-top: 10px;
  }
  .btn-save {
    padding: 14px 20px;
    line-height: 18px;
  }
  .btn-cancel {
    padding: 0;
    line-height: 24px;
    border: none;
    &:hover, &:focus {
      text-decoration: underline;
      transform: translateY(-2px);
    }
  }
}
</style>
