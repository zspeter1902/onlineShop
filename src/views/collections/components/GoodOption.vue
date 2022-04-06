<template>
  <div class="option-wrapper">
    <!-- 产品名称 -->
    <el-row type="flex" align="middle" justify="space-between" class="option-block">
      <h1 class="good-name">{{ info.title }}</h1>
      <el-tooltip effect="dark" content="Add to wishlist" placement="left" transition="el-fade-in-left">
        <el-button circle class="hidden-xs-only flex-fixed icon-cart" @click="showViewer = true">
          <svg-icon icon-class="star" class-name="svg-20" />
        </el-button>
      </el-tooltip>
    </el-row>
    <!-- 产品 sku -->
    <div class="option-block">
      <ul class="option-sku">
        <el-row type="flex" align="middle" tag="li">
          <span class="option-sku-label font-medium">SKU:</span>
          <div class="option-sku-value">BJBR03</div>
        </el-row>
      </ul>
    </div>
    <!-- 产品价格 -->
    <div class="option-block option-prices">
      <el-row type="flex" align="middle" justify="space-between">
        <div>
          <span class="option-compare-price hidden-xs-only hidden-sm-and-up">$</span>
          <span class="option-regular-price">$39.99</span>
        </div>
      </el-row>
    </div>
    <!-- 产品评分 -->
    <div class="option-block option-rating">
      <el-rate v-model="info.rate" allow-half text-color="#000" :colors="colors" show-score score-template="(1)" title="5.0 rating (1 votes)" disabled />
    </div>
    <!-- 规格尺寸 -->
    <div class="option-block">
      <product-spec :info="info" />
    </div>
    <!-- 产品提问与分享 -->
    <div class="option-block">
      <product-actions />
    </div>
    <!-- 产品下单提示 -->
    <div class="option-block">
      <order-tip />
    </div>
  </div>
</template>

<script>
import ProductSpec from '@/components/ProductSpec'
import ProductActions from './ProductActions.vue'
import OrderTip from './OrderTip.vue'
export default {
  components: {
    ProductSpec,
    ProductActions,
    OrderTip
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
      colors: ['#f5e107', '#f5e107', '#f5e107']
    }
  },
  // 方法集合
  methods: {
    addToCart(form) {
      this.$refs[form].validate((valid) => {
        // if (valid) {
        // }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.option-wrapper {
  position: sticky;
  top: 30px;
  padding-top: 5px;
  padding-right: 4px;
  margin-top: -5px;
  overflow: hidden;
  ::v-deep {
    .option-block + .option-block {
      margin-top: 30px;
    }
  }
  .good-name {
    padding-right: 8px;
    font-size: 24px;
    line-height: 32px;
    color: $mainColor;
  }
  .icon-cart {
    width: 45px;
    height: 45px;
    padding: 12px;
  }
  .option-sku {
    li {
      line-height: 34px;
    }
    &-label {
      min-width: 85px;
      margin-right: 40px;
    }
  }
  .option-compare-price {
    margin-right: 8px;
    text-decoration: line-through;
    color: $grayLinkColor;
  }
  .option-regular-price {
    color: $mainColor;
    font-size: 20px;
    line-height: 28px;
  }
}
::v-deep {
  .el-tooltip__popper[x-placement^=left] .popper__arrow {
    border-left-color: $mainColor;
  }
}
@media only screen and (min-width: 768px) {
  .option-wrapper {
    padding-left: 8.3333%;
    .good-name {
      font-size: 30px;
      line-height: 42px;
    }
    .option-regular-price {
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>
