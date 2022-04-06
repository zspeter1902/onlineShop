<template>
  <el-row type="flex" class="slide-container">
    <swiper ref="swiperThumbs" class="swiper gallery-thumbs flex-fixed hidden-xs-only" :options="swiperOptionThumbs" style="--swiper-navigation-color:(0, 0, 0, 0.85); --swiper-navigation-size:30px;">
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <div class="el-image img" @click="setIndex(index + 1)">
          <img :src="item">
        </div>
        <!-- <el-image class="img" :src="item" fit="cover" /> -->
      </swiper-slide>
    </swiper>
    <swiper v-if="slides.length" ref="mySwiper" class="swiper gallery-top" :options="swiperOptions">
      <swiper-slide v-for="item of slides" :key="item">
        <div class="el-image img">
          <img :src="item">
        </div>
      </swiper-slide>
      <div slot="button-prev" class="swiper-custom-prev">
        <svg-icon icon-class="arrow-left" class-name="svg-14" />
      </div>
      <div slot="button-next" class="swiper-custom-next">
        <svg-icon icon-class="arrow-right" class-name="svg-14" />
      </div>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
    <el-tooltip
      effect="dark"
      content="Zoom in"
      placement="left"
      transition="el-fade-in-left"
      :disabled="device === 'mobile'"
    >
      <el-button circle class="view-btn no-border" @click="showViewer = true">
        <svg-icon icon-class="zoom" class-name="svg-20" />
      </el-button>
    </el-tooltip>
    <!-- 图片预览 -->
    <el-image-viewer v-if="showViewer" :on-close="() => { showViewer = false}" :url-list="slides" />
  </el-row>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
    'elImageViewer': () => import('element-ui/packages/image/src/image-viewer.vue')
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showViewer: false,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-custom-next',
          prevEl: '.swiper-custom-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOptionThumbs: {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        touchRatio: 0.2,
        watchSlidesProgress: true,
        watchSlidesVisibility: true
        // slideToClickedSlide: true
      },
      isMounted: false
    }
  },
  computed: {
    swiperTop({ $refs, isMounted }) {
      if (!isMounted) return { index: 0 }
      return $refs.mySwiper.$swiper
    },
    swiperThumbs({ $refs, isMounted }) {
      if (!isMounted) return
      return $refs.swiperThumbs.$swiper
    },
    device({ $store }) {
      return $store.getters.device
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.mySwiper.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      // swiperTop.controller.control = swiperThumbs
      // swiperThumbs.controller.control = swiperTop
      swiperTop.thumbs.swiper = swiperThumbs
      this.isMounted = true
    })
  },
  methods: {
    setIndex(index) {
      this.swiperTop.slideTo(index, 100)
      // this.swiperThumbs.slideTo(index, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';
.slide-container {
  position: sticky;
  top: 30px;
  padding-left: 4px;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
  &:hover {
    .swiper-custom-prev, .swiper-custom-next {
      opacity: 1;
      visibility: visible;
      transform: none;
    }
  }
  .view-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    right: -54px;
    transition: all .15s cubic-bezier(.4,0,.2,1);
    z-index: 10;
  }
}
.swiper {
  width: 100%;
  &.gallery-top {
    height: 78.431373%;
    width: 100%;
    ::v-deep {
      .swiper-pagination {
        display: none;
      }
    }
  }
  &.gallery-thumbs {
    display: flex;
    align-items: stretch;
    max-height: 450px;
    width: 70px;
    margin-right: 20px;
    .img {
      height: 70px;
      padding: 5px;
      border: 1px solid #fff;
      transition: all .3s;
      cursor: pointer;
    }
  }
  &.gallery-thumbs .swiper-slide {
    height: 70px !important;
  }
  // swiper-slide-thumb-active
  &.gallery-thumbs .swiper-slide-thumb-active .img{
    border-color: #000;
  }
}
.swiper-custom-prev, .swiper-custom-next {
  position: absolute;
  top: 50%;
  width: var(--swiper-navigation-size);
  height: var(--swiper-navigation-size);
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $mainColor;
  background-color: #fff;
  border-radius: 24px;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
  &:hover, &:focus {
    background-color: $mainColor;
    color: #fff;
  }
}
.swiper-custom-next {
  right: 10px;
  left: auto;
  transform: translate3d(100%, 0, 0);
}
.swiper-custom-prev {
  left: 10px;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
@media only screen and (min-width: 768px) {
  .slide-container {
    .view-btn {
      top: 20px;
      bottom: auto;
      right: -54px;
    }
    &:hover {
      .view-btn {
        right: 20px;
      }
    }
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
  .swiper {
    &.gallery-top {
      ::v-deep {
        .swiper-pagination {
          display: block;
          position: static;
          margin-top: 10px;
          padding: 7px 0;
        }
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          background-color: #dedede;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #fff;
          border-color: $mainColor;
        }
      }
    }
  }
}
</style>
