<template>
  <div class="top-info">
    <el-row v-if="showTip" type="flex" align="middle" class="top-tips bg-red text-center">
      <span class="flex-auto top-tips-content">Free Delivery Worldside. Don’t Miss Your First Order 10% Off, Use Code: First10</span>
      <div class="flex-fixed top-tips-close" @click="onCloseTip">
        <i class="el-icon-close" />
      </div>
    </el-row>
    <el-row v-if="device!=='mobile'" type="flex" align="middle" class="container">
      <el-col :span="8">
        <el-row type="flex" align="middle">
          <el-link class="no-hover" href="mailto: service@mynamecustom.com" :underline="false">
            <svg class="w-[16px] h-[16px]" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
            <span>service@mynamecustom.com</span>
          </el-link>
          <el-row type="flex" align="middle">
            <el-link
              target="_blank"
              :underline="false"
              href="https://www.facebook.com/Mynamecustomstore/?ref=pages_you_manage"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              <span>3k Followers</span>
            </el-link>
            <el-link
              target="_blank"
              :underline="false"
              href="https://www.instagram.com/mynamecustom_official/"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              <span>2k Followers</span>
            </el-link>
          </el-row>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row type="flex" align="middle" justify="center"><span>Free Delivery Worldside. | <el-link :underline="true" class="no-padding" href="">Don’t Miss Your First Order 10% Off, Use  Code: First10.</el-link></span></el-row>
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
  methods: {
    onCloseTip() {
      this.showTip = false
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
.container {
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
}
.el-link {
  padding: 0 16px;
  &.is-underline::after {
    bottom: 8px;
  }
  &.no-padding {
    padding: 0;
  }
  &.no-hover:hover {
    color: inherit
  }
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
}
</style>
