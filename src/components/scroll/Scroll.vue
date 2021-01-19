<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    PullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.PullUpLoad,
      probeType: this.probeType,
      mouseWheel: true, //开启鼠标滚轮
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
      click: true,
    })
    this.scroll.on('scroll', (postion) => {
      this.$emit('showbacktop', postion)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingup')
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    FinishPulling() {
       this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    getScrollY()
    {
      return this.scroll.y
    }
  },
}
</script>

<style scoped >
</style>
