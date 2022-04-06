<template>
  <div class="contact">
    <div class="page-position text-center">
      <global-title name="Contact Us" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="contact-container container-fluid">
      <el-col :lg="18">
        <el-row type="flex" class="flex-wrap flex-sm-and-xs-wrap-reverse">
          <el-col :lg="16" class="contact-form">
            <h3 class="font-medium">We would love to hear from you.</h3>
            <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
            <el-form ref="form" :model="formData" :rules="rules">
              <el-row type="flex" class="flex-wrap contact-form-content" :gutter="16">
                <el-col :sm="12">
                  <el-form-item prop="name">
                    <el-input
                      v-model="formData.name"
                      placeholder="Name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :sm="12">
                  <el-form-item prop="email">
                    <el-input
                      v-model="formData.email"
                      placeholder="Email"
                    />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item prop="message">
                <el-input
                  v-model="formData.message"
                  type="textarea"
                  rows="8"
                  placeholder="Message"
                />
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="formData.check">
                  Save my name, email, and website in this browser for the next time I comment.
                </el-checkbox>
              </el-form-item>
              <el-button type="primary" class="font" @click="onSubmit('form')">Submit Now</el-button>
            </el-form>
          </el-col>
          <el-col :lg="8">
            <el-row type="flex" class="flex-wrap contact-info" :gutter="32">
              <el-col :sm="6" :lg="24">
                <h3 class="font-medium">Address</h3>
                <p>Maker Space No. 1, Cross-border E-commerce Industrial Park, Comprehensive Bonded Zone, Maanshan, Anhui, China</p>
              </el-col>
              <el-col :sm="6" :lg="24">
                <h3 class="font-medium">Information</h3>
                <p>service@mynamecustom.com</p>
              </el-col>
              <el-col :sm="6" :lg="24">
                <h3 class="font-medium">Social Media</h3>
                <el-row type="flex">
                  <el-link :underline="false" href="https://www.facebook.com/Mynamecustomstore/?ref=pages_you_manage" target="_blank" class="no-hover">
                    <svg-icon icon-class="facebook" class-name="svg-16" />
                  </el-link>
                  <el-link :underline="false" href="https://www.instagram.com/mynamecustom_official/" target="_blank" class="no-hover">
                    <svg-icon icon-class="instagram" class-name="svg-16" />
                  </el-link>
                </el-row>
              </el-col>
              <el-col :sm="6" :lg="24">
                <h3 class="font-medium">We're Open</h3>
                <p>Our store has re-opened for shopping, exchanges</p>
                <p>Every day 11am to 7pm</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'Contact',
  components: { Breadcrumb, globalTitle },
  // 定义属性
  data() {
    return {
      content: '',
      formData: {},
      rules: {
        name: [
          { required: true, message: 'Please enter your name', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please enter your email', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email', trigger: ['blur', 'change'] }
        ],
        message: [
          { required: true, message: 'Please enter your message', trigger: 'blur' }
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
.contact {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  &-container {
    padding-top: 28px;
    padding-bottom: 28px;
    line-height: 28px;
    p {
      color: $grayLinkColor;
    }
    ::v-deep {
      .el-form-item {
        margin-bottom: 16px;
      }
      .el-input {
        .el-input__inner {
          height: 46px;
          line-height: 46px;
          font-size: 16px;
          color: $grayLinkColor;
          &:focus {
            border-color: $mainColor;
          }
        }
      }
      .el-textarea {
        .el-textarea__inner {
          padding: 8px 12px;
          font-size: 16px;
          &:focus {
            border-color: $mainColor;
          }
        }
      }
      .el-checkbox__inner {
        width: 18px;
        height: 18px;
        border-color: $mainColor;
        &::after {
          left: 5px;
          width: 4px;
          height: 8px;
          border-width: 2px;
        }
      }
      .el-checkbox__label {
        color: $mainColor;
        font-size: 16px;
        font-weight: normal;
      }
      .el-button {
        margin-top: 6px;
        padding: 14px 32px;
      }
    }
  }
  &-form {
    p {
      margin: 8px 0;
    }
  }
  &-form-content {
    h3 {
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 32px;
    }
  }
  .contact-info {
    margin-bottom: 28px;
    .el-col {
      margin-bottom: 28px;
    }
    .el-link {
      margin-right: 16px;
    }
    h3 {
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 28px;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .contact {
    &-container {
      padding-top: 60px;
      padding-bottom: 60px;
      .contact-form {
        padding-right: 96px;
      }
    }
  }
}
@media only screen and (max-width: 1279px) {
  .flex-sm-and-xs-wrap-reverse {
    flex-wrap: wrap-reverse;
  }
}
@media only screen and (max-width: 1023px) {
  .contact {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
      .title {
        ::v-deep {
          h4 {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
