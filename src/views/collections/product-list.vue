<template>
  <section class="collections-container">
    <div class="section-header text-center">
      <global-title :name="title" />
      <breadcrumb />
    </div>
    <section v-if="isCustom" class="collections-hero">
      <div class="hero-image">
        <el-image class="w-full hidden-xs-only" src="https://cdn.shopify.com/s/files/1/0551/6233/9488/files/2_1f209ccd-5b9e-4dcc-9b75-151b32d0f3b1.jpg?v=1640783301" fit="cover" />
        <el-image class="w-full hidden-sm-and-up" src="//cdn.shopify.com/s/files/1/0551/6233/9488/files/12_1f209ccd-5b9e-4dcc-9b75-151b32d0f3b1_1904x.jpg?v=1640783301" fit="cover" />
      </div>

      <div class="hero-text">
        <div class="hidden-xs-only">
          <span class="text-white">Our new group discounts program is made for teams of any size, because the minimum order is only 10 jackets. Design your own team jacket and we will give you a FREE quote.</span>
        </div>
        <div class="hidden-sm-and-up">
          <span class="text-base">Our new group discounts program is made for teams of any size, because the minimum order is only 10 jackets. Design your own team jacket and we will give you a FREE quote.</span>
        </div>
      </div>
    </section>
    <lists :lists="lists" layout />
  </section>
</template>

<script>
import globalTitle from '@/components/Title'
import Breadcrumb from '@/components/Breadcrumb'
import Lists from '@/components/Lists'
export default {
  components: { globalTitle, Breadcrumb, Lists },
  // 定义属性
  data() {
    return {
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
        }
      ]
    }
  },
  computed: {
    title({ $route }) {
      return $route.meta.title
    },
    isCustom({ $route }) {
      return $route.meta.custom
    }
  },
  // 方法集合
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.collections-container {
  padding-bottom: 40px;
  .section-header {
    padding: 0 20px;
    margin-top: 40px;
    margin-bottom: 60px;
    .title {
      margin-bottom: 5px;
    }
    p {
      line-height: 24px;
      color: $grayLinkColor;
    }
  }
  .collections-hero {
    position: relative;
    margin-bottom: 38px;
    .el-image {
      height: 40vh;
      vertical-align: top;
    }
    .hero-image {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.2);
      }
    }
    .hero-text {
      position: absolute;
      top: 48px;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 896px;
      width: max-content;
      margin: 0 auto;
      z-index: 2;
      span {
        margin-bottom: 16px;
        color: #000;
        line-height: 24px;
        &.text-white {
          color: #fff;
        }
      }
    }
  }
  .collections-list {
    margin-bottom: -30px;
  }
  .collections-column {
    padding-bottom: 30px;
    .el-card {
      border: none;
    }
    .column-image {
      position: relative;
      overflow: hidden;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 0;
        padding-top: 100%;
      }
      .thumb {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        color: rgba(51,50,50,.35);
        background-color: rgba(51,50,50,.1);
        border: 1px solid #dedede;
      }
    }
    .column-body {
      margin-top: 20px;
      .name {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .collections-container {
    padding-bottom: 60px;
  }
}
@media only screen and (max-width: 1535px) {
  .collections-container {
    .section-header {
      margin-bottom: 50px;
    }
  }
}
@media only screen and (max-width: 1279px) {
  .collections-container {
    .section-header {
      margin-bottom: 40px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .collections-container {
    .section-header {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .collections-column {
      .column-body {
        margin-top: 10px;
        .name {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
