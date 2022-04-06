<template>
  <div class="top-info">
    <el-row v-if="showTip" type="flex" align="middle" class="top-tips bg-red text-center">
      <span class="flex-auto top-tips-content">Free Delivery Worldside. Don’t Miss Your First Order 10% Off, Use Code: First10</span>
      <div class="flex-fixed top-tips-close" @click="onCloseTip">
        <i class="el-icon-close" />
      </div>
    </el-row>
    <el-row v-if="device!=='mobile'" type="flex" align="middle" class="container-fluid">
      <el-col :md="11" :lg="10">
        <el-row type="flex" align="middle">
          <el-link class="no-hover" href="mailto: service@mynamecustom.com" :underline="false">
            <svg-icon icon-class="message" />
            <span>service@mynamecustom.com</span>
          </el-link>
          <el-row type="flex" align="middle">
            <el-link
              target="_blank"
              :underline="false"
              href="https://www.facebook.com/Mynamecustomstore/?ref=pages_you_manage"
              rel="noreferrer"
            >
              <svg-icon icon-class="facebook" />
              <span>3k Followers</span>
            </el-link>
            <el-link
              target="_blank"
              :underline="false"
              href="https://www.instagram.com/mynamecustom_official/"
              rel="noreferrer"
            >
              <svg-icon icon-class="instagram" />
              <span>2k Followers</span>
            </el-link>
          </el-row>
        </el-row>
      </el-col>
      <el-col :md="13" :lg="11">
        <el-row type="flex" align="middle"><span>Free Delivery Worldside. | <el-link :underline="true" class="no-padding" href="" style="vertical-align: top;">Don’t Miss Your First Order 10% Off, Use  Code: First10.</el-link></span></el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: true
    }
  },
  computed: {
    device({ $store }) {
      return $store.getters.device
    }
  },
  watch: {
    $route(newVal, oldVal) {
      this.showTip = newVal.path === '/index'
    }
  },
  methods: {
    onCloseTip() {
      this.showTip = false
      this.$EventBus.$emit('closeTopTip')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.container-fluid {
  flex-wrap: wrap;
  padding-top: 5px;
  padding-bottom: 5px;
  svg {
    display: inline-block;
    width: 16px;
    height: 16px;
    max-height: 16px;
    margin-right: 5px;
    vertical-align: middle;
  }
}
.top-tips {
  padding-left: 16px;
  line-height: 16px;
  color: $whiteColor;
  &-content {
    padding: 10px 0;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
  }
  &-close {
    padding: 10px 12px;
    font-size: 20px;
    cursor: pointer;
  }
}
.top-info {
  color: $mainColor;
  font-size: 15px;
  line-height: 30px;
  border-bottom: 1px solid $grayBorderColor;
  white-space: nowrap;
}
.el-link {
  padding: 0 16px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  &.is-underline::after {
    bottom: 8px;
  }
  &.no-padding {
    padding: 0;
  }
  &.no-hover {
    padding-left: 0;
    &:hover {
      color: inherit
    }
  }
}
@media only screen and (max-width: 1279px) {
  .el-link {
    padding: 0 12px;
  }
}
@media only screen and (max-width: 1080px) {
  .el-link {
    padding: 0 8px;
  }
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
  .top-info {
    white-space: normal;
  }
}
</style>
