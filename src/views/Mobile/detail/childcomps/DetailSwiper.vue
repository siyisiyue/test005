<template>
  <div class="detail-swiper">
    <swiper ref="mySwiper2" :options="swiperOptions">
      <swiper-slide :key="index" v-for="(item, index) in banner"
        ><a 
          ><img :src="item" @load="imageLoad" /></a
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
      isLoad: false,
    }
  },
  props: {
    banner: {
      type: Array,
      default: [],
    },
  },
  created() {},
  mounted() {},
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('ImageIsLoad')
        this.isLoad = true
      }
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper2.$swiper
    },
  },
}
</script>

<style scoped >
img {
  width: 100%;
}
.swiper-container {
  height: 374px;
  position: relative;
  overflow: hidden;
}

</style>
