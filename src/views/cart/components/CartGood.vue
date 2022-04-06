<template>
  <el-row type="flex" class="cart-item">
    <el-image class="cart-item-img flex-fixed" :src="item.thumb" fit="cover" />
    <div class="cart-item-info">
      <router-link class="font-medium cart-item-name" to="">{{ item.good_name }}</router-link>
      <ul class="cart-item-options">
        <li>
          <span class="cart-item-label">Gender: </span>
          <span>Men's</span>
        </li>
        <li>
          <span class="cart-item-label">Size (Men's): </span>
          <span>L</span>
        </li>
        <li>
          <span class="cart-item-label">Name &amp; Number Type: </span>
          <span>Printed</span>
        </li>
      </ul>
      <el-link :underline="false" class="cart-item-remove" @click="onRemove">Remove</el-link>
    </div>
  </el-row>

</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  // 定义属性
  data() {
    return {
      num: 0
    }
  },
  // 方法集合
  methods: {
    onRemove() {}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.cart-item {
  font-size: 16px;
  line-height: 24px;
  &-img {
    width: 110px;
    height: 110px;
  }
  &-info {
    padding-left: 24px;
  }
  &-name {
    color: $mainColor;
  }
  &-remove {
    font-size: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color: #000;
    }
  }
}
@media only screen and (max-width: 480px) {
  .cart-item {
    &-img {
      width: 65px;
      height: 65px;
    }
    &-info {
      padding-left: 12px;
    }
  }
}
@media only screen and (max-width: 375px) {
  .cart-item {
    &-img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
