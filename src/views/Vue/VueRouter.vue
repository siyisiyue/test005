<template>
  <div class="content">
    <p>1.手动跳转</p>
    <el-button @click="btnHandler">点击跳转</el-button>
    <br />
    <p>2.获取动态路由参数部分</p>
    {{ uid }}
  </div>
</template>

<script>
export default {
  name: 'vueRouter',
  data() {
    return {}
  },
  computed: {
    uid() {
      console.log(this.$route) //$route为当前活跃的路由
      return this.$route.params.uid
    },
  },
  created() {
    console.log('VueRouter组件被创建')
  },
  destroyed() {
    console.log('VueRouter组件被销毁')
  },
  activated() {
    //这个函数只有使用keep-alive时才生效
  },
  deactivated() {
    //这个函数只有使用keep-alive时才生效
  },
  methods: {
    btnHandler() {
      this.$router.push('/vuex/demo1')
      //this.$router.replace('/vuex/demo1')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>>

