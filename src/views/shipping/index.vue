<template>
  <div class="shipping">
    <div class="page-position text-center">
      <global-title name="Shipping & Delivery" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="shipping-container container-fluid">
      <el-col :lg="18">
        How much is shipping?<br>We offer Free worldwide shipping on all orders.<br>How long does it take to receive my product?<br>Typically, it takes about 10 business days to prepare your order, and shipping time is 10-15 business days. If your order choose Expedited shipping, the delivery time is 5-7 business days. You will need to pay an additional $30 expedited shipping fee.<br>Please note that during the holidays our production time may vary.<br><br>Due to the impact of covid19, there may be delays in distribution.<br><br>How will I know my order has shipped?<br>You will receive a shipping confirmation email once your order is ready to ship. Please note that orders may take up to 7-9 business days to process before they are shipped due to customized work involved. Once you have received this email please allow 24-48 hours for your tracking number to update.<br>Please keep in mind delivery dates may change due to inclement weather conditions or holiday.<br><br>Do you ship internationally?<br>We happily fulfill international orders! We are proud to use UPS/DHL/Fedex/TNT/USPS as our primary carrier. Our production time will be the same and shipping costs vary depending on where the order is going. Depending on your home country a customs tax may be applied in addition to your shipping cost.<br>Please note:<br>If your personalized product was remade, your order might be delayed. Only those items that passed the quality inspection process can be sent out, with our standards and aim to supply you a perfect gift.
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'Shipping',
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
.shipping {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  &-container {
    padding-bottom: 32px;
    line-height: 28px;
    color: #111827;
    p {
      margin: 12px 0;
    }
  }
}
@media only screen and (min-width: 640px) {
  .shipping {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .shipping {
    &-container {
      padding-bottom: 64px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .shipping {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
