<template>
  <div>
    <nav-bar>
      <div slot="left" @click="GoBack"><i class="el-icon-arrow-left"></i></div>
      <div slot="center" class="items">
        <div
          class="item"
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in titles"
          @click="itemHandler(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar.vue'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  created() {},
  mounted() {},
  methods: {
    GoBack() {
      this.$router.back()
    },
    itemHandler(index) {
      this.currentIndex = index
    },
  },
  components: {
    NavBar,
  },
}
</script>

<style scoped >
.el-icon-arrow-left {
  font-size: 20px;
  margin-top: 12px;
}
.items {
  display: flex;
}
.items .item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-tint);
}
</style>
