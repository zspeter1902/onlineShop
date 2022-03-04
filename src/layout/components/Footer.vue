<template>
  <div class="footer-container">
    <div class="container">
      <h5 class="title">友情链接</h5>
      <el-row type="flex" tag="ul" :gutter="20" class="list flex-wrap">
        <el-col v-for="news of list" :key="news.id" :sm="12" :md="8" :lg="6" tag="li">
          <el-link :underline="false" :href="news.link" target="_blank">
            <h5>{{ news.title }}</h5>
          </el-link>
        </el-col>
      </el-row>
      <h5 class="title">法律声明</h5>
      <div class="desc">
        本网站所载的材料和信息，均源自第三方企业提供。安徽省跨境电商公共服务平台对此等材料和信息的准确性、完整性、充分性和可靠性不做评判，并且声明不对此等材料和信息的错误或遗漏承担任何法律责任，也无法对此等材料和信息作出任何明示或默示的担保，不构成对这些产品、服务的认可或推荐。
      </div>
      <div class="copyright text-center">
        <p>Copyright © 2021 Cross-border E-commerce Public Service Platform of Anhui Province 安徽省跨境电商公共服务平台</p>
        <p>
          <a target="_blank" rel="noopener norefferrer nofollow" href="https://beian.miit.gov.cn/">皖ICP备xxxxxxxx号</a>
          <el-image class="icon" :src="icon" fit="contain" />
          <a target="_blank" rel="noopener norefferrer nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502016144">皖公网安备 xxxxxxxxxxxxxx号</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data() {
    return {
      icon: require('img/beian.png'),
      activeName: 'tab0',
      list: [
        {
          id: 1,
          title: '安徽省商务厅',
          link: 'http://commerce.ah.gov.cn'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
@import '~@/styles/mixin';
.footer-container {
  padding: 20px 0;
  // box-shadow: 0 -15px 30px rgba($color: #000000, $alpha: .1);
  background-color: #333;
  .title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #fff;
  }
  .desc {
    line-height: 28px;
    color: #999;
  }
  .copyright {
    margin-top: 20px;
    padding: 10px;
    line-height: 28px;
    border-top: 1px dashed #666; //ccc
    color: #666;
    p {
      margin-top: 10px;
    }
    .icon {
      position: relative;
      top: -1px;
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
    a {
      margin: 0 15px;
      &:hover {
        color: $mainColor;
      }
    }
  }
}
.list {
  li {
    margin-bottom: 4px;
    line-height: 36px;
  }
  a {
    display: block;
    overflow: hidden;
    color: #999;
    h5 {
      font-size: 14px;
    }
    &:hover {
      color: $mainColor;
      h5 {
        &::before {
          background-color: $mainColor;
        }
      }
    }
  }
}
@media only screen and (max-width:767px){
  .list li {
    width: auto;
  }
  .copyright .icon {
    display: block;
    margin: 0 auto;
  }
}

</style>
