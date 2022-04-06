<template>
  <div class="pay-total" :class="{'relative': border}">
    <el-row type="flex" justify="space-evenly" align="middle" class="btn-box" :class="{'border': border}">
      <el-tooltip
        effect="dark"
        content="Add note for seller"
        placement="top"
        :disabled="device === 'mobile'"
      >
        <el-button type="text" class="btn-svg flex-auto" @click="openNote">
          <svg-icon icon-class="note" class-name="svg-20" />
          <span>Note</span>
        </el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Estimate shipping rates"
        placement="top"
        :disabled="device === 'mobile'"
      >
        <el-button type="text" class="btn-svg flex-auto" @click="openShipping">
          <svg-icon icon-class="shipping" class-name="svg-22" />
          <span>Shipping</span>
        </el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Add a discount code"
        placement="top"
        :disabled="device === 'mobile'"
      >
        <el-button type="text" class="btn-svg flex-auto no-after" @click="openCoupon">
          <svg-icon icon-class="coupon" class-name="svg-22" />
          <span>Coupon</span>
        </el-button>
      </el-tooltip>
    </el-row>
    <div v-if="border && noteVisible || shippingVisible || couponVisible" class="bg" />
    <!-- note form -->
    <el-drawer :visible.sync="noteVisible" direction="btt" :modal="false" modal-append-to-body :show-close="false" :wrapper-closable="false" size="auto">
      <template slot="title">
        <el-row type="flex" align="middle">
          <svg-icon icon-class="edit" class-name="svg-20 el-icon--left" />
          <span>Add note for seller</span>
        </el-row>
      </template>
      <note-form @cancel="noteVisible = false" />
    </el-drawer>
    <!-- shipping form -->
    <el-drawer :visible.sync="shippingVisible" direction="btt" :modal="false" modal-append-to-body :show-close="false" :wrapper-closable="false" size="auto">
      <template slot="title">
        <el-row type="flex" align="middle">
          <svg-icon icon-class="shipping" class-name="svg-22 el-icon--left" />
          <span>Estimate shipping rates</span>
        </el-row>
      </template>
      <shipping-form @cancel="shippingVisible = false" />
    </el-drawer>
    <!-- coupon form -->
    <el-drawer :visible.sync="couponVisible" direction="btt" :modal="false" modal-append-to-body :show-close="false" :wrapper-closable="false" size="auto">
      <template slot="title">
        <el-row type="flex" align="middle">
          <svg-icon icon-class="coupon" class-name="svg-20 el-icon--left" />
          <span>Add a discount code</span>
        </el-row>
      </template>
      <coupon-form @cancel="couponVisible = false" />
    </el-drawer>
    <!-- summary -->
    <div class="summary" :class="{'border': border}">
      <!-- discounts 折扣 -->
      <!-- subtotal -->
      <el-row type="flex" justify="space-between" class="subtotal">
        <span class="subtotal-title font-medium">Subtotal</span>
        <span class="subtotal-price font-medium">$39.99</span>
      </el-row>
      <div v-if="border" class="pay-total-tip text-right">
        Taxes and <router-link to="/shipping-policy">shipping</router-link> calculated at checkout
      </div>
      <div type="flex" align="middle" class="flex-column">
        <el-button
          type="primary"
          class="w-full btn-checkout"
          :class="{'uppercase': !link}"
          @click="onCheckout"
        >
          Check out
        </el-button>
        <el-link v-if="link" :underline="false" class="no-hover underline view-cart" @click="linkCart"> View Cart </el-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {
    NoteForm: () => import('../NoteForm'),
    ShippingForm: () => import('../ShippingForm'),
    CouponForm: () => import('../CouponForm')
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    link: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      noteVisible: false,
      shippingVisible: false,
      couponVisible: false
    }
  },
  computed: {
    device({ $store }) {
      return $store.getters.device
    }
  },
  methods: {
    closeAllDrawer() {
      this.noteVisible = false
      this.shippingVisible = false
      this.couponVisible = false
    },
    openNote() {
      this.shippingVisible = false
      this.couponVisible = false
      this.noteVisible = true
    },
    openCoupon() {
      this.noteVisible = false
      this.shippingVisible = false
      this.couponVisible = true
    },
    openShipping() {
      this.noteVisible = false
      this.couponVisible = false
      this.shippingVisible = true
    },
    onCheckout() {
      this.$router.push('/checkouts')
    },
    linkCart() {
      this.$emit('close')
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';
.pay-total {
  height: 225px;
  box-shadow: 0 0 10px rgba($color: #828282, $alpha: .2);
  background-color: #f7f7f7;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.9);
    z-index: 1000;
  }
  ::v-deep {
    .el-drawer__wrapper {
      position: absolute;
      max-width: 450px;
      background-color: rgba(255,255,255,0.9);
    }
    .el-drawer {
      padding: 24px 16px 64px;
    }
    .el-drawer__header {
      margin: 0 0 10px;
      padding: 0px;
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
      color: $mainColor;
      border-bottom: none;
    }
  }
  &.relative {
    ::v-deep {
      .el-drawer__wrapper {
        position: relative;
      }
      .el-drawer {
        position: relative;
        padding: 24px 16px;
      }
    }
  }
}
.btn-box {
  padding: 10px 16px;
  background-color: #fff;
  &.border {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid #dedede;
  }
}
.btn-svg {
  position: relative;
  font-weight: 500;
  font-size: 15px;
  padding: 0;
  vertical-align: top;
  &:not(.no-after)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 1px;
    height: 26px;
    transform: translateY(-13px);
    background-color: #dedede;
  }
  span {
    display: block;
    line-height: 24px;
  }
}
.el-button + .el-button {
  margin-left: 0;
}
.summary {
  margin: 16px 24px;
  &.border {
    margin-left: 0;
    margin-right: 0;
  }
  .underline {
    text-decoration: underline;
  }
  .btn-checkout {
    margin-top: 16px;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    &.uppercase {
      text-transform: uppercase;
    }
    &:hover, &:focus {
      box-shadow: 0 0 0 3px $mainColor;
    }
  }
  .pay-total-tip {
    margin-top: 8px;
    font-size: 14px;
    opacity: 0.8;
  }
  .view-cart {
    font-size: 16px;
  }
}
.subtotal {
  font-size: 18px;
}

@media only screen and (max-width: 767px) {
  .btn-box {
    padding: 4px 16px;
  }
  .btn-svg {
    font-size: 13px;
    span {
      display: block;
      line-height: 24px;
    }
  }
}
</style>
