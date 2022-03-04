<template>
  <div class="title text-center">
    <h4 :class="theme">{{ name }}</h4>
    <p>{{ subName }}</p>
  </div>
</template>

<script>

export default {
  props: {
    theme: {
      type: String,
      default: 'gray' // gray blue
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    subName: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.title {
  position: relative;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  color: #969696;
  user-select: none;
  h4 {
    display: inline-block;
    padding: 0 27px;
    margin-bottom: 10px;
    border: 2px solid transparent;
    line-height: 38px;
    font-size: 22px;
    border-radius: 22px;
    &.gray {
      color: #666;
      border-color: #666;
    }
    &.blue {
      color: #fff;
      border-width: 8px;
      background-color: $mainColor;
      border-color: #fff;
    }
  }
}
@media only screen and (max-width:1199px){
  .title {
    h4 {
      padding: 0 26px;
      font-size: 20px;
      &.blue {
        border-width: 8px;
      }
    }
  }
}
@media only screen and (max-width:991px){
  .title {
    h4 {
      margin-bottom: 8px;
      line-height: 36px;
      font-size: 18px;
      border-radius: 20px;
      &.blue {
        border-width: 6px;
      }
    }
  }
}
@media only screen and (max-width:767px){
  .title {
    h4 {
      margin-bottom: 6px;
      line-height: 32px;
      font-size: 16px;
      border-radius: 18px;
      &.blue {
        border-width: 5px;
      }
    }
  }
}
</style>
