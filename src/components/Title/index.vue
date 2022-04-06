<template>
  <div class="title text-center" :class="{'title-small': small}">
    <h4>{{ name }}</h4>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.title {
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  line-height: 24px;
  color: $mainColor;
  h4 {
    line-height: 60px;
    font-size: 42px;
  }
  &.title-small {
    h4 {
      font-size: 36px;
    }
  }
}
@media only screen and (max-width:1535px){
  .title {
    margin-bottom: 50px;
    h4 {
      font-size: 34px;
      line-height: 44px;
    }
    &.title-small {
      margin-bottom: 10px;
      h4 {
        font-size: 34px;
      }
    }
  }
}
@media only screen and (max-width:1279px){
  .title {
    margin-bottom: 40px;
    h4 {
      font-size: 30px;
      line-height: 40px;
    }
    &.title-small {
      h4 {
        font-size: 30px;
        line-height: 36px;
      }
    }
  }
}
@media only screen and (max-width:767px){
  .title {
    margin-bottom: 30px;
    h4 {
      line-height: 34px;
      font-size: 24px;
    }
  }
}
</style>
