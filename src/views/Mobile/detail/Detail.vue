<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :banner="banner" @ImageIsLoad="ImageIsLoad"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'
import {Goods} from  '@/models/Detail.js'
export default {
  components: { DetailNavBar, DetailSwiper },
  name: 'detail',
  data() {
    return {
      id: null,
      banner: null,
      goods:null
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getDetail()
  },
  mounted() {},
  methods: {
    getDetail() {
      this.axios({
        url: '/api/Goods/GetDetails?id=' + this.id,
      }).then((res) => {
        let data = JSON.parse(res.data.description)
        console.log(data)
        this.banner = data.topImages
        this.goods  = new Goods(data.itemInfo,data.itemServices,data.priceInfo)
      })
    },
    ImageIsLoad() {
      //this.controlBarTop = this.$refs.tabcontrol.$el.offsetTop
    },
  },
}
</script>

<style scoped >
</style>
