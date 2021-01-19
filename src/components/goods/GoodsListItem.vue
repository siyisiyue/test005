<template>
  <div class="goods-list-item">
    <img :src="items.imageUrl" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ items.name }}</p>
      <div class="infos">
        <span class="price">￥{{ items.price }}</span>
        <span class="zan"
          ><i class="el-icon-star-off"></i>{{ items.start }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    items: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  },
}
</script>

<style scoped >
.goods-list-item {
  width: 45%;
  padding-bottom: 40px;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
}
.goods-info p {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  margin: 0;
  line-height: 20px;
}
.price {
  color: var(--color-tint);
}
.infos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
