<template>
  <div class="my-collect">
    <!-- 列表 -->
    <el-row type="flex" :gutter="12" align="middle" class="filter-container flex-wrap">
      <el-col :lg="7" :sm="9" :xs="24">
        <el-input v-model="listQuery.name" placeholder="请输入产品名称" size="small" class="filter-item" @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :lg="3" :sm="5" :xs="12">
        <el-select v-model="listQuery.product_status" placeholder="请选择" size="small" clearable class="filter-item">
          <el-option v-for="item of types" :key="item.menuId" :label="item.name" :value="item.menuId" />
        </el-select>
      </el-col>
      <el-col :lg="5" :sm="10">
        <el-button v-waves class="filter-item" type="primary" size="small" icon="el-icon-search" @click="handleFilter">
          搜索
        </el-button>
        <el-button v-waves class="filter-item" type="primary" size="small" @click="handleShow">
          {{ isCheckShow ? '取消管理' : '批量管理' }}
        </el-button>
      </el-col>
      <el-col :lg="9">
        <el-checkbox v-show="isCheckShow" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        <el-link v-show="isCheckShow" :underline="false" @click="onDeleteAll"><i class="el-icon-delete el-icon--left" />全部删除</el-link>
      </el-col>
    </el-row>

    <!-- 列表 -->
    <el-checkbox-group v-model="checked" @change="handleCheckedChange">
      <ul class="collect-list">
        <li v-for="item of lists" :key="item.id" class="collect-item" @mouseenter="onMouseenter(item)" @mouseleave="onMouseleave(item)">
          <card :info="item" />
          <transition name="fade">
            <el-checkbox-button v-show="isCheckShow" :label="item.id"><i class="el-icon-check" /></el-checkbox-button>
          </transition>
          <transition name="fade">
            <el-link v-show="item.show" type="primary" class="btn-delete" :underline="false" @click="onDelete(item)"><i class="el-icon-delete el-icon--left" />删除</el-link>
          </transition>
        </li>
      </ul>
    </el-checkbox-group>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import waves from '@/directive/waves/index.js' // 水波纹指令
export default {
  name: 'MyCollectProduct',
  components: {
    Pagination: () => import('@/components/Pagination'),
    Card: () => import('../service/components/Card.vue')
  },
  directives: {
    waves
  },
  data() {
    return {
      loading: false,
      total: 3,
      listQuery: {
        page: 1,
        limit: 1,
        name: ''
      },
      multipleSelection: [],
      lists: [
        {
          id: 1,
          name: '拼多多app',
          product_status: '1',
          audit_status: '1',
          first_type: '电商平台',
          second_type: '进口企业',
          create_date: '2021-10-12',
          company: '拼多多公司',
          desc: '多多国际是拼多多在致力于社交电商场景下打造海外品牌一站式服务平台，为更多中国消费者提供更为丰富的进口产品. 依托社交电商和多多国际消费人群，通过优化入驻流程，3天入驻，0元起步，同时结合国家政策生态构建多多国际供应链网络，提供更为灵活的跨境物流解决方案。在商家支持方面，提供多多国际商家培训、起步以及运营商家成长体系，快速对接商家与用户。相较于其他平台，更为开放，入驻方便快捷，加之新兴社交电商人群，以及投入产出比更高的社交电商玩法，在为海外大牌做好渠道下沉同时，也让海外中小品牌进入中国成为可能。',
          thumb: require('img/logo11.jpg')
        },
        {
          id: 2,
          name: '洋码头app',
          product_status: '1',
          audit_status: '2',
          first_type: '电商平台',
          second_type: '进口企业',
          create_date: '2021-10-11',
          company: '合肥洋码头网络技术有限公司',
          desc: '洋码头成立于2010年，是中国独立海外购物平台的领军者。作为一站式海外购物平台，洋码头专注于连接全球零售市场与中国本土消费，致力于将世界各地优质丰富的商品以及潮流的生活方式和文化理念同步给中国消费者。通过海外买手商家实时直播的海外购物场景，以及跨境直邮快速、安全的运输，同时为消费者提供正品保障、假一赔十的服务，为消费者解决后顾之忧，让每一个中国消费者足不出户，即可安心享受海外原汁原味的正品和服务。',
          thumb: require('img/logo10.png')
        },
        {
          id: 3,
          name: '跨境综合服务',
          product_status: '2',
          audit_status: '1',
          first_type: '电商平台',
          second_type: '进口企业',
          create_date: '2021-10-13',
          company: '合肥跨境通国际贸易有限公司',
          desc: '合肥跨境通国际贸易有限公司目前已经与1200余家全球各地的境外商户达成合作协议，主要经营食品洗护、母婴保健、鞋包服饰、电子家居等八大类进口商品。目前正积极打造一个涵盖新型电子商务、新型国际贸易、新型国际物流仓储、新型国际金融和新型智能社区的“五新”商业服务平台.跨境通以供应链服务为目标，以高效整合产业链为手段，以资源整合为基础，以综合物流服务为支撑，持续推进跨境电商零售进口、冰鲜冷链、外商独资机构、保税展示交易等多种跨境业务，全力打造跨境货物服务贸易综合性中心.跨境通作为中国跨境电子商务交易平台的先驱，将持续为客户提供商品口岸服务、展览、销售渠道的一站式解决方案。',
          thumb: require('img/logo20.png')
        }
      ],
      isCheckShow: false,
      isIndeterminate: false,
      checkAll: false,
      checked: []
    }
  },
  computed: {
    types({ $store }) {
      const list = $store.getters.navList.filter(item => item.name.includes('功能服务'))
      return list[0].list
    },
    isMobile({ $store }) {
      return $store.getters.device === 'mobile'
    }
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    onMouseenter(item) {
      this.$set(item, 'show', true)
    },
    onMouseleave(item) {
      this.$set(item, 'show', false)
    },
    onDelete(item) {

    },
    onDeleteAll(item) {

    },
    handleCheckAllChange(val) {
      this.checked = val ? this.lists.map(item => item.id) : []
      this.isIndeterminate = false
    },
    handleCheckedChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.lists.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.lists.length
    },
    handleShow() {
      this.isCheckShow = !this.isCheckShow
    },
    getList() {

    },
    // 是否有商品选择项
    _isSelection() {
      this.$message.closeAll()
      if (!this.multipleSelection.length) {
        this.$message({
          message: '您需要先选择产品！',
          duration: 1500,
          offset: 120
        })
        return false
      }
      return true
    },
    // 清除选择
    _clearSelection() {
      if (this.multipleSelection.length) {
        this.$refs.table.clearSelection()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';
.my-collect {
  width: 100%;
  .filter-container {
    .el-select {
      width: 100%;
    }
    .el-col {
      margin-top: 12px;
    }
    .el-link {
      margin-left: 12px;
    }
  }
  .collect-list {
    margin-top: 10px;
    overflow: hidden;
    .collect-item {
      margin-top: 20px;
      position: relative;
    }
    .btn-delete {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 2;
    }
    .el-checkbox-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      ::v-deep {
        .el-checkbox-button__inner {
          width: 50px;
          height: 50px;
          padding: 8px 12px 12px 6px;
          font-size: 24px;
          border-bottom-right-radius: 50px;
          border: none;
        }
      }
    }
    .card {
      border: 1px solid #e5e5e5;
    }
  }
}
::v-deep {
  .el-checkbox-button__inner {
    color: #fff;
    background-color: #e5e5e5;
  }
}
@media only screen and (max-width:1199px){
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
}
</style>
