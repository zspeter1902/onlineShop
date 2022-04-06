<template>
  <el-row type="flex" align="middle" justify="space-between" class="product-layout">
    <div class="hidden-sm-and-up flex-fixed">
      <el-button type="text" @click="visible = true">
        <span class="nowrap font-medium font">Sort by: </span>
        <i class="el-icon-arrow-down el-icon--right font-semibold" />
      </el-button>
    </div>
    <el-row type="flex" align="middle" justify="space-between" class="product-sort-layout">
      <div class="hidden-xs-only">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link font-medium">
            {{ lists[currentCommand] }}<i class="el-icon-arrow-down el-icon--right font-semibold" />
          </span>
          <el-dropdown-menu slot="dropdown" class="sort-dropdown">
            <el-dropdown-item v-for="(value, key) in lists" :key="key" :command="key" :class="{'active': currentCommand === key }">{{ value }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <el-row type="flex" class="flex-wrap">
        <el-tooltip class="layout-item layout-horizontal" :class="{'active': currentLayout === '1'}" effect="dark" content="List" placement="top" :disabled="device === 'mobile'">
          <el-link :underline="false" @click="handleLayout('1')">
            <span />
            <span />
            <span />
          </el-link>
        </el-tooltip>
        <el-tooltip class="layout-item layout-vertical" :class="{'active': currentLayout === '2'}" effect="dark" content="2 columns" placement="top" :disabled="device === 'mobile'">
          <el-link :underline="false" @click="handleLayout('2')">
            <span />
            <span />
          </el-link>
        </el-tooltip>
        <el-tooltip class="layout-item layout-vertical hidden-xs-only" :class="{'active': currentLayout === '3'}" effect="dark" content="3 columns" placement="top" :disabled="device === 'mobile'">
          <el-link :underline="false" @click="handleLayout('3')">
            <span />
            <span />
            <span />
          </el-link>
        </el-tooltip>
        <el-tooltip class="layout-item layout-vertical hidden-xs-only" :class="{'active': currentLayout === '4'}" effect="dark" content="4 columns" placement="top" :disabled="device === 'mobile'">
          <el-link :underline="false" @click="handleLayout('4')">
            <span class="span-2" />
            <span class="span-2" />
            <span class="span-2" />
            <span class="span-2" />
          </el-link>
        </el-tooltip>
        <el-tooltip class="layout-item layout-vertical hidden-sm-and-down" :class="{'active': currentLayout === '5'}" effect="dark" content="5 columns" placement="top" :disabled="device === 'mobile'">
          <el-link :underline="false" @click="handleLayout('5')">
            <span class="span-1" />
            <span class="span-1" />
            <span class="span-1" />
            <span class="span-1" />
            <span class="span-1" />
          </el-link>
        </el-tooltip>
      </el-row>
    </el-row>
    <!-- 弹窗 -->
    <el-drawer title="Sort by" :visible.sync="visible" direction="btt" size="auto" custom-class="sort-drawer">
      <ul class="sort-list">
        <li v-for="(value, key) in lists" :key="key">
          <el-link class="block" :class="{'active': currentCommand === key }" :underline="false" @click="handleCommand(key)">{{ value }}</el-link>
        </li>
      </ul>
    </el-drawer>
  </el-row>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      visible: false,
      currentCommand: '1',
      currentLayout: '4',
      lists: {
        '1': 'Featured',
        '2': 'Best selling',
        '3': 'Alphabetically, A-Z',
        '4': 'Alphabetically, Z-A',
        '5': 'Price, low to high',
        '6': 'Price, high to low',
        '7': 'Date, old to new',
        '8': 'Date, new to old'
      }
    }
  },
  computed: {
    device({ $store }) {
      return $store.getters.device
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeLayout)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeLayout)
  },
  mounted() {
    this.resizeLayout()
  },
  // 方法集合
  methods: {
    resizeLayout() {
      const { body } = document
      const rect = body.getBoundingClientRect()
      if (rect.width >= 1024) {
        // this.currentLayout = this.currentLayout
      } else if (rect.width >= 768) {
        this.currentLayout = this.currentLayout >= 4 ? '4' : this.currentLayout
      } else if (rect.width < 768) {
        this.currentLayout = this.currentLayout >= 2 ? '2' : '1'
      }
    },
    handleLayout(command) {
      this.currentLayout = command
      this.$emit('layout', command)
    },
    handleCommand(command) {
      console.log(command)
      this.currentCommand = command
      this.$emit('change', command)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.product-layout {
  margin-bottom: 24px;
}
.sort-list {
  padding-bottom: 30px;
  .el-link {
    padding: 12px 16px;
    font-size: 18px;
    color: #666;
    &:hover, &:focus,
    &.active {
      color: $mainColor;
    }
  }
}
.product-sort-layout {
  padding-left: 28px;
}
.el-dropdown-link {
  cursor: pointer;
  color: $mainColor;
  font-size: 16px;
  i {
    font-size: 12px;
  }
}
.sort-dropdown {
  margin-top: 5px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.122);
  ::v-deep {
    .el-dropdown-menu__item {
      line-height: 32px;
      font-size: 16px;
      color: rgba($color: $mainColor, $alpha: .3);
      white-space: nowrap;
      user-select: none;
      transition: color .25s ease;
      &.active,
      &:hover, &:focus {
        background-color: transparent;
        color: $mainColor;
      }
    }
  }
}
.layout-item {
  position: relative;
  width: 34px;
  height: 34px;
  margin: 0 5px;
  padding: 5px;
  line-height: 24px;
  background-color: #f2f2f2;
  border-radius: 3px;
  text-align: center;
  color: $mainColor;
  transition: background .25s ease, color .25s ease;
  &:hover, &:focus, &.active {
    color: #fff;
    background-color: $mainColor;
  }
  &.layout-vertical {
    span {
      display: inline-block;
      width: 2px;
      height: 12px;
      vertical-align: middle;
      background-color: currentColor;
      transform-origin: 0 0;
      & + span {
        margin-left: 2px;
      }
      &.span-1 {
        transform: scaleX(0.5);
        + .span-1 {
          margin-left: 1px;
        }
      }
      &.span-2 {
        transform: scaleX(0.7);
      }
    }
  }
  &.layout-horizontal {
    span {
      display: block;
      height: 2px;
      width: 12px;
      background-color: currentColor;
      & + span {
        margin-top: 2px;
      }
    }
  }
}
::v-deep {
  .sort-drawer {
    .el-drawer__header {
      margin-bottom: 10px;
      padding: 30px 16px 0;
      line-height: 34px;
      color: $mainColor;
      font-size: 24px;
      .el-drawer__close-btn {
        position: relative;
        top: -10px;
        padding: 5px 6px;
      }
      .el-dialog__close {
        font-weight: 600;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .product-sort-layout {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .product-layout {
    padding: 0 8px;
  }
}
</style>
