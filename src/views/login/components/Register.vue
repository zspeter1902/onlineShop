<template>
  <div class="register">
    <el-form ref="registerForm" :model="formData" :rules="loginRules" class="register-form" auto-complete="on" :label-width="mobile ? '80px' : '90px'" label-position="left">
      <div class="title-container">
        <h3 class="title">用户注册</h3>
      </div>
      <div class="bg">
        <!-- 手机注册 -->
        <el-form-item label="用 户 名" prop="username">
          <el-input
            v-model="formData.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            @change="checkUser('userName', $event)"
          />
        </el-form-item>
        <!-- v-show="isPhone" -->
        <el-form-item label="登录手机" prop="mobile">
          <el-input
            ref="phone"
            v-model="formData.mobile"
            placeholder="请输入11位数的手机号"
            name="mobile"
            type="text"
            tabindex="1"
            auto-complete="on"
            @change="checkUser('mobile', $event)"
          />
        </el-form-item>
        <!-- 邮箱注册 -->
        <el-form-item v-show="!isPhone" label="登录邮箱" prop="email">
          <el-input
            ref="email"
            v-model="formData.email"
            placeholder="请输入邮箱"
            name="email"
            type="text"
            tabindex="1"
            auto-complete="on"
            @change="checkUser('email', $event)"
          />
        </el-form-item>

        <el-form-item label="设置密码" prop="password">
          <el-input
            ref="password"
            v-model="formData.password"
            type="password"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
          />
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="rePassword">
          <el-input
            ref="rePassword"
            v-model="formData.rePassword"
            type="password"
            placeholder="确认密码"
            name="rePassword"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item> -->
        <el-form-item v-show="!isPhone" label="验 证 码" prop="emailCode">
          <el-row type="flex" justify="space-between" class="flex-wrap">
            <el-button class="btn" size="small" type="primary" @click="getCode">获取邮箱验证码</el-button>
            <el-input
              v-model="formData.emailCode"
              type="text"
              placeholder="输入验证码"
              name="emailCode"
              tabindex="3"
              style="flex: 1; min-width: 100px"
            />
          </el-row>
        </el-form-item>
        <el-form-item v-show="isPhone" label="验 证 码" prop="mobileCode">
          <el-row type="flex" justify="space-between" class="flex-wrap">
            <el-button class="btn" size="small" type="primary" @click="getCode">获取短信验证码</el-button>
            <el-input
              v-model="formData.mobileCode"
              type="text"
              placeholder="输入验证码"
              name="mobileCode"
              tabindex="3"
              style="flex: 1; min-width: 100px"
            />
          </el-row>
        </el-form-item>

        <el-button :loading="loading" type="primary" class="submit" @click.native.prevent="handleLogin">立即注册</el-button>
        <el-row type="flex" justify="center">
          <el-checkbox v-model="checked" tabindex="4"><el-link class="link" :underline="false" type="danger" @click.prevent="openDialog">请阅读并同意《跨境汇用户服务协议》</el-link></el-checkbox>
        </el-row>
        <el-row type="flex" justify="end">
          <!-- <el-link @click="onToggleReg">{{ isPhone ? '邮箱注册' : '手机注册' }}</el-link> -->
          <el-link class="btn-link" @click="onToggle">立即登录</el-link>
        </el-row>
      </div>
    </el-form>
  </div>

</template>

<script>
import { isValidPhone, isValidPassword } from '@/utils/validate'
import ResizeMixin from '@/layout/mixin/ResizeHandler'
import { checkUser, getEmailCaptcha, register } from '@/api/user'
export default {
  mixins: [ResizeMixin],
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!isValidPhone(value)) {
        callback(new Error('请输入正确的手机号！'))
      } else {
        callback()
      }
    }

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8 || value.length > 20) {
        callback(new Error('密码长度在8到20之间'))
      } else if (!isValidPassword(value)) {
        callback(new Error('含数字、大小写字母、特殊符号'))
      } else {
        // if (this.formData.rePassword !== '') {
        //   this.$refs.registerForm.validateField('rePassword')
        // }
        callback()
      }
    }
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'))
    //   } else if (value !== this.formData.password) {
    //     callback(new Error('两次输入密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      checked: false,
      isPhone: false,
      formData: {
        mobile: '',
        email: '',
        username: '',
        password: '',
        emailCode: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        mobile: [{ required: true, trigger: 'blur', validator: validatePhone }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }],
        // rePassword: [{ required: true, trigger: 'blur', validator: validatePass2 }],
        emailCode: [{ required: true, trigger: 'blur', message: '验证码不能为空' }]
      },
      isRepeatUser: false,
      loading: false
    }
  },
  computed: {
    device({ $store }) {
      return $store.state.app.device
    },
    mobile() {
      return this.device === 'mobile'
    }
  },
  methods: {
    onToggle() {
      this.$emit('toggle')
    },
    openDialog() {
      this.$emit('dialog')
    },
    onToggleReg() {
      this.isPhone = !this.isPhone
    },
    checkUser(name, value) {
      if (!value) return
      checkUser({
        type: name,
        count: value
      }).then(res => {
        console.log(res)
        if (res.code !== 0) {
          if (!this.isRepeatUser) {
            this.isRepeatUser = true
          }
          this.$message.warning(res.msg)
        }
      }).catch(() => {
        if (name === 'mobile') {
          this.$set(this.formData, name, '')
        }
      })
    },
    async getCode() {
      const form = this.formData
      if (this.isPhone) { // 获取手机号验证码

      } else { // 获取邮箱验证码
        getEmailCaptcha({
          title: '跨境汇-注册保护验证',
          emailAddr: form.email
        }).then(res => {
          this.$message.success('已发送验证码至您的邮箱！')
        }).catch(err => {
          this.$message.error(err || '获取验证码失败！')
        })
      }
    },
    handleLogin() {
      this.$refs.registerForm.validate(valid => {
        if (!this.checked) {
          this.$message({
            showClose: true,
            message: '请阅读并同意《跨境汇用户服务协议》'
          })
          return
        }
        if (valid) {
          this.loading = true
          register(this.formData).then(() => {
            this.$message({
              message: '注册成功!',
              type: 'success',
              onClose: () => {
                this.onToggle()
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
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#fff;
$light_gray:#fff;
$dark_gray:#333;
$cursor: #283443;

.flex-wrap {
  flex-wrap: wrap;
}

.register-form {
  position: relative;
  max-width: 440px;
  width: 90%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
}

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.el-input {
  display: inline-block;
  height: 36px;
  width: 100%;
  ::v-deep {
    input {
      border: 0px;
      -webkit-appearance: none;
      color: $dark_gray;
      height: 36px;
      line-height: 36px;
      caret-color: $cursor;
      vertical-align: top;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}
.btn {
  height: 36px;
  margin-right: 10px;
}
.btn-link {
  margin-top: 20px;
  font-size: 16px;
  color: $dark_gray;
}
.link {
  color: red;
  vertical-align: top;
}
.submit {
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
}
.register {
  width: 100%;
}
</style>
