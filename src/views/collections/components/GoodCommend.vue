<template>
  <div class="commend-lists-container">
    <div class="container-fluid">
      <h2 class="text-center">You Might Also Like</h2>
      <swiper v-if="lists.length" ref="mySwiper" class="swiper" :options="swiperOptions">
        <swiper-slide v-for="item of lists" :key="item.id">
          <list :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import List from '@/components/Lists/components/List'
export default {
  components: {
    Swiper,
    SwiperSlide,
    List
  },
  // 定义属性
  data() {
    return {
      swiperOptions: {
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1.5
          },
          481: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          }
        }
      },
      lists: [
        {
          id: 1,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 2,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 3,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 4,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 5,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 6,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 7,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        },
        {
          id: 8,
          thumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/4-3_800x.jpg?v=1644827259',
          backThumb: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/76_800x.jpg?v=1646012251',
          good_name: 'Custom Unisex Royal-White-Yellow Authentic Baseball Lightweight Jacket',
          price: '39.99',
          tip: 'Stay energetic with our customized jacket ( special name / number ) Capture your team\'s...'
        }
      ]
    }
  },
  computed: {
    swiper({ $refs }) {
      return $refs.mySwiper.$swiper
    }
  },
  created() {
    this.getList()
  },
  // 方法集合
  methods: {
    getList() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.commend-lists-container {
  padding-top: 20px;
  padding-bottom: 20px;
  h2 {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 32px;
  }
  .swiper {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .commend-lists-container {
    padding-top: 48px;
    padding-bottom: 48px;
    h2 {
      margin-bottom: 64px;
      font-size: 36px;
      line-height: 40px;
    }
  }
}
@media only screen and (min-width: 1024px) {
}
</style>
