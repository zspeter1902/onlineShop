<template>
  <section class="collections-container">
    <div class="section-header">
      <global-title name="All collection" />
      <p class="text-center">
        Posuere in netus a eu varius adipiscing suspendisse elementum vitae
        tempor suspendisse <br>ullamcorper aenean taciti morbi potenti.
      </p>
    </div>
    <el-row type="flex" class="flex-wrap collections-list" :gutter="30">
      <el-col v-for="item of lists" :key="item.id" :sm="12" :md="6" class="collections-column">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <router-link to="" class="column-image block w-full">
            <svg-icon icon-class="good" class-name="thumb" />
          </router-link>
          <div class="column-body text-center">
            <h3>
              <router-link class="font-medium block name" to="">
                {{ item.name }}
              </router-link>
            </h3>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import globalTitle from '@/components/Title'
export default {
  name: 'Collections',
  components: { globalTitle },
  // 定义属性
  data() {
    return {
      lists: [
        {
          id: 1,
          name: '2022 Super Bowl Sale'
        },
        {
          id: 2,
          name: 'Aqua'
        },
        {
          id: 3,
          name: 'Black'
        },
        {
          id: 4,
          name: 'Blue'
        },
        {
          id: 5,
          name: 'Brown'
        },
        {
          id: 6,
          name: 'Burgundy'
        },
        {
          id: 7,
          name: '2022 Super Bowl Sale'
        },
        {
          id: 8,
          name: 'Custom Baseball Jacket'
        },
        {
          id: 9,
          name: 'Custom Baseball Jacket New Arrivals'
        },
        {
          id: 10,
          name: 'Custom Baseball Jersey'
        },
        {
          id: 11,
          name: 'Custom Hoodie'
        },
        {
          id: 12,
          name: 'Custom Jersey'
        },
        {
          id: 13,
          name: 'Custom Sock'
        },
        {
          id: 14,
          name: 'Custom Underwear'
        },
        {
          id: 15,
          name: 'Custom Women`s Short Baseball Lightweight Jacket'
        },
        {
          id: 16,
          name: 'Earth Yellow'
        },
        {
          id: 17,
          name: 'Green'
        }
      ]
    }
  },
  // 方法集合
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.collections-container {
  padding-bottom: 40px;
  .section-header {
    padding: 0 20px;
    margin-top: 40px;
    margin-bottom: 60px;
    .title {
      margin-bottom: 5px;
    }
    p {
      line-height: 24px;
      color: $grayLinkColor;
    }
  }
  .collections-list {
    margin-bottom: -30px;
  }
  .collections-column {
    padding-bottom: 30px;
    .el-card {
      border: none;
    }
    .column-image {
      position: relative;
      overflow: hidden;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 0;
        padding-top: 100%;
      }
      .thumb {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        color: rgba(51,50,50,.35);
        background-color: rgba(51,50,50,.1);
        border: 1px solid #dedede;
      }
    }
    .column-body {
      margin-top: 20px;
      .name {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .collections-container {
    padding-bottom: 60px;
  }
}
@media only screen and (max-width: 1535px) {
  .collections-container {
    .section-header {
      margin-bottom: 50px;
    }
  }
}
@media only screen and (max-width: 1279px) {
  .collections-container {
    .section-header {
      margin-bottom: 40px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .collections-container {
    .section-header {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .collections-column {
      .column-body {
        margin-top: 10px;
        .name {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
