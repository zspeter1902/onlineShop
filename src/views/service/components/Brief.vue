<template>
  <div class="service-detail">
    <el-row type="flex" justify="center" class="flex-wrap">
      <div class="pics">
        <el-image class="logo flex-fixed" :src="info.images" fit="contain" />
        <el-row type="flex" align="middle" justify="space-between" class="collect">
          <el-link :underline="false" class="btn-collect" @click="onCollect(info.id)"><i class="el-icon-star-off el-icon--left" />产品收藏</el-link>
          <span class="hits">浏览 {{ info.hits }} 次</span>
        </el-row>
      </div>
      <div class="flex-auto column-info-box">
        <h4 class="name">{{ info.title }}</h4>
        <el-row type="flex" align="middle" class="column-info">
          <span class="label flex-fixed text-right">价格：</span>
          <p class="value">{{ info.price }}</p>
        </el-row>
        <el-row type="flex" align="middle" class="column-info">
          <span class="label flex-fixed text-right">平台入驻：</span>
          <p class="value">{{ info.platform }}</p>
        </el-row>
        <el-row type="flex" align="middle" class="column-info">
          <span class="label flex-fixed text-right">配套服务：</span>
          <p class="value">{{ info.have_service }}</p>
        </el-row>
        <el-row type="flex" align="middle" class="column-info">
          <span class="label flex-fixed text-right">产品特色：</span>
          <p class="value">{{ info.feature }}</p>
        </el-row>
        <el-row type="flex" align="middle" class="column-info">
          <span class="label flex-fixed text-right">产品提供商：</span>
          <p class="value">
            <el-link type="primary" @click="onLink(info.company_id)">{{ info.createBy }}</el-link>
          </p>
        </el-row>
        <div class="column-info">
          <el-button type="primary" size="small" class="btn" @click="openDialog">立即咨询</el-button>

        </div>
      </div>
    </el-row>
    <el-dialog title="您的联系方式将推送给专业客户经理会提供一对一服务" :visible.sync="visible" center>
      <el-form ref="form" :model="formData" :rules="rules" label-width="80px" class="submit-form">
        <!-- 预订信息 -->
        <el-form-item label="企业名称" prop="company_name">
          <el-input v-model="formData.company_name" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="您的姓名" prop="contact_name">
          <el-input v-model="formData.contact_name" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="您的电话" prop="contact_phone">
          <el-input v-model.number="formData.contact_phone" placeholder="请输入" />
        </el-form-item>

        <el-form-item label="您的邮箱" prop="contact_email">
          <el-input v-model="formData.contact_email" placeholder="请输入" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="info" class="btn" @click="closeDialog">取消</el-button>
        <el-button type="primary" class="btn" @click="onSubmit('form')">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { isValidPhone } from '@/utils/validate'
export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!isValidPhone(value)) {
        callback(new Error('请输入正确的手机号！'))
      } else {
        callback()
      }
    }
    return {
      visible: false,
      formData: {
        company_name: '',
        contact_name: '',
        contact_phone: '',
        contact_email: ''
      },
      rules: {
        company_name: [
          { required: true, trigger: 'blur', message: '请输入企业名称' }
        ],
        contact_name: [
          { required: true, trigger: 'blur', message: '请输入您的姓名' }
        ],
        contact_phone: [{ required: true, trigger: 'blur', validator: validatePhone }],
        contact_email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    openDialog() {
      this.visible = true
    },
    closeDialog() {
      this.visible = false
    },
    isShowDialog() {
      return this.visible
    },
    onLink(id) {
      this.$router.push(`/company/${id}`)
    },
    onCollect(id) {

    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message('submit!')
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
@import "~@/styles/variables";
.service-detail {
  .pics {
    margin-right: 30px;
  }
  .logo {
    width: 320px;
    height: 320px;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #e5e5e5;
    margin-bottom: 10px;
  }
  .name {
    padding-bottom: 10px;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: $mainColor;
  }
  .column-info {
    padding: 8px 24px;
    font-size: 16px;
    line-height: 24px;
    &:first-of-type {
      background: linear-gradient(227.73deg,rgba(255,104,149,.1) -5.24%,rgba(255,132,63,.1));
      .value {
        color: $redColor
      }
    }
    .label {
      width: 96px;
      margin-right: 6px;
      color: #999;
    }
    .el-button {
      width: 200px;
      line-height: 24px;
      line-height: 20px;
    }
    .el-link {
      font-size: 16px;
      line-height: 1;
    }
    .btn {
      margin-top: 20px;
    }
  }
}
.submit-form {
  max-width: 470px;
  width: 100%;
  margin: 0 auto;
  ::v-deep {
    .el-form-item__label {
      font-weight: normal;
    }
    .el-form-item__content {
      padding-left: 12px;
    }
    .el-form-item:last-of-type {
      margin-bottom: 0;
    }
  }
}
.btn {
  min-width: 100px;
}
.btn-collect {
  i {
    color: $mainColor;
  }
}
.hits {
  color: #666;
}
::v-deep {
  .el-dialog {
    max-width: 750px;
    &__header {
      padding-left: 40px;
      padding-right: 40px;
      background-color: $mainColorHover;
    }
    &__title {
      color: #fff;
      letter-spacing: 1px;
    }
    &__headerbtn {
      font-size: 20px;
      top: 18px;
      .el-dialog__close {
        color: #fff;
      }
    }
  }
}
@media only screen and (max-width: 1199px) {
}
@media only screen and (max-width: 991px) {
  .service-detail {
    .logo {
      width: 280px;
      height: 280px;
    }
    .name {
      margin-bottom: 0px;
      font-size: 18px;
      line-height: 28px;
    }
    .column-info {
      padding: 8px 20px;
      font-size: 14px;
      .label {
        width: 84px;
        margin-right: 6px;
      }
      .el-button {
        width: 180px;
      }
      .el-link {
        font-size: 14px;
      }
      .btn {
        margin-top: 10px;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .service-detail {
    .pics {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .logo {
      width: 200px;
      height: 200px;
      padding: 30px;
      margin-bottom: 10px;
    }
    .name {
      padding-bottom: 5px;
    }
    .column-info-box {
      padding: 0 16px;
    }
    .column-info {
      padding: 6px 16px;
      .label {
        width: auto;
      }
    }
  }
  .submit-form {
    ::v-deep {
      .el-form-item__content {
        padding-left: 0px;
      }
    }
  }
}
</style>
