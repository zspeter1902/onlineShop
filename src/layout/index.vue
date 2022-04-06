<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <top-info />
    <div class="main-container">
      <div class="nav-container" :class="[{'fixed-header':fixedHeader }, scrollDir]">
        <el-row type="flex" justify="space-between" align="middle" class="hidden-md-and-up">
          <hamburger :is-active="sidebar.opened" class="hamburger-container " @toggleClick="toggleSideBar" />
          <operate />
        </el-row>
        <sidebar v-if="isSize" class="sidebar-container" />
      </div>
      <app-main />
    </div>
    <site-footer />
    <bottom-float />
  </div>
</template>

<script>
import { BottomFloat, TopInfo, Sidebar, AppMain, SiteFooter } from './components'
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  components: {
    BottomFloat,
    TopInfo,
    Sidebar,
    AppMain,
    Operate: () => import('./components/Sidebar/Operate'),
    Hamburger: () => import('@/components/Hamburger'),
    SiteFooter
  },
  mixins: [ResizeMixin],
  data() {
    return {
      isSize: true,
      scrollTop: 0,
      top: 82,
      scrollDir: '',
      oldTop: 0,
      fixedHeader: false
    }
  },
  computed: {
    sidebar({ $store }) {
      return $store.state.app.sidebar
    },
    device({ $store }) {
      this.initSidebar()
      return $store.state.app.device
    },
    // fixedHeader({ $store }) {
    //   return $store.state.settings.fixedHeader
    // },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened, // !this.sidebar.opened
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    initSidebar() {
      this.isSize = false
      this.$nextTick(() => {
        this.isSize = true
      })
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scrollStep = this.scrollTop - this.oldTop
      this.oldTop = this.scrollTop
      if (this.device === 'mobile') {
        this.fixedHeader = false
        this.scrollDir = ''
        return
      }
      if (this.scrollTop > this.top) {
        this.fixedHeader = true
        if (scrollStep < 0) {
          // 向上滚动
          this.scrollDir = 'scroll-up'
        }
        if (this.scrollTop > this.top + 80) {
          if (scrollStep >= 0) {
            // 向下滚动
            this.scrollDir = 'scroll-down'
          }
        }
      } else {
        this.fixedHeader = false
        this.scrollDir = ''
      }
    }

  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
    .hamburger-container {
      line-height: normal;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .nav-container {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    transition: transform .4s,background-color .2s, top .2s;
    // will-change: transform,background-color;
    background-color: #fff;
    z-index: 2000;
    &.scroll-down {
      transform: translateY(-100%);
      will-change: transform,background-color;
    }
    &.scroll-up {
      transform: none;
      box-shadow: 0 4px 20px rgba($color: $mainColor, $alpha: .04);
    }
  }
  .fixed-header {
    position: fixed;
    top: 0;
    // right: 0;
    // z-index: 9;
    // width: calc(100% - #{$sideBarWidth});
    // transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    .nav-container {
      ::v-deep {
        .top-operate {
          padding-right: 20px;
        }
      }
    }
  }
</style>
