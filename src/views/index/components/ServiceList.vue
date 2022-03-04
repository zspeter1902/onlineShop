<template>
  <div class="container">
    <!-- 服务功能 -->
    <!-- <el-row type="flex" tag="ul" align="middle" justify="center" :gutter="110" class="banner-nav text-center">
      <el-col v-for="item of navList" :key="item.menuId" :span="6" tag="li">
        <el-link v-if="!isOver(item.name)" class="block single" :underline="false" @click="toServiceRouter(item)">
          <h5>{{ item.name }}</h5>
          <i class="el-icon-office-building" />
        </el-link>
        <div v-else class="box">
          <el-link v-for="child of item.list" :key="child.menuId" class="block seas" :underline="false" @click="toSeasRouter(child)">{{ child.name }}</el-link>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  // 定义属性
  computed: {
    // navList({ $store }) {
    //   return $store.getters.navList
    // }
  },
  // 方法集合
  methods: {
    isOver(name = '') {
      return name.includes('海外仓')
    },
    toServiceRouter(item) {
      this.$router.push({
        path: '/service/list',
        query: {
          id: item.menuId
        }
      })
    },
    toSeasRouter(item) {
      if (item.name === '列表抢仓') {
        this.$router.push('/overseas/index')
      } else {
        this.$router.push('/overseas/map')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.container {
  // padding: 70px 0 80px;
  padding: 40px 0;
}
.banner-nav {
  line-height: 40px;
  // color: #fff;
  user-select: none;
  li {
    .el-link {
      &.single {
        position: relative;
        max-width: 150px;
        max-height: 150px;
        padding: 20px 20px 8px;
        border: 2px solid #969696;
        margin: 0 auto;
        border-radius: 5px;
        color: $mainColor;
        overflow: hidden;
        z-index: 1;
        &:hover {
          border-color: $mainColor;
          background-color: $mainColor;
          color: #fff;
        }
      }
    }
    .box {
      max-width: 150px;
      margin: 0 auto;
      border-radius: 5px;
      color: $mainColor;
      overflow: hidden;
      box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: .3);
      .seas {
        height: 75px;
        line-height: 75px;
        font-size: 16px;
        z-index: 1;
        &:first-child {
          color: #fff;
          background-color: $mainColor;
        }
        &:last-child {
          color: #333;
          background-color: $helpColor;
        }
        &::before {
          content: "";
          position: absolute;
          left: -50%;
          width: 200%;
          height: 100%;
          background-image:
              linear-gradient(to right, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 70%);
          background-size: 200%;
          background-position: -50% 0;
          transform: skewX(50deg);
          transition: background-position .5s;
          z-index: -1;
        }
        &:hover::before {
          background-position: 100% 0;
        }
      }
    }
    h5 {
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 28px;
    }
    i {
      font-size: 72px;
    }
  }
}

@media only screen and (max-width:1199px){
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
  .banner-container {
    padding: 30px 0;
    overflow: hidden;
  }
}
</style>
