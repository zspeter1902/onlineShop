<template>
  <router-link class="block card-hover" :to="'/overseas/detail/' + info.id">
    <el-card shadow="never">
      <el-row type="flex" class="flex-wrap">
        <el-image class="thumb" :src="thumb" fit="cover" />
        <div class="box">
          <h4 class="name" to="/">{{ info.wareName }}</h4>
          <p class="desc">{{ info.wareAbout }}</p>
          <div class="price">
            <span>¥</span>
            <span class="medium">{{ info.rentalPriceMin + '-' + info.rentalPriceMax }}</span>
            <span>/{{ map[info.priceUnit] }}/天</span>
          </div>
          <p class="address"><i class="el-icon-location-outline" />{{ info.geographicPosition }}</p>
          <el-button type="danger" class="btn">查看详情</el-button>
        </div>
      </el-row>
    </el-card>
  </router-link>
</template>

<script>

export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {}
    },
    map: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    thumb({ info }) {
      const arr = info.wareImgUrl.split(',')
      return arr[0]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin';
.card-hover {
  ::v-deep {
    .el-card {
      background-color: #f8f8f8;
      border-radius: 14px;
      border-color: transparent;
      transition: all .3s;
      &__body {
        padding: 0;
      }
      .thumb {
        width: 100%;
        height: 224px;
      }
    }
  }
  .box {
    padding: 20px 24px 24px;
    .name {
      margin-bottom: 4px;
      font-size: 18px;
      line-height: 30px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .desc {
      height: 66px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      text-align: justify;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .price {
      margin-bottom: 10px;
      color: #f50000;
      font-weight: bold;
      font-size: 14px;
      .medium {
        margin: 0 4px;
        font-size: 20px;
      }
    }
    .address {
      color: rgba($color: #000000, $alpha: .4);
      line-height: 22px;
      @include ellipsis
    }
    .btn {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border: none;
      padding: 15px 20px;
      line-height: 20px;
      font-size: 18px;
      border-radius: 0;
      transform: translateY(60px);
      transition: transform .3s;
      z-index: 2;
      &.el-button--danger {
        color: #FFF;
        background-color: rgba($color: #f50000, $alpha: .3);
      }
    }
  }
  &:hover {
    ::v-deep {
      .el-card {
        border-color: #f50000;
      }
    }
    .box {
      .name {
        color: #f50000;
      }
      .btn {
        transform: translateY(0);
      }
    }
  }
}

</style>
