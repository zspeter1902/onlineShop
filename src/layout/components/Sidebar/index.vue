<template>
  <div class="container-fluid">
    <el-row
      type="flex"
      align="middle"
      justify="space-between"
      class="flex-wrap"
    >
      <!-- horizontal vertical -->
      <!-- :collapse="isCollapse" -->
      <!-- device === 'mobile' ? 'vertical' : 'horizontal' -->
      <el-col :md="18" :lg="16">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            ref="customMenu"
            :default-active="activeMenu"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
            :collapse-transition="false"
            :mode="'horizontal'"
          >
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :show-icon="false" :base-path="route.path" @back="onCloseSubmenu" />
          </el-menu>
        </el-scrollbar>
      </el-col>
      <el-col :md="6" :lg="8">
        <operate v-if="device !== 'mobile'" />
        <account v-else />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Operate from './Operate'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { menuRoutes } from '@/router'
import path from 'path'
export default {
  components: { SidebarItem, Operate, Account: () => import('@/views/account/components/Account') },
  computed: {
    ...mapGetters([
      'sidebar',
      'device'
    ]),
    routes() {
      const customRoute = []
      customRoute.push(menuRoutes[0])
      for (const item of menuRoutes[1].children) {
        customRoute.push({
          ...item,
          path: path.resolve(menuRoutes[1].path, item.path)
        })
      }
      return customRoute
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
  },
  methods: {
    onCloseSubmenu(i) {
      this.$refs.customMenu.close(i)
    }
  }
}
</script>
<style lang="scss" scoped>
  .container-fluid {
    .el-row {
      margin: 0 -16px;
    }
  }
</style>
