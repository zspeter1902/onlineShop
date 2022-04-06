<template>
  <div class="payment">
    <div class="page-position text-center">
      <global-title name="Payment Methods" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="payment-container container-fluid">
      <el-col :lg="18">
        <p>1. PayPal&nbsp;</p>
        <p><span>PayPal is a secure and trusted payment method for online shopping.</span></p>
        <p>1) With PayPal, you can send payment quickly and securely on-line.</p>
        <p>2) Through PayPal, you can pay with credit card, debit card or&nbsp;<span>bank account even if you do not have a Paypal account.&nbsp;</span></p>
        <p>3) Once your order is submitted, you will be redirected to PayPal to complete the transaction. You can trace the status of your payment using your PayPal account.</p>
        <p>&nbsp;</p>
        <p>2.&nbsp;Credit Card</p>
        <p>We accept all kinds of debit/credit card with international transaction function.</p>
        <p>How to pay with a credit card:</p>
        <p>1) Select your shipping address or create a new one;</p>
        <p>2) Enter your card details and click 'Submit';</p>
        <p>3) Your payment will be processed and a receipt will be sent to your e-mail address.</p>
        <p>Paying with Credit or Debit Card is secure, easy and convenient.</p>
        <p><br></p>
        <p>*NOTE:</p>
        <p>Currently, we accept<span style="color: #e61c1c;"> Visa, MasterCard, Discover, American Express</span> payments from most locations worldwide.</p>
        <p>MyName&nbsp;does not collect your credit/debit card number when you make a payment.</p>
        <p>For questions regarding your transactions on our site, Consult your card-issuing bank for information.</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'Payment',
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
.payment {
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
  .payment {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .payment {
    &-container {
      padding-bottom: 64px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .payment {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
