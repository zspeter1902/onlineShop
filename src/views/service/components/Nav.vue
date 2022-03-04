<template>
  <nav class="service-nav">
    <div class="container">
      <el-scrollbar ref="scroll" class="service-scroll">
        <el-row type="flex" tag="ul">
          <li v-for="item of navList" :key="item.menuId" class="nav-item flex-fixed" :class="{ active: activeMenu(item)}">
            <el-link :underline="false" class="nav-link" @click="onTap(item)">{{ item.name }}</el-link>
          </li>
        </el-row>
      </el-scrollbar>
    </div>
  </nav>
</template>

<script>
// import serviceRouter from '@/router/modules/service'
export default {
  data() {
    return {
      active: null
    }
  },
  computed: {
    navList({ $store }) {
      const list = $store.getters.navList.filter(item => ['功能服务'].includes(item.name))
      return list[0].list
      // const list = serviceRouter.children
      // return list.slice(2)
    },
    firstId({ navList }) {
      return navList[0] && navList[0].menuId
    },
    activeId({ $route }) {
      return +$route.query.id
    }
  },
  created() {
    this.active = this.activeId || this.firstId
  },
  mounted() {
    // 初始项
    this.navList.map(item => {
      const isHave = item.menuId === this.active || item.list.some(item => item.menuId === this.active)
      if (isHave) {
        this.$EventBus.$emit('nav', item)
        this.$emit('nav', item)
      }
    })
  },
  // 方法集合
  methods: {
    activeMenu(item) {
      return item.menuId === this.active || item.list.some(item => item.menuId === this.active)
    },
    onTap(item, index) {
      this.active = item.menuId
      this.$EventBus.$emit('nav', item)
      this.$emit('nav', item)
      this.scroll(index)
    },
    scroll(index) {
      this.$refs['scroll'].wrap.scrollLeft = 104 * (index - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.service {
  &-nav {
    height: 58px;
    background-color: #fff;
    box-shadow: 0px 1px 5px rgba($color: #000000, $alpha: .1);
    overflow: hidden;
  }
  &-scroll {
    height: 75px;
    width: 100%;
    .nav-item {
      display: inline-block;
      &.active {
        .nav-link {
          color: $mainColor;
          &::after {
            width: 120%;
          }
        }
      }
    }
    .nav-link {
      padding: 20px 0px;
      margin-right: 40px;
      color: #666;
      font-size: 16px;
      user-select: none;
      transition: .3s ease;
      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        transform: translateX(-50%);
        background-color: $mainColor;
        transition: .3s ease;
      }
      &:hover {
        color: $mainColor;
      }
    }
  }
}
</style>
