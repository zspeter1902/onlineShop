<template>
  <div class="container good-comment">
    <div class="good-comment-content">
      <el-row type="flex" justify="space-between" class="good-comment-header">
        <el-rate v-model="rate" allow-half text-color="#000" :colors="colors" show-score score-template="(1)" title="5.0 rating (1 votes)" disabled />
        <!-- <div>
          <el-button plain class="btn header-btn">Write a review</el-button>
        </div> -->
      </el-row>
      <div class="text-center good-comment-tip">Be the first to&nbsp;<el-link>write a review</el-link></div>
    </div>
  </div>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      colors: ['#f5e107', '#f5e107', '#f5e107'],
      rate: 0
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
.good-comment {
  margin-top: 100px;
  margin-bottom: 100px;
  &-content {
    max-width: 1080px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  &-header {
    margin-top: 20px;
    padding: 0 7px 7px;
  }
  &-tip {
    margin-top: 7px;
    .el-link {
      font-size: 16px;
      vertical-align: bottom;
    }
  }
}
</style>
