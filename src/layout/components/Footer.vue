<template>
  <footer class="footer-container">
    <div class="footer-nav border-bottom">
      <div class="container-fluid">
        <el-row type="flex" :gutter="device === 'mobile' ? 0 : 64" class="flex-wrap hidden-xs-only">
          <el-col :sm="12" :md="12" :lg="5" tag="dl" class="border-right order-4">
            <dt>Subscribe</dt>
            <dd class="subscribe">
              <p class="">Any question:<br>service@mynamecustom.com</p>
            </dd>
            <dd>
              <el-form ref="form" :model="formData" :rules="rules" class="search-form">
                <el-form-item prop="email">
                  <el-input
                    v-model="formData.email"
                    placeholder="Enter your email"
                    @keyup.enter.native="onSubmit('form')"
                  >
                    <svg-icon slot="prefix" icon-class="message" class-name="svg-16" />
                    <el-button slot="suffix" plain class="no-border" @click="onSubmit('form')">
                      <svg-icon icon-class="arrow-right" class-name="svg-16" />
                    </el-button>
                  </el-input>
                </el-form-item>
              </el-form>
            </dd>
          </el-col>
          <el-col :sm="12" :md="12" :lg="5" tag="dl" class="border-right order-1">
            <dt>Information</dt>
            <dd v-for="news of infoList" :key="news.path">
              <router-link :to="news.path">
                {{ news.meta.title }}
              </router-link>
            </dd>
          </el-col>
          <el-col :sm="12" :md="12" :lg="5" tag="dl" class="border-right order-2">
            <dt>Quick links</dt>
            <dd v-for="news of quickList" :key="news.path">
              <router-link :to="news.path">
                {{ news.meta.title }}
              </router-link>
            </dd>
          </el-col>
          <el-col :sm="12" :md="12" :lg="9" tag="dl" class="border-right order-3">
            <dt>Our store</dt>
            <dd class="desc">
              <p>Personalized Gifts For     Life's Most Meaningful Moments <br> Make any occasion special with a personalized gift.</p>
              <p>You can find the perfect item for your recipient with MynameCustom.</p>
            </dd>
          </el-col>
        </el-row>
        <el-collapse class="hidden-sm-and-up">
          <el-collapse-item title="Subscribe" name="1">
            <div class="subscribe">
              <p class="">Any question:<br>service@mynamecustom.com</p>
            </div>
            <el-form ref="form" :model="formData" :rules="rules" class="search-form">
              <el-form-item prop="email">
                <el-input
                  v-model="formData.email"
                  placeholder="Enter your email"
                  @keyup.enter.native="onSubmit('form')"
                >
                  <svg-icon slot="prefix" icon-class="message" class-name="svg-16" />
                  <el-button slot="suffix" plain class="no-border" @click="onSubmit('form')">
                    <svg-icon icon-class="arrow-right" class-name="svg-16" />
                  </el-button>
                </el-input>
              </el-form-item>
            </el-form>
          </el-collapse-item>
          <el-collapse-item title="Information" name="2">
            <div v-for="news of infoList" :key="news.path" class="list">
              <router-link :to="news.path">
                {{ news.meta.title }}
              </router-link>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Quick links" name="3">
            <div v-for="news of quickList" :key="news.path" class="list">
              <router-link :to="news.path">
                {{ news.meta.title }}
              </router-link>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Our store" name="4">
            <div class="desc">
              <p>Personalized Gifts For     Life's Most Meaningful Moments <br> Make any occasion special with a personalized gift.</p>
              <p>You can find the perfect item for your recipient with MynameCustom.</p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="container-fluid copyright text-center">
      <p>© Mynamecustom.com 2019-2022</p>
    </div>
  </footer>
</template>

<script>
import InfoRouter from '@/router/modules/info'
import QuickRouter from '@/router/modules/quick'
export default {
  // 定义属性
  data() {
    return {
      icon: require('img/beian.png'),
      infoList: InfoRouter,
      quickList: QuickRouter,
      formData: {},
      rules: {
        email: [
          { required: true, message: 'Please enter your email', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {
    device({ $store }) {
      return $store.getters.device
    }
  },
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
@import '~@/styles/mixin';
.svg-16 {
  vertical-align: middle;
}
.el-button--default {
  color: $grayLinkColor;
}
.footer-container {
  background-color: $grayBgColor;
  color: $mainColor;
  .el-input {
    ::v-deep {
      .el-input__inner {
        height: 46px;
        line-height: 46px;
        border: none;
        color: $grayLinkColor;
      }
      .el-input__prefix {
        padding: 1px 15px 0;
        color: $grayLinkColor;
      }
    }
  }
  .el-button {
    padding: 15px 15px;
  }
  .el-input--prefix {
    ::v-deep {
       .el-input__inner {
          padding-left: 48px;
      }
    }
  }
  .el-input--suffix {
    ::v-deep {
      .el-input__inner {
          padding-right: 48px;
      }
    }
  }
  .footer-nav {
    dl {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    dt {
      margin-bottom: 16px;
      font-weight: 500;
      line-height: 24px;
    }
    dd {
      line-height: 32px;
      a {
        position: relative;
        display: inline-block;
        color: $grayLinkColor;
        line-height: 24px;
        vertical-align: middle;
        transition: all 3s;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background-color: $mainColor;
          transition: all .3s ease;
        }
      }
      &:hover {
        a {
          color: #000;
          &::after {
            width: 100%;
          }
        }
      }
    }
    ::v-deep {
      .desc {
        margin-top: 16px;
        line-height: 24px;
        color: #666;
      }
      .subscribe {
        padding: 8px;
        color: #666;
        line-height: 24px;
      }
      .el-form {
        margin-top: 15px;
      }
    }
  }
  .el-collapse {
    ::v-deep {
      .list {
        line-height: 32px;
        a {
          position: relative;
          display: inline-block;
          color: $grayLinkColor;
          line-height: 24px;
          vertical-align: middle;
          transition: all 3s;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: $mainColor;
            transition: all .3s ease;
          }
        }
        &:hover {
          a {
            color: #000;
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .copyright {
    padding-top: 20px;
    padding-bottom: 32px;
    line-height: 28px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 1023px) {
  .border-bottom {
    border-bottom: none;
  }
  .border-right {
    border-right: none;
  }
  .footer-container {
    .footer-nav {
      padding-top: 30px;
      dl {
        padding-top: 0px;
        padding-bottom: 30px;
      }
    }
  }

}
@media only screen and (min-width:768px){
  .order {
    &-1 { order: 1; }
    &-2 { order: 2; }
    &-3 { order: 3; }
    &-4 { order: 4; }
  }
}

</style>
