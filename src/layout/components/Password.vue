<template>
  <el-dialog title="修改密码" :visible.sync="visible">
    <el-form ref="form" :model="formData" :rules="rules" label-width="80px" class="submit-form">
      <!-- 预订信息 -->
      <el-form-item label="旧密码" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="请输入旧密码" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="formData.newPassword" show-password placeholder="请输入新密码" />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button type="info" class="btn" @click="closeDialog">取消</el-button>
      <el-button type="primary" class="btn" @click="onSubmit('form')">提交</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { isValidPassword } from '@/utils/validate'
import { changePassword } from '@/api/user'
export default {
  components: {
  },
  // 定义属性
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else if (value.length < 8 || value.length > 20) {
        callback(new Error('密码长度在8到20之间'))
      } else if (!isValidPassword(value)) {
        callback(new Error('含数字、大小写字母、特殊符号'))
      } else {
        if (this.formData.password === this.formData.newPassword) {
          callback(new Error('新密码不能与旧密码相同!'))
        }
        callback()
      }
    }
    return {
      visible: false,
      formData: {
        password: '',
        newPassword: ''
      },
      rules: {
        password: [{ required: true, trigger: 'blur', message: '请输入旧密码！' }],
        newPassword: [{ required: true, trigger: 'blur', validator: validatePass }]
      }
    }
  },
  // 方法集合
  methods: {
    openDialog() {
      this.visible = true
    },
    closeDialog() {
      this.visible = false
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          changePassword(this.formData).then(res => {
            this.$message({
              type: 'success',
              message: '密码修改成功！',
              onClose: () => {
                this.closeDialog()
              }
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
