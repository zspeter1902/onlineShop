<template>
  <div class="service-container">
    <!-- banner -->
    <banner :banner="banner" :show="false" />
    <div class="container">
      <breadcrumb />
      <brief class="brief" :info="detail" />
    </div>
    <!-- 图片 -->
    <div class="container">
      <article>
        <div class="intro">
          <h5 class="intro-title">
            <span>详情介绍</span>
          </h5>
          <p class="intro-desc">{{ detail.synopsis }}</p>
        </div>
        <div class="article-content" v-html="detail.info" />
      </article>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Banner from '@/components/Banner'
import Brief from './components/Brief.vue'
import { getProductDetail } from '@/api/company'
export default {
  name: 'OverseasDetail',
  components: { Banner, Breadcrumb, Brief },
  data() {
    return {
      banner: require('img/service-banner.png'),
      detail: {
        id: 1,
        name: '拼多多app',
        company: '拼多多公司',
        company_id: 1,
        price: '无平台佣金，仅0.6%的交易技术服务费',
        platform: '拼多多',
        have_service: '13,14,21,31,32,41,42,46',
        features: '高日活，新电商开创者',
        thumb: require('img/logo11.jpg'),
        intro: '多多国际是拼多多在致力于社交电商场景下打造海外品牌一站式服务平台，为更多中国消费者提供更为丰富的进口产品. 依托社交电商和多多国际消费人群，通过优化入驻流程，3天入驻，0元起步，同时结合国家政策生态构建多多国际供应链网络，提供更为灵活的跨境物流解决方案。在商家支持方面，提供多多国际商家培训、起步以及运营商家成长体系，快速对接商家与用户。相较于其他平台，更为开放，入驻方便快捷，加之新兴社交电商人群，以及投入产出比更高的社交电商玩法，在为海外大牌做好渠道下沉同时，也让海外中小品牌进入中国成为可能。',
        content: '<p><img src="https://www.ece-global.com/transport/resource/image/uIbiiu" style="margin-top: 40px; display: block; margin-bottom: 20px;"> <img src="https://www.ece-global.com/transport/resource/image/EJ3Qfq" style="display: block; margin-bottom: 20px;"> <img src="https://www.ece-global.com/transport/resource/image/Rr6Zru" style="display: block; margin-bottom: 20px;"> <img src="https://www.ece-global.com/transport/resource/image/2EBzIf" style="display: block; margin-bottom: 20px;"> <img src="https://www.ece-global.com/transport/resource/image/viaYfu" style="display: block; margin-bottom: 20px;"> <img src="https://www.ece-global.com/transport/resource/image/FRviua" style="display: block; margin-bottom: 20px;"></p>',
        hits: 105145
      }
    }
  },
  created() {
    // this.setTitle()
    const id = this.$route.params.id
    this.getDetail(id)
  },
  methods: {
    getDetail(id) {
      getProductDetail(id).then(res => {
        this.detail = res.supplyDemand
      })
    },
    setTitle(title) {
      this.$route.meta.title = title
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables";
.service-container {
  .brief {
    margin-top: 10px;
    margin-bottom: 50px;
  }
}
.intro {
  padding-bottom: 30px;
  font-size: 16px;
  line-height: 36px;

  text-align: justify;
  &-title {
    margin-bottom: 15px;
    font-size: 18px;
    color: $mainColor;
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5;
    span {
      display: inline-block;
      border-bottom: 4px solid $mainColor;
    }
  }
  &-desc {
    text-indent: 2em;
  }
}
.article-content {
  padding-bottom: 60px;
  font-size: 16px;
  line-height: 36px;
  text-indent: 2em;
  text-align: justify;
  ::v-deep {
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}
@media only screen and (max-width: 1199px) {
  .overseas-container {
    .brief {
      margin-top: 5px;
      margin-bottom: 40px;
    }
  }
  .article-content {
    padding-bottom: 50px;
  }
}
@media only screen and (max-width: 991px) {
  .overseas-container {
    .brief {
      margin-bottom: 30px;
    }
  }
  .article-content {
    padding-bottom: 35px;
  }
}
@media only screen and (max-width: 767px) {
  .overseas-container {
    .brief {
      margin-top: 0px;
      margin-bottom: 20px;
    }
  }
  .article-content {
    padding-bottom: 20px;
  }
}
</style>
