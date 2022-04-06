<template>
  <div class="checkouts">
    <header class="checkouts-banner">
      <el-row type="flex" class="checkouts-wrap">
        <el-image class="checkouts-logo" src="//cdn.shopify.com/s/files/1/0551/6233/9488/files/1024logoMNC.jpg?2608" fit="cover" />
      </el-row>
    </header>
    <el-row type="flex" class="checkouts-wrap flex-wrap">
      <!-- 订单价值汇总 -->
      <el-col :sm="10" class="xs-one sm-two">
        <div class="checkouts-main">
          <el-scrollbar class="scrollbar-wrap border-bottom">
            <cart-list-checkout v-for="item of lists" :key="item.id" :item="item" />
          </el-scrollbar>
          <el-row type="flex" justify="end">
            <el-input v-model="discount" placeholder="Gift card" class="input-discount" />
            <el-button class="btn-apply" :disabled="!discount" @click="onApply">Apply</el-button>
          </el-row>
          <el-divider />
          <el-row type="flex" justify="space-between" align="middle" class="checkouts-total">
            <span class="checkouts-total-label">Subtotal</span>
            <span class="checkouts-total-value font-medium">$135.95</span>
          </el-row>
          <el-row type="flex" justify="space-between" align="middle" class="checkouts-total">
            <span class="checkouts-total-label">Shipping <svg-icon icon-class="question" class-name="svg-14" /></span>
            <span class="checkouts-total-value">Calculated at next step</span>
          </el-row>
          <el-row type="flex" justify="space-between" align="middle" class="checkouts-total">
            <span class="checkouts-total-label">Taxes(extimated)</span>
            <span class="checkouts-total-value font-medium">$2.72</span>
          </el-row>
          <el-divider />
          <el-row type="flex" justify="space-between" align="middle" class="checkouts-total-sub">
            <span class="checkouts-total-sub-label">Total</span>
            <div class="checkouts-total-sub-value">USD <span class="font-medium">$138.67</span></div>
          </el-row>
        </div>
      </el-col>
      <!-- 添加地址 -->
      <el-col :sm="14" class="xs-two sm-one">
        <div class="checkouts-main">
          <el-breadcrumb class="app-breadcrumb" separator=">">
            <el-breadcrumb-item>
              <el-link :underline="false" class="no-redirect no-hover">Information</el-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span>Shipping</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span>Payment</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <!-- express checkout -->
          <div class="checkouts-express">
            <div class="checkouts-dynamic text-center">
              Express checkout
            </div>
            <el-link class="checkouts-paypal text-center" :underline="false" href="">
              <el-image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg" fit="cover" />
              <el-image class="paypal-button-logo" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg" fit="cover" />
            </el-link>
          </div>
          <el-divider>OR</el-divider>
          <!-- 表单 -->
          <el-form
            ref="addressForm"
            :model="formData"
            :rules="rules"
            class="address-form"
            label-position="top"
            auto-complete="on"
          >
            <el-row type="flex" justify="space-between" class="checkouts-form-header">
              <h3 class="checkouts-form-header-title">Contact information</h3>
              <div class="checkouts-form-header-tip">Already have an account? <router-link to="/account/login">Log in</router-link></div>
            </el-row>
            <el-form-item prop="email">
              <el-input
                v-model="formData.email"
                placeholder="Email"
              />
            </el-form-item>
            <el-form-item prop="default">
              <el-checkbox v-model="formData.withme">Email me with news and offers</el-checkbox>
            </el-form-item>
            <el-row type="flex" justify="space-between" class="checkouts-form-header">
              <h3 class="checkouts-form-header-title">Shipping address</h3>
            </el-row>
            <el-form-item prop="country">
              <select-country v-model="formData.country" />
            </el-form-item>
            <el-row type="flex" :gutter="12">
              <el-col :sm="12">
                <el-form-item prop="firstName">
                  <el-input
                    v-model="formData.firstName"
                    placeholder="First Name"
                    tabindex="2"
                  />
                </el-form-item>
              </el-col>
              <el-col :sm="12">
                <el-form-item prop="lastName">
                  <el-input
                    v-model="formData.lastName"
                    placeholder="Last Name"
                    tabindex="3"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item prop="company">
              <el-input
                v-model="formData.company"
                placeholder="Company(optional)"
                tabindex="4"
              />
            </el-form-item>
            <el-form-item prop="address" required>
              <el-input
                v-model="formData.address"
                placeholder="Full address"
                tabindex="5"
              />
            </el-form-item>
            <el-form-item prop="house">
              <el-input
                v-model="formData.house"
                placeholder="Apartment,suite,etc.(optional)"
                tabindex="6"
              />
            </el-form-item>
            <el-row type="flex" :gutter="12">
              <el-col>
                <el-form-item prop="city">
                  <el-input
                    v-model="formData.house"
                    placeholder="City"
                    tabindex="7"
                  />
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item prop="province">
                  <el-select v-model="formData.province" placeholder="Province">
                    <el-option v-for="item of provinceList" :key="item" :value="item.code">
                      {{ item.en }}
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item prop="code">
                  <el-input
                    v-model="formData.code"
                    placeholder="Postal/Zip Code"
                    tabindex="8"
                  />
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item prop="phone">
              <el-input
                v-model="formData.phone"
                placeholder="Phone"
                tabindex="9"
              />
            </el-form-item>
            <el-form-item prop="default">
              <el-checkbox v-model="formData.default">Save this information for next time</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="isSubmit"
                type="primary"
                class="submit"
                @click.native.prevent="onSubmit('addressForm')"
              >Continue to shipping</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SelectCountry from '@/components/SelectCountry'
import { isValidPhone } from '@/utils/validate'
import CartListCheckout from './components/Lists.vue'
export default {
  name: 'Checkouts',
  components: {
    SelectCountry,
    CartListCheckout
  },
  // 定义属性
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!isValidPhone(value)) {
        callback(new Error('Enter a phone number to use this delivery method'))
      } else {
        callback()
      }
    }
    return {
      isSubmit: false,
      formData: {
        country: 'AF',
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        house: '',
        province: '',
        city: '',
        code: '',
        phone: '',
        withme: null,
        default: null
      },
      rules: {
        country: [
          { required: true, message: 'Enter a country', trigger: 'blur' }
        ],
        firstName: [
          { required: true, message: 'Enter a first name', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Enter a last name', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Enter a city', trigger: 'blur' }
        ],
        province: [
          { required: true, message: 'Select a province', trigger: 'blur' }
        ],
        address: [
          { required: true, message: 'Enter a full address', trigger: 'blur' }
        ],
        phone: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        email: [
          { required: true, message: 'Enter a valid email', trigger: 'blur' },
          { type: 'email', message: 'Enter the correct email', trigger: ['blur', 'change'] }
        ]
      },
      provinceList: [
        {
          code: 'AH',
          cn: '安徽',
          en: 'Anhui'
        },
        {
          code: 'BJ',
          cn: '北京',
          en: 'Beijing'
        },
        {
          code: 'CQ',
          cn: '重庆',
          en: 'Chongqing'
        },
        {
          code: 'FJ',
          cn: '福建',
          en: 'Fujian'
        },
        {
          code: 'GS',
          cn: '甘肃',
          en: 'Gansu'
        },
        {
          code: 'GD',
          cn: '广东',
          en: 'Guangdong'
        },
        {
          code: 'GX',
          cn: '广西',
          en: 'Guangxi'
        },
        {
          code: 'GZ',
          cn: '贵州',
          en: 'Guizhou'
        },
        {
          code: 'HI',
          cn: '海南',
          en: 'Hainan'
        },
        {
          code: 'HE',
          cn: '河北',
          en: 'Hebei'
        },
        {
          code: 'HL',
          cn: '黑龙江',
          en: 'Heilongjiang'
        },
        {
          code: 'HA',
          cn: '河南',
          en: 'Henan'
        },
        {
          code: 'HB',
          cn: '湖北',
          en: 'Hubei'
        },
        {
          code: 'HN',
          cn: '湖南',
          en: 'Hunan'
        },
        {
          code: 'NM',
          cn: '内蒙古',
          en: 'Inner Mongolia',
          en_other: 'Nei Mongol'
        },
        {
          code: 'JS',
          cn: '江苏',
          en: 'Jiangsu'
        },
        {
          code: 'JX',
          cn: '江西',
          en: 'Jiangxs'
        },
        {
          code: 'JL',
          cn: '吉林',
          en: 'Jilin'
        },
        {
          code: 'LN',
          cn: '辽宁',
          en: 'Liaoning'
        },
        {
          code: 'NX',
          cn: '宁夏',
          en: 'Ningxia'
        },
        {
          code: 'QH',
          cn: '青海',
          en: 'Qinghai'
        },
        {
          code: 'SN',
          cn: '陕西',
          en: 'Shaanxi'
        },
        {
          code: 'SD',
          cn: '山东',
          en: 'Shandong'
        },
        {
          code: 'SH',
          cn: '上海',
          en: 'Shanghai'
        },
        {
          code: 'SX',
          cn: '山西',
          en: 'Shanxi'
        },
        {
          code: 'SC',
          cn: '四川',
          en: 'Sichuan'
        },
        {
          code: 'TJ',
          cn: '天津',
          en: 'Tianjin'
        },
        {
          code: 'YZ',
          cn: '西藏',
          en: 'Xizang'
        },
        {
          code: 'XJ',
          cn: '新疆',
          en: 'Xinjiang'
        },
        {
          code: 'YN',
          cn: '云南',
          en: 'Yunnan'
        },
        {
          code: 'ZJ',
          cn: '浙江',
          en: 'Zhejiang'
        }
      ],
      lists: [
        {
          id: 1,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          quantity: 1,
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...',
          gender: 'Men\'s',
          size: 'L',
          type: 'Printed',
          addPrice: '7.99'
        },
        {
          id: 2,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          quantity: 1,
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...',
          addPrice: ''
        }
      ],
      discount: null
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
    onSubmit(form) {
      this.isSubmit = true
      this.$refs[form].validate((valid) => {
        if (valid) {
        } else {
          this.isSubmit = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.checkouts {
  overflow: hidden;
  &-banner {
    padding: 1.5em 0;
    background: #333 url(//cdn.shopify.com/s/files/1/0551/6233/9488/files/2_1f209ccd-5b9e-4dcc-9b75-151b32d0f3b1.jpg?2608) center center;
    background-size: cover;
  }
  &-wrap {
    max-width: 40em;
    margin: 0 auto;
    padding: 0 16px;
    zoom: 1;
  }
  &-main {
    padding-top: 2em;
  }
  .scrollbar-wrap {
    height: 120px;
    margin-bottom: 20px;
  }
  &-logo {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
  &-express {
    position: relative;
    padding: 20px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
  }
  &-dynamic {
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 12px;
    color: #333;
    font-size: 16px;
    width: 140px;
    line-height: 20px;
    background-color: #fff;
  }
  &-paypal {
    width: 262px;
    padding: 11px;
    margin: 0 auto;
    background-color: #ffc439;
    border-radius: 4px;
  }
  &-form-header {
    margin-bottom: 20px;
    margin-top: 28px;
    &-title {
      padding: 2px 9px 2px 0;
      color: #333;
      font-size: 18px;
    }
    &-tip {
      padding: 2px 0px 2px 9px;
      font-size: 14px;
      color: #666;
      a {
        color: #1878b9;
      }
    }
  }
  &-total {
    margin-bottom: 12px;
    font-size: 14px;
    &-label {
      color: $grayLinkColor;
    }
    &-value {
      color: #333;
    }
    &-sub {

    }
    &-sub-label {
      color: #333;
    }
    &-sub-value {
      color: $grayLinkColor;
      font-size: 12px;
      span {
        margin-left: 2px;
        font-size: 24px;
        color: #333;
      }
    }
  }
  .el-image {
    height: 20px;
  }
  .sm-two {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      background-color: #fafafa;
      z-index: -1;
    }
  }
  .no-redirect {
    color: $mainColor;
    cursor: text;
  }
  .input-discount {
    max-width: 318px;
  }
  .btn-apply {
    margin-left: 12px;
    color: #fff;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: #1878b9;
    background-color: #1878b9;
    &.is-disabled {
      color: #fff;
      background-color: #c8c8c8;
      border-color: #c8c8c8;
    }
  }
  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    .el-divider__text {
      color: #737373;
      font-size: 12px;
      padding: 0 1em;
      font-weight: normal;
    }
    .el-breadcrumb__separator {
      font-weight: 300;
      font-size: 12px;
      font-family: serif;
      color: #9ca3af;
    }
    .el-form-item.is-error .el-input__inner {
      box-shadow: 0 0 0 1px #f56c6c;
    }
    .el-form-item__error {
      font-size: 14px;
      line-height: 18px;
    }
    .el-input__inner {
      height: 46px;
      line-height: 46px;
    }
    .el-input__inner::placeholder, .el-textarea__inner::placeholder {
      color: #333;
    }
    .el-checkbox__inner {
      width: 18px;
      height: 18px;
      border-color: $grayLinkColor;
    }
    .el-checkbox {
      color: $grayLinkColor;
      font-weight: normal;
    }
    .el-checkbox__label {
      color: $grayLinkColor !important;
    }
    .el-checkbox__inner::after {
      border-width: 2px;
      left: 5px;
      width: 4px;
      height: 8px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .xs-one {
    order: 1;
  }
  .xs-two {
    order: 2;
  }
}
@media only screen and (min-width: 768px) {
  .checkouts-express {
    margin-top: 1.5em;
  }
  .sm-one {
    order: 1;
    padding-right: 6%;
  }
  .sm-two {
    order: 2;
    padding-left: 4%;
    &::after {
      left: 58.33333333%;
      width: 300%;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .checkouts {
    &-banner {
      padding-top: 6em;
      padding-bottom: 2em;
    }
    &-wrap {
      max-width: 78.5714285714em;
      width: 90%;
      padding: 0 5%;
    }
    &-logo {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
