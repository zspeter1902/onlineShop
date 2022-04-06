<template>
  <div class="account-component">
    <h2>My Account</h2>
    <template v-if="!isLogin">
      <el-button type="primary" @click="onLogin">Log in</el-button>
      <el-button @click="onRegister">Register</el-button>
    </template>
    <template v-else>
      <router-link to="/account/info" class="el-row is-justify-space-between is-align-middle el-row--flex account-info w-full">
        <el-row type="flex" align="middle" class="account-info-main">
          <svg-icon icon-class="account" class-name="svg-24" />
          <span class="el-icon--right">Zhang</span>
        </el-row>
        <i class="el-icon-arrow-right font-semibold" />
      </router-link>
      <el-button @click="onLogout">Log Out</el-button>
    </template>
    <!-- 弹窗 -->
    <el-drawer :visible.sync="visible" title="" direction="rtl" :modal="false" :show-close="true" :wrapper-closable="false" size="100%" custom-class="account-drawer" @close="closeSidebar">
      <el-tabs v-model="active">
        <el-tab-pane label="Log In" name="login">
          <account-login />
        </el-tab-pane>
        <el-tab-pane label="Register" name="register">
          <account-register />
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
export default {
  components: {
    AccountLogin: () => import('./AccountLogin.vue'),
    AccountRegister: () => import('./AccountRegister.vue')
  },
  data() {
    return {
      visible: false,
      active: 0
    }
  },
  computed: {
    isLogin({ $store }) {
      return !!$store.getters.token
    }
  },
  methods: {
    onLogin() {
      this.active = 'login'
      this.openDrawer()
    },
    onRegister() {
      this.active = 'register'
      this.openDrawer()
    },
    async onLogout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/')
    },
    openDrawer() {
      this.visible = true
    },
    closeDrawer() {
      this.visible = false
    },
    closeSidebar() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.account-component {
  margin-top: 64px;
  margin-bottom: 64px;
  padding: 16px;
  h2 {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  .el-button {
    width: 100%;
    padding: 14px 20px;
    margin-bottom: 12px;
    border-color: #000;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    & + .el-button {
      margin-left: 0;
    }
    &--default {
      &:focus, &:hover {
        color: #fff;
        background-color: $mainColor;
        box-shadow: 0 0 0 3px $mainColor;
      }
    }
  }
  .account-info {
    padding: 12px 0;
    margin-bottom: 12px;
    font-size: 16px;
    color: $mainColor;
    span {
      font-family: "SF-Body-font" !important;
    }
    i {
      font-size: 20px;
    }
  }
  ::v-deep {
    .account-drawer {
      padding: 16px 16px 40px;
    }
    .el-drawer__header {
      margin-bottom: 0;
      padding: 0;
      color: $mainColor;
      .el-dialog__close {
        font-weight: 700;
      }
    }
    .el-tabs__header {
      margin: 8px 0;
    }
    .el-tabs__content {
      margin-top: 22px;
    }
    .el-tabs__item {
      padding: 0 8px;
      color: #6b7280;
      &:hover, &.is-active {
        color: $mainColor;
      }
    }
    .el-tabs__nav {
      padding-bottom: 2px;
    }
    .el-tabs__active-bar {
      background-color: $mainColor;
    }
  }
}
</style>
