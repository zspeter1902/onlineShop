<template>
  <el-row type="flex" class="cart-item">
    <router-link class="flex-fixed" to="">
      <el-image class="cart-item-img" :src="item.thumb" fit="cover" />
    </router-link>
    <div class="cart-item-info">
      <router-link class="font-medium cart-item-name" to="">{{ item.good_name }}</router-link>
      <div class="cart-item-price">${{ item.price }}</div>
      <el-row type="flex" align="middle">
        <el-input-number v-model="num" step-strictly :min="1" :max="10" :step="1" />
        <el-link class="el-icon--right cart-item-remove" @click="onRemove">Remove</el-link>
      </el-row>
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
    onRemove() {

    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
  line-height: 24px;
  &-img {
    width: 110px;
    height: 110px;
    border: 1px solid #dedede;
  }
  &-info {
    padding-left: 16px;
  }
  &-remove {
    font-size: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color: #000;
    }
  }
  &-name {
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
  &-price {
    margin-bottom: 10px;
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
