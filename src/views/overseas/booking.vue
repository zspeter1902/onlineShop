<template>
  <div class="booking-container">
    <!-- banner -->
    <banner :banner="banner" :show="false" />
    <div class="container">
      <breadcrumb />
      <div class="booking">
        <el-row type="flex" align="middle" class="info-box flex-wrap">
          <el-image class="thumb flex-fixed" :src="detail.thumb" fit="cover" />
          <div class="info">
            <h5 class="name">{{ detail.name }}</h5>
            <p class="company"><i class="el-icon-house el-icon--left" />{{ detail.company }}</p>
            <p class="address"><i class="el-icon-location-outline el-icon--left" />{{ detail.address }}</p>
          </div>
        </el-row>
        <el-form ref="form" :model="form" :rules="rules" label-width="86px">
          <!-- 预订信息 -->
          <h5 class="form-label">填写预订信息</h5>
          <el-form-item label="需求类型:" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox v-for="(value, key) in needType" :key="key" :label="key">{{ value }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- 租仓需求 -->
          <template v-if="form.type.includes('1')">
            <h6 class="form-tab el-form-item">租仓需求填写</h6>
            <el-form-item label="租仓价格:">
              <span>{{ leasePrice }}</span>
            </el-form-item>
            <el-form-item label="预订数量:" prop="order_num">
              <el-input v-model.number="form.order_num" placeholder="请输入" :max="detail.remaining_area" :maxlength="10">
                <span slot="append">{{ detail.area_unit }}</span>
              </el-input>
              <p class="area-tip">起租体积：{{ detail.min_area }}{{ detail.area_unit }}</p>
            </el-form-item>
            <el-form-item label="用仓时间:" prop="use_time">
              <!-- value-format="yyyy-MM-dd" -->
              <el-date-picker
                v-model="form.use_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']"
              />
            </el-form-item>
            <el-form-item>
              <p>提示：根据您填写的预订信息，本次租仓大约需要<span class="calc-price">{{ minPrice }} - {{ maxPrice }}</span>元人民币</p>
            </el-form-item>
          </template>
          <!-- 服务需求 -->
          <template v-if="form.type.includes('2')">
            <h6 class="form-tab el-form-item">服务需求填写</h6>
            <el-form-item label="所需服务类型:" prop="service_type" label-width="110px">
              <!-- value-format="yyyy-MM-dd" -->
              <service-checkbox :list="detail.have_service" @change="changeServiceType" />
            </el-form-item>
            <el-form-item>
              <p>提示：所需服务费用<span class="calc-price">{{ detail.min_service_cost }} - {{ detail.max_service_cost }}</span>({{ detail.service_price_unit }})</p>
            </el-form-item>
          </template>
          <template v-if="form.other.includes('2')">
            <el-form-item label="参保金额:" prop="money">
              <el-input v-model.number="form.money" placeholder="请输入">
                <span slot="append">元</span>
              </el-input>
            </el-form-item>
          </template>
          <!-- 联系方式 -->
          <h5 class="form-label">联系方式</h5>
          <el-form-item label="联系人:" prop="name">
            <el-input v-model="form.name" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="手机号:" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="给商家留言:">
            <el-input v-model="form.message" rows="4" maxlength="300" show-word-limit type="textarea" placeholder="请输入" />
          </el-form-item>
          <el-form-item class="form-item-agree" prop="agree">
            <el-checkbox v-model="isAgree" :disabled="!isAgree" />我已阅读并愿意遵守 <el-link :underline="false" type="primary" @click.prevent="openDialog">《海外仓服务在线系统使用须知》（简称《须知》）</el-link>如有违规行为,愿意接受该《须知》的相应处罚。
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">提交预订</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 弹窗 -->
      <el-dialog :title="agree.title" :visible.sync="visible">
        <el-scrollbar style="height: 50vh">
          <div class="agree" v-html="agree.content" />
        </el-scrollbar>
        <div slot="footer" class="dialog-footer">
          <span class="count-down-tip">{{ countDownTip }}</span>
          <el-button type="primary" :disabled="agreeDisabled" @click="onAgree">同意</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Banner from '@/components/Banner'
import { isValidPhone } from '@/utils/validate'
import { getCompanyList, getWarehouseDetail } from '@/api/company'
export default {
  name: 'Booking',
  components: { Banner, Breadcrumb },
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!isValidPhone(value)) {
        callback(new Error('请输入正确的手机号！'))
      } else {
        callback()
      }
    }
    return {
      banner: require('img/overseas-banner.jpg'),
      detail: {
        name: '宁波乐歌美国加州洛杉矶佩里斯仓',
        company: 'Lecangs LLC',
        thumb: require('img/ot1.jpg'),
        create_time: '2020-06-11',
        min_price: 2,
        max_price: 5,
        area_unit: '立方米',
        service_price_unit: '美元',
        price_unit: '元',
        min_service_cost: 1,
        max_service_cost: 10,
        goods_type: '',
        address: '美国加利福尼亚州佩里斯市',
        total_area: 120000,
        remaining_area: 120000,
        build_type: '自建',
        investment_company: '乐歌人体工学科技股份有限公司',
        investment_create_time: '2002-03-26',
        detail_address_cn: '728 W Rider St Perris, CA 92571,United States',
        detail_address_en: '728 W Rider St Perris, CA 92571,United States',
        min_aging: '1',
        max_aging: '2',
        min_area: 1,
        have_service: '13,14,21,31,32,41,42,46',
        service_remark: '按实际情况收费',
        intro: '120万尺国内海外仓单体最大仓库，120万尺新仓拥有241个月台，344个卡车停车位，24小时快速卸柜，为卖家旺季备货提供保障，有意向的卖家即日可咨询入驻。',
        content: '<div><img src="https://ols.zjmade.cn:18084/api/v1/pc/consumer/file/preview?fileKey=07f4a42f62d443d59adef0bd07e78b60.jpg" alt="" style="width: 100%;"></div>'
      },
      user: {
        name: '张帅',
        phone: '15855152700'
      },
      form: {
        name: '',
        phone: '',
        type: [],
        other: [],
        message: '',
        order_num: null,
        use_time: '',
        service_type: '',
        money: null
      },
      rules: {
        name: [
          { required: true, trigger: 'blur', message: '请输入联系人' }
        ],
        phone: [{ required: true, trigger: 'blur', validator: validatePhone }],
        type: [
          { type: 'array', required: true, trigger: 'change', message: '请选择需求类型' }
        ],
        agree: [
          { type: 'array', required: true, trigger: 'change', message: '请勾选相关协议' }
        ],
        order_num: [
          { required: true, message: '预订数量不能为空' },
          { type: 'number', message: '预订数量必须为数字值' }
        ],
        use_time: [
          { type: 'array', required: true, trigger: 'change', message: '请选择用仓时间' }
        ],
        service_type: [
          { required: true, trigger: 'change', message: '请选择所需服务类型' }
        ],
        money: [
          { required: true, message: '请输入参保金额' },
          { type: 'number', message: '参保金额必须为数字值' }
        ]
      },
      agree: {
        title: '海外仓服务在线系统使用须知',
        content: '<p>2021年8月17日发布</p><p>本须知最终解释权归浙江省商务厅所有。如有变动，请查阅官方网站消息推送与通知。</p><p>第一条 适用范围和目的</p><p>1.1 适用范围：所有浙江省公共海外仓服务在线场景应用的用户，包括海外仓供仓企业（以下简称供仓方）和需要使用海外仓的外贸企业（以下简称用仓方），以下合称双方。</p><p>1.2 本须知旨在建立公平、诚信、透明的运营环境，规范供仓方和用仓方行为，提升平台服务体验。</p><p>第二条 入驻规则及注册须知</p><p>2.1 供仓方入驻标准：区分省级公共海外仓、省内其他海外仓和外省海外仓三种情况。其中，省级公共海外仓企业，由浙江省商务厅依据《浙江省省级公共海外仓名单》进行审核并给予入驻资格；省内其他海外仓企业，由设区市或县（市、区）商务部门审核，报浙江省商务厅备案后，给予入驻资格；外省海外仓企业，由所属省级商务部门出具证明，报浙江省商务厅备案后，给予入驻资格。</p><p>2.2 用仓方入驻标准：依据“订单+清单”系统中注册的外贸企业名单，分批分类给予入驻资格。跨境电商企业，由浙江省商务厅和各地市商务部门审核后，给予入驻资格。</p><p>2.3 入驻流程和要求</p><p>2.3.1 登陆 填写注册信息。</p><p>2.3.2 平台依据上述标准，给予符合入驻标准的供仓方和用仓方登陆权限。</p><p>2.3.3 双方注册内容时，必须提供真实、准确、完整、最新的资料，并应不断更新资料，以符合上述要求。</p><p>注意：若您提供的资料存在任何错误、不实、过时或不完整的情况，平台有合理理由认为您的资料存在上述问题，则有权自行暂停或终止账号，并拒绝现在或将来使用本平台服务（全部或部分），直至问题得以解决。</p><p>2.4 入驻审核时间：1～7个工作日。</p><p>2.5 注册要求</p><p>2.5.1 仅为中国内地或者香港、澳门特别行政区注册的企业。</p><p>2.5.2 注册名不得违反法律、法规、行政规章强制性、限制性规定，亦不能包含猥亵、侮辱，歧视性，侵略性或者违背公序良俗的内容。</p><p>2.5.3 注册名不能包含联系方式，例如邮箱地址、网址、电话号码、Facebook账号、MSN地址等。</p><p>2.5.4 注册名不能包含第三方品牌词汇（例如Zara、Nike 等），不得存在不正当竞争行为。</p><p>2.5.5 注册名不能包含误导性词语，例如 PowerSeller、TopSeller 等，不得存在不正当竞争行为。</p><p>2.5.6 平台有权对填写的信息真实性进行验证，包括但不限于手机认证、邮箱认证、第三方认证等。</p><p>2.5.7一个供仓方通过平台只能注册一个账号，不得多开账户。</p><p>2.5违规注册</p><p>2.5.1双方违反2.4条注册要求，视情节严重程度，平台有权单方面做出以下处理：</p><p>a.对处于入驻审核阶段的账户不予通过；</p><p>b.对已经注册的账号有权单方面实行关闭账户处理。</p><p>2.5.2为保障双方账户安全，禁止双方出租、出借、转让其账户。如有相关行为，由此产生的一切风险及相关责任由双方自行承担，平台有权单方面自行关闭被出租、出借或转让的账户。</p><p>第三条 保险规则</p><p>3.1 平台要求入驻双方自行购买订单保险。</p><p>3.2 保费由双方自行承担。</p><p>3.3 出现保险事故时，由双方自行向保险公司理赔，并迅速消除因保险事故导致的一切交付迟延，平台不承担由于保险事宜造成的责任纠纷。</p><p>第四条 数据规则</p><p>4.1 平台数据仅供浙江省商务厅使用。</p><p>4.2 本平台承诺，在未经双方合法授权时，不会对外公开、编辑或透露注册信息及保存在平台中的非公开内容，除非有下列情况：</p><p>a. 有关法律规定或平台合法服务程序规定</p><p>b.在紧急情况下，为维护双方及公众的权益</p><p>4.3 用仓方在平台发布的用仓需求信息（包括但不限于联系人、联系方式等信息），视为自动授权平台和供仓方使用，但供仓方不得将信息泄露给第三方，如发现数据泄露，平台和用仓方有权向责任方进行法律追诉。</p><p>第五条 评价规则</p><p>5.1 平台的评价标准分为仓库评价及信用评分两类。评价得分会记录到单个仓库及供仓方的信用体系档案中。所有交易结束且未退还定金的订单，在交易结束30天内可评价。</p><p>5.1.1 仓库评价，是指用仓方在订单交易结束后对仓库的评价。仓库评价包括五星制评分和评论两部分。如果用仓方未给出评价，则该订单不会有任何评分记录。</p><p>5.1.2 供仓方信用评分，是指所有用仓方在订单交易结束后对供仓方的信用评价的综合总分。如用仓方在订单评价时间内未对供仓方进行分项评分，则该订单不会有供仓方分项评分记录；供仓方分项评分无默认评价的情形。</p><p>5.2 平台有权删除评价内容中包含人身攻击或者其他不适当言论的评价。平台保留变更信用评价体系，包括评价方法等权利。</p><p>第六条 API接口使用</p><p>6.1 平台保留API接口的使用权利。</p><p><strong>第七条 有关处罚</strong></p><p><strong>7.1 处罚原则</strong></p><p><strong>为确保平台有序、规范运行，对供仓方和用仓房的违规行为，一经查实，平台有权单方面自行实施处罚。</strong></p><p><strong>7.2 处罚类型</strong></p><p><strong>7.2.1 仓库处罚类型</strong></p><p><strong>a.仓库下架：仓库不能被搜索、被访问、被预定。</strong></p><p><strong>b.仓库删除：从平台数据库中完全删除仓库信息。</strong></p><p><strong>7.2.2 账户处罚类型</strong></p><p><strong>a.关闭账户</strong></p><p>暂停账户登陆、使用和发布信息等权限，下架其发布的仓库信息或用仓需求信息。</p><p><strong>b.终止账户</strong></p><p>永久关闭账户，并且取消供仓方或用仓方使用平台服务的资格。</p><p><strong>7.3 仓库发布违规行为及处罚</strong></p><p><strong>7.3.1 违规行为</strong></p><p><strong>供仓方发布的仓库信息，应遵守准确、诚信规则，违规行为包括但不限于以下情形：</strong></p><p><strong>违规类型1 盗用他人图片</strong></p><p>具体行为：盗图即指在未经所有权人合法许可的情况下，擅自使用他人拍摄的仓库图片并发布的行为。</p><p><strong>违规类型2 仓库信息违规</strong></p><p>具体行为：</p><p>1）仓库名称或简短描述中堆砌关键词，或使用和发布与仓库无关的关键词 ；</p><p>2）违规上传仓库图片；</p><p>3）供仓方上传的仓库信息与实际提供的仓库不符。</p><p><strong>违规类型3 欺诈行为</strong></p><p>具体行为：</p><p>1）填写虚假的仓库信息；</p><p>2）供仓方在同一账户或关联账户中发布重复的仓库。</p><p><strong>7.3.2处罚方法</strong></p><p><strong>出现上述违规行为及平台认为存在欺诈等不诚信行为，一经查实，平台有权实施仓库下架处罚甚至仓库删除处罚。</strong></p><p><strong>7.4 供仓方和用仓方违规行为判定及处罚方式</strong></p><p><strong>7.4.1 违规行为</strong></p><p><strong>双方在平台的任何行为，应遵守平台各项规则，违规行为包括但不限于以下情形：</strong></p><p><strong>违规类型1 发布违规信息</strong></p><p>判定原则：指通过平台信息沟通渠道发布平台所禁止的文字或图片信息。违规信息类型包括但不限于以下情形：</p><p>1）出现具有反动性、攻击性、侮辱性、淫秽信息等不雅言辞；</p><p>2）供仓方诱导用仓方登录或注册其它网站为目的的各种形式的宣传信息；</p><p>3）留有私人收款信息。例如：私人支付宝信息、私人微信信息、私人银行卡信息等。</p><p><strong>违规类型2 虚假交易</strong></p><p>判定原则：指供仓方和用仓房在无真实交易情况下虚假预定，以达到欺诈等目的的违规行为。</p><p><strong>违规类型3 不正当竞争</strong></p><p>判定原则：指损害其他供仓方的权益，扰乱平台经营秩序的行为。违规信息类型包括但不限于以下情形：</p><p>1）仓库供仓方在平台其他仓库供仓方处进行下单，并给予差评的行为；</p><p>2）供仓方为提高预定量，发布的价格信息明显低于市场价或远低于其他供仓方同类仓库价格，给用仓方造成误导。</p><p><strong>违规类型3 信用、销量炒作</strong></p><p>判定原则：</p><p>是指通过不正当手段提高账户好评率或仓库预定量，影响用仓方选择海外仓的行为。</p><p><strong>7.4.2 处罚方法</strong></p><p><strong>出现上述违规行为及平台认为存在欺诈等不诚信行为，一经查实，平台有权实施关闭账户甚至删除帐户的处罚。</strong>**</p><p>第八条：法律声明及其效力</p><p>8.1 平台廉洁公告</p><p>供仓方承诺不得对平台的任何工作人员提供贿赂，变相贿赂及其他不正当的利益交换，若由于供仓方存在上述行为导致平台利益受损的，有权向供仓方进行索赔，供仓方对该损失承担赔偿责任。平台可以依据本须知的规定对违规供仓方进行相关处罚。</p><p>8.2 情势变更</p><p>在供仓方入驻经营期间，因国内或仓库所在地法律、法规及政策的变化，或因不可预见因素发生的任何情势变更，平台将根据客观情况，有权单方面修改本须知内容，但应在合理期限内将改动内容通知供仓方。</p><p>8.3 法律效力</p><p>供仓方在平台注册时，供仓方已确认对本须知充分悉知，并自愿按照本须知的内容执行，本须知自供仓方完成注册之时对其产生法律效力。</p><p>8.4 法律适用</p><p>本须知之订立、生效、解释、修订、补充、终止、执行与争议解决等均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</p><p>8.5 管辖</p><p>因使用平台服务所产生及与平台服务有关的争议，首先应协商解决，协商不成时，各方同意由被告所在地有管辖权的人民法院提起诉讼。</p>'
      },
      needType: {
        '1': '我要租仓',
        '2': '我要服务'
      },
      otherService: {
        '1': '是否参与融资',
        '2': '是否参与保险'
      },
      isAgree: false,
      visible: false,
      countDownTip: '倒计时5秒',
      time: 5,
      timer: null,
      agreeDisabled: true
    }
  },
  computed: {
    id({ $route }) {
      return $route.params.id
    },
    leasePrice({ detail }) {
      return '¥ ' + detail.min_price + ' - ' + detail.max_price + ' ' + detail.price_unit + '/' + detail.area_unit + '/天'
    },
    minPrice({ form, detail }) {
      const num = form.order_num || 1
      let day = 1
      const times = form.use_time
      if (times) {
        const diff = new Date(times[1]).getTime() - new Date(times[0]).getTime()
        day = Math.ceil(diff / (60 * 60 * 24 * 1000))
      }
      return num * detail.min_price * day
    },
    maxPrice({ form, detail }) {
      const num = form.order_num || 1
      let day = 1
      const times = form.use_time
      if (times) {
        const diff = new Date(times[1]).getTime() - new Date(times[0]).getTime()
        day = Math.ceil(diff / (60 * 60 * 24 * 1000))
      }
      return num * detail.max_price * day
    }
  },
  created() {
    this.$set(this.form, 'name', this.user.name)
    this.$set(this.form, 'phone', this.user.phone)
  },
  methods: {
    getCompanyInfo() {
      getCompanyList().then(res => {
        const list = res.page.list[0]
        this.contact = list
      })
    },
    getDetail() {
      getWarehouseDetail(this.id).then(res => {
        this.detail = res.crossWare
        res.crossWare.wareImgUrl.split(',').forEach((item, index) => {
          this.slides.push({
            name: index,
            url: item
          })
        })
        this.setTitle(res.crossWare.wareName)
      })
    },
    initDialog() {
      this.agreeDisabled = true
      this.time = 5
    },
    openDialog() {
      this.initDialog()
      this.visible = true
      this.countDownTime()
    },
    closeDialog() {
      this.visible = false
    },
    onAgree() {
      this.isAgree = true
      this.closeDialog()
    },
    countDownTime() {
      if (!this.agreeDisabled) return
      this.timer = setInterval(() => {
        if (this.time === 0) {
          this.countDownTip = ''
          this.agreeDisabled = false
          clearInterval(this.timer)
        } else {
          this.agreeDisabled = true
          this.countDownTip = `倒计时${this.time--}秒`
        }
      }, 1000)
    },
    changeServiceType(value) {
      this.$set(this.form, 'service_type', value.join(','))
      this.$refs.form.validateField('service_type')
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message('submit!')
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
@import "~@/styles/variables";
.booking-container {
  .booking {
    padding: 20px 0;
    margin-bottom: 20px;
    border: 1px solid #eee;
    .info-box {
      padding: 0 20px 20px;
    }
    .calc-price {
      margin: 0 10px;
      color: $redColor;
    }
    .area-tip {
      color: #999;
      line-height: 30px;
      font-weight: 300;
    }
    .form-tab {
      font-size: 16px;
      font-weight: normal;
      color: $mainColor;
    }
    .thumb {
      width: 240px;
      height: 140px;
      margin-right: 20px;
    }
    .info {
      .name {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 24px;
      }
      p {
        margin-top: 4px;
        line-height: 20px;
      }
    }
    ::v-deep {
      .el-form-item__label {
        font-weight: normal;
        color: #333;
      }
      .el-checkbox,
      .el-textarea__inner,
      .el-input__inner {
        color: #333;
      }
      .el-date-editor--daterange.el-input__inner {
        width: 100%;
      }
      .el-input-group__append {
        background-color: #fff;
        color: #333;
      }
      .service-container .el-checkbox {
        min-width: calc(25% - 30px);
        width: auto;
      }
    }
    .form-label {
      margin-bottom: 20px;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      padding: 16px;
      font-size: 16px;
      line-height: 24px;
    }
    .el-form-item {
      padding: 0 14%;
      &.no-margin {
        margin-bottom: 0;
      }
    }
    .form-item-agree {
      padding-top: 20px;
      border-top: 1px solid #f0f0f0;
      ::v-deep {
        .el-form-item__content {
          line-height: 30px;
        }
        .el-checkbox {
          margin-right: 8px;
        }
      }
    }
  }
}
::v-deep {
  .agree {
    p {
      margin-bottom: 8px;
      line-height: 22px;
    }
  }
  .el-button {
    padding: 8px 15px;
  }
  .count-down-tip {
    margin-right: 10px;
  }
  .el-dialog {
    max-width: 1200px;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 767px) {
  .booking-container {
    .booking {
      padding: 10px 0;
      .info-box {
        padding: 0 10px 10px;
      }
      .thumb {
        width: 100%;
        height: auto;
        max-height: 300px;
        margin-right: 0;
        margin-bottom: 20px;
      }
      .form-label {
        margin-bottom: 15px;
      }
      .el-form-item {
        padding: 0 15px;
      }
      .form-item-agree {
        padding-top: 15px;
      }
      ::v-deep {
        .el-form-item__label {
          width: 100% !important;
          text-align: left;
        }
        .el-form-item__content {
          margin-left: 0 !important;
        }
        .service-container .name {
          width: 100%;
          margin-right: 12px;
       }
      }
    }
  }
}
</style>
