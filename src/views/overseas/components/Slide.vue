<template>
  <div class="slide-container">
    <swiper ref="mySwiper" class="swiper gallery-top hidden-xs-only" :options="swiperOptions">
      <swiper-slide v-for="item of slides" :key="item.name">
        <el-image class="img" :src="item.url" fit="cover" />
      </swiper-slide>
    </swiper>
    <swiper ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs" style="--swiper-navigation-color:(0, 0, 0, 0.85); --swiper-navigation-size:30px;">
      <swiper-slide v-for="item of slides" :key="item.name">
        <el-image class="img" :src="item.url" fit="cover" />
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      swiperOptionThumbs: {
        spaceBetween: 20,
        // slidesPerView: 4,
        touchRatio: 0.2,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  computed: {
    swiperTop({ $refs }) {
      return $refs.mySwiper.$swiper
    },
    swiperThumbs({ $refs }) {
      return $refs.swiperThumbs.$swiper
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperTop.controller.control = this.swiperThumbs
      this.swiperThumbs.controller.control = this.swiperTop
    })
  }
}
</script>
<style lang="scss" scoped>
.slide-container {
  height: 510px;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
  }
}
.swiper {
  width: 100%;
  &.gallery-top {
    height: 78.431373%;
    width: 100%;
  }
  &.gallery-thumbs {
    margin-top: 30px;
    height: 15.686275%;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
@media only screen and (max-width: 1199px) {
  .slide-container {
    height: 430px;
  }
}
@media only screen and (max-width: 991px) {
  .slide-container {
    height: auto;
  }
  .swiper {
    &.gallery-thumbs {
      height: 100%;
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }
}
@media only screen and (max-width: 767px) {
}
</style>
