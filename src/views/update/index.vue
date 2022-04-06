<template>
  <div class="update">
    <div class="page-position text-center">
      <global-title name="COVID-19 UPDATE" small />
      <breadcrumb />
    </div>
    <el-row type="flex" justify="center" class="update-container container-fluid">
      <el-col :lg="18">
        <p>
          COVID-19 UPDATE
          ﻿We are working hard to get orders to you safely and to keep you up to date on the changes we’ve made during this time.
          We are working closely with our delivery partners to ensure all deliveries arrive safely and on time. The well being of our customers is a top priority and all necessary precautions are being taken to ensure the safety of both customers and couriers during this time.

          We are currently unable to ship your order as quickly as usual. The reason is, on the one hand, the increased demand at the moment and, on the other, the adjustment of our internal capacities to protect employees. To ensure their safety, we carry out additional health and hygiene measures in our logistics center. Unfortunately, this means that we currently need longer to process your order than you are used to. We therefore ask for your understanding and assure you that we will do everything to ensure that you receive your order as soon as possible.

          We are doing all we can to ensure that your orders get to you as fast as we can, but we know that you, our lovely customers, will understand if there is a bit of a delay whilst we adjust to new ways of working.

          If you have any questions our customer care team are here as always. You can reach them by emailing: service@mynamecustom.com.
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import globalTitle from '@/components/Title'
export default {
  name: 'Update',
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
.update {
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
  .update {
    &-container {
      padding-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .update {
    &-container {
      padding-bottom: 64px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .update {
    width: 100%;
    .page-position {
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
