<template>
  <div class="point-container">
    <div class="container">
      <slot name="title" />
      <div class="swiper-box">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="item of cardList" :key="item.id">
            <card :title="item.title" :icon="item.icon" :url="item.url" :front="item.bg">
              <p slot="desc" class="desc">{{ item.desc }}</p>
            </card>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"><i class="el-icon-back" /></div>
        <div class="swiper-button-next">
          <i class="el-icon-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Card from './Card'
export default {
  // 定义属性
  components: { Card, Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next'
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: true
            }
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
            coverflowEffect: {
              rotate: 0,
              stretch: 84,
              depth: 174,
              modifier: 1,
              slideShadows: true
            }
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 90,
            coverflowEffect: {
              rotate: 0,
              stretch: 122,
              depth: 174,
              modifier: 1,
              slideShadows: true
            }
          }
        }
      },
      cardList: [
        {
          id: 1,
          title: '结算易',
          desc: '旨在为跨境电商进出口贸易企业提供阳光便捷的跨境资金结算服务， 帮助企业实现货款支付及销售款回流。',
          url: '/',
          icon: require('img/point1.png'),
          bg: require('img/point_bg1.jpg')
        },
        {
          id: 2,
          title: '数据易',
          desc: '通过大数据技术，对合肥跨境电商行业进行深度剖析，为园区及企业的业务发展 及行业趋势提供专业有效的分析，助力其持续优化业务发展。',
          url: '/',
          icon: require('img/point2.png'),
          bg: require('img/point_bg2.jpg')
        },
        {
          id: 3,
          title: '通关易',
          desc: '旨在为跨境电商市场主体提供便捷高效的通关辅助服务，全方位优化 合肥口岸跨境电商营商环境，加速业务发展。',
          url: '/',
          icon: require('img/point3.png'),
          bg: require('img/point_bg3.jpg')
        }
      ]
    }
  },
  // 方法集合
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.point-container {
  padding-top: 88px;
  padding-bottom: 120px;
  background: url('~img/index_platform_service.jpg') no-repeat center top / contain;
}
.swiper-box {
  position: relative;
  width: 100%;
  height: 510px;
  margin-top: 2px;
  .swiper-button-prev,
  .swiper-button-next {
    --swiper-navigation-size: 90px;
    --swiper-navigation-color: #969696;
    width: 90px;
    height: 90px;
    text-align: center;
    line-height: 90px;
    border-radius: 45px;
    font-size: 42px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: color .3s, background-color .3s;
    &::after {
      content: '';
    }
    &:hover {
      background-color: $mainColor;
      color: #fff;
    }
  }
  .swiper-button-prev {
    left: 40px;
  }
  .swiper-button-next {
    right: 40px;
  }
}

.swiper {
  height: 100%;
  padding: 30px 0;
  width: 820px;
  .swiper-slide {
    width: 365px;
    height: 100%;
  }
}
@media only screen and (max-width:1199px){
  .point-container {
    padding-top: 60px;
    padding-bottom: 90px;
  }
  .swiper-box {
    height: 510px;
    .swiper-button-prev,
    .swiper-button-next {
      width: 70px;
      height: 70px;
      line-height: 70px;
      font-size: 32px;
    }
    .swiper-button-prev {
      left: 10px;
    }
    .swiper-button-next {
      right: 10px;
    }
  }
}
@media only screen and (max-width:991px){
  .point-container {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .swiper-box {
    width: 100%;
    height: 400px;
    .swiper-button-prev,
    .swiper-button-next {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 24px;
    }
    .swiper-button-prev {
      left: 0px;
    }
    .swiper-button-next {
      right: 0px;
    }
  }
  .swiper {
    height: 100%;
    padding: 20px 0;
    width: 80%;
  }
}
@media only screen and (max-width:767px){
  .point-container {
    padding-top: 30px;
    padding-bottom: 40px;
  }
  .swiper-box {
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
    }
  }
  .swiper {
    padding: 20px 0;
  }
}
</style>
