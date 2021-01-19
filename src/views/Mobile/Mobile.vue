<template>
  <div class="mobile-view">
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
     
    <tab-bar>
      <tab-bar-item path='/mobile/home' activeColor='#f00' >
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
          class="img_active"
        />
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/mobile/category'>
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/list_active.svg"
          alt=""
            class="img_active"
        />
        <img slot="item-icon" src="../../assets/img/tabbar/list.svg" alt="" />
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/mobile/cart'>
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/car_active.svg"
          alt=""
            class="img_active"
        />
        <img slot="item-icon" src="../../assets/img/tabbar/car.svg" alt="" />
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/mobile/profile'>
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/my_active.svg"
          alt=""
            class="img_active"
        />
        <img slot="item-icon" src="../../assets/img/tabbar/my.svg" alt="" />
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>


<script>
import tabBar from '@/components/tabbar/TabBar.vue'
import tabBarItem from '@/components/tabbar/TabBarItem.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    tabBar,
    tabBarItem,
  },
}
</script>

<style scoped>
.mobile-view{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>