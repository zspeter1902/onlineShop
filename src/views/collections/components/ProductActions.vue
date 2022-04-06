<template>
  <div class="product-actions">
    <el-row type="flex" class="flex-wrap border-bottom product-actions-actions">
      <!-- compare 对比 -->
      <el-link :underline="false" class="no-hover"><svg-icon icon-class="compare" class-name="svg- el-icon--left" />Compare</el-link>
      <!-- question 提问 -->
      <el-link :underline="false" class="no-hover" @click="questionVisible = true"><svg-icon icon-class="question" class-name="svg-20 el-icon--left" />Ask a question</el-link>
      <!-- share 分享 -->
      <el-link :underline="false" class="no-hover" @click="shareVisible = true"><svg-icon icon-class="share" class-name="svg-14 el-icon--left" />Share</el-link>
    </el-row>
    <!-- 提问弹窗 -->
    <el-dialog title="" append-to-body :visible.sync="questionVisible" custom-class="max-width-500" center>
      <h3 class="text-center question-title">Ask a Question</h3>
      <el-form ref="questionForm" :model="formData" :rules="questionRules" label-position="top" class="question-form">
        <!-- name -->
        <el-form-item prop="name">
          <el-input v-model="formData.name" placeholder="Your Name*" />
        </el-form-item>
        <!-- phone -->
        <el-form-item>
          <el-input v-model="formData.phone" placeholder="Your Phone Number" />
        </el-form-item>
        <!-- email -->
        <el-form-item prop="email">
          <el-input v-model="formData.email" placeholder="Your Email*" />
        </el-form-item>
        <!-- message -->
        <el-form-item prop="message">
          <el-input v-model="formData.message" type="textarea" :rows="4" placeholder="Your Message*" />
        </el-form-item>
        <!-- 提示 -->
        <div class="question-tip">* Required fields</div>
        <!-- 按钮 -->
        <el-form-item class="text-center">
          <el-button type="primary" class="btn-submit font-medium" @click="onSubmit('questionForm')">
            Submit Now
          </el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
    <!-- 分享弹窗 -->
    <el-dialog title="" append-to-body :visible.sync="shareVisible" custom-class="max-width-500">
      <el-form ref="shareForm" :model="shareFormData" label-position="top" class="share-form" @submit.native.prevent>
        <!-- name -->
        <el-form-item label="Copy link">
          <el-input v-model="shareFormData.url" placeholder="" />
        </el-form-item>
        <!-- Share -->
        <el-form-item label="Share:" class="share-form-item">
          <el-row>
            <el-link :underline="false" :href="`https://www.facebook.com/sharer/sharer.php?u=${shareFormData.url}`">
              <svg-icon icon-class="facebook" class-name="svg-16" />
            </el-link>
            <el-link :underline="false" :href="`https://pinterest.com/pin/create/button/?url=${shareFormData.url}`">
              <svg-icon icon-class="pinterest" class-name="svg-16" />
            </el-link>
            <el-link :underline="false" :href="`https://twitter.com/intent/tweet?url=${shareFormData.url}`">
              <svg-icon icon-class="twitter" class-name="svg-16" />
            </el-link>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // 定义属性
  data() {
    return {
      questionVisible: false,
      shareVisible: false,
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      shareFormData: {
        url: 'https://mynamecustom.com/products/custom-unisex-black-royal-white-authentic-baseball-jacket'
      },
      questionRules: {
        name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
        message: [{ required: true, message: 'Please enter your message', trigger: 'blur' }],
        email: [
          { required: true, message: 'Please enter your email', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email', trigger: ['blur', 'change'] }
        ]
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.product-actions {
  padding-top: 16px;
  &-actions {
    padding-bottom: 16px;
    .el-link { margin-right: 30px; }
  }
}
.question-title {
  margin-top: -25px;
  margin-bottom: 30px;
  font-size: 36px;
  line-height: 40px;
  color: $mainColor;
}
.question-form {
  padding: 0 12px;
  .el-form-item {
    margin-bottom: 15px;
  }
  .question-tip {
    margin-bottom: 12px;
    line-height: 24px;
    font-size: 16px;
    font-style: italic;
  }
  .btn-submit {
    padding-left: 32px;
    padding-right: 32px;
    line-height: 18px;
  }
  ::v-deep {
    .el-input__inner {
      height: 44px;
      line-height: 44px;
      color: $mainColor;
      // border-color: $mainColor;
    }
  }
}
.share-form {
  margin-top: -38px;
  padding: 0 12px;
  .el-form-item {
    margin-bottom: 15px;
  }
  .el-link {
    width: 24px;
    margin-right: 16px;
  }
  .share-form-item {
    ::v-deep {
      .el-form-item__content {
        line-height: 16px;
      }
    }
  }
  ::v-deep {
    .el-form-item__label {
      font-weight: 500;
      color: $mainColor;
      font-size: 16px;
      line-height: 32px;
    }
    .el-input__inner {
      height: 44px;
      line-height: 44px;
      color: $mainColor;
      // border-color: $mainColor;
    }
  }
}
</style>
