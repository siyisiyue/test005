<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :controlList="controlList"
      @tabcontrol="tabcontrol"
      class="hideControl"
      v-show="IsFixed"
      ref="tabcontrol2"
    ></tab-control>
    <scroll
      class="wrapper-content"
      ref="scroll"
      @showbacktop="ShowBackTop"
      :probe-type="3"
      :pull-up-load="true"
      @pullingup="LoadMore"
    >
      <home-swiper :banner="banner" @ImageIsLoad="ImageIsLoad" />
      <home-recommend :recommend="recommend" />
      <feature-view />
      <tab-control
        :controlList="controlList"
        @tabcontrol="tabcontrol"
        ref="tabcontrol"
      ></tab-control>
      <goods-list :goods="showList" />
      <the-end :is-end="isEnd"></the-end>
    </scroll>
    <back-top @click.native="backTopHandler" v-if="pd"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar.vue'
import TabControl from 'components/tabcontrol/TabControl.vue'
import GoodsList from 'components/goods/GoodsList.vue'
import Scroll from 'components/scroll/Scroll.vue'
import BackTop from 'components/backtop/BackTop.vue'
import TheEnd from 'components/theend/TheEnd.vue'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend.vue'
import FeatureView from './childcomps/FeatureView.vue'

import { debounce } from '@/common/utils.js'

export default {
  data() {
    return {
      banner: null,
      recommend: null,
      controlList: ['流行', '新款', '精选'],
      goods: {
        news: { page: 0, list: [], isEnd: false, y: 0 },
        prop: { page: 0, list: [], isEnd: false, y: 0 },
        sift: { page: 0, list: [], isEnd: false, y: 0 },
      },
      currentType: 'news',
      pd: false,
      IsFixed: false,
      controlBarTop: 0,
      controlBarCurrentIndex: 0,
      savey: 0,
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    TheEnd,

    HomeSwiper,
    FeatureView,
    HomeRecommend,
    TabControl,
  },
  created() {
    this.gethomeData()
    this.getGoodsList('news')
    this.getGoodsList('prop')
    this.getGoodsList('sift')
  },
  methods: {
    gethomeData() {
      this.axios({
        url: 'http://123.207.32.32:8000/home/multidata',
      }).then((res) => {
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    getGoodsList(type) {
      this.axios({
        url:
          '/api/Goods/GetHomeGoodsList?type=' +
          type +
          '&page=' +
          this.goods[type].page,
      }).then((res) => {
        if (res.data.length > 0) {
          this.goods[type].list.push(...res.data)
          this.goods[type].page += 1
        } else {
          this.goods[type].isEnd = true
        }
        this.$refs.scroll.FinishPulling()
      })
    },
    tabcontrol(index) {
      this.controlBarCurrentIndex = index
      switch (index) {
        case 0:
          this.currentType = 'news'
          break
        case 1:
          this.currentType = 'prop'
          break
        case 2:
          this.currentType = 'sift'
          break
      }
      this.$refs.tabcontrol.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
      let y = this.goods[this.currentType].y
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, y == 0 ? -this.controlBarTop : y, 0)
     
    },
    backTopHandler() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    ShowBackTop(postion) {
      this.pd = postion.y < -1000
      this.IsFixed = -postion.y > this.controlBarTop
      this.goods[this.currentType].y = postion.y
    },
    LoadMore() {
      if (this.goods[this.currentType].isEnd) {
        this.$refs.scroll.FinishPulling()
      } else {
        this.getGoodsList(this.currentType)
      }
    },
    ImageIsLoad() {
      this.controlBarTop = this.$refs.tabcontrol.$el.offsetTop
    },
  },
  computed: {
    showList() {
      return this.goods[this.currentType].list
    },
    isEnd() {
      return this.goods[this.currentType].isEnd
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    //监听Item图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  //活跃时
  activated() {
    this.$refs.scroll.scrollTo(0, this.savey, 0)
    this.$refs.scroll.refresh()
  },
  //离开
  deactivated() {
    this.savey = this.$refs.scroll.getScrollY()
  },
}
</script>

<style scoped>
#home .nav-bar {
  background: #ff8198;
  color: #fff;
}
.hideControl {
  position: relative;
  z-index: 9;
}

.wrapper-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>
