<template>
  <div class="cart-container">
    <div class="page-position text-center">
      <global-title name="Shopping Cart" small />
      <breadcrumb />
    </div>
    <div class="container cart-wrapper">
      <cart-list-form :list="lists" />
    </div>
    <!-- 最近浏览的产品 -->
    <good-history small />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
import CartListForm from './components/CartListForm.vue'
import GoodHistory from '../collections/components/GoodHistory.vue'
export default {
  name: 'MyCart',
  components: { Breadcrumb, globalTitle, CartListForm, GoodHistory },
  data() {
    return {
      lists: [
        {
          id: 1,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          quantity: 1,
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...',
          gender: 'Men\'s',
          size: 'L',
          type: 'Printed',
          addPrice: '7.99'
        },
        {
          id: 2,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          quantity: 1,
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...',
          addPrice: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';
.cart-container {
  position: relative;
  overflow: hidden;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  .cart-wrapper {
    padding-bottom: 80px;
  }
}
@media only screen and (max-width:1199px){
  .cart-container {
  }
}
@media only screen and (max-width:991px){
  .cart-container {
  }
}
@media only screen and (max-width:767px){
  .cart-container {
  }
}
</style>
