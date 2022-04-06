<template>
  <section class="advantage-box">
    <div class="container-fluid">
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col :lg="6" :md="12" :sm="24" class="advantage-item">
          <el-row type="flex" align="middle" class="flex-nowrap">
            <div class="flex-fixed advantage-icon" />

            <div class="flex-auto">
              <h3 class="advantage-title font-medium">Free Shipping</h3>
              <div class="advantage-info">
                <p>Tell about your service.</p>
              </div>
            </div>
          </el-row>
        </el-col>
        <el-col :lg="6" :md="12" :sm="24" class="advantage-item">
          <el-row type="flex" align="middle" class="flex-nowrap">
            <div class="flex-fixed advantage-icon" />

            <div class="flex-auto">
              <h3 class="advantage-title font-medium">Money Guarantee</h3>
              <div class="advantage-info">
                <p>Within 30 days for an exchange.</p>
              </div>
            </div>
          </el-row>
        </el-col>
        <el-col :lg="6" :md="12" :sm="24" class="advantage-item">
          <el-row type="flex" align="middle" class="flex-nowrap">
            <div class="flex-fixed advantage-icon" />

            <div class="flex-auto">
              <h3 class="advantage-title font-medium">Online Support</h3>
              <div class="advantage-info">
                <p>24 hours a day, 7 days a week</p>
              </div>
            </div>
          </el-row>
        </el-col>
        <el-col :lg="6" :md="12" :sm="24" class="advantage-item">
          <el-row type="flex" align="middle" class="flex-nowrap">
            <div class="flex-fixed advantage-icon" />

            <div class="flex-auto">
              <h3 class="advantage-title font-medium">Flexible Payment</h3>
              <div class="advantage-info">
                <p>Pay with Multiple Credit Cards</p>
              </div>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  // 定义属性
  data() {
    return {}
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.advantage-box {
  padding-top: 45px;
  padding-bottom: 15px;
  border-top: 1px solid #eee;
  .container-fluid {
    max-width: 1200px;
    padding: 0 16px;
  }
  .advantage-item {
    padding-bottom: 30px;
  }
  .advantage-icon {
    width: 30px;
    margin-right: 20px;
  }
  .advantage-title {
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 26px;
  }
  .advantage-info {
    color: $grayLinkColor;
  }
}
@media only screen and (min-width: 1536px) {
  .advantage-box {
    .container-fluid {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
@media only screen and (max-width: 576px) {
  .advantage-box {
    .advantage-icon {
      width: 28px;
      margin-right: 10px;
    }
    .advantage-title {
      margin-bottom: 2px;
      font-size: 18px;
    }
  }
}
</style>
