<template>
  <div class="overseas-container">
    <!-- banner -->
    <banner :banner="banner" :show="false" />
    <div class="container">
      <breadcrumb />
      <el-row type="flex" class="flex-wrap brief" :gutter="40">
        <el-col :sm="12">
          <slide :slides="slides" />
        </el-col>
        <el-col :sm="12">
          <brief :info="detail" :contact="contact" />
        </el-col>
      </el-row>
    </div>
    <!-- 详细信息 -->
    <detail :detail="detail" />
    <!-- 评价 -->
    <!-- <all-evaluation :detail="detail" /> -->
    <!-- 图片 -->
    <div class="container">
      <article class="article-content" v-html="detail.wareInfo" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Banner from '@/components/Banner'
import Slide from './components/Slide.vue'
import Brief from './components/Brief.vue'
import Detail from './components/Detail.vue'
import AllEvaluation from './components/AllEvaluation.vue'
import { getCompanyList, getWarehouseDetail } from '@/api/company'
export default {
  name: 'OverseasDetail',
  components: { Banner, Breadcrumb, Slide, Brief, Detail, AllEvaluation },
  data() {
    return {
      banner: require('img/overseas-banner.jpg'),
      detail: {},
      comments: {
        score: 0,
        attitude: 0,
        result: 0,
        speed: 0,
        lists: []
      },
      contact: {},
      slides: []
    }
  },
  computed: {
    id({ $route }) {
      return $route.params.id
    }
  },
  created() {
    this.getCompanyInfo()
    this.getDetail()
  },
  methods: {
    getCompanyInfo() {
      getCompanyList().then(res => {
        const list = res.page.list[0]
        this.contact = list
      })
    },
    getDetail() {
      getWarehouseDetail(this.id).then(res => {
        this.detail = res.crossWare
        res.crossWare.wareImgUrl.split(',').forEach((item, index) => {
          this.slides.push({
            name: index,
            url: item
          })
        })
        this.setTitle(res.crossWare.wareName)
      })
    },
    setTitle(title) {
      this.$route.meta.title = title
    },
    handleClick(tab, event) {

    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables";
@import "~@/styles/mixin";
.overseas-container {
  .brief {
    margin-top: 10px;
    margin-bottom: 50px;
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
