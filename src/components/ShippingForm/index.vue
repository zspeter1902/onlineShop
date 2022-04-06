<template>
  <el-form ref="shippingForm" :model="formData" label-position="top" class="shipping-form">
    <el-form-item prop="country" label="Country/region">
      <el-select v-model="formData.country" placeholder="">
        <el-option
          v-for="item in countryList"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        />
      </el-select>
    </el-form-item>
    <el-form-item prop="province" label="Province">
      <el-select v-model="formData.province" placeholder="">
        <el-option
          v-for="item in stateList"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        />
      </el-select>
    </el-form-item>
    <el-form-item prop="zip" label="Postal/Zip Code">
      <el-input v-model="formData.zip" autocapitalize="characters" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="no-border btn-calc w-full font-medium" @click="onSubmit('shippingForm')">
        Calculate shipping rates
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
        country: 'AF',
        province: 'AL',
        zip: ''
      },
      countryList: [
        {
          code: 'AF',
          name: 'Afghanistan'
        },
        {
          code: 'AX',
          name: 'Åland Islands'
        }
      ],
      stateList: [
        {
          code: 'AL',
          name: 'Alabama'
        },
        {
          code: 'AK',
          name: 'Alaska'
        }
      ]
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
.shipping-form {
  .el-form-item {
    margin-bottom: 24px;
  }
  .el-select {
    width: 100%;
  }
  ::v-deep {
    .el-form-item__label {
      font-size: 16px;
      color: $mainColor;
      line-height: 24px;
    }
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
    margin-top: 10px;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
  .btn-calc {
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
