<template>
  <div class="product-lists-container">
    <component :is="component" v-if="layout" @change="onChange" @layout="onLayout" />
    <el-row type="flex" class="flex-wrap">
      <el-col :xs="xs" :sm="sm" :md="md" :lg="lg">
        <list v-for="item of lists" :key="item.id" :item="item" :single="currentLayout === '1'" />
      </el-col>
    </el-row>
    <template v-if="layout">
      <pagination
        v-show="total>listQuery.limit"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        layout="prev, pager, next"
        @pagination="getList"
      />
    </template>
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  components: {
    List,
    Pagination: () => import('@/components/Pagination'),
    Layout: () => import('./components/Layout.vue')
  },
  props: {
    lists: {
      type: Array,
      default: () => []
    },
    layout: {
      type: Boolean,
      default: false
    }
  },
  // 定义属性
  data() {
    return {
      component: 'Layout',
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12,
      currentLayout: '',
      listQuery: {
        page: 1,
        limit: 1,
        wareName: ''
      },
      total: 30
    }
  },
  computed: {
    isMobile({ $store }) {
      return $store.getters.device === 'mobile'
    }
  },
  created() {
    this.getList()
    this.getLayout()
  },
  // 方法集合
  methods: {
    getLayout() {
      const layout = localStorage.getItem('layout')
      if (layout) {
        this.onLayout(layout)
      }
    },
    getList() {

    },
    onLayout(layout) {
      this.currentLayout = layout
      localStorage.setItem('layout', layout)
      this.lg = 24 / layout
      this.md = 24 / layout
      if (this.isMobile) {
        this.sm = 24 / layout
        this.xs = 24 / layout
      } else {
        if (layout > 2) {
          this.sm = 8
          this.xs = 12
        } else {
          this.sm = 24 / layout
          this.xs = 24 / layout
        }
      }
    },
    onChange(config) {
      // sort 排序方式 product 产品类型 layout 布局
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .el-col-sm-4\.8 {
    width: 20%;
  }
}
@media only screen and (min-width: 1024px) {
  .el-col-md-4\.8 {
    width: 20%;
  }
}
@media only screen and (min-width: 1280px) {
  .el-col-lg-4\.8 {
    width: 20%;
  }
}
</style>
