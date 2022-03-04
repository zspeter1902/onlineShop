<template>
  <div class="need">
    <dl>
      <dt class="need-title">{{ title }}</dt>
      <dd v-for="item of lists" :key="item.id" class="need-item">
        <router-link class="need-link" :to="'/service/need-detail/' + item.id">{{ item.title }}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>

export default {
  components: {
  },
  // 定义属性
  data() {
    return {
      title: '需求推荐',
      active: 0,
      lists: [
        // {
        //   id: 1,
        //   title: '中东专线海外仓可供跨境卖家仓储',
        //   desc: ''
        // },
        // {
        //   id: 2,
        //   title: '中东专线海外仓可供跨境卖家仓储',
        //   desc: ''
        // },
        // {
        //   id: 3,
        //   title: '中东专线海外仓可供跨境卖家仓储',
        //   desc: ''
        // }
      ]
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 方法集合
  methods: {
    onTap(item) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
@import '~@/styles/mixin';
.need {
  margin-bottom: 30px;
  padding: 10px 20px 20px;
  border: 1px solid #e5e5e5;
  border-top: 2px solid $mainColor;
  background-color: #fff;
}
.need-title {
  margin-bottom: 10px;
  font-size: 18px;
  color: $mainColor;
  line-height: 38px;
  font-weight: bold;
}
.need-link {
  position: relative;
  font-size: 14px;
  line-height: 24px;
  transition: .3s ease;
  @include ellipsis;
  &:hover {
    color: $mainColor;
  }
}
.need-item {
  margin-bottom: 10px;
}
</style>
