<template>
  <div class="overseas-container">
    <baidu-map ref="map" ak="NslT8XGV5BUV14gT43mmoV8NAPDNL3ky" :center="center" :zoom="zoom" scroll-wheel-zoom :map-click="false" @ready="handlerMap">
      <bm-view class="map" />
      <!-- 标注 -->
      <bm-marker v-for="item of listsLocation" :key="item.id" :position="item.location" @click="showCurrent(item)" />
    </baidu-map>
    <!-- 搜索列表 及详情 -->
    <div class="search-form">
      <el-select v-model="current" filterable placeholder="请选择海外仓" value-key="id" @change="onSelect">
        <el-option
          v-for="item in lists"
          :key="item.id"
          :label="item.wareName"
          :value="item"
        />
        <i slot="prefix" class="el-icon-search" />
      </el-select>
      <div v-show="show" class="search-content">
        <el-row type="flex" class="flex-wrap search-content-header">
          <div class="flex-auto">
            <el-link class="search-content-name" :underline="false" @click="onExtent(!extend)"><i v-show="extend" class="el-icon-arrow-down el-icon--left" />{{ current.wareName }}</el-link>
            <p v-show="!extend" class="search-content-company">{{ current.investBusi }}</p>
          </div>
          <div v-show="!extend" class="flex-fixed">
            <el-button type="primary" size="small" round @click="onLink">查看详情</el-button>
          </div>
        </el-row>
        <div v-show="!extend" class="search-content-body">
          <el-row type="flex" align="middle" class="search-content-item">
            <span class="label"><i class="el-icon-s-ticket el-icon--left" />租赁价格</span>
            <div class="value">
              <span class="red">¥ {{ current.rentalPriceMin }}-{{ current.rentalPriceMax }} </span>
              <span>/{{ costStandard[current.priceUnit] }}/天</span>
            </div>
          </el-row>
          <el-row type="flex" align="middle" class="search-content-item">
            <span class="label"><i class="el-icon-s-ticket el-icon--left" />起租体积</span>
            <div class="value">
              <span class="black">{{ current.rentalVolumeMin }} </span>
              <span>{{ costStandard[current.priceUnit] }}</span>
            </div>
          </el-row>
          <el-row type="flex" align="middle" class="search-content-item">
            <span class="label"><i class="el-icon-s-ticket el-icon--left" />仓库总面积</span>
            <div class="value">
              <span class="black">{{ current.allArea }} </span>
              <span>平方米</span>
            </div>
          </el-row>
          <div class="search-content-item">
            <el-row type="flex" class="label">
              <i class="el-icon-s-ticket el-icon--left" />
              <div class="flex-auto">
                <span>地理位置</span>
                <p class="value value-row">{{ current.geographicPosition }}</p>
              </div>
            </el-row>
          </div>
          <div class="search-content-item">
            <el-row type="flex" class="label">
              <i class="el-icon-s-ticket el-icon--left" />
              <div class="flex-auto">
                <span>仓库简介</span>
                <p class="value value-row">{{ current.wareAbout }}</p>
              </div>
            </el-row>
          </div>
        </div>
        <div v-show="!extend" class="search-content-banner">
          <el-image class="thumb" :src="current.wareImgUrl" fit="cover" />
          <el-button size="small" class="btn-extent" icon="el-icon-arrow-up" round @click.prevent="onExtent()">收起详情</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaiduMap, BmView, BmMarker } from 'vue-baidu-map'
import { getWarehouse } from '@/api/company'
import { getDictMap } from '@/api/global'
export default {
  name: 'OverseasMap',
  components: { BaiduMap, BmView, BmMarker },
  data() {
    return {
      zoom: 1,
      zIndex: 99999999,
      markerPo: {
        lng: 39.9,
        lat: 116.3
      },
      center: '阿富汗',
      lists: [],
      listsLocation: [],
      current: {},
      show: false,
      extend: false,
      BMap: null,
      map: null,
      costStandard: {}
    }
  },
  created() {
    this.getMap()
  },
  methods: {
    getMap() {
      getDictMap('cost_standard').then(res => {
        this.costStandard = res.data
      })
    },
    getList() {
      getWarehouse().then(res => {
        this.lists = res.page.list
        this.$nextTick(() => {
          this.getListLocation()
        })
      })
    },
    handlerMap({ BMap, map }) {
      this.BMap = BMap
      this.map = map
      this.getList()
    },
    getListLocation() {
      const BMap = this.BMap
      const convertor = new BMap.Convertor()
      const geocoder = new BMap.Geocoder()
      this.$nextTick(() => {
        this.lists.map(item => {
          geocoder.getPoint(item.geographicPosition, point => {
            convertor.translate([new BMap.Point(point.lng, point.lat)], 1, 5, (data) => {
              if (data.status === 0) {
                item.location = data.points[0]
                this.listsLocation.push(item)
              }
            })
          }, item.geographicPosition)
        })
      })
    },

    onSelect(value) {
      this.show = true
    },
    onLink() {
      const id = this.current.id
      this.$router.push(`/overseas/detail/${id}`)
    },
    onExtent(bull) {
      console.log(bull)
      if (bull) {
        return
      }
      this.extend = !this.extend
    },
    showCurrent(item) {
      this.current = item
      this.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables';

.overseas-container {
  .map {
    width: 100%;
    min-height: 810px;
    height: 74vh;
  }
  .search-form {
    position: absolute;
    top: 30px;
    left: 30px;
    max-width: 328px;
    width: 100%;
    font-size: 16px;
    z-index: 99;
  }
  .el-select {
    width: 100%;
    margin-bottom: 10px;
    ::v-deep {
      .el-input__prefix {
        left: 12px;
        line-height: 40px;
      }
      .el-input__inner {
        padding-left: 35px;
      }
    }
  }
  .search-content {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,.25);
    border-radius: 6px;
    overflow: hidden;
    &-header {
      padding: 20px 15px 20px 20px;
      border-bottom: 1px solid #E5E5E5;
    }
    &-name {
      font-size: 18px;
      line-height: 28px;
      color: $mainColor;
    }
    &-company {
      margin-bottom: 5px;
      line-height: 22px;
      font-size: 14px;
    }
    &-body {
      padding: 20px 36px;
    }
    &-item {
      font-size: 12px;
      i {
        color: $mainColor;
      }
      .label {
        min-width: 120px;
      }
      .value {
        color: rgba($color: #000000, $alpha: .45);
        line-height: 22px;
        &-row {
          margin-top: 10px;
        }
      }
      .red {
        font-size: 16px;
        color: $redColor;
        font-weight: 600;
      }
      .black {
        font-size: 16px;
        color: #000;
        font-weight: 600;
      }
      & + .search-content-item {
        margin-top: 18px;
      }
    }
    .el-button {
      margin-left: 10px;
    }
    &-banner {
      position: relative;
      z-index: 2;
      .thumb {
        width: 100%;
        height: auto;
      }
      .btn-extent {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2000000000;
      }
    }
  }
}
@media only screen and (max-width:1199px){

}
@media only screen and (max-width:991px){
}
@media only screen and (max-width:767px){}
</style>
