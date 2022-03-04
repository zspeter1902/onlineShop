<template>
  <div class="overseas-container">
    <!-- banner -->
    <banner :banner="banner" />
    <div v-loading="loading" class="container overseas">
      <!-- 关键词检索 search -->
      <el-form ref="form" :model="listQuery" class="search-form">
        <el-form-item prop="wareName">
          <el-input v-model="listQuery.wareName" prefix-icon="el-icon-search" placeholder="请输入海外仓名字" @keyup.enter.native="submitForm('form')">
            <el-button slot="append" v-waves @click.prevent="submitForm('form')">搜索</el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <!-- 选项检索 -->
      <div class="search-select">
        <el-row type="flex" class="select-tab flex-wrap">
          <h5 class="select-title flex-fixed">所在国家地区</h5>
          <el-tabs v-model="activeCountryName" class="flex-auto" @tab-click="handleClickCountry">
            <el-tab-pane label="全部" name="all" />
            <el-tab-pane v-for="(item, index) of tabCountry" :key="item.id" :label="item.dictName" :name="'tab' + (index + 1)">
              <el-radio-group v-model="radio" size="small" :text-color="variables.menuColor" :fill="variables.helpColor" @change="changeCountry">
                <el-radio-button v-for="info of item.children" :key="info.id" :label="info.dictCode">{{ info.dictName }}</el-radio-button>
              </el-radio-group>
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row type="flex" class="select-tab flex-wrap">
          <h5 class="select-title flex-fixed">配套服务</h5>
          <el-tabs v-model="activeServiceName" class="flex-auto" @tab-click="handleClickService">
            <el-tab-pane label="全部" name="all" />
            <el-tab-pane v-for="(item, index) of tabService" :key="item.id" :label="item.dictName" :name="'tab' + (index + 1)">
              <el-checkbox-group v-model="checkbox" size="small" :text-color="variables.menuColor" :fill="variables.helpColor" @change="changeService">
                <el-checkbox-button v-for="info of item.children" :key="info.id" :label="info.dictCode">{{ info.dictName }}</el-checkbox-button>
              </el-checkbox-group>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
      <div class="select-total">已搜索到<span>{{ total }}</span>个海外仓</div>
      <!-- 列表 -->
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col v-for="item of lists" :key="item.id" :lg="6" :md="8" :sm="12">
          <card :info="item" :map="unitMap" />
        </el-col>
      </el-row>
      <pagination
        v-show="total>listQuery.limit"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        layout="prev, pager, next"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import Card from './components/Card.vue'
import Banner from '@/components/Banner'
import waves from '@/directive/waves/index.js' // 水波纹指令
import variables from '@/styles/variables.scss'
import { getWarehouse } from '@/api/company'
import { getDictList, getDictMap } from '@/api/global'
export default {
  name: 'Overseas',
  components: { Card, Banner, Pagination },
  directives: {
    waves
  },
  data() {
    return {
      loading: false,
      banner: require('img/overseas-banner.jpg'),
      activeCountryName: 'all',
      radio: '',
      activeServiceName: 'all',
      checkbox: [],
      total: 3,
      listQuery: {
        page: 1,
        limit: 12,
        wareName: ''
      },
      lists: [],
      tabCountry: [],
      tabService: [],
      unitMap: {}
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  created() {
    this.getMap()
    this.getList()
  },
  methods: {
    getMap() {
      const costStandard = getDictMap('cost_standard')
      const serviceList = getDictList('warehouse_service')
      const countryList = getDictList('warehouse_country_area')
      Promise.all([costStandard, serviceList, countryList]).then(res => {
        this.unitMap = res[0].data
        this.tabService = res[1].list[0].children
        this.tabCountry = res[2].list[0].children
      })
    },
    getList() {
      this.loading = true
      getWarehouse(this.listQuery).then(res => {
        this.lists = res.page.list
        this.total = res.page.totalCount
        this.loading = false
      })
    },
    handleClickCountry(tab, event) {
      if (tab.name === 'all') {
        this.radio = ''
      }
    },
    handleClickService(tab, event) {
      if (tab.name === 'all') {
        this.checkbox = []
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.getList()
        }
      })
    },
    changeCountry(label) {
      console.log(label)
    },
    changeService(label) {
      console.log(label)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';
$bg: #fff;
$dark_gray: #333;
$cursor: #283443;
.search-form {
  padding: 6px 0;
  margin-bottom: 16px;
  .el-form-item {
    margin-bottom: 0;
  }
  .el-input {
    height: 48px;
    font-size: 16px;
    ::v-deep {
      .el-input__inner {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 30px 0 0 30px;
        color: $dark_gray;
        padding: 0 26px;
        height: 48px;
        caret-color: $cursor;
        user-select: none;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
      .el-input-group__append {
        border: none;
        color: #fff;
        background-color: $mainColor;
        border-radius: 0;
        padding: 0 15px;
        .el-button {
          letter-spacing: .2em;
        }
      }
    }
  }
  ::v-deep {
    .el-input--prefix {
      .el-input__inner {
        padding-left: 48px;
      }
      .el-input__prefix {
        font-size: 16px;
      }
      .el-input__icon {
        line-height: 48px;
      }
    }
    .el-form-item__error {
      font-size: 16px;
      padding-top: 0;
      line-height: 48px;
      top: 0;
      right: 100px;
      left: auto;
      user-select: none;
    }
  }
}
.search-select {
  padding: 34px 24px 20px;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: #fafafa;
  .select-tab {
    margin-bottom: 20px;
  }
  .select-title {
    width: 150px;
    font-size: 14px;
    line-height: 50px;
  }
  ::v-deep {
    .el-tabs {
      width: 100%;
      padding: 0 20px;
      background-color: #f8f8f8;
    }
    .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding-left: 15px;
    }
    .el-tabs--top .el-tabs__item.is-top:last-child {
        padding-right: 15px;
    }
    .el-tabs__nav-wrap::after {
      display: block;
      background-color: $helpColor;
    }
    .el-tabs__active-bar {
      background-color: $mainColor;
    }
    .el-tabs__item {
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      font-size: 14px;
    }

    .el-tabs__header {
      margin-bottom: 10px;
    }
    .el-radio-button, .el-checkbox-button {
      margin-right: 15px;
      // margin-bottom: 5px;
    }
    .el-radio-button__inner, .el-checkbox-button__inner {
      // min-width: 120px;
      border: none;
      background-color: transparent;
      &:hover {
        color: $mainColor;
      }
    }
    .el-checkbox-button--small .el-checkbox-button__inner,
    .el-radio-button--small .el-radio-button__inner {
      font-size: 14px;
      border-radius: 2px;
    }
  }
}
.select-total {
  margin-bottom: 20px;
  line-height: 22px;
  span {
    margin: 0 4px;
    color: $mainColor;
  }
}
.overseas-container {
  .overseas {
    padding: 40px 0;
  }
  .card-hover {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width:1199px){
  .search-form {
    .el-input {
      height: 42px;
      ::v-deep {
        .el-input__inner {
          height: 42px;
        }
      }
    }
    ::v-deep {
      .el-input--prefix {
        .el-input__icon {
          line-height: 42px;
        }
      }
      .el-form-item__error {
        line-height: 42px;
      }
    }
  }
  .search-select {
    padding: 30px 24px 20px;
    .select-title {
      width: 130px;
      line-height: 48px;
    }
    ::v-deep {
      .el-tabs__item {
        height: 48px;
        line-height: 48px;
      }

      .el-tabs__header {
        margin-bottom: 8px;
      }
    }
  }
  .overseas-container {
    .overseas {
      padding: 36px 0;
    }
  }
}
@media only screen and (max-width:991px){
  .search-form {
    .el-input {
      height: 40px;
      ::v-deep {
        .el-input__inner {
          height: 40px;
        }
      }
    }
    ::v-deep {
      .el-input--prefix {
        .el-input__icon {
          line-height: 40px;
        }
      }
      .el-form-item__error {
        line-height: 40px;
      }
    }
  }
  .search-select {
    padding: 24px 20px 15px;
    .select-title {
      width: 100px;
      line-height: 46px;
    }
    .select-tab {
      margin-bottom: 15px;
    }
    ::v-deep {
      .el-tabs__item {
        height: 46px;
        line-height: 46px;
      }

      .el-tabs__header {
        margin-bottom: 6px;
      }
    }
  }
  .overseas-container {
    .overseas {
      padding: 30px 0;
    }
  }
}
@media only screen and (max-width:767px){
  .search-form {
    margin-bottom: 10px;
    .el-input {
      height: 36px;
      ::v-deep {
        .el-input__inner {
          padding: 0 20px;
          height: 36px;
        }
        .el-input-group__append {
          padding: 0 12px;
        }
      }
    }
    ::v-deep {
      .el-input--prefix {
        .el-input__inner {
          padding-left: 32px;
        }
        .el-input__icon {
          line-height: 36px;
        }
      }
      .el-form-item__error {
        line-height: 36px;
        right: 76px;
      }
    }
  }
  .search-select {
    padding: 15px 15px;
    margin-bottom: 10px;
    .select-tab {
      margin-bottom: 10px;
    }
    .select-title {
      width: 100%;
      line-height: 42px;
    }
    ::v-deep {
      .el-tabs {
        padding: 0 0px;
      }
      .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
          padding-left: 10px;
      }
      .el-tabs--top .el-tabs__item.is-top:last-child {
          padding-right: 10px;
      }
      .el-tabs__item {
        height: 42px;
        line-height: 42px;
        padding: 0 10px;
      }

      .el-tabs__header {
        margin-bottom: 5px;
      }
      .el-radio-button, .el-checkbox-button {
        margin-right: 10px;
      }
    }
  }
  .select-total {
    margin-bottom: 10px;
  }
  .overseas-container {
    .overseas {
      padding: 24px 0;
    }
    .card-hover {
      margin-bottom: 15px;
    }
  }
}
</style>
