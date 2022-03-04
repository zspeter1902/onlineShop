<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) of tabs" :key="item.id" :label="item.dictName" :name="'tab' + index">
      <keep-alive>
        <news-tap parent="cross_news" :current="item.dictCode" />
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { getDictListFilter } from '@/api/global'
import NewsTap from './NewsTap.vue'
export default {
  components: { NewsTap },
  // 定义属性
  data() {
    return {
      activeName: 'tab0',
      tabs: [
      ]
    }
  },
  // 方法集合
  created() {
    this.getTabs()
  },
  methods: {
    getTabs() {
      getDictListFilter({ dictParentCode: 'cross_news' }).then(res => {
        if (res.data.length) {
          this.tabs = res.data
        }
      })
    },
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

::v-deep {
  .el-tabs__header {
    background-color: $mainColor;
  }
  .el-tabs__item {
    min-width: 200px;
    height: 55px;
    font-size: 18px;
    line-height: 55px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
    &.is-active {
      color: #000;
      background-color: $helpColor;
    }
  }
  .el-tabs__nav-wrap {
    max-width: 1200px;
    width: 92%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (max-width:1399px){
  ::v-deep {
    .el-tabs__item {
      min-width: 180px;
      height: 50px;
      line-height: 50px;
    }
  }
}
@media only screen and (max-width:1199px){
  ::v-deep {
    .el-tabs__item {
      min-width: 150px;
      height: 46px;
      font-size: 16px;
      line-height: 46px;
    }
  }
}
@media only screen and (max-width:991px){
  ::v-deep {
    .el-tabs__item {
      min-width: 116px;
      height: 42px;
      line-height: 42px;
    }
  }
}
@media only screen and (max-width:767px){
  ::v-deep {
    .el-tabs__item {
      min-width: 70px;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
