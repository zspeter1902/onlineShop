<template>
  <div class="order-tip">
    <el-image
      class="order-tip-img option-block"
      src="//cdn.shopify.com/s/files/1/0551/6233/9488/files/11_c3f6de5d-92ab-4801-a065-f7807433da5a_1920x.jpg?v=1644989424"
      fit="cover"
    />
    <div class="order-tip-text option-block">
      <p>
        <strong>Affected by the intensification of the epidemic in the United States,
          the production time and logistics time may be extended, so the
          delivery time of your order may also be extended. We apologise for
          such irresistible factors and will try to address them as much as
          possible. Thanks for your understanding!</strong>
      </p>
    </div>
    <div class="order-tip-tip option-block">
      Please note that custom information needs to be uploaded
      successfully!There is also a fee for custom information!A custom message
      can only customize one dress!
    </div>
    <el-row type="flex" class="option-block flex-wrap">
      <span class="flex-fixed gutter-left animate-pulse">
        <svg-icon icon-class="eye2" class-name="svg-20" />
      </span>
      <div class="live-views-text">
        <span class="live-view-numb">20</span> people are viewing this right now
      </div>
    </el-row>
    <div class="option-block">
      <ul class="order-tip-list">
        <el-row type="flex" align="middle" class="flex-wrap" tag="li">
          <span class="order-tip-icon flex-fixed gutter-left">
            <svg-icon icon-class="shipping" class-name="svg-20" />
          </span>

          <el-row type="flex">
            <p>
              <strong>Estimated Delivery:</strong><span class="gutter-right">Apr 22 - Apr 26</span>
            </p>
          </el-row>
        </el-row>

        <el-row type="flex" align="middle" class="flex-wrap" tag="li">
          <span class="order-tip-icon flex-fixed gutter-left">
            <svg-icon icon-class="box" class-name="svg-17" />
          </span>
          <el-row type="flex">
            <p><strong>Free Shipping: </strong>On All Orders</p>
          </el-row>
        </el-row>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  // 定义属性
  data() {
    return {}
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.order-tip {
  &-img {
    padding: 20px;
    width: 100%;
  }
  &-text {
    line-height: 28px;
    color: $grayLinkColor;
    p {
      margin-top: 12px;
      margin-bottom: 12px;
      strong {
        font-weight: 500;
        color: #111827;
      }
    }
  }
  &-tip {
    color: $grayLinkColor;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
  }
  &-list {
    li + li {
      margin-top: 8px;
    }
    strong {
      font-weight: 500;
    }
  }
  &-icon {
    width: 20px;
  }
  .gutter-left {
    margin-right: 10px;
  }
  .gutter-right {
    margin-left: 10px;
  }
}
</style>
