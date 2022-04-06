<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" popper-class="custom-sub-menu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <app-link :to="resolvePath(item.path)">
          <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
        </app-link>
      </template>
      <el-scrollbar class="custom-sub-menu-scrollbar">
        <el-link v-if="device === 'mobile'" :underline="false" class="no-hover custom-back" @click.stop.prevent="onBack(resolvePath(item.path))">
          <svg-icon icon-class="arrow-left" class-name="svg-16" />
          <span class="font font-medium el-icon--right">Back</span>
        </el-link>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-scrollbar>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  computed: {
    device({ $store }) {
      return $store.getters.device
    }
  },
  methods: {
    onBack(index) {
      setTimeout(() => {
        this.$emit('back', index)
      }, 100)
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang="scss">
.custom-sub-menu {
  .el-menu--popup {
    box-shadow: 0 5px 15px rgba($color: #000000, $alpha: .07);
  }
  .el-menu--popup-bottom-start {
    margin-top: 0;
  }
}
@media only screen and (max-width: 1023px) {
  .custom-sub-menu {
    top: 0 !important;
    left: 0 !important;
    max-width: 450px;
    width: 90vw;
    height: 100%;
    .el-menu--popup {
      height: 100%;
      padding: 0;
    }
    .custom-back {
      padding: 16px;
      line-height: 24px;
      font-size: 16px;
    }
    .custom-sub-menu-scrollbar {
      height: 100vh;
      ::v-deep {
        .el-scrollbar__wrap {
          overflow-x: hidden;
        }
      }
    }
    .el-menu .el-menu-item {
      height: 48px;
      padding: 12px 16px;
      line-height: 24px;
      font-size: 16px;
      color: #000;
      opacity: 1;
    }
    .el-menu .el-menu-item:hover,
    .el-menu .el-menu-item:focus {
      background-color: transparent !important;
    }
  }
}
</style>
