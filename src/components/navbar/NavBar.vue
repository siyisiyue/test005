<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="left"></slot></div>
    <div class="nav-bar-center"><slot name="center"></slot></div>
    <div class="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped >
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        position: relative;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
    }
    .nav-bar-left,.nav-bar-right{
        width: 60px;
    }
    .nav-bar-center{
        flex: 1;
    }
</style>
