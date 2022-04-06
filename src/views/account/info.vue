<template>
  <div class="account-info">
    <div class="page-position text-center">
      <global-title name="My Account" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="account-info-container container-fluid">
      <el-col :sm="22" :md="20">
        <el-row type="flex">
          <el-col :sm="4" :lg="3" class="hidden-xs-only account-info-nav">
            <account-nav />
          </el-col>
          <el-col :sm="20" :lg="21" class="account-info-content">
            <div class="welcome">
              Hello
              <span class="font-semibold">zhang shuai</span>
              (not <span class="font-semibold">zhang shuai</span>?
              <el-link class="no-hover" @click="logout">Log Out</el-link>)
            </div>
            <div class="order-history">
              <h3 class="font-medium">Order History</h3>
              <el-alert
                type="success"
                :closable="false"
              >
                <template slot="title">
                  <!-- <i class="el-icon-check" /> -->
                  <svg-icon icon-class="check" class-name="svg-20" />
                  <router-link class="link font-semibold underline font" to="/collections">Make your first order.</router-link>
                  <span>You haven't placed any orders yet.</span>
                </template>
              </el-alert>
            </div>
            <div class="account-details">
              <h3 class="font-medium">Account Details</h3>
              <el-row type="flex" class="border-bottom account-details-item">
                <el-col>Name</el-col>
                <el-col>
                  <span class="text-color-secondary">zhang shuai</span>
                </el-col>
              </el-row>
              <el-row type="flex" class="border-bottom account-details-item">
                <el-col>Email</el-col>
                <el-col>
                  <span class="text-color-secondary">zspeter@126.com</span>
                </el-col>
              </el-row>
            </div>
            <router-link to="/account/addresses" class="el-button el-button--primary font">
              View Addresses (1)
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
import AccountNav from './components/Nav.vue'
export default {
  name: 'AccountInfo',
  components: { Breadcrumb, globalTitle, AccountNav },
  // 定义属性
  data() {
    return {
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
.underline {
  text-decoration: underline;
}
.account-info {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
    .title {
      margin-bottom: 12px;
    }
  }
  &-container {
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  &-content {
    .welcome {
      // margin-bottom: 10px;
    }
    .el-link {
      font-size: 16px;
    }
    .order-history {
      margin-bottom: 64px;
      h3 {
        margin-bottom: 32px;
        font-size: 24px;
        line-height: 32px;
      }
      .svg-icon {
        vertical-align: middle;
      }
      .link {
        margin: 0 8px;
      }
      .el-alert {
        padding-left: 4px;
        padding-right: 4px;
      }
    }
    .account-details {
      margin-bottom: 64px;
      h3 {
        margin-bottom: 12px;
        font-size: 24px;
        line-height: 32px;
      }
      &-item {
        padding: 20px 0;
      }
    }
    .el-button {
      padding: 14px 32px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .account-info {
    &-content {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .account-info {
    &-content {
      padding-left: 64px;
      padding-right: 64px;
    }
  }
}
@media only screen and (min-width: 1536px) {
  .account-info {
    &-content {
      padding-left: 90px;
      padding-right: 90px;
    }
  }
}
</style>
