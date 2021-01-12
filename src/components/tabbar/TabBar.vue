<template>
  <div class="divTabBar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.divTabBar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 49px;
  width: 100%;
  background: #fff;
  z-index: 9;
}

</style>