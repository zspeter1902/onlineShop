<template>
  <section class="product-container">
    <div class="section-header text-center">
      <breadcrumb />
    </div>
    <div class="container">
      <!-- 产品信息 -->
      <good-info v-if="product.images && product.images.length" class="section-good-info" :product="product" />
      <!-- 产品简介描述 -->
      <section class="product-content">
        <el-row type="flex" align="middle" justify="center" class="custom-tabs-header border-bottom hidden-xs-only">
          <el-link class="item" :class="{'active': active == 'description'}" :underline="false" @click="active = 'description'">Product description</el-link>
          <el-link class="item" :class="{'active': active == 'shippingReturn'}" :underline="false" @click="active = 'shippingReturn'">Shipping & Return</el-link>
        </el-row>
        <div class="custom-tabs-content">
          <el-collapse v-model="activeNames" @change="handleChange">
            <!-- description -->
            <el-collapse-item title="Product description" name="description" class="custom-tabs-item" :class="{active: active !== 'shippingReturn'}">
              <div v-html="product.description" />
            </el-collapse-item>
            <!-- shipping return -->
            <el-collapse-item title="Shipping & Return" name="shippingReturn" class="custom-tabs-item" :class="{active: active !== 'description'}">
              <p>Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.</p>
              <p>We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.</p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </section>
    </div>
    <!-- 最近浏览产品 -->
    <good-history />
    <!-- 你也可能喜欢的产品 -->
    <good-commend />
    <!-- 评价 -->
    <good-comment />
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import GoodInfo from './components/GoodInfo'
import GoodHistory from './components/GoodHistory'
import GoodCommend from './components/GoodCommend.vue'
import GoodComment from './components/GoodComment.vue'
export default {
  name: 'ProductDetail',
  components: { Breadcrumb, GoodHistory, GoodInfo, GoodCommend, GoodComment },
  // 定义属性
  data() {
    return {
      active: 'description',
      activeNames: ['description', 'shippingReturn'],
      product: {
        content: "<p><strong>Stay energetic with our customized jacket ( special name / number ) Capture your team's identity in a fresh and innovative way</strong>.<br><br>Features:<br><strong>Type</strong>: 100% Polyester, All-Over Printing<br><strong>Product Description</strong>: 100% Polyester.Dye-sublimation printing, Personalized all-over print full Button closure Jacket.Each panel is cut and sewn together to ensure a flawless graphic.Two cool pouch pockets.Features drawstring long sleeves, elastic thread sleeve cuff and waistband.<br><strong>Sizes</strong>: S, M, L, XL, 2XL,3XL,4XL, 5XL, 6XL. Calculate your size from the measurement chart below please.<br><strong>Applicable population</strong>: For Men ,Women,Kid<br><strong>Design the memorable, humor or celebratory jacket for lovers, events, festival, birthday; the uniforms of group, sport team, charity, protestors, band; or personalized unique style jacket</strong>.</p>\n<p><img src=\"https://cdn.shopifycdn.net/s/files/1/0551/6233/9488/files/Size_90a4579f-5449-4734-9ef6-df9188a26054_480x480.jpg?v=1644887667\" alt=\"\"></p>\n<p> </p>",
        created_at: '2021-12-14T04:54:13-05:00',
        description: "<p><strong>Stay energetic with our customized jacket ( special name / number ) Capture your team's identity in a fresh and innovative way</strong>.<br><br>Features:<br><strong>Type</strong>: 100% Polyester, All-Over Printing<br><strong>Product Description</strong>: 100% Polyester.Dye-sublimation printing, Personalized all-over print full Button closure Jacket.Each panel is cut and sewn together to ensure a flawless graphic.Two cool pouch pockets.Features drawstring long sleeves, elastic thread sleeve cuff and waistband.<br><strong>Sizes</strong>: S, M, L, XL, 2XL,3XL,4XL, 5XL, 6XL. Calculate your size from the measurement chart below please.<br><strong>Applicable population</strong>: For Men ,Women,Kid<br><strong>Design the memorable, humor or celebratory jacket for lovers, events, festival, birthday; the uniforms of group, sport team, charity, protestors, band; or personalized unique style jacket</strong>.</p>\n<p><img src=\"https://cdn.shopifycdn.net/s/files/1/0551/6233/9488/files/Size_90a4579f-5449-4734-9ef6-df9188a26054_480x480.jpg?v=1644887667\" alt=\"\"></p>\n<p> </p>",
        featured_image: '//cdn.shopify.com/s/files/1/0551/6233/9488/products/15_800x_f7a6cc4d-aa20-46e5-bd10-19d60e214a46.jpg?v=1639534990',
        handle: 'custom-unisex-black-royal-white-authentic-baseball-jacket',
        id: 7177551610016,
        images: [
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/15_800x_f7a6cc4d-aa20-46e5-bd10-19d60e214a46.jpg?v=1639534990',
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/2_090761d2-af9e-4a68-bc4d-02de0e1c1dc9.jpg?v=1645173562',
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/15-1_800x_8d0d2414-2521-4899-9635-3aa472293b0a.jpg?v=1645173562',
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/15-2_800x_6afcb7b8-a733-42cb-87f8-998595d289d5.jpg?v=1645173562',
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/1_800x_6c6c0609-c1a5-48ca-87fe-34a8db39bdf1.jpg?v=1645173562',
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/2_800x_67e1ab19-24c2-4b49-8a69-bd9f6003e923.jpg?v=1645173562',
          '//cdn.shopify.com/s/files/1/0551/6233/9488/products/d21b69ca211572aafadf8867cc6a01fe_800x_4e19d518-8364-46a9-a46c-1ec12a34b90a.jpg?v=1645173562'
        ],
        price: 3999,
        price_max: 3999,
        price_min: 3999,
        rate: 5,
        price_varies: false,
        published_at: '2021-12-14T04:54:13-05:00',
        requires_selling_plan: false,
        tags: ['Baseball Lightweight Jacket'],
        title: 'Custom Unisex Black-Royal-White Authentic Baseball Lightweight Jacket'
      }
    }
  },
  computed: {
    currentId({ $route }) {
      return $route.params.id
    }
  },
  created() {
    this.getDetail()
  },
  beforeMount() {
    window.addEventListener('resize', this.handleSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleSize)
  },
  mounted() {
    this.handleSize()
  },
  // 方法集合
  methods: {
    getDetail() {
      this.$route.meta.title = this.product.title
      this.$router.replace({
        query: {
          temp: Date.now()
        }
      })
    },
    handleChange() {

    },
    handleSize() {
      const { body } = document
      const rect = body.getBoundingClientRect()
      if (rect.width < 768) {
        this.active = ''
      } else {
        this.activeNames = ['description', 'shippingReturn']
        this.active = this.active || 'description'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.product-container {
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
  .section-good-info {
    margin-bottom: 20px;
  }
  .product-content {
    padding-top: 20px;
    padding-bottom: 20px;
    .custom-tabs-header {
      line-height: 26px;
      .item {
        position: relative;
        padding: 12px 0;
        margin: 0 32px;
        opacity: .35;
        font-size: 18px;
        font-weight: 500;
        color: $mainColor;
        user-select: none;
        transition: all .3s;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: currentColor;
          display: block;
          position: absolute;
          bottom: -2px;
          left: 0;
          transition: width .25s ease-in-out;
        }
        &:hover,
        &.active {
          opacity: 1;
        }
        &.active::after {
          width: 100%;
        }
      }
    }
    .custom-tabs-item {
      display: none;
      margin-bottom: 24px;
      opacity: 0;
      transition: opacity 1s cubic-bezier(.4,0,.2,1);
      &.active {
        display: block;
        opacity: 1;
      }
    }
  }
  ::v-deep {
    .el-collapse-item__content {
      padding-bottom: 32px;
      font-size: 16px;
      line-height: 28px;
      color: $grayLinkColor;
      p {
        margin-top: 12px;
        margin-bottom: 12px;
      }
      strong {
        color: #111827;
        font-weight: 600;
      }
    }
    .el-collapse-item__header {
      height: 51px;
      line-height: 50px;
      font-size: 18px;
      font-weight: 500;
      border-bottom: 1px solid #dedede;
    }
  }
}
@media only screen and (min-width: 768px) {
  .product-container {
    .section-good-info {
      margin-top: 46px;
      margin-bottom: 48px;
    }
    .product-content {
      padding-top: 48px;
      padding-bottom: 48px;
      .custom-tabs-content {
        padding-top: 40px;
        padding-bottom: 40px;
      }
      ::v-deep {
        .el-collapse-item__header {
          display: none;
        }
      }
    }

  }
}
@media only screen and (min-width: 1024px) {
  .product-container {
    padding-bottom: 60px;
  }
}
@media only screen and (max-width: 1535px) {
  .product-container {
    .section-header {
      margin-bottom: 50px;
    }
  }
}
@media only screen and (max-width: 1279px) {
  .product-container {
    .section-header {
      margin-bottom: 40px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .product-container {
    .section-header {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
}
</style>
