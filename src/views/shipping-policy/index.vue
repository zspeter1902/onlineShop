<template>
  <div class="shipping-policy">
    <div class="page-position text-center">
      <global-title name="Shipping policy" small />
      <breadcrumb />
    </div>
    <div class="shipping-policy-container">
      <p><strong>**Attention***</strong></p>
      <p>&nbsp;</p>
      <p>1. The shipping time listed in the table above is just ETA(Estimated Time of Arrival), and most(90%) of our shipped parcels can be delivered within this time frame, but<span>&nbsp;</span><span><strong>due to some&nbsp;Uncontrollable Factors like bad weather, custom clearance, delayed flights, strikes, etc. some parcels may have some delays.</strong></span></p>
      <p>&nbsp;</p>
      <p>2. Please leave correct email address in your order so that the order confirmation and shipping notification will be updated to your inbox. Besides, phone number is required for delivery, because&nbsp;the carrier &amp; deliverer may contact you for delivery if necessary.</p>
      <p>&nbsp;</p>
      <p>3. Shipping&nbsp;address should be detailed enough, it would be better if it&nbsp;includes Apt/unit number.<span>&nbsp;</span><strong><span>Unsuccessful&nbsp;delivery caused by wrong/insufficient/incomplete shipping address, wrong post/zip code, blank&nbsp;mobile column&nbsp;can&nbsp;not&nbsp;be blamed to or compensated by MyNameCustom.</span>&nbsp;</strong></p>
      <p>&nbsp;</p>
      <p>4.&nbsp;Please note that<span>&nbsp;</span><span>we do not ship parcels to P.O. Box Address and&nbsp;Military Address(APO/FPO)&nbsp;via Any Shipping methods</span></p>
      <p>&nbsp;</p>
      <p>5.&nbsp;Please note that<span>&nbsp;</span><span><strong>shipping to outlying territories or remote areas &amp; islands</strong><strong>&nbsp;usually take much longer shipping time</strong>.</span></p>
      <p>&nbsp;</p>
      <p>If you have any question about the shipping, please timely contact our customer service:<span>&nbsp;</span><span><a href="mailto:service@mynamecustom.com">service@mynamecustom.com</a></span></p>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'ShippingPolicy',
  components: { Breadcrumb, globalTitle },
  // 定义属性
  data() {
    return {}
  },
  // 方法集合
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.shipping-policy {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  &-container {
    max-width: 624px;
    padding: 0 20px 32px;
    margin: 0 auto;
    line-height: 28px;
    color: #111827;
    p {
      margin: 12px 0;
    }
  }
}
@media only screen and (min-width: 640px) {
  .shipping-policy {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .shipping-policy {
    &-container {
      padding-bottom: 64px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .shipping-policy {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
