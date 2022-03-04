<template>
  <div class="detail">
    <div class="container">
      <h4 class="detail-title">{{ detail.wareName }}</h4>
      <div class="detail-content">
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">投资企业：</span>
            <span class="value">{{ detail.investBusi }}</span>
          </div>
          <div class="detail-column">
            <span class="label">建设形式：</span>
            <span class="value">{{ detail.build_type }}</span>
          </div>
          <div class="detail-column">
            <span class="label">仓库启用时间：</span>
            <span class="value">{{ detail.establishTime }}</span>
          </div>
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">地理位置：</span>
            <span class="value">{{ detail.geographicPosition }}</span>
          </div>
          <div class="detail-column">
            <span class="label">详细地址（中文）：</span>
            <span class="value">{{ detail.addrCn }}</span>
          </div>
          <div class="detail-column">
            <span class="label">详细地址（英文）：</span>
            <span class="value">{{ detail.addrEn }}</span>
          </div>
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">仓库总面积：</span>
            <span class="value">{{ detail.allArea }}平方米</span>
          </div>
          <div class="detail-column">
            <span class="label">空仓面积：</span>
            <span class="value">{{ detail.emptyArea }}平方米</span>
          </div>
          <div class="detail-column" />
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">商品出库时效：</span>
            <span class="value">{{ detail.exwTime }}</span>
          </div>
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">可存货物类型：</span>
            <span class="value">{{ detail.goosType }}</span>
          </div>
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">配套服务：</span>
            <span class="value">
              <!-- have_service  services -->
            </span>
          </div>
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">服务费用：</span>
            <span class="value">{{ detail.servicePriceMin + ' ~~ ' + detail.servicePriceMax }}元</span>
          </div>
          <div class="detail-column">
            <span class="label">服务收费说明：</span>
            <span class="value">{{ detail.serviceExplain }}</span>
          </div>
          <div class="detail-column" />
        </el-row>
        <el-row type="flex" align="middle" class="detail-info flex-wrap">
          <div class="detail-column">
            <span class="label">仓库简介：</span>
            <span class="value">{{ detail.wareAbout }}</span>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: '海关物流服务',
          child: [
            {
              id: 11,
              name: '头程运输'
            },
            {
              id: 12,
              name: '报关服务'
            },
            {
              id: 13,
              name: '清关服务'
            },
            {
              id: 14,
              name: '尾程配送'
            }
          ]
        },
        {
          id: 2,
          name: '金融保险服务',
          child: [
            {
              id: 21,
              name: '帐期'
            },
            {
              id: 22,
              name: '保险'
            },
            {
              id: 23,
              name: '商品质押'
            }
          ]
        },
        {
          id: 3,
          name: '境外线上线下营销服务',
          child: [
            {
              id: 31,
              name: '产品展示展览服务'
            },
            {
              id: 32,
              name: '分销渠道服务'
            },
            {
              id: 33,
              name: '平台引流服务'
            }
          ]
        },
        {
          id: 4,
          name: '海外代办服务',
          child: [
            {
              id: 41,
              name: '一件代发'
            },
            {
              id: 42,
              name: '退换货功能'
            },
            {
              id: 43,
              name: '代包装(贴飘服务)'
            },
            {
              id: 44,
              name: '加工'
            },
            {
              id: 45,
              name: '税务服务'
            },
            {
              id: 46,
              name: '法务服务'
            },
            {
              id: 47,
              name: '产品认证'
            },
            {
              id: 48,
              name: '商标服务'
            },
            {
              id: 49,
              name: '售后服务'
            }
          ]
        }
      ]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables";
.detail {
  padding: 20px 0;
  background-color: #f8f8f8;
  .detail-title {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 30px;
  }
  .detail-content {
    .label {
      flex: 0 0 auto;
      color: rgba(0,0,0,0.4);
    }
    .detail-column {
      flex: 1;
      display: flex;
      margin-bottom: 20px;
    }
  }
  ::v-deep {
    .service-conntainer {
      margin-left: 2px;
    }
  }
}
@media only screen and (max-width: 1199px) {
}
@media only screen and (max-width: 991px) {
  .detail {
    .detail-title {
      margin-bottom: 20px;
    }
    .detail-content {
      .detail-column {
        flex: 1 1 100%;
      }
    }
    ::v-deep {
      .service-container {
        .name {
          width: 160px;
        }
        .el-checkbox {
          margin-bottom: 5px;
          min-width: 82px;
          width: auto;
        }
      }
    }
  }

}
@media only screen and (max-width: 767px) {
  .detail {
    ::v-deep {
      .service-container {
        .name {
          margin-bottom: 10px;
        }
        .el-checkbox {
          margin-bottom: 5px;
          min-width: 82px;
        }
        .item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
