<template>
  <div class="history-lists-container">
    <div :class="{'container': small, 'container-fluid': !small }">
      <h2 class="text-center">Recently Viewed Products</h2>
      <swiper v-if="lists.length" ref="mySwiper" class="swiper" :options="small ? swiperSmallOptions: swiperOptions">
        <swiper-slide v-for="item of lists" :key="item.id">
          <list :item="item" />
        </swiper-slide>
      </swiper>
      <div class="swiper-custom-prev">
        <svg-icon icon-class="arrow-left" class-name="svg-14" />
      </div>
      <div class="swiper-custom-next">
        <svg-icon icon-class="arrow-right" class-name="svg-14" />
      </div>
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
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  // 定义属性
  data() {
    return {
      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: '.swiper-custom-next',
          prevEl: '.swiper-custom-prev'
        },
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
          },
          1200: {
            slidesPerView: 5
          },
          1367: {
            slidesPerView: 6
          }
        }
      },
      swiperSmallOptions: {
        loop: true,
        navigation: {
          nextEl: '.swiper-custom-next',
          prevEl: '.swiper-custom-prev'
        },
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
.history-lists-container {
  padding-top: 20px;
  padding-bottom: 20px;
  h2 {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 32px;
  }
  .container {
    position: relative;
  }
  .swiper {
    width: 100%;
  }
  .swiper-custom-prev, .swiper-custom-next {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    color: $mainColor;
    background-color: #fff;
    border-radius: 25px;
    border: 1px solid #dedede;
    z-index: 10;
    transition: all .3s;
    &:hover, &:focus {
      background-color: $mainColor;
      border-color: $mainColor;
      box-shadow: 0 0 0 3px $mainColor;
      color: #fff;
    }
  }
  .container-fluid {
    .swiper-custom-next {
      right: 10px;
      left: auto;
    }
    .swiper-custom-prev {
      left: 10px;
      right: auto;
    }
  }
  .container {
    .swiper-custom-next {
      right: -60px;
      left: auto;
    }
    .swiper-custom-prev {
      left: -60px;
      right: auto;
    }
  }
  ::v-deep {
    .svg-14 {
      font-size: 14px;
    }
  }
}
@media only screen and (min-width: 768px) {
  .history-lists-container {
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
  .history-lists-container {
    .container-fluid {
      .swiper-custom-prev, .swiper-custom-next {
        display: flex;
      }
    }
  }
}
@media only screen and (min-width: 1366px) {
  .history-lists-container {
    .container {
      .swiper-custom-prev, .swiper-custom-next {
        display: flex;
      }
    }
  }
}
</style>
