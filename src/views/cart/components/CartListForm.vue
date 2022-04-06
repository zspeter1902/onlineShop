<template>
  <div class="product-options-component">
    <el-form ref="productOptionForm" :model="formData" :rules="rules" label-position="top" class="spec-form">
      <!-- 功能条 价格汇总 -->
      <el-form-item>
        <el-table :data="list" style="width: 100%">
          <el-table-column label="Product" min-width="300">
            <template slot-scope="{ row }">
              <cart-good :item="row" />
            </template>
          </el-table-column>
          <el-table-column label="Price" min-width="100">
            <template slot-scope="{ row }">
              ${{ row.price }}
            </template>
          </el-table-column>
          <el-table-column label="Quantity" min-width="140">
            <template slot-scope="{ row }">
              <el-input-number v-model="row.quantity" :min="0" :max="10" :step="1" step-strictly />
            </template>
          </el-table-column>
          <el-table-column label="Total" align="right" min-width="100">
            <template slot-scope="{ row }">
              ${{ totalCalc(row) }}
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <!-- 折扣 -->
      <el-form-item prop="discount" :inline-message="true" class="text-right">
        <el-row type="flex" justify="end">
          <el-input v-model="formData.discount" placeholder="Discount Code" class="input-discount" />
          <el-button class="btn-apply" :disabled="!formData.discount" @click="onApply">Apply</el-button>
        </el-row>
      </el-form-item>
      <el-row type="flex" justify="end">
        <el-image class="discount-img" src="https://cdn.shopifycdn.net/s/files/1/0551/6233/9488/files/11_c3f6de5d-92ab-4801-a065-f7807433da5a.jpg?v=1644989424" fit="cover" />
      </el-row>
      <el-row type="flex" justify="end">
        <pay-total :link="false" :total="10" border />
      </el-row>
    </el-form>
  </div>
</template>

<script>
import CartGood from './CartGood.vue'
import PayTotal from '@/components/PayTotal'
export default {
  components: { CartGood, PayTotal },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  // 定义属性
  data() {
    return {
      formData: {
        id: null,
        team_name: '',
        name: '',
        number: '',
        type: '',
        quantity: null,
        discount: null
      },
      rules: {
        discount: [{ required: true, trigger: ['blur', 'change'], message: 'Enter a vaild discount code' }]
      }
    }
  },
  // 方法集合
  methods: {
    totalCalc(row) {
      return ((+row.price + +row.addPrice) * row.quantity).toFixed(2)
    },
    onApply() {

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
  .input-discount {
    max-width: 318px;
  }
  .discount-img {
    max-width: 400px;
  }
  .btn-apply {
    margin-left: 12px;
    color: #fff;
    padding-left: 16px;
    padding-right: 16px;
    border-color: #1878b9;
    background-color: #1878b9;
    &.is-disabled {
      color: #fff;
      background-color: #c8c8c8;
      border-color: #c8c8c8;
    }
  }
  .btn-save {
    line-height: 18px;
  }
  .el-table {
    font-size: 16px;
  }
  ::v-deep {
    .el-table th.el-table__cell.is-leaf {
      border-bottom-color: #dedede;
    }
    .el-table .el-table__cell {
      padding: 16px 0;
      line-height: 24px;
    }
    .el-table .cell {
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 24px;
      padding-right: 24px;
      line-height: 24px;
      color: $mainColor;
      vertical-align: top;
    }
    .el-form-item__label {
      padding-bottom: 5px;
      color: $mainColor;
      line-height: 20px;
    }
    .el-input__inner {
      height: 46px;
      line-height: 46px;
    }
    .input-discount {
      .el-input__inner {
        height: 46px;
        padding-left: 12px;
        padding-right: 12px;
        line-height: 46px;
        color: $mainColor;
        border-color: #d5d5d5;
        background-clip: padding-box;
        &:focus {
          border-color: #1878b9;
          box-shadow: 0 0 0 1px #1878b9;
        }
      }
    }

    .el-input-number {
      line-height: 42px;
      .el-input__inner {
        border: 1px solid #dedede;
        background-color: #fff;
      }
      &__increase,
      &__decrease {
        background-color: #fff;
      }
    }
    .el-form-item__error {
      max-width: 405px;
      width: 100%;
      font-size: 14px;
      text-align: left;
    }
    .pay-total {
      max-width: 304px;
      width: 100%;
      height: auto;
      box-shadow: none;
      padding-top: 48px;
      background-color: #fff;
    }
  }
}

</style>
