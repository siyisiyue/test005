<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in controlList"
      :class="{ active: index === currentIndex }"
      @click="controlHandler(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    }
  },
  created() {},
  mounted() {},
  methods: {
    controlHandler(index) {
      this.currentIndex = index
      this.$emit('tabcontrol', index)
    },
  },
  props: {
    controlList: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style scoped >
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  z-index: 99;
  background: #fff;
  width: 100%;
}
.tab-control-item {
  flex: 1;
}
.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 5px 7px;
}
.active {
  /* 使用变量 */
  color: var(--color-tint);
}
</style>
