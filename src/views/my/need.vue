<template>
  <div class="my-table">
    <!-- 列表 -->
    <el-row type="flex" :gutter="12" class="filter-container flex-wrap">
      <el-col :lg="6" :sm="9" :xs="24">
        <el-input v-model="listQuery.name" placeholder="请输入产品名称" size="small" class="filter-item" @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :lg="4" :sm="5" :xs="12">
        <!-- ProductType -->
        <el-cascader
          v-model="selectType"
          :options="ProductType"
          :props="dictProps"
          :show-all-levels="false"
          placeholder="请选择产品类型"
          size="small"
          filterable
          clearable
          @change="selectChange"
        />
      </el-col>
      <el-col :lg="3" :sm="5" :xs="12">
        <el-select v-model="listQuery.state" placeholder="请选择" size="small" clearable class="filter-item">
          <el-option v-for="(value, key) in productStatus" :key="key" :label="value" :value="key" />
        </el-select>
      </el-col>
      <el-col :lg="3" :sm="5" :xs="12">
        <el-select v-model="listQuery.examine" placeholder="请选择" size="small" clearable class="filter-item">
          <el-option v-for="(value, key) in auditStatus" :key="key" :label="value" :value="key" />
        </el-select>
      </el-col>
      <el-col :lg="8">
        <el-button v-waves class="filter-item" type="primary" size="small" icon="el-icon-search" @click="handleFilter">
          搜索
        </el-button>
        <el-button v-waves class="filter-item" type="primary" size="small" icon="el-icon-upload2" @click="handleModifyStatus">
          上架
        </el-button>
        <el-button v-waves class="filter-item" type="primary" size="small" icon="el-icon-download" @click="handleModifyStatus">
          下架
        </el-button>
      </el-col>
    </el-row>
    <!-- table列表 -->
    <el-table
      ref="table"
      v-loading="loading"
      fit
      row-key="id"
      highlight-current-row
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" :width="isMobile ? '36' : '50'" />
      <el-table-column
        prop="title"
        label="需求名称"
        min-width="100"
        show-overflow-tooltip
      >
        <template slot-scope="{ row }">
          <router-link :to="'/service/need-detail/' + row.id">
            {{ row.title }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="categoryP"
        label="产品品类"
        min-width="80"
        align="center"
      >
        <template slot-scope="{ row }">
          {{ typesMap[row.categoryP] }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="!isMobile"
        prop="categoryC"
        label="子品类"
        min-width="80"
        align="center"
      >
        <template slot-scope="{ row }">
          {{ typesMap[row.categoryC] }}
        </template>
      </el-table-column>
      <el-table-column
        prop="audit_status"
        label="审核状态"
        min-width="80"
        align="center"
      >
        <template slot-scope="{ row }">
          <el-tag size="medium">{{ auditStatus[row.audit_status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="product_status"
        label="需求状态"
        min-width="80"
        align="center"
      >
        <template slot-scope="{ row }">
          <!-- success warning -->
          <el-tag size="medium" type="success">{{ productStatus[row.product_status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!isMobile"
        prop="createTime"
        label="创建日期"
        sortable
        align="center"
        min-width="100"
      >
        <template slot-scope="{ row }">
          {{ parseTime(row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        align="center"
        min-width="160"
        fixed="right"
      >
        <template slot-scope="{row, $index}">
          <el-button
            v-waves
            size="mini"
            type="primary"
            plain
            @click="handleEdit($index, row)"
          >上架</el-button>
          <el-button
            v-waves
            size="mini"
            type="primary"
            plain
            @click="handleDelete($index, row)"
          >下架</el-button>
        </template>
      </el-table-column>
    </el-table>
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
import Pagination from '@/components/Pagination'
import { getDictMap } from '@/api/global'
import { getProductList } from '@/api/company'
import { parseTime } from '@/utils'
export default {
  name: 'MyProduct',
  components: { Pagination },
  directives: {
    waves
  },
  data() {
    return {
      loading: false,
      total: 3,
      listQuery: {
        page: 1,
        limit: 10,
        name: '',
        type: '2', // 1 产品 2 需求
        state: null,
        examine: null
      },
      multipleSelection: [],
      productStatus: {
        '1': '已上架',
        '2': '已下架',
        '3': '待上架'
      },
      auditStatus: {
        '1': '待审核',
        '2': '已通过',
        '3': '已拒绝'
      },
      tableData: [],
      selectType: [],
      dictProps: {
        label: 'dictName',
        value: 'dictCode',
        'leaf': '_level',
        'emitPath': true,
        'checkStrictly': true
      },
      ProductType: []
    }
  },
  computed: {
    types({ $store }) {
      const list = $store.getters.navList.filter(item => ['功能服务'].includes(item.name))
      return list
    },
    isMobile({ $store }) {
      return $store.getters.device === 'mobile'
    },
    typesMap({ types }) {
      return types.reduce((value, item) => {
        value[item.menuId] = item.name
        if (item.list.length) {
          item.list.map(child => {
            value[child.menuId] = child.name
          })
        }
        return value
      }, {})
    }
  },
  created() {
    this.getDict()
    this.getList()
  },
  methods: {
    getDict() {
      getDictMap('audit').then(res => {
        this.auditStatus = res.data
      })
      getDictMap('listed_state').then(res => {
        this.productStatus = res.data
      })
    },
    selectChange(value) {
      this.$set(this.listQuery, 'category', value[0])
      this.$set(this.listQuery, 'type', value[1])
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    getList() {
      this.loading = true
      getProductList(this.listQuery).then(res => {
        this.tableData = res.page.list
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    parseTime(time) {
      return parseTime(new Date(time), '{y}-{m}-{d}')
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
.my-table {
  width: 100%;
  .filter-container {
    .el-select {
      width: 100%;
    }
    .el-col {
      margin-top: 12px;
    }
  }
  .el-table {
    margin-top: 20px;
    a {
      &:hover {
        color: $mainColor;
      }
    }
    ::v-deep {
      th {
        background-color: #f8f8f8;
      }
    }
  }
}
@media only screen and (max-width:1199px){
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
}
</style>
