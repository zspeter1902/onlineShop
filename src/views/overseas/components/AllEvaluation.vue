<template>
  <div class="evaluation container">
    <el-row type="flex" align="middle" class="flex-wrap total">
      <h4 class="first-name text-center">服务评价</h4>
      <div class="score-total margin">{{ comments.score }}</div>
      <div class="margin total-box">
        <div class="tip">高于{{ comments.contrast * 100 + '%' }}的海外仓</div>
        <el-rate
          v-model="comments.score"
          disabled
          disabled-void-color="#f0f0f0"
          :colors="colors"
          score-template="{comments.score}"
        />
      </div>
      <el-row type="flex" class="text-center">
        <div class="margin">
          <div class="name">服务态度</div>
          <div class="score">{{ comments.attitude }}</div>
        </div>
        <div class="margin">
          <div class="name">对接效果</div>
          <div class="score">{{ comments.result }}</div>
        </div>
        <div class="margin">
          <div class="name">收发速度</div>
          <div class="score">{{ comments.speed }}</div>
        </div>
      </el-row>

    </el-row>
    <ul v-if="lists.length" class="lists">
      <el-row v-for="item of lists" :key="item.id" type="flex" tag="li" class="list">
        <div class="user text-center">
          <i class="el-icon-user user-icon" />
          <p class="mobile">{{ item.tel | mobileFilter }}</p>
        </div>
        <div class="info">
          <p>
            <span>服务态度：{{ item.attitude }}</span>
            <span>对接效果：{{ item.result }}</span>
            <span>收发速度：{{ item.speed }}</span>
          </p>
          <p>
            <span>仓库评价：{{ item.evaluation }}</span>
          </p>
          <p>
            <span>服务评价：{{ item.service }}</span>
          </p>
          <p class="date">{{ item.date }}</p>
        </div>
      </el-row>
    </ul>
    <div v-else class="no-result text-center">暂无评价</div>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="page.page"
      layout="prev, pager, next"
      :limit.sync="page.limit"
      class="text-right"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  filters: {
    mobileFilter(val) {
      const reg = /^(.{3}).*(.{4})$/
      return val.replace(reg, '$1****$2')
    }
  },
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      comments: {
        score: 5,
        contrast: 5,
        attitude: 5,
        result: 5,
        speed: 5
      },
      colors: ['#fadb14', '#fadb14', '#fadb14'],
      total: 11,
      page: {
        page: 1,
        limit: 10
      },
      lists: [{
        id: 1,
        userId: 1,
        tel: '15855152700',
        attitude: 5,
        result: 5,
        speed: 5,
        evaluation: '服务好,合作愉快',
        service: '满意',
        date: '2021-09-14 15:37:51'
      }]
    }
  },
  created() {
  },
  methods: {
    getList() {

    }
  }
}
</script>
<style lang="scss" scoped>
.evaluation {
  padding: 24px;
  .total {
    margin: 65px 0;
  }
  .first-name {
    width: 200px;
    font-size: 22px;
    line-height: 44px;
  }
  .margin {
    margin: 0 20px;
  }
  .score-total {
    color: orange;
    font-size: 20px;
    line-height: 40px;
  }
  .tip {
    padding-left: 3px;
  }
  .name, .score {
    font-size: 16px;
    line-height: 26px;
  }
  ::v-deep {
    .el-rate {
      margin-top: 5px;
    }
    .el-rate__icon {
      font-size: 22px;
    }
  }
  .no-result {
    padding: 16px;
    color: rgba(0,0,0,0.25);
  }
}
.lists {
  padding-bottom: 4px;
  .list {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: .06);
    & + .list {
      margin-top: 24px;
    }
  }
  .user {
    width: 200px;
    .user-icon {
      font-size: 60px;
    }
    .mobile {
      font-size: 16px;
      line-height: 32px;
    }
  }
  .info {
    p {
      margin-bottom: 14px;
    }
    span {
      margin-right: 8px;
    }
    .date {
      margin-top: 40px;
    }
  }
}
@media only screen and (max-width: 991px) {
  .evaluation {
    .total {
      margin: 40px 0;
    }
    .first-name {
      width: 160px;
    }
    .margin {
      margin: 0 15px;
    }
  }
  .lists {
    padding-bottom: 0px;
    .list {
      padding-bottom: 18px;
      & + .list {
        margin-top: 18px;
      }
    }
    .user {
      width: 160px;
      .user-icon {
        font-size: 48px;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .evaluation {
    padding: 0px;
    .total {
      margin: 20px 0;
      justify-content: center;
    }
    .first-name {
      flex: 1 1 100%;
      width: 100%;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 42px;
    }
    .margin {
      margin: 0 10px;
    }
    .name {
      margin-top: 15px;
    }
  }
  .lists {
    margin-top: 20px;
    .list {
      flex-wrap: wrap;
      padding-bottom: 16px;
      & + .list {
        margin-top: 16px;
      }
    }
    .user {
      display: flex;
      width: 100%;
      margin-bottom: 12px;
      .user-icon {
        margin-right: 10px;
        font-size: 32px;
      }
    }
    .info {
      .date {
        margin-top: 20px;
      }
    }
  }
}
</style>
