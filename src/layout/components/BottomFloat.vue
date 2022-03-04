<template>
  <transition name="fade">
    <div v-show="visible" ref="float" class="float-container">
      <el-link v-for="(item, index) of lists" :key="index" class="item text-center" :underline="false" @click.prevent="goBack">
        <i :class="item.icon" />
      </el-link>
    </div>
    <!-- TODO: 意见反馈 或 在线客服 -->
  </transition>

</template>

<script>
export default {
  // 定义属性
  props: {
    backPosition: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: false,
      lists: [
        {
          title: '返回顶部',
          icon: 'el-icon-caret-top' // el-icon-arrow-up el-icon-caret-top
        }
      ],
      isMoving: false,
      interval: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollToTop)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  // 方法集合
  methods: {
    scrollToTop() {
      this.visible = window.pageYOffset > window.outerHeight / 3
    },
    goBack() {
      if (this.isMoving) return
      const start = window.pageYOffset
      let i = 0
      this.isMoving = true
      // 实现滚动效果
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition)
          clearInterval(this.interval)
          this.isMoving = false
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 16.7)
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * (--t * (t - 2) - 1) + b
    }
  }
}
</script>

<style lang="scss" scoped>
.float-container {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 3001;
  .item {
    display: block;
    width: 60px;
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: .08);
  }
}
@media only screen and (max-width:1199px){
  .float-container {
    bottom: 80px;
    .item {
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
    }
  }
}

@media only screen and (max-width:767px){
  .float-container {
    bottom: 60px;
    .item {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
    }
  }
}
</style>
