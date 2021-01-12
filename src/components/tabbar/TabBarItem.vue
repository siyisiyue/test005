<template>
  <div class="tabBarItem" :style="color" @click="btnClcik">
      <slot v-if="isActive" name="item-icon-active"></slot>
      <slot v-else name="item-icon"></slot>
      <slot name="item-name"></slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
           // isActive:false
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#f00'
        }
    },
    methods:{
        btnClcik() {
          this.$router.push(this.path)
        }
    },
    computed: {
        isActive() {
          console.log(this.$route.path)
           return this.$route.path.indexOf(this.path) !=-1
        },
        color() {
            return this.isActive?{color:this.activeColor}:{}
        }
    }
}
</script>

<style scoped>
.tabBarItem {
  flex: 1;
  font-size: 14px;
  vertical-align: middle;
  height: 49px;
  text-align: center;
}
.tabBarItem img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.active{color: #f00;}
</style>