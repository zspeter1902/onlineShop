<template>
  <div class="dashboard-container">
    <!-- banner -->
    <banner-content />
    <div class="container-fluid">
      <!-- New Arrivals -->
      <section class="part">
        <index-title slot="title" name="New Arrivals" class="index-title" />
        <lists :lists="arrivalsList" />
        <more slot="more" to="/" />
      </section>
    </div>
    <!-- advantage -->
    <advantage />
  </div>
</template>

<script>
import BannerContent from './components/BannerContent'
import More from './components/More.vue'
import Lists from '@/components/Lists'
import IndexTitle from '@/components/Title'
import Advantage from './components/Advantage.vue'
export default {
  name: 'Login',
  components: { BannerContent, More, IndexTitle, Lists, Advantage },
  data() {
    return {
      arrivalsList: [
        {
          id: 1,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          type: 'custom-index'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  .part {
    margin: 100px 0;
  }
  .index-title {
    margin-bottom: 60px;
  }
}

@media only screen and (max-width:1199px){
}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){
}
</style>
