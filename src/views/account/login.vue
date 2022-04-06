<template>
  <div class="login">
    <div class="page-position text-center">
      <global-title name="Log In" />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="w-full">
      <el-col :xl="12" :lg="16" :md="18" :sm="22">
        <el-row type="flex" class="flex-wrap" :gutter="gutter">
          <el-col :sm="12">
            <account-login head-title />
          </el-col>
          <el-col :sm="12" class="go-register">
            <h3 class="font-medium">New Customer</h3>
            <p>
              Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
            </p>
            <router-link class="el-button btn-register el-button--primary" to="/account/register">Register</router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
import AccountLogin from './components/AccountLogin.vue'
export default {
  name: 'Login',
  components: { Breadcrumb, globalTitle, AccountLogin },
  computed: {
    gutter({ $store }) {
      return $store.getters.device === 'mobile' ? 32 : 80
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.login {
  width: 100%;
  padding: 0 40px 60px;
  .page-position {
    margin-top: 40px;
    margin-bottom: 60px;
    .title {
      margin-bottom: -3px;
    }
  }
  .go-register {
    h3 {
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 32px;
    }
    p {
      margin-bottom: 24px;
      color: $grayLinkColor;
    }
    .btn-register {
      padding: 15px 35px;
    }
  }
}
@media only screen and (max-width: 1535px) {
  .login {
    .page-position {
      margin-bottom: 50px;
    }
  }
}
@media only screen and (max-width: 1279px) {
  .login {
    .page-position {
      margin-bottom: 40px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .login {
    padding: 0 16px 28px;
    .page-position {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .go-register {
      margin-top: 48px;
    }
  }
}
</style>
