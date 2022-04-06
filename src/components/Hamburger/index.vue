<template>
  <div class="hamburger" :class="{'is-active':isActive}" @click="toggleClick">
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  position: relative;
  vertical-align: middle;
  width: 30px;
  margin: 0 20px;
  transform-origin: center;
  span {
    position: absolute;
    top: calc(50% - 1px);
    right: 6px;
    width: 20px;
    border-top: 2px solid #000;
    vertical-align: top;
    &:first-child {
      margin-top: -7px;
    }
    &:last-child {
      // width: 8px;
      margin-top: 7px;
    }
  }
}
.hamburger.is-active {
  transform: rotateY(180deg);
}
</style>
