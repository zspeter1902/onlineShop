<template>
  <div class="account-info-nav">
    <router-link to="/account/info" class="block el-link el-link--info" :class="{'active': path === '/account/info'}">Dashboard</router-link>
    <router-link to="/account/addresses" class="block el-link el-link--info" :class="{'active': path === '/account/addresses'}">Addresses</router-link>
    <el-link type="info" :underline="false" class="block" @click="logout">Log Out</el-link>
  </div>
</template>

<script>

export default {
  // 定义属性
  computed: {
    path({ $route }) {
      return $route.path
    }
  },
  // 方法集合
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.account-info {
  &-nav {
    border-right: 1px solid #dedede;
    .el-link {
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 400;
      &.active {
        color: $mainColor;
        font-weight: 600;
      }
    }
  }
}

</style>
