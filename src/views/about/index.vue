<template>
  <div class="about">
    <div class="page-position text-center">
      <global-title name="About Us" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="about-container container-fluid">
      <el-col :lg="18">
        <p>As every person in our life holds a special place, don’t you think the gifts we plan to give to each of them should be different. The more customized a product is, the more personalized the gift seems. However, unique and customized products are hard to find—particularly all in the same place. You might find a custom pillow in one shop and a customized necklace in another shop. But going around from one shop to another can be tiresome. That's why you should shop with us at MynameCustom.<br><br>What we do<br>Here, you can find just about any customized product for every occasion. We have products for Men, Women, and Babies &amp; Kids. We also have gifts for birthdays, weddings, holidays, and so much more. You can get bags, shoes, accessories, home décor products, and just about everything you can think of. Plus, you can also have your personal logo on it. There is no end to the possibilities we have to offer. You can get your custom product in whatever form you desire and whenever you want.</p><p><br><strong>MyNameCustom 's&nbsp;</strong>priority is to provide&nbsp;shopping satisfaction and great customer service. We are truly thankful you've come to our website and checked our items. If you would like to get a hold of us, then please email us&nbsp;at:&nbsp;<span style="color: #ff2a00;"><a href="mailto:service@MyNameCustom.com" style="color: #ff2a00;">service@mynamecustom.com</a></span>.&nbsp;We'll gladly assist you! Thank you for your interest and support.</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'About',
  components: { Breadcrumb, globalTitle },
  // 定义属性
  data() {
    return {
      content: ''
    }
  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.about {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  &-container {
    padding-bottom: 31px;
    line-height: 28px;
    p {
      margin: 12px 0;
    }
  }
}
@media only screen and (min-width: 640px) {
  .about {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .about {
    &-container {
      padding-bottom: 64px;
    }
  }
}
</style>
