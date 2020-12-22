<template>
    <div>
        <!-- <h3>当前count的值为：{{this.$store.state.count}}</h3> -->
        <h3>{{this.$store.getters.showNum}}</h3>
        <el-button @click="btnHandler1">-1</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods:{
      btnHandler1:function(){
          //第一种调用mutations的方法
          this.$store.commit("sub")
      }
  }
}
</script>