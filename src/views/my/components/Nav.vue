<template>
  <nav class="service-nav hidden-sm-and-down">
    <el-menu
      :default-active="activeMenu"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item-component v-for="route of navList" :key="route.path" :item="route" :base-path="'/my/info/' + route.path" />
    </el-menu>
  </nav>
</template>

<script>
import userRouter from '@/router/modules/user'
import variables from '@/styles/variables.scss'
import SidebarItemComponent from '@/layout/components/Sidebar/SidebarItemComponent.vue'
export default {
  components: { SidebarItemComponent },
  computed: {
    navList() {
      return userRouter.children[0].children
    },
    variables() {
      return variables
    },
    activeMenu({ $route }) {
      const { meta, path } = $route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    basePath({ $route }) {
      return $route.path
    }
  },
  mounted() {
  },
  // 方法集合
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.service {
  &-nav {
    width: 200px;
    overflow: hidden;
  }
}
@media only screen and (max-width:991px){
  .service {
    &-nav {
      width: 160px;
    }
  }
}
</style>
