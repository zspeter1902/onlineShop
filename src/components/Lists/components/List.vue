<template>
  <div class="product-lists-column" :class="{'is-single': single}">
    <div class="column-image pointer">
      <router-link class="block w-full" :to="basePath + '/' + item.id">
        <div class="column-main-img">
          <el-image :src="item.thumb" fit="cover" />
        </div>
        <div class="column-hover-img">
          <el-image :src="item.backThumb" fit="cover" />
        </div>
      </router-link>

      <div class="column-action hidden-md-and-down">
        <el-tooltip effect="dark" content="Add to wishlist" placement="left" transition="el-fade-in-left">
          <el-row type="flex" align="middle" justify="center" class="column-action-icon">
            <svg-icon icon-class="star" class-name="svg-20" />
          </el-row>
        </el-tooltip>
        <el-tooltip effect="dark" content="Compare" placement="left" transition="el-fade-in-left">
          <el-row type="flex" align="middle" justify="center" class="column-action-icon">
            <svg-icon icon-class="compare" class-name="svg-20" />
          </el-row>
        </el-tooltip>
        <el-tooltip effect="dark" content="Quick view" placement="left" transition="el-fade-in-left">
          <el-row type="flex" align="middle" justify="center" class="column-action-icon">
            <svg-icon icon-class="eye" class-name="svg-20" />
          </el-row>
        </el-tooltip>
      </div>
      <div v-show="!single" class="column-quick-add hidden-xs-only">
        <el-button class="add-to-cart w-full no-border font-medium font">
          Quick Add
        </el-button>
      </div>
    </div>
    <div class="column-content pointer">
      <div class="w-full">
        <h3 class="column-name">
          <router-link :to="basePath + '/' + item.id" class="block font-medium">
            {{ item.good_name }}
          </router-link>
        </h3>
      </div>
      <div class="column-price">
        <span>${{ item.price }}</span>
      </div>
      <div v-show="single" class="column-view-list">
        <p class="column-tips">{{ item.tip }}</p>
        <el-row type="flex" align="top">
          <div class="column-quick-add">
            <el-button class="add-to-cart w-full no-border font-medium font">
              Quick Add
            </el-button>
          </div>
          <el-row type="flex" class="column-action">
            <el-tooltip effect="dark" content="Add to wishlist" placement="bottom" transition="el-fade-in-bottom">
              <el-row type="flex" align="middle" justify="center" class="column-action-icon">
                <svg-icon icon-class="star" class-name="svg-20" />
              </el-row>
            </el-tooltip>
            <el-tooltip effect="dark" content="Compare" placement="bottom" transition="el-fade-in-bottom">
              <el-row type="flex" align="middle" justify="center" class="column-action-icon">
                <svg-icon icon-class="compare" class-name="svg-20" />
              </el-row>
            </el-tooltip>
            <el-tooltip effect="dark" content="Quick view" placement="bottom" transition="el-fade-in-bottom">
              <el-row type="flex" align="middle" justify="center" class="column-action-icon">
                <svg-icon icon-class="eye" class-name="svg-20" />
              </el-row>
            </el-tooltip>
          </el-row>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  // 定义属性
  data() {
    return {}
  },
  computed: {
    basePath({ $route, item }) {
      return $route.path === '/index' ? '/collections/' + item.type : $route.path
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.pointer {
  cursor: pointer;
}
.product-lists-column {
  padding: 0 15px 40px;
  line-height: 24px;
  .column-image {
    position: relative;
    overflow: hidden;
    .el-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .column-main-img {
      position: relative;
      opacity: 1;
      z-index: 10;
      transition: opacity .8s ease;
      &::before {
        content: '';
        display: block;
        height: 0;
        width: 100%;
        padding-top: calc(100% / (3 / 4));
      }
    }
    .column-hover-img {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      opacity: 0;
      transform: translateZ(0);
      backface-visibility: hidden;
      transition: opacity .8s ease, transform 1.1s cubic-bezier(.15,.75,.5,1) 0s;
      &::before {
        content: '';
        display: block;
        height: 0;
        width: 100%;
        padding-top: calc(100% / (3 / 4));
      }
    }
    .column-action {
      position: absolute;
      top: 20px;
      right: 20px;
      opacity: 0;
      transform: translate(150%);
      &-icon {
        margin-bottom: 10px;
      }
    }
    .column-quick-add {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      opacity: 0;
    }
  }
  .column-action {
    transition: all .3s ease;
    z-index: 10;
    &-icon {
      width: 42px;
      height: 42px;
      padding: 5px;
      border-radius: 21px;
      transition: all .3s ease;
      background-color: #fff;
      color: $mainColor;
      cursor: pointer;
      &:hover, &:focus {
        color: #fff;
        background-color: $mainColor;
        box-shadow: 0 0 0 3px $mainColor;
      }
    }
  }
  .column-quick-add {
    margin-bottom: 20px;
    transition: all .3s ease;
    z-index: 10;
  }
  .add-to-cart{
    transition: all .32s;
    border-radius: 5px;
    line-height: 18px;
    &:hover, &:focus {
      color: #fff;
      background-color: $mainColor;
    }
  }
  .column-name {
    margin-top: 20px;
    margin-bottom: 15px;
    a:hover, a:focus {
      color: #666;
    }
  }
  .column-price {}
  .column-view-list {
    margin-top: 20px;
    .column-tips {
      margin-bottom: 16px;
      color:$grayLinkColor;
      line-height: 28px;
    }
    .add-to-cart{
      width: 180px;
      line-height: 22px;
      background-color: $mainColor;
      color: #fff;
      &:hover, &:focus {
        box-shadow: 0 0 0 3px $mainColor;
      }
    }
    .column-action {
      &-icon {
        margin-left: 10px;
      }
    }
  }
}
::v-deep {
  .el-tooltip__popper[x-placement^=left] .popper__arrow {
    border-left-color: $mainColor;
  }
  .el-tooltip__popper[x-placement^=bottom] .popper__arrow {
    border-bottom-color: $mainColor;
  }
}
@media only screen and (min-width: 768px) {
  .product-lists-column {
    &.is-single {
      display: flex;
      .column-image {
        width: 270px;
        flex: 0 0 270px;
        margin-right: 42px;
        .column-quick-add {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(150%);
          transition: all .3s ease;
          z-index: 10;
        }
        .add-to-cart{
          transition: all .32s;
          border-radius: 5px;
          line-height: 18px;
          &:hover, &:focus {
            color: #fff;
            background-color: $mainColor;
          }
        }
      }
      .column-name {
        margin-top: 20px;
        margin-bottom: 15px;
        a:hover, a:focus {
          color: #666;
        }
      }
      .column-content {
        padding-top: 20px;
      }
    }
  }
}
@media only screen and (min-width: 1025px) {
  .product-lists-column {
    .column-image {
      &:hover, &:focus {
        .column-main-img {
          opacity: 0;
        }
        .column-hover-img {
          opacity: 1;
          transform: scale3d(1.1,1.1,1.1) translateZ(0);
        }
        .column-quick-add,
        .column-action {
          opacity: 1;
          transform: translateZ(0);
        }
      }
    }
  }
}
@media only screen and (max-width: 1279px) {
  .product-lists-column {
    padding: 0 8px 20px;
  }
}
@media only screen and (max-width: 767px) {
  .product-lists-column {
    padding-bottom: 30px;
    .column-view-list {
      .add-to-cart{
        width: 160px;
      }
      .column-action {
        &-icon {
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
