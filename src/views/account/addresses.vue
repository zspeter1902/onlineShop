<template>
  <div class="account-info">
    <div class="page-position text-center">
      <global-title name="Your Addresses" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="account-info-container container-fluid">
      <el-col :sm="22" :md="20">
        <el-row type="flex">
          <el-col :sm="4" :lg="3" class="hidden-xs-only account-info-nav">
            <account-nav />
          </el-col>
          <el-col :sm="20" :lg="21" class="account-info-content">
            <h3 class="font-medium">Your Addresses (1)</h3>
            <el-button type="primary" class="font" @click="handleOpen">
              Add a New Address
            </el-button>
            <!-- create address -->
            <el-form
              v-show="isCreate || isEdit"
              ref="addressForm"
              :model="formData"
              class="address-form"
              label-position="top"
              auto-complete="on"
            >
              <el-form-item label="Country" prop="country">
                <select-country v-model="formData.country" />
              </el-form-item>

              <el-form-item label="First Name" prop="firstName" required>
                <el-input
                  v-model="formData.firstName"
                  placeholder="First Name"
                  tabindex="2"
                />
              </el-form-item>
              <el-form-item label="Last Name" prop="lastName" required>
                <el-input
                  v-model="formData.lastName"
                  placeholder="Last Name"
                  tabindex="3"
                />
              </el-form-item>
              <el-form-item label="Company" prop="company">
                <el-input
                  v-model="formData.company"
                  placeholder="Company"
                  tabindex="4"
                />
              </el-form-item>
              <el-form-item label="Address" prop="address" required>
                <el-input
                  v-model="formData.address"
                  placeholder="Address"
                  tabindex="5"
                />
              </el-form-item>
              <el-form-item label="Apartment,suite,etc." prop="house">
                <el-input
                  v-model="formData.house"
                  placeholder="Apartment,suite,etc."
                  tabindex="6"
                />
              </el-form-item>
              <el-form-item label="City" prop="city">
                <el-input
                  v-model="formData.house"
                  placeholder="City"
                  tabindex="7"
                />
              </el-form-item>
              <el-form-item label="Postal/Zip Code" prop="code" required>
                <el-input
                  v-model="formData.code"
                  placeholder="Postal/Zip Code"
                  tabindex="8"
                />
              </el-form-item>
              <el-form-item label="Phone" prop="phone" :rules="phoneRule" required>
                <el-input
                  v-model="formData.phone"
                  placeholder="Phone"
                  tabindex="9"
                />
              </el-form-item>
              <el-form-item prop="default">
                <el-checkbox v-model="formData.default">Set as default address</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button
                  :loading="isSubmit"
                  type="primary"
                  class="submit"
                  @click.native.prevent="handleCreate('addressForm')"
                >Add a New Address</el-button>
                <el-link :underline="false" class="el-icon--right btn-cancel no-hover" @click="handleCancel">Cancel</el-link>
              </el-form-item>
            </el-form>
            <!-- Already exists -->
            <div v-show="!isEdit" class="already-exists">
              <h3 class="font-medium">(Default Address)</h3>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Name</el-col>
                <el-col>
                  <span class="text-color-secondary">zhang shuai</span>
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Email</el-col>
                <el-col>
                  <span class="text-color-secondary">zspeter@126.com</span>
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Company</el-col>
                <el-col>
                  <!-- <span class="text-color-secondary"></span> -->
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Address</el-col>
                <el-col>
                  <!-- <span class="text-color-secondary"></span> -->
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Country</el-col>
                <el-col>
                  <!-- <span class="text-color-secondary"></span> -->
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Postal/Zip Code</el-col>
                <el-col>
                  <!-- <span class="text-color-secondary"></span> -->
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom already-exists-item">
                <el-col>Phone</el-col>
                <el-col>
                  <!-- <span class="text-color-secondary"></span> -->
                </el-col>
              </el-row>
              <el-row type="flex" class="button-box">
                <el-button type="primary" @click="handleEdit()">Edit</el-button>
                <el-link :underline="false" class="el-icon--right btn-delete no-hover" @click="handleDelete">Delete</el-link>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
import SelectCountry from '@/components/SelectCountry'
import { isValidPhone } from '@/utils/validate'
import AccountNav from './components/Nav.vue'
export default {
  name: 'AccountAddresses',
  components: { Breadcrumb, globalTitle, SelectCountry, AccountNav },
  // 定义属性
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!isValidPhone(value)) {
        callback(new Error('请输入正确的手机号！'))
      } else {
        callback()
      }
    }
    return {
      isCreate: false,
      isEdit: false,
      isSubmit: false,
      formData: {
        country: 'AF',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        house: '',
        city: '',
        code: '',
        phone: '',
        default: null
      },
      phoneRule: {
        required: true, trigger: 'blur', validator: validatePhone
      }
    }
  },
  computed: {
    country({ formData }) {
      return formData.country
    }
  },
  watch: {
    country(newVal, oldVal) {
      this.formData.country = newVal
    }
  },
  // 方法集合
  methods: {
    handleEdit(data) {
      if (!data) return
      this.formData = data
      this.isEdit = true
    },
    handleOpen() {
      this.isCreate = true
    },
    handleDelete() {},
    handleCancel() {
      this.isCreate = false
      this.isEdit = false
    },
    handleCreate(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.isSubmit = true
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
.underline {
  text-decoration: underline;
}
.account-info {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
    .title {
      margin-bottom: 12px;
    }
  }
  &-container {
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  &-nav {
    border-right: 1px solid #dedede;
    .el-link {
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 400;
      &.active {
        color: $mainColor;
        font-weight: 600;
      }
    }
  }
  &-content {
    .el-link {
      font-size: 16px;
    }
    .address-form {
      margin: 12px 0;
    }
    ::v-deep {
      .el-form-item__content {
        margin-bottom: 10px;
        line-height: 20px;
      }
      .el-form--label-top .el-form-item__label {
        padding-bottom: 5px;
        line-height: 24px;
        font-size: 16px;
        color: $mainColor;
      }
      .el-checkbox__inner {
        width: 18px;
        height: 18px;
        border-color: $mainColor;
      }
      .el-input {
        font-size: 16px;
      }
      .el-checkbox {
        color: $mainColor;
        font-weight: normal;
      }
      .el-checkbox__label {
        font-size: 16px;
        color: $mainColor !important;
      }
      .el-checkbox__inner::after {
        border-width: 2px;
        left: 5px;
        width: 4px;
        height: 8px;
      }
    }
    .el-form-item {
      margin-bottom: 24px;
    }
    .el-select {
      width: 100%;
    }
    h3 {
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 32px;
    }
    .already-exists {
      margin-top: 80px;
      margin-bottom: 96px;
      &-item {
        padding: 20px 0;
      }
    }
    .btn-cancel,
    .btn-delete {
      padding: 14px 10px;
    }
    .el-button {
      padding: 14px 32px;
    }
    .button-box {
      margin-top: 24px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .account-info {
    &-content {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .account-info {
    &-content {
      padding-left: 64px;
      padding-right: 64px;
    }
  }
}
@media only screen and (min-width: 1536px) {
  .account-info {
    &-content {
      padding-left: 90px;
      padding-right: 90px;
    }
  }
}
</style>
