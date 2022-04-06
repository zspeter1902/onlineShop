<template>
  <div class="container-fluid register">
    <div class="page-position text-center">
      <global-title name="Register" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center">
      <el-col :xl="6" :lg="8" :md="12" :sm="16" :xs="20">
        <account-register head-title />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
import AccountRegister from './components/AccountRegister.vue'
export default {
  name: 'Register',
  components: { Breadcrumb, globalTitle, AccountRegister },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.register {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
    .title {
      margin-bottom: 12px;
    }
  }
  .register-container {
    padding: 64px 0;
  }
}
@media only screen and (max-width: 1023px) {
  .register {
    .page-position {
      margin-bottom: 32px;
      margin-top: 32px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .register {
     .register-container {
        padding-top: 32px;
        padding-bottom: 32px;
      }
  }
}
</style>
