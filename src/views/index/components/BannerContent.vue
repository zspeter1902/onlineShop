<template>
  <div class="banner-container">
    <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
      <swiper-slide v-for="item of bannerList" :key="item">
        <div class="el-image img" :class="{'height': isClass, 'mobile': device === 'mobile'}">
          <img class="el-image__inner" :src="item" style="object-fit: cover;">
        </div>
      </swiper-slide>
    </swiper>
    <div slot="pagination" class="swiper-pagination swiper-pagination-custom" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  // 定义属性
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      isClass: false,
      bannerList: [
        '//cdn.shopify.com/s/files/1/0551/6233/9488/files/111_1920x.jpg',
        '//cdn.shopify.com/s/files/1/0551/6233/9488/files/banner_a67b9a8b-ca0b-4692-8780-889eb7d08c9a_1920x.jpg'
      ],
      swiperOptions: {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 6000 * 10000,
          disableOnInteraction: false
        },
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<div class="${className}"><span class="left-circle"></span><span class="right-circle"></span></div>`
          }
        }
      }
    }
  },
  computed: {
    swiper({ $refs }) {
      return $refs.mySwiper.$swiper
    },
    device({ $store }) {
      return $store.getters.device
    }
  },
  mounted() {
    this.$EventBus.$on('closeTopTip', () => {
      this.isClass = true
    })
  },
  // 方法集合
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  .img {
    width: 100%;
    height: calc(100vh - 40px - 40px - 62px);
    &.height {
      height: calc(100vh - 40px - 62px);
    }
    &.mobile {
      height: calc(100vh - 62px);
    }
    img {
      transform: scale(1.01);
      transition: all 3.6s;
    }
  }
  .swiper-slide-active {
    .img {
      img {
        transform: scale(1);
      }
    }
  }
  .swiper-pagination-custom {
    bottom: 50%;
    right: 40px;
    left: auto;
    width: auto;
    transform: translateY(50%);
    ::v-deep {
      .swiper-pagination-bullet {
        position: relative;
        display: block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0;
        opacity: 1;
        background-color: transparent;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          transform: translate(-50%, -50%);
          background-color: #000;
          border-radius: 4px;
        }
        span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 24px;
          height: 24px;
          transform: translate(-50%, -50%);
          &.left-circle {
            clip: rect(0, 12px, 24px, 0);
            &::before {
              content: '';
              display: block;
              width: 24px;
              height: 24px;
              border-radius: 12px;
              border: 2px solid #000;
              border-bottom-color: transparent;
              border-left-color: transparent;
              transform: rotate(45deg);
            }
          }
          &.right-circle {
            clip: rect(0, 24px, 24px, 12px);
            &::before {
              content: '';
              display: block;
              width: 24px;
              height: 24px;
              border-radius: 12px;
              border: 2px solid #000;
              border-bottom-color: transparent;
              border-left-color: transparent;
              transform: rotate(-135deg);
            }
          }
        }
        &-active {
          background: transparent;
          span.left-circle::before {
            transform: rotate(225deg);
            transition: transform 1.8s linear 1.8s;
          }
          span.right-circle::before {
            transform: rotate(45deg);
            transition: transform 1.8s linear;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .banner-container {
    margin-bottom: 90px;
    .img {
      height: 100% !important;
      vertical-align: top;
      img {
        transform: scale(1);
      }
    }
    .swiper-pagination-custom {
      bottom: -20px;
      right: 50%;
      width: 100%;
      transform: translate(50%, 100%);
      ::v-deep {
        .swiper-pagination-bullet {
          display: inline-block;
        }
      }
    }
  }
}
</style>
