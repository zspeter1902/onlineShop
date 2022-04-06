<template>
  <div class="privacy-policy">
    <div class="page-position text-center">
      <global-title name="Privacy Policy" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="privacy-policy-container container-fluid">
      <el-col :lg="18">
        <h4 class="font-semibold">Privacy Policy</h4>
        <p><strong>Now the site is owned and operated by HANGDONG TRADING LIMITED(Suite 18 Bridge House, 6 Waterworks Yard, Croydon, United Kingdom).</strong></p>
        <ul>
          <li>Respecting your privacy is the utmost importance to us at MyNameCustom.</li>
          <li>Any information you submit to our website, or gathered by a “cookie” during your visit, is used strictly by&nbsp;MyNameCustom Jewelry to maintain a record of your purchases and for promotional reasons.</li>
          <li>We do not sell, transfer, rent or trade your information to any third party.</li>
          <li>When you register at our site, you will be asked to submit some personal information, such as name and contact information.</li>
          <li>
            <span>MyNameCustom</span>&nbsp;will safeguard your personal information. Under no circumstances will we disclose or share your information with any unauthorized third party.</li>
          <li>In addition, we utilize a “cookie” to track your movements on the site. The cookie “remembers” who you are, therefore eliminating the need for you to re-register with us every time you visit our site.</li>
        </ul>
        <p>&nbsp;</p>
        <h4 class="font-semibold">Cookie Policy</h4>
        <ul>
          <li>
            <span>MyNameCustom</span>&nbsp;places small packets of data, known as cookies, onto customers’ computers and mobile device.</li>
          <li>This is a standard practice what all online businesses adhere to. Cookies are an integral part of assisting&nbsp;<span>MyNameCustom</span>&nbsp;to providde high quality online shopping experience for all customers.</li>
          <li>With cookies enabled, <span>MyNameCustom</span>&nbsp;can analyse the buying and browsing behavior of all customers. By browsing MyNameCustom, it means customers consent to the placement of cookies on their computer or mobile device.</li>
          <li>Customers are able to disable cookies if they want personally away from their browser.</li>
        </ul>
        <p>&nbsp;</p>
        <h4 class="font-semibold">Shipment, Customs, Duties And Taxes</h4>
        <ul>
          <li>All items purchased from <span>MyNameCustom </span>are made pursuant to a shipment contract.</li>
          <li>
            <span>MyNameCustom </span>offers worldwide shipping. The recipient specified on the delivery address will be the importer of the purchased product and must comply with all laws and regulations of the destination country.</li>
          <li>The recipient specified on the delivery address may be subject to such import taxes, customs duties and fees, which are levied once a shipment reaches the recipient's country.</li>
          <li>Additional charges for customs clearance must be borne by the recipient specified on the delivery address. <span>MyNameCustom </span>has no control over these charges and cannot predict what they may be.</li>
          <li>It is the responsibility of the recipient to contact their local customs office for more information. When customs clearance procedures are required, it can cause delays beyond <span>MyNameCustom Jewelry</span>’s original delivery estimates.</li>
        </ul>
        <p>&nbsp;</p>
        <h4 class="font-semibold">Disclaimer &amp; Limitation Of Liability</h4>
        <ul>
          <li>
            <span>MyNameCustom Jewelry</span> strives to be as accurate as possible and exhibit the colors, design, and style of the products that appear on this site reflected</li>
          <li>
            <span>MyNameCustom </span>does not 100% warrant that product descriptions, pictures or any other content on the site is accurate, complete, reliable, current, or error-free.&nbsp;</li>
          <li>Actual colors and the "look and feel" you see on the <span>MyNameCustom </span>site will depend on your computer monitor and on other technical factors.</li>
          <li>All of <span>MyNameCustom </span>products are only guaranteed against defects for 30 days from the date of the delivery.&nbsp;</li>
          <li>In no event shall <span>MyNameCustom </span>be liable for special, indirect, consequential, or punitive damages related to products sold.</li>
        </ul>
        <p>&nbsp;</p>
        <h4 class="font-semibold">Marketing Use Of Your Personal Information&nbsp;</h4>
        <ul>
          <li>By signing up for newsletters, you agree to receive special offers and promotions of MyNameCustom. We do not rent, sell, or share Personal Information about you with other people or non- affiliated companies for marketing purposes without your permission.</li>
        </ul>
        <p>&nbsp;</p>
        <h4 class="font-semibold">Contacting MyNameCustom</h4>
        <ul>
          <li>If customers have any comments, questions, concerns or any other issues regarding as privacy and security, please do not hesitate to contact MyNameCustom&nbsp;<el-link type="danger" href="mailto:service@mynamecustom.com" class="no-hover">service@mynamecustom.com</el-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'PrivacyPolicy',
  components: { Breadcrumb, globalTitle },
  // 定义属性
  data() {
    return {
    }
  },
  // 方法集合
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.privacy-policy {
  width: 100%;
  .page-position {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  &-container {
    padding-bottom: 32px;
    line-height: 28px;
    h4 {
      margin-top: 1em;
      margin-bottom: 0.85em;
      font-size: 27px;
      color: #111827;
      line-height: 1.5;
    }
    p {
      margin: 12px 0;
    }
    ul {
      margin-top: 1.25em;
      margin-bottom: 1.25em;
    }
    li {
      position: relative;
      padding-left: 1.75em;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      &::before{
        content: '';
        position: absolute;
        width: .375em;
        height: .375em;
        top: .6875em;
        left: .25em;
        border-radius: 50%;
        background: #d1d5db;
      }
    }
    ::v-deep {
      .is-underline {
        &::after {
          bottom: 6px;
        }
      }
    }
  }
}
@media only screen and (min-width: 640px) {
  .privacy-policy {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .privacy-policy {
    &-container {
      padding-bottom: 64px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .privacy-policy {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
