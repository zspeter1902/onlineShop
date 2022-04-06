<template>
  <el-row type="flex" class="flex-wrap" :gutter="30">
    <!-- 产品图轮播 -->
    <el-col :sm="12">
      <good-swiper :slides="product.images" />
    </el-col>
    <!-- 产品信息 -->
    <el-col :sm="12">
      <good-option :info="product" />
    </el-col>
  </el-row>
</template>

<script>
import GoodOption from './GoodOption.vue'
import GoodSwiper from './GoodSwiper.vue'

export default {
  components: {
    GoodSwiper,
    GoodOption
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  // 定义属性
  data() {
    return {
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
