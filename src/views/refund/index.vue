<template>
  <div class="refund">
    <div class="page-position text-center">
      <global-title name="Return & Refund Policy" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="refund-container container-fluid">
      <el-col :lg="18">
        <p><strong>Thanks for shopping on MyName !!!</strong></p>
        <p>
          At MyNameCustom family, customer satisfaction is always our top
          priority&nbsp;to pursuit,&nbsp;Generally 7<strong><b><span>&nbsp;Days Return Warranty</span></b></strong><strong><b><span>&nbsp;is allowed to each customer.</span></b></strong><strong><b><span>&nbsp;</span></b></strong>Customers can contact us within&nbsp;7 days of delivery date to
          request a return &amp; exchange.&nbsp;All return/exchange items must
          be returned unworn,&nbsp;non-snagged, unstained, undamaged, unwashed
          and attach original labels to original packaging.
        </p>
        <p>&nbsp;</p>
        <p><strong>How Do I Return/Exchange ?</strong></p>
        <p>&nbsp;</p>
        <p>
          <span
            style="color: #f11414"
          >Notice: All returns can be refunded under the condition of
            receiving wrong or damaged items.&nbsp; Not Accept Unconditional
            Returns.
          </span>
        </p>
        <p>
          <span
            style="color: #f11414"
          >WHY Not Happen, because all orders are customized by private
            personal information, and can not make a secondary sale.
          </span>
        </p>
        <p>
          <span
            style="color: #f11414"
          >So You should be serious to think about before ordering.</span>
        </p>
        <p><span style="color: #f11414">&nbsp;</span></p>
        <p>
          1, To initiate a return or exchange, please email to our customer
          service including:&nbsp;Order number, your question, picture of
          product. The return shipping address&nbsp;and return
          instructions&nbsp;will be&nbsp;back to you
          via&nbsp;email.&nbsp;Please follow the instructions&nbsp;to process
          the exchange/return.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          2, Returns &amp; exchanges must be initiated within&nbsp;7 days of
          delivery date.&nbsp;And Tracking number is required to
          <span>complete</span>&nbsp;the return, It will facilitate us to
          track your return status and process your return. Please note
          shipping number must be valid to track.
        </p>
        <p>&nbsp;</p>
        <p>
          3, You will receive refund within one or two week or get an exchange
          processed after we receive your package. We'll email you&nbsp;after
          processing your refund or exchange and the refund will be issued to
          your original payment method: PayPal or Credit Card. It will take
          longer time (maybe 1 to 2 weeks depending on which CC company is) to
          process the refund for the bank if your original payment method is
          credit/<span>Debit</span>card.
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'Refund',
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
.refund {
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
  .refund {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .refund {
    &-container {
      padding-bottom: 64px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .refund {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
