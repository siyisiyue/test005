<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banner"
        ><a :href="item.link" target="_blank"
          ><img :src="item.image" height="195" /></a
      ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  props:{
     banner:{
         type:Array,
         default:[]
     } 
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
}
</script>

<style scoped >
</style>
