<template>
  <div class="register-container">
    <div v-if="headTitle" class="form-title">
      <h3 class="font-medium">Register</h3>
    </div>
    <el-form ref="registerForm" :model="formData" :rules="loginRules" class="register-form" auto-complete="on">
      <div class="bg">
        <!-- First Name -->
        <el-form-item prop="firstName">
          <el-input
            v-model="formData.firstName"
            placeholder="First Name"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>
        <!-- Last Name -->
        <el-form-item prop="lastName">
          <el-input
            v-model="formData.lastName"
            placeholder="Last Name"
            name="username"
            type="text"
            tabindex="2"
            auto-complete="on"
          />
        </el-form-item>
        <!-- 邮箱注册 -->
        <el-form-item prop="email">
          <el-input
            ref="email"
            v-model="formData.email"
            placeholder="Email"
            name="email"
            type="text"
            tabindex="3"
            auto-complete="on"
            @change="checkUser('email', $event)"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            ref="password"
            v-model="formData.password"
            type="password"
            placeholder="Password"
            name="password"
            tabindex="4"
            auto-complete="on"
          />
        </el-form-item>
        <div class="tips">
          Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
        </div>
        <el-button :loading="loading" type="primary" class="submit" @click.native.prevent="handleLogin">Register</el-button>
        <router-link class="el-button el-button--primary is-plain btn-link" to="/account/login">Log In</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import { isValidPassword } from '@/utils/validate'
import { checkUser, register } from '@/api/user'
export default {
  props: {
    headTitle: {
      type: Boolean,
      default: false
    }
  },
  // 定义属性
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('please enter a password'))
      } else if (value.length < 8 || value.length > 20) {
        callback(new Error('length between 8 and 8'))
      } else if (!isValidPassword(value)) {
        callback(new Error('Including numbers, upper and lower case letters and special symbols'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      loginRules: {
        firstName: [
          { required: true, message: 'please enter your first name', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'please enter your last name', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'please enter your e-mail address', trigger: 'blur' },
          { type: 'email', message: 'please enter the correct e-mail address', trigger: ['blur', 'change'] }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  // 方法集合
  methods: {
    checkUser(name, value) {
      if (!value) return
      checkUser({
        type: name,
        count: value
      }).then(res => {
        console.log(res)
        if (res.code !== 0) {
          this.$message.warning(res.msg)
        }
      }).catch(() => {
      })
    },
    handleLogin() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          register(this.formData).then(() => {
            this.$message({
              message: '注册成功!',
              type: 'success',
              onClose: () => {
              }
            })
            this.loading = false
          }).catch(() => {
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
@import '~@/styles/variables';
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#fff;
$dark_gray:#374151;
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
    input {
      border-radius: 4px;
      color: $dark_gray;
      height: 46px;
      padding: 6px 12px;
      caret-color: $cursor;
      border-color: #dedede;
      vertical-align: top;
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
.register-form {
  position: relative;
  padding: 0;
  overflow: hidden;
  .el-form-item {
    margin-top: 5px;
    margin-bottom: 15px;
  }
}
.tips {
  padding-top: 12px;
  color: $grayLinkColor;
  line-height: 24px;
  font-size: 16px;
}

.btn-link {
  width: 100%;
  margin-left: 0;
  font-size: 16px;
  padding: 14px 20px;
  overflow: hidden;
}
.submit {
  width: 100%;
  margin: 24px 0 12px;
  padding: 14px 20px;
  font-size: 16px;
}
@media only screen and (max-width: 767px) {
  .form-title {
    margin-bottom: 0;
  }
}
</style>
