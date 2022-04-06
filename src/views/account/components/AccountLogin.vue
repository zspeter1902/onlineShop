<template>
  <div class="login-container">
    <div v-if="headTitle" class="form-title">
      <h3 class="font-medium">Log In</h3>
    </div>
    <el-form
      ref="loginForm"
      :model="formData"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
    >
      <div class="bg">
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="formData.username"
            placeholder="Email"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            ref="password"
            v-model="formData.password"
            type="password"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <el-form-item>
          <div>
            <el-link class="no-hover">Forgot your password?</el-link>
          </div>
          <el-button
            :loading="loading"
            type="primary"
            class="submit"
            @click.native.prevent="handleLogin"
          >Sign In</el-button>
        </el-form-item>

      </div>

    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    headTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入帐号' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' },
          { min: 8, max: 20, message: '长度为8到20位' }
        ]
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.formData)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #e8f2fe;
$dark_gray: #374151;
$cursor: #374151;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.el-input {
  height: 46px;
  font-size: 16px;
  ::v-deep {
    .el-input__inner {
      border-radius: 4px;
      color: $dark_gray;
      height: 46px;
      padding: 6px 12px;
      caret-color: $cursor;
      border-color: #dedede;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}
.form-title {
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    line-height: 32px;
  }
}
.login-form {
  position: relative;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  .el-form-item {
    margin-top: 5px;
    margin-bottom: 15px;
  }
}

.el-link {
  margin: 12px 0;
  font-size: 16px;
  line-height: 24px;
  &::after {
    margin-bottom: 4px;
  }
}
.submit {
  width: 100%;
  padding: 14px 20px;
  font-size: 16px;
  margin: 16px 0;
}
@media only screen and (max-width: 767px) {
  .form-title {
    margin-bottom: 0;
  }
}
</style>
