<template>
  <div>
    <el-form ref="form" class="info-form" :model="form" :rules="rules" label-width="100px" :label-position="mobile ? 'top' : 'right'">
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col :sm="12" :xs="24">
          <el-form-item label="选择类别" prop="categoryP">
            <el-select v-model="form.categoryP" placeholder="请选择" @change="onSelectChange">
              <el-option
                v-for="item in options"
                :key="item.menuId"
                :label="item.name"
                :value="item.menuId"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-form-item label="选择子类别" prop="categoryC">
            <el-select v-model="form.categoryC" value-key="menuId" placeholder="请选择" @change="onSelectChangeType">
              <el-option
                v-for="item in childList"
                :key="item.menuId"
                :label="item.name"
                :value="item.menuId"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-form-item label="关键字">
            <el-input v-model="form.title" placeholder="请填入" />
            <!-- <el-select v-model="form.areaType" value-key="menuId" placeholder="请选择">
              <el-option
                v-for="item in childList"
                :key="item.menuId"
                :label="item.name"
                :value="item.menuId"
              />
            </el-select> -->
          </el-form-item>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-form-item label="产品名称" prop="title">
            <el-input v-model="form.title" placeholder="请填入" />
          </el-form-item>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-form-item label="对接平台">
            <el-input v-model="form.platform" placeholder="请填入" />
          </el-form-item>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-form-item label="产品价格" prop="feature">
            <el-input v-model="form.price" placeholder="请填入" />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :xs="24">
          <el-form-item ref="images" label="企业LOGO" prop="images">
            <el-upload
              action="images"
              :show-file-list="false"
              :auto-upload="true"
              accept="image/png, image/jpeg"
              class="uploader"
              :before-upload="beforeUpload"
              :headers="headers"
              :http-request="onUpload"
            >
              <div v-if="!form.images" class="upload-preview">
                <i class="el-icon-plus uploader-icon" />
              </div>
              <div v-else>
                <el-image class="el-upload-list__item-thumbnail" :src="form.images" fit="contain" />
              </div>
            </el-upload>
          </el-form-item>
        </el-col>
        <!-- <el-col :sm="12" :xs="24">
          <el-form-item label="来源地" prop="feature">
            <el-input v-model="form.feature" placeholder="请填入" />
          </el-form-item>
        </el-col>
        <el-col :sm="12" :xs="24">
          <el-form-item label="目的地" prop="feature">
            <el-input v-model="form.feature" placeholder="请填入" />
          </el-form-item>
        </el-col> -->
        <el-col :sm="24" :xs="24">
          <el-form-item label="产品特色" prop="feature">
            <el-input v-model="form.feature" placeholder="请填入" />
          </el-form-item>
        </el-col>

        <el-col :sm="24" :xs="24">
          <el-form-item label="产品简介" prop="synopsis">
            <el-input v-model="form.synopsis" placeholder="请填入简介" type="textarea" :rows="6" maxlength="300" show-word-limit />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :xs="24">
          <el-form-item label="产品内容" prop="info">
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item class="text-center">
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getDictList, uploadFile } from '@/api/global'
import { getToken } from '@/utils/auth'
import { addProduct } from '@/api/company'

export default {
  name: 'ProductRelease',
  data() {
    return {
      headers: {
        token: getToken()
      },
      form: {
        type: '1', // 1产品 2需求
        categoryP: '',
        categoryC: '',
        title: '',
        feature: '',
        synopsis: '',
        images: '',
        info: ''
      },
      rules: {
        categoryP: [{ required: true, message: '请选择产品分类', trigger: 'change' }],
        categoryC: [{ required: true, message: '请选择产品子分类', trigger: 'change' }],
        title: [
          { required: true, message: '请填入产品名称！', trigger: 'blur' },
          { max: 25, message: '25个字符以内！', trigger: ['change', 'blur'] }
        ],
        feature: [{ required: true, message: '请填入产品特色！', trigger: 'blur' }],
        info: [
          { required: true, message: '请填入企业简介！', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    mobile({ $store }) {
      return $store.getters.device === 'mobile'
    },
    options({ $store }) {
      const list = $store.getters.navList.filter(item => ['功能服务'].includes(item.name))
      return list[0].list
    },
    childList({ form, options }) {
      const currentId = form.categoryP
      const currentItem = options.filter(item => item.menuId === currentId)
      return currentItem[0]?.list
    }
  },
  methods: {
    onSelectChange() {
      this.$set(this.form, 'categoryC', {})
      this.$refs.form.clearValidate()
    },
    onSelectChangeType() {
      // this.getProductType()
    },
    getProductType() {
      const type = this.from.categoryC
      getDictList(type).then(res => {

      })
    },
    onUpload(res) {
      const form = new FormData()
      form.append('file', res.file)
      uploadFile('test', form).then(result => {
        this.$set(this.form, res.action, result.url)
        this.$message.success('上传成功！')
        this.$refs[res.action].clearValidate()
      })
    },
    beforeUpload(file) {
      const isIMG = ['image/jpeg', 'image/png'].includes(file.type)
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isIMG) {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isIMG && isLt2M
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addProduct(this.form).then(res => {
            this.$message.success('创建成功！')
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';
.info-form {
  width: 92%;
  padding: 20px 0;
  .no-margin {
    .el-form-item{
      margin-bottom: 0;
    }
  }
  .el-select,
  .el-cascader {
    width: 100%;
  }
  .el-button {
    width: 180px;
    margin-top: 20px;
  }
  ::v-deep {
    .el-form-item__label{
      font-weight: normal;
    }
    .el-input{
      font-size: 14px;
      &__inner{
        border-radius: 2px;
        color: #666;
        vertical-align: middle;
        &::placeholder {
          color: rgba(0, 0, 0, 0.25);
        }
      }
    }
    .el-upload {
      position: relative;
      width: 96px;
      height: 96px;
      border: 1px dashed rgba(0,0,0,0.25);
      border-radius: 2px;
      line-height: 94px;
      overflow: hidden;
      vertical-align: top;
      &:hover {
        border-color: $mainColor;
      }
      .uploader-icon {
        font-size: 20px;
      }
      .el-upload-list__item-thumbnail{
        width: 94px;
        height: 94px;
      }
    }
  }
}

@media only screen and (max-width:1199px){
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
  .info-form {
    width: 100%;
    padding: 10px 0;
  }
}
</style>
