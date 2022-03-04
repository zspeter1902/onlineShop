<template>
  <div class="container">
    <el-row
      type="flex"
      align="middle"
      justify="space-between"
      class="flex-wrap"
    >
      <!-- horizontal vertical -->
      <!-- :collapse="isCollapse" -->
      <el-col :span="10">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            :default-active="activeMenu"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
            :collapse-transition="false"
            :mode="device === 'mobile' ? 'vertical' : 'horizontal'"
          >
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :show-icon="false" :base-path="route.path" />
          </el-menu>
        </el-scrollbar>
      </el-col>
      <el-col :span="10">
        <operate />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Operate from './Operate'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Operate },
  computed: {
    ...mapGetters([
      'sidebar',
      'device'
    ]),
    routes({ $router }) {
      return $router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
