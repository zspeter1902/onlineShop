<template>
  <div class="bg-white">
    <el-form ref="noteForm" :model="formData" class="note-form">
      <el-form-item prop="note">
        <el-input v-model="formData.note" type="textarea" rows="3" placeholder="Special instructions for seller" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="no-border btn-save w-full font-medium" @click="onSubmit('noteForm')">
          Save
        </el-button>
        <el-button type="text" class="btn-cancel w-full font-medium" @click="onCancel">
          Cancel
        </el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      formData: {
        note: ''
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
.note-form {
  .el-form-item {
    margin-bottom: 10px;
  }
  ::v-deep {
    .el-textarea__inner {
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
    margin-top: 10px;
  }
  .el-button + .el-button {
    margin-left: 0;
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
