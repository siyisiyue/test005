<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <home-recommend :recommend="recommend" />
    <feature-view  />
    <tab-control class="tab-control" :controlList='controlList' />
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar.vue'
import TabControl from 'components/tabcontrol/TabControl.vue'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend.vue'
import FeatureView from './childcomps/FeatureView.vue'

export default {
  data() {
    return {
      banner: null,
      recommend: null,
      controlList:['流行','新款','精选']
    }
  },
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    FeatureView,
    HomeRecommend,
    TabControl,
  },
  created() {
    this.axios({
      url: 'http://123.207.32.32:8000/home/multidata',
    }).then((res) => {
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
  },

  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
#home .nav-bar {
  background: #ff8198;
  color: #fff;
}
.tab-control{
  position: sticky;
  top: 44px;
  background: #fff;
  }
</style>
