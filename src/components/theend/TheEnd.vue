<template>
  <div class="divEnd">
    <span v-if="isEnd">---------  我也是有底线的  ---------</span>
    <i v-else class="el-icon-loading"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    isEnd: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>

<style scoped >
.divEnd {
  text-align: center;
  font-size: 24px;
  color: #615d5d;
  line-height: 30px;
}
.divEnd span{
    font-size: 12px;
}
</style>
