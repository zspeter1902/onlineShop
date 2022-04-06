<template>
  <el-row type="flex" justify="center">
    <router-link :to="to" class="more text-center font-medium">
      Shop more
    </router-link>
  </el-row>
</template>

<script>

export default {
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.more {
  margin: 60px auto 0;
  padding: 10px 32px;
  border: 1px solid $mainColor;
  line-height: 24px;
  color: #fff;
  border-radius: 5px;
  background-color: $mainColor;
  &:hover {
    box-shadow: 0 0 0 3px $mainColor;
  }
}
@media only screen and (max-width: 1279px) {
  .more {
    margin-top: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .more {
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
