<template>
  <div class="product-options-component">
    <el-form ref="productOptionForm" :model="formData" label-position="top" class="spec-form">
      <!-- 性别 -->
      <el-form-item prop="gender">
        <template slot="label">
          <span class="required font-bold">Gender</span>
          <span class="current">{{ Gender[formData.gender] }}</span>
        </template>
        <el-radio-group v-model="formData.gender" fill="#000" @change="onChangeGender">
          <el-radio-button v-for="(val, key) in Gender" :key="key" :label="key">{{ val }}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <!-- Size -->
      <el-form-item prop="size">
        <template slot="label">
          <span class="required font-bold">Size({{ Gender[formData.gender] }})</span>
          <el-link class="align-baseline" @click="dialogVisible = true">Size Chart</el-link>
          <span class="current">{{ Sizes[formData.size] }}</span>
        </template>
        <el-radio-group v-show="formData.gender === '1'" v-model="size.men" fill="#000" @change="onChangeSize">
          <template v-for="(val, key) in Sizes">
            <el-radio-button v-show="key > 5" :key="key" :label="key">{{ val }}</el-radio-button>
          </template>
        </el-radio-group>
        <el-radio-group v-show="formData.gender === '2'" v-model="size.women" fill="#000" @change="onChangeSize">
          <template v-for="(val, key) in Sizes">
            <el-radio-button v-show="key > 5 && key < 13" :key="key" :label="key">{{ val }}</el-radio-button>
          </template>
        </el-radio-group>
        <el-radio-group v-show="formData.gender === '3'" v-model="size.kid" fill="#000" @change="onChangeSize">
          <template v-for="(val, key) in Sizes">
            <el-radio-button v-show="key < 6" :key="key" :label="key">{{ val }}</el-radio-button>
          </template>
        </el-radio-group>
      </el-form-item>
      <!-- team name -->
      <el-form-item>
        <template slot="label">
          <span class="font-bold">👇🏻 Your Team Name 👇🏽(Printed Or Stitched)</span>
          <span v-show="formData.team_name" class="current">$7.99</span>
        </template>
        <el-input v-model="formData.team_name" placeholder="This Area Is Your Team Name" />
      </el-form-item>
      <!-- name -->
      <el-form-item>
        <template slot="label">
          <span class="font-bold">👇🏻 Your Name 👇🏽(Printed Or Stitched)</span>
          <span v-show="formData.name" class="current">$7.99</span>
        </template>
        <el-input v-model="formData.name" placeholder="This Area Is Your Name" />
      </el-form-item>
      <!-- number -->
      <el-form-item>
        <template slot="label">
          <span class="font-bold">👇🏻 Your Number 👇🏽(Printed Or Stitched)</span>
          <span v-show="formData.number" class="current">$7.99</span>
        </template>
        <el-input v-model="formData.number" placeholder="This Area Is Your Number" />
      </el-form-item>
      <!-- logo front -->
      <el-form-item>
        <template slot="label">
          <span class="font-bold">👇🏻 Upload Your Logo(Front) 👇🏽(Only Printed)</span>
          <span v-show="formData.is_front_logo" class="current">Yes | $8.99</span>
        </template>
        <!-- 是否上传 -->
        <el-checkbox v-model="formData.is_front_logo">Yes + $8.99</el-checkbox>
        <!-- 上传logo -->
        <p class="option-tip">If You Have a Logo(front), Please Confirm Uploaded</p>
        <el-upload
          v-show="formData.is_front_logo"
          action="wareImgUrl"
          list-type="picture-card"
          :auto-upload="true"
          :headers="headers"
          :limit="1"
          :disabled="formData.front_logo"
          :before-upload="beforeUpload"
          :http-request="onUploadFront"
          :on-remove="handleRemoveFront"
          :on-preview="handlePictureCardPreview"
        >
          <i class="el-icon-upload" />
        </el-upload>
      </el-form-item>
      <!-- logo left -->
      <el-form-item>
        <template slot="label">
          <span class="font-bold">👇🏻 Upload Your Logo(Left) 👇🏽(Only Printed)</span>
          <span v-show="formData.is_left_logo" class="current">Yes | $8.99</span>
        </template>
        <!-- 是否上传 -->
        <el-checkbox v-model="formData.is_left_logo">Yes + $8.99</el-checkbox>
        <!-- 上传logo -->
        <p class="option-tip">If You Have a Logo(Left), Please Confirm Uploaded</p>
        <el-upload
          v-show="formData.is_left_logo"
          action="wareImgUrl"
          list-type="picture-card"
          :auto-upload="true"
          :headers="headers"
          :limit="1"
          :disabled="formData.left_logo"
          :before-upload="beforeUpload"
          :http-request="onUpload"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
        >
          <i class="el-icon-upload" />
        </el-upload>
      </el-form-item>
      <!-- type -->
      <el-form-item prop="type">
        <template slot="label">
          <span class="required font-bold">Name & Number Type</span>
          <span v-show="formData.type" class="current">{{ formData.type }}</span>
        </template>
        <el-radio-group v-model="formData.type">
          <el-radio label="1">Printed</el-radio>
          <el-radio label="2">Stitched + $39.99</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-show="formData.type === '2'" class="price-addons">
        Selection will add <span class="addons-price">$8.99</span> to the price
      </div>
      <el-row type="flex" align="bottom" justify="space-between">
        <!-- quantity -->
        <el-form-item class="flex-fixed">
          <template slot="label">
            <span class="font-bold">Quantity</span>
          </template>
          <el-input-number v-model="formData.quantity" :min="1" :max="10" :step="1" step-strictly />
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="flex-auto">
          <el-button type="primary" plain class="btn-save w-full font-medium" @click="addToCart('productOptionForm')">
            Add to cart
          </el-button>
        </el-form-item>
      </el-row>

    </el-form>
    <!-- 尺寸参考弹窗 -->
    <el-dialog title="" append-to-body :visible.sync="dialogVisible" custom-class="size-dialog no-header">
      <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="dialogVisible = false"><i class="font-bold el-dialog__close el-icon el-icon-close" /></button>
      <el-image src="https://cdn.shopifycdn.net/s/files/1/0551/6233/9488/files/Size.jpg?v=1644834135" fit="cover" />
    </el-dialog>
    <!-- logo 弹窗 -->
    <el-image-viewer v-if="dialogVisibleLogo" :on-close="() => { dialogVisibleLogo = false}" :url-list="dialogImageUrl" />
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  components: {
    'elImageViewer': () => import('element-ui/packages/image/src/image-viewer.vue')
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  // 定义属性
  data() {
    return {
      dialogVisible: false,
      dialogVisibleLogo: false,
      headers: {
        token: getToken() || '' // getToken()
      },
      dialogImageUrl: [],
      formData: {
        id: null,
        gender: '1',
        size: '',
        team_name: '',
        name: '',
        number: '',
        left_logo: '',
        is_left_logo: '',
        is_front_logo: '',
        front_logo: '',
        type: '',
        quantity: null
      },
      Gender: {
        '1': 'Men\'s',
        '2': 'Women\'s',
        '3': 'Kid\'s'
      },
      size: {
        kid: '',
        women: '',
        men: ''
      },
      Sizes: {
        1: 120,
        2: 130,
        3: 140,
        4: 150,
        5: 160,
        6: 'S',
        7: 'M',
        8: 'L',
        9: 'XL',
        10: '2XL',
        11: '3XL',
        12: '4XL',
        13: '5XL',
        14: '6XL'
      }
    }
  },
  // 方法集合
  methods: {
    onChangeGender(label) {
      const sizeMap = {
        '1': 'men',
        '2': 'women',
        '3': 'kid'
      }
      const val = this.size[sizeMap[label]]
      this.$set(this.formData, 'size', val)
    },
    onChangeSize(label) {
      this.$set(this.formData, 'size', label)
    },
    onUpload(res) {
      const form = new FormData()
      form.append('file', res.file)
      // uploadFile('test', form).then((result) => {
      //   this.imgs.push({
      //     name: res.file.uid,
      //     url: result.url
      //   })
      //   this.$set(this.form, res.action, this.imgs.map(item => item.url).join(','))
      //   this.$message.success('上传成功！')
      //   this.$refs[res.action].clearValidate()
      // })
    },
    onUploadFront(res) {},
    beforeUpload(file) {
      const isIMG = ['image/jpeg', 'image/png'].includes(file.type)
      const isLt1M = file.size / 1024 / 1024 < 1
      if (!isIMG) {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式!')
      }
      if (!isLt1M) {
        this.$message.error('上传图片大小不能超过 1MB!')
      }
      return isIMG && isLt1M
    },
    handleRemove(file, fileList) {
      this.$set(this.formData, 'left_logo', this.imgs.map(item => item.url).join(','))
    },
    handleRemoveFront(file, fileList) {
      this.$set(this.formData, 'front_logo', this.imgs.map(item => item.url).join(','))
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = [file.url]
      this.dialogVisibleLogo = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.spec-form {
  .el-form-item {
    margin-bottom: 20px;
  }
  .required {
    position: relative;
    margin-right: 5px;
    &::after {
      content: '*';
      color: #e02b27;
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .current {
    margin-left: 5px;
  }
  .option-tip {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 18px;
  }
  .el-radio-button {
    margin: 4px;
    user-select: none;
  }
  .el-checkbox {
    margin-right: 10px;
    margin-bottom: 5px;
    line-height: 20px;
  }
  .price-addons {
    max-width: 400px;
    padding: 9px 16px;
    margin-bottom: 15px;
    font-size: 14px;
    border: 1px solid #000;
    .addons-price {
      color: #03de90;
    }
  }
  .btn-save {
    line-height: 18px;
  }
  ::v-deep {
    .el-form-item__label {
      padding-bottom: 5px;
      color: $mainColor;
      line-height: 20px;
    }
    .el-radio-button__inner {
      color: $mainColor;
      border-radius: 0;
      border: 1px solid $mainColor;
    }
    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      color: #fff;
      background-color: $mainColor;
      box-shadow: -1px 0 0 0 $mainColor;
    }
    .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
      box-shadow: none;
    }
    .el-input__inner {
      max-width: 400px;
      height: 44px;
      line-height: 44px;
      color: $mainColor;
      border-color: $mainColor;
      border-radius: 0;
    }

    .el-checkbox {
      color: $mainColor;
      font-weight: normal;
      &__inner {
        width: 20px;
        height: 20px;
        border-color: #bbc1e1;
        border-radius: 7px;
        &::after {
          border-width: 2px;
          left: 6px;
          top: 3px;
          width: 4px;
          height: 8px;
        }
      }
      &__label {
        padding-left: 6px;
        color: $mainColor;
      }
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #275efe;
    }
    .el-radio {
      color: $mainColor;
      font-weight: normal;
      &__inner {
        width: 20px;
        height: 20px;
        border-color: #bbc1e1;
        border-radius: 12px;
        &::after {
          width: 10px;
          height: 10px;
        }
      }
      &__label {
        padding-left: 6px;
        color: $mainColor;
      }
    }
    .el-radio__input.is-checked .el-radio__inner, .el-radio__input.is-indeterminate .el-radio__inner {
      background-color: #275efe;
    }
    .el-upload {
      position: relative;
      width: 60px;
      height: 60px;
      border: 1px dashed $mainColor;
      border-radius: 4px;
      line-height: 60px;
      background-color: #fff;
      overflow: hidden;
      vertical-align: top;
      &:hover {
        border-color: $mainColor;
      }
      &.el-upload--picture-card i {
        font-size: 24px;
        color: $mainColor;
      }
      .uploader-icon {
        font-size: 24px;
      }
      .el-upload-list__item-thumbnail {
        width: 58px;
        height: 58px;
      }
    }
    .is-disabled + .el-upload {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .el-upload-list--picture-card .el-upload-list__item {
      width: 60px;
      height: 60px;
      border: none;
    }
    .el-input-number {
      margin-top: 7px;
      margin-right: 20px;
      line-height: 44px;
    }
  }
}

</style>
