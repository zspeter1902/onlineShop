<template>
  <div>
    <h4 class="name">{{ info.wareName }}</h4>
    <p class="company">{{ contact.companyName }}</p>
    <el-row type="flex" align="middle" class="price-box box">
      <span class="label">租仓价格</span>
      <p class="value">¥ <span>{{ info.rentalPriceMin }}-{{ info.rentalPriceMax }}</span>元/{{ costStandard[info.priceUnit] }}/天</p>
    </el-row>
    <el-row type="flex" align="middle" class="cost-box box">
      <span class="label">服务费用</span>
      <p class="value">¥ <span>{{ info.servicePriceMin }} -{{ info.servicePriceMax }}</span>元</p>
    </el-row>
    <el-row type="flex" align="middle" class="column-info">
      <span class="label">起租体积</span>
      <p class="value"><span>{{ info.rentalVolumeMin }}</span>立方米</p>
    </el-row>
    <el-row type="flex" align="middle" class="column-info">
      <span class="label">地理位置</span>
      <p class="value"><span>{{ info.geographicPosition }}</span></p>
    </el-row>
    <el-row type="flex" align="middle" class="column-info">
      <span class="label" />
      <div class="value">
        <p>仓库总面积 {{ info.allArea }} 平方米 空仓面积 {{ info.emptyArea }} 平方米</p>
        <el-button type="danger" plain class="btn" @click="openDialog">联系商家</el-button>
        <el-button type="danger" class="btn" @click="goBooking(info.id)">我要预订</el-button>
      </div>
    </el-row>
    <el-dialog :title="contact.companyName" :visible.sync="visible">
      <div class="dialog-column">
        <i class="el-icon-user el-icon--left" />
        <span class="label">联系人</span>
        <span class="value">{{ contact.contactName }}</span>
      </div>
      <div class="dialog-column">
        <i class="el-icon-phone-outline el-icon--left" />
        <span class="label">联系方式</span>
        <span class="value">{{ contact.contactPhone }}</span>
      </div>
      <div class="dialog-column">
        <i class="el-icon-message el-icon--left" />
        <span class="label">邮箱地址</span>
        <span class="value">{{ contact.contactEmail }}</span>
      </div>
      <div class="dialog-column">
        <i class="el-icon-monitor el-icon--left" />
        <span class="label">公司网站</span>
        <span class="value">{{ contact.webUrl }}</span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDictMap } from '@/api/global'
export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {}
    },
    contact: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      costStandard: {}
    }
  },
  created() {
    this.getMap()
  },
  methods: {
    getMap() {
      getDictMap('cost_standard').then(res => {
        this.costStandard = res.data
      })
    },
    openDialog() {
      this.visible = true
    },
    closeDialog() {
      this.visible = false
    },
    isShowDialog() {
      return this.visible
    },
    goBooking(id) {
      if (!id) return
      // this.$router.push({
      //   name: 'Booking',
      //   params: {
      //     id: id
      //   }
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables";
.name {
  font-size: 28px;
  line-height: 44px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #000;
}
.company {
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 30px;
  color: rgba($color: #000000, $alpha: .4)
}
.box {
  width: 100%;
  height: 76px;
  padding: 0 28px;
  margin-bottom: 22px;
  background: linear-gradient(227.73deg,rgba(255,104,149,.1) -5.24%,rgba(255,132,63,.1));
}
.cost-box,
.price-box {
  .label {
    width: 100px;
    font-size: 14px;
    color: rgba(0,0,0,.4);
  }
  .value {
    font-size: 14px;
    color: #f50000;
    span {
      font-size: 36px;
      margin-right: 10px;
    }
  }
}
.column-info {
  padding-left: 28px;
  margin-bottom: 20px;
  color: rgba(0,0,0,.4);
  .label {
    flex: 0 0 auto;
    width: 100px;
    font-size: 14px;
  }
  .value {
    span {
      margin-right: 10px;
      color: #000;
    }
    .el-button {
      width: 200px;
      margin-top: 18px;
      font-size: 18px;
      line-height: 24px;
      & + .el-button {
        margin-left: 18px;
      }
    }
  }
}
.dialog-column {
  margin-bottom: 14px;
  line-height: 22px;
  i {
    color: $mainColor;
  }
  .icon {
    width: 14px;
    height: 14px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .label {
    margin-right: 10px;
  }
  .pic-code {
    display: block;
    width: 104px;
    height: 104px;
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }
}
@media only screen and (max-width: 1199px) {
  .name {
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 4px;
  }
  .company {
    font-size: 18px;
    line-height: 28px;
  }
  .box {
    height: auto;
    padding: 16px 24px;
    margin-bottom: 18px;
  }
  .cost-box,
  .price-box {
    .label {
      width: 92px;
    }
    .value {
      span {
        font-size: 32px;
      }
    }
  }
  .column-info {
    padding-left: 24px;
    margin-bottom: 16px;
    .label {
      width: 92px;
    }
    .value {
      .el-button {
        width: 140px;
        margin-top: 16px;
        & + .el-button {
          margin-left: 16px;
        }
      }
    }
  }
}
@media only screen and (max-width: 991px) {
  .name {
    font-size: 20px;
    line-height: 30px;
  }
  .company {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 26px;
  }
  .box {
    padding: 14px 18px;
    margin-bottom: 12px;
  }
  .cost-box,
  .price-box {
    .label {
      width: 80px;
    }
    .value {
      span {
        font-size: 24px;
      }
    }
  }
  .column-info {
    padding-left: 18px;
    margin-bottom: 12px;
    .label {
      width: 80px;
    }
    .value {
      .el-button {
        width: 110px;
        margin-top: 12px;
        font-size: 16px;
        line-height: 22px;
        & + .el-button {
          margin-left: 12px;
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .column-info {
    .value {
      .el-button {
        width: 92px;
        margin-top: 20px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
