<template>
  <div class="banner-container">
    <div class="container">
      <!-- <el-menu class="banner-nav hidden-xs-only hidden-md-and-up" :collapse="true"> -->
        <!-- 服务功能 -->
        <!-- <el-submenu v-for="item of serviceList" :key="item.menuId" :index="item.name">
          <template slot="title">
            <i class="el-icon-office-building" />{{ item.name }}
          </template>
          <el-menu-item-group v-if="item.list && item.list.length">
            <router-link v-for="child of item.list" :key="child.menuId" :to="{ path: '/service/list', query: { id: child.menuId } }">
              <el-menu-item :index="child.name">
                {{ child.name }}
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu> -->
        <!-- 海外仓 -->
        <!-- <el-submenu v-for="item of seasList" :key="item.meta.title" :index="seasBasePath">
          <template slot="title">
            <i :class="item.meta.icon" />{{ item.meta.title }}
          </template>
          <el-menu-item-group v-if="item.children && item.children.length">
            <el-menu-item v-for="child of item.children" :key="child.meta.title" :index="seasBasePath + child.path">
              <router-link :to="seasBasePath + child.path">{{ child.meta.title }}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
      <!-- </el-menu> -->
      <!-- 搜索 -->
      <el-form ref="form" :model="formData" :rules="rules" class="search-form">
        <el-form-item prop="keyword">
          <el-input v-model="formData.keyword" placeholder="请输入搜索词" @keyup.enter.native="submitForm('form')">
            <el-button slot="append" icon="el-icon-search" @click.prevent="submitForm('form')" />
          </el-input>
        </el-form-item>
        <div class="hot text-center">
          <span>热门搜索：<el-link :underline="false" @click="search('税务')">税务</el-link>、<el-link :underline="false" @click="search('平台入驻')">平台入驻</el-link>、<el-link :underline="false" @click="search('特殊综合保税区')">特殊综合保税区</el-link>、<el-link :underline="false" @click="search('配送')">配送</el-link>、<el-link :underline="false" @click="search('融资')">融资</el-link>、<el-link :underline="false" @click="search('融资')">数据分析</el-link></span>
        </div>
      </el-form>
      <!-- 我有产品 我有需求 -->
      <el-row type="flex" class="banner-my">
        <el-row type="flex" justify="space-between" class="product banner-box">
          <h5 class="hidden-xs-only">我有产品</h5>
          <p class="hidden-xs-only">跨境电商货源、仓库、结算、系统等产业链相关产品均欢迎上架出海易，海量商家等您来合作。</p>
          <router-link to="/my/info/product-release">发布产品<i class="el-icon-right el-icon--right" /></router-link>
        </el-row>
        <el-row type="flex" justify="space-between" class="need banner-box">
          <h5 class="hidden-xs-only">我有需求</h5>
          <p class="hidden-xs-only">跨境电商货源、仓库、结算、系统等产业链相关产品均欢迎上架出海易，海量商家等您来合作。</p>
          <router-link to="/my/info/need-release">发布需求<i class="el-icon-right el-icon--right" /></router-link>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
// import serviceRouter from '@/router/modules/service'
import overseasRouter from '@/router/modules/overseas'
export default {
  // 定义属性
  data() {
    return {
      formData: {
        keyword: ''
      },
      rules: {
        keyword: [
          { required: true, message: '请输入关键词', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    serviceList({ $store }) {
      return $store.getters.serviceList
    },
    seasList() {
      overseasRouter.children = overseasRouter.children.filter((item, index) => index < 2)
      return [overseasRouter]
    },
    seasBasePath() {
      return overseasRouter.path + '/'
    }
  },
  // 方法集合
  methods: {
    onChange() {

    },
    toServiceRouter(id) {
      this.$router.push({
        path: '/service/list',
        query: {
          id
        }
      })
    },
    search(keyword) {
      this.$set(this.formData, 'keyword', keyword)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({
            path: '/service/search',
            query: {
              keyword: this.formData.keyword
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
$width: 210px;
.banner-container {
  padding: 66px 0 54px;
  background: #f8f8f8 url('~img/banner_bg.jpg') no-repeat center bottom / cover;
  box-shadow: 0 10px 20px rgba($color: #000000, $alpha: .2) inset;
  .container {
    min-height: 320px;
  }
}

.banner-nav {
  width: $width;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 40px;
  // color: #fff;
  border-right: none;
  background-color: rgba($color: #fff, $alpha: .8);
  backdrop-filter: blur(6px);
  li {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    transition: padding 0.3s;
    & + li {
      border-top: 1px solid rgba($color: #000, $alpha: .1);
    }
    &:hover {
      padding-left: 5px;
    }
  }
}

$bg: #fff;
$dark_gray: #333;
$cursor: #283443;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .el-input input {
    color: $cursor;
  }
}
.search-form {
  // position: absolute;
  top: 60px;
  left: calc(#{$width} + 5px);
  right: 5px;
  padding: 0 30px;
  width: 60%;
  margin: 0 auto;
  .hot {
    line-height: 24px;
    color: rgba($color: #fff, $alpha: .7);
    a {
      color: rgba($color: #fff, $alpha: .7);
      &:hover {
        color: $mainColor
      }
    }
  }
  .el-form-item {
    margin-bottom: 16px;
  }
  .el-input {
    height: 60px;
    font-size: 18px;
    ::v-deep {
      .el-input__inner {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 30px 0 0 30px;
        color: $dark_gray;
        padding: 0 42px;
        height: 60px;
        caret-color: $cursor;
        user-select: none;
        &::placeholder {
          color: $dark_gray;
        }
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
  }
  ::v-deep {
    .el-input-group__append {
      border: none;
      border-radius: 0 30px 30px 0;
      padding: 0 30px;
      color: #666;
      background-color: $helpColor;
    }
    .el-form-item__error {
      font-size: 16px;
      padding-top: 0;
      line-height: 60px;
      top: 0;
      right: 90px;
      left: auto;
      user-select: none;
    }
  }
}
.el-menu--collapse {
  width: $width;
  ::v-deep {
    .el-submenu__title {
      width: 100%;
      i:first-child {
        position: relative;
        top: -1px;
        color: #111;
      }
      &:hover {
        color: $mainColor;
        background-color: transparent;
        i {
          color: $mainColor;
        }
      }
    }
    & > .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
      display: inline-block;
    }
  }
}
// .el-menu-item-group {
//   max-width: 480px;
//   ::v-deep {
//     ul {
//       display: flex;
//       flex-wrap: wrap;
//     }
//   }
// }
::v-deep {
  .el-menu-item-group__title {
    display: none;
  }
}
.banner-my {
  margin-top: 30px;
  // position: absolute;
  // bottom: 10px;
  // left: calc(#{$width} + 5px);
  flex-wrap: wrap;
  border-radius: 4px;
  overflow: hidden;
  .banner-box {
    min-width: 240px;
    width: 48.4%;
    padding: 30px;
    flex-direction: column;
    margin: 0 0.8%;
    color: #666;
    background-color: rgba($color: #fff, $alpha: .8);
    backdrop-filter: blur(6px);
    transition: all .3s;
    h5 {
      display: inline-block;
      margin-bottom: 14px;
      font-size: 16px;
      user-select: none;
      color: #333;
      &::after {
        content: '';
        display: block;
        width: 30px;
        height: 1px;
        margin: 6px 0 0;
        background-color: $mainColor;
        transition: all 1s;
      }
    }
    p {
      width: 86%;
      margin: 0px 0;
      font-size: 14px;
      line-height: 28px;
      user-select: none;
    }
    a {
      position: relative;
      align-self: flex-end;
      display: inline-block;
      padding: 8px 10px;
      font-size: 16px;
      color: #333;
      border-radius: 4px;
      transition: all .3s;
      user-select: none;
      overflow: hidden;
      z-index: 2;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #333;
        transform: rotateY(90deg);
        transform-origin: right;
        transition: transform .25s ease;
        z-index: -1;
      }
      i {
        font-weight: bold;
      }
    }
    &:hover {
      h5 {
        color: $mainColor;
      }
      a {
        color: #fff;
        &::before {
          transform: rotateY(0deg);
          transform-origin: left;
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width:1199px){
  .search-form {
    top: 50px;
    .el-input {
      height: 50px;
      ::v-deep {
        .el-input__inner {
          padding: 0 36px;
          height: 50px;
        }
      }
    }
    ::v-deep {
      .el-form-item__error {
        line-height: 50px;
      }
      .el-input-group__append {
        padding: 0 26px;
      }
    }
  }
}
@media only screen and (max-width:991px){
  .search-form {
    top: 50px;
    .el-input {
      height: 40px;
      font-size: 16px;
      ::v-deep {
        .el-input__inner {
          padding: 0 26px;
          height: 40px;
        }
      }
    }
    ::v-deep {
      .el-form-item__error {
        right: 70px;
        font-size: 14px;
        line-height: 40px;
      }
      .el-input-group__append {
        padding: 0 20px;
      }
    }
  }
  .banner-my {
    .banner-box {
      padding: 24px;
      h5 {
        margin-bottom: 12px;
      }
      p {
        width: 100%;
        font-size: 12px;
        line-height: 24px;
      }
      a {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}
@media only screen and (max-width:767px){
  .banner-container {
    padding: 30px 0;
    overflow: hidden;
  }
  .search-form {
    position: static;
    padding: 0 0;
    width: 90%;
    .el-input {
      height: 36px;
      font-size: 14px;
      ::v-deep {
        .el-input__inner {
          padding: 0 18px;
          height: 36px;
        }
      }
    }
    .hot {
      font-size: 12px;
      line-height: 22px;
    }
    ::v-deep {
      .el-form-item {
        margin-bottom: 10px;
      }
      .el-input-group__append {
        padding: 0 18px;
      }
      .el-form-item__error {
        font-size: 14px;
        line-height: 36px;
        right: 60px;
      }
    }
  }
  .banner-my {
    position: relative;
    bottom: 0;
    left: 0;
    margin-top: 20px;
    .banner-box {
      padding: 0;
      min-width: auto;
      background-color: transparent;
      & + .banner-box {
        border-left:none;
      }
      a {
        margin: 0;
        padding: 10px 15px;
        align-self: center;
        color: #fff;
        &::before {
          transform: rotateY(0deg);
          width: 100%;
        }
      }
    }
  }
}
</style>
