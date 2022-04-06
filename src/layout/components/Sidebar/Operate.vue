<template>
  <div class="top-operate">
    <el-row type="flex" justify="end" align="middle" class="nav-operate">
      <!-- Search -->
      <el-tooltip
        class="item"
        effect="dark"
        content="Search"
        placement="bottom"
        :disabled="device === 'mobile'"
      >
        <el-button plain class="no-border" size="small" @click="openSearchDialog">
          <svg-icon icon-class="search" class-name="svg-18" />
        </el-button>
      </el-tooltip>
      <!-- Account -->
      <el-tooltip
        class="item"
        effect="dark"
        content="Account"
        placement="bottom"
        :disabled="device === 'mobile'"
      >
        <el-link :underline="false" class="no-hover" @click="linkAccount">
          <svg-icon icon-class="account" class-name="svg-20" />
        </el-link>
      </el-tooltip>
      <!-- Wishlist -->
      <el-tooltip
        class="item"
        effect="dark"
        content="Wishlist"
        placement="bottom"
        :disabled="device === 'mobile'"
      >
        <el-link :underline="false" class="no-hover" @click="linkWishlist">
          <svg-icon icon-class="wish" class-name="svg-20" />
          <sup class="red-count">{{ wishlistNum }}</sup>
        </el-link>
      </el-tooltip>
      <!-- Cart -->
      <el-tooltip
        class="item"
        effect="dark"
        content="Cart"
        placement="bottom"
        :disabled="device === 'mobile'"
      >
        <el-link :underline="false" class="no-hover" @click.native="onOpenCart">
          <svg-icon icon-class="cart" class-name="svg-20" />
          <sup class="red-count">{{ cartNum }}</sup>
        </el-link>
      </el-tooltip>
    </el-row>
    <!-- 搜索窗口 -->
    <el-drawer title="Search our store" :visible.sync="searchVisible" :modal-append-to-body="false" direction="ttb" :size="isXs ? '100%' : '30%'" :with-header="isXs" class="search-drawer">
      <div class="container-fluid">
        <el-row type="flex" justify="space-between">
          <el-col :sm="4" class="hidden-xs-only" />
          <el-col :xs="24" :md="16">
            <el-form ref="form" :model="formData" class="search-form">
              <el-form-item>
                <el-input
                  v-model="formData.keyword"
                  placeholder="Search products"
                  @keyup.enter.native="onSubmit('form')"
                >
                  <el-button slot="suffix" size="small" plain class="no-border">
                    <svg-icon icon-class="search" class-name="svg-18" />
                  </el-button>
                </el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col class="hidden-xs-only" :sm="4">
            <el-row type="flex" justify="end" align="middle" class="search-operate">
              <!-- Account -->
              <el-tooltip
                class="item"
                effect="dark"
                content="Account"
                placement="bottom"
              >
                <el-link :underline="false" class="no-hover" @click="linkAccount">
                  <svg-icon icon-class="account" class-name="svg-20" />
                </el-link>
              </el-tooltip>
              <!-- Wishlist -->
              <el-tooltip
                class="item"
                effect="dark"
                content="Wishlist"
                placement="bottom"
              >
                <el-link :underline="false" class="no-hover" @click="linkWishlist">
                  <svg-icon icon-class="wish" class-name="svg-20" />
                  <sup class="red-count">{{ wishlistNum }}</sup>
                </el-link>
              </el-tooltip>
              <!-- Cart -->
              <el-tooltip
                class="item"
                effect="dark"
                content="Cart"
                placement="bottom"
              >
                <el-link :underline="false" class="no-hover" @click.native="onOpenCart">
                  <svg-icon icon-class="cart" class-name="svg-20" />
                  <sup class="red-count">{{ cartNum }}</sup>
                </el-link>
              </el-tooltip>
            </el-row>
          </el-col>
        </el-row>
        <el-row type="flex" class="flex-wrap popular-row">
          <span class="popular">Popular Searches:</span>
          <el-row type="flex" align="middle" class="flex-wrap">
            <el-link v-for="word of recommend" :key="word" class="no-hover link" @click.native="onLink(word)">
              {{ word }}
            </el-link>
          </el-row>
        </el-row>
      </div>
    </el-drawer>
    <!-- 购物车窗口 -->
    <el-drawer title="Shopping Cart" :visible.sync="cartVisible" :modal-append-to-body="false" direction="rtl" size="90%" class="cart-drawer" @closed="onCloseDrawer">
      <!-- 购物列表 -->
      <el-scrollbar class="cart-list-scrollbar">
        <div class="cart-list-wrap">
          <cart-item v-for="item of cartList" :key="item.id" :item="item" />
        </div>
      </el-scrollbar>
      <!-- 功能条 价格汇总 -->
      <pay-total ref="payTotal" :total="10" @close="closeCartDialog" />
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Operate',
  components: {
    PayTotal: () => import('@/components/PayTotal'),
    CartItem: () => import('@/components/CartItem')
  },
  data() {
    return {
      searchVisible: false,
      cartVisible: false,
      wishlistNum: 1,
      cartNum: 1,
      formData: {
        keyword: ''
      },
      recommend: ['Shirt', 'Jacket', 'NBA', 'NFL', 'MLB', 'Baseball Jacket', 'Hoodie'],
      cartList: [{
        id: 1,
        thumb: 'https://cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_540x.jpg?v=1644827259',
        good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
        price: '39.99',
        num: 1
      }],
      isXs: false
    }
  },
  computed: {
    device({ $store }) {
      return $store.getters.device
    },
    token({ $store }) {
      return $store.getters.token
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeDialog)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeDialog)
  },
  mounted() {
    this.resizeDialog()
  },
  methods: {
    linkWishlist() {
      this.closeSearchDialog()
      this.$router.push('/wishlist')
    },
    linkAccount() {
      this.closeSearchDialog()
      if (this.token) {
        this.$router.push('/account/info')
      } else {
        this.$router.push('/account/login')
      }
    },
    onCloseDrawer() {
      this.$nextTick(() => {
        this.$refs.payTotal.closeAllDrawer()
      })
    },
    resizeDialog() {
      const { body } = document
      const rect = body.getBoundingClientRect()
      this.isXs = rect.width < 768
    },
    onLink(word) {

    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        // if (valid) {
        // }
      })
    },
    openSearchDialog() {
      this.searchVisible = true
    },
    closeSearchDialog() {
      this.searchVisible = false
    },
    onOpenCart() {
      if (!this.cartNum || this.$route.path.includes('/cart')) {
        this.$router.push('/cart')
        return
      }
      this.openCartDialog()
    },
    openCartDialog() {
      this.cartVisible = true
    },
    closeCartDialog() {
      this.cartVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.top-operate {
  svg {
    vertical-align: middle;
  }
  .el-link {
    padding: 20px 13px;
  }
  .red-count {
    position: absolute;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    right: -4px;
    top: 11px;
    font-size: 12px;
    font-weight: 500;
    color: $whiteColor;
    background-color: $redColor;
    border-radius: 12px;
  }
}
.search-drawer {
  ::placeholder {
    color: #9ca3af;
  }
  ::v-deep {
    .el-drawer__body {
      padding: 32px 0;
    }
    .el-input__inner {
      height: 44px;
      padding-left: 12px;
      padding-right: 50px;
      line-height: 44px;
      font-size: 16px;
      border-color: $mainColor;
      color: $mainColor;
    }
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .popular {
    margin-right: 16px;
    font-size: 16px;
    line-height: 24px;
    color: $grayLinkColor;
  }
  .link {
    padding: 0;
    margin-right: 16px;
    line-height: 24px;
    font-size: 16px;
    white-space: nowrap;
    &::after {
      bottom: 4px;
    }
  }
  .search-operate {
    .el-link {
      padding: 13px 13px;
    }
    .red-count {
      top: 4px;
    }
  }
  .search-form {
    width: 60%;
    margin: 0 auto;
  }
  .popular-row {
    justify-content: center;
  }
}
.cart-drawer {
  .cart-list-wrap {
    padding: 0 24px 16px;
  }
  .cart-list-scrollbar {
    height: calc(100vh - 74px - 225px);
  }
  ::v-deep {
    .is-vertical {
      display: block !important;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    .el-drawer {
      max-width: 450px;
      left: auto;
    }
    .el-drawer__header {
      margin: 0 24px;
      padding: 24px 0px 16px;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      color: $mainColor;
      border-bottom: 1px solid #dedede;
    }
    .el-drawer__close-btn {
      position: relative;
      top: -10px;
      font-size: 26px;
    }
    .el-dialog__close {
      font-weight: 600;
    }
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .popular {
    margin-right: 16px;
    font-size: 16px;
    line-height: 24px;
    color: $grayLinkColor;
  }
  .search-form {
    width: 60%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 991px) {
}
@media only screen and (max-width: 767px) {
  .search-drawer {
    ::v-deep {
      .el-drawer__header {
        margin-bottom: 0;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 500;
        color: $mainColor;
      }
      .el-dialog__close {
        font-weight: 600;
      }
      .el-drawer__body {
        padding: 8px 0;
      }
    }
    .search-form {
      width: 100%;
    }
    .popular-row {
      justify-content: flex-start;
    }
  }
  .cart-drawer {
    .cart-list-scrollbar {
      height: calc(100vh - 66px - 225px);
    }
    ::v-deep {
      .el-drawer__header {
        margin: 0;
        padding: 16px;
      }
      .el-drawer__close-btn {
        top: -6px;
        right: -6px;
        font-size: 24px;
      }
    }

  }
}
</style>
