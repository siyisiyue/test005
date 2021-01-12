<template>
    <div>
        <!-- <h3>当前count的值为：{{this.$store.state.count}}</h3> -->
        <h3>{{this.$store.getters.showNum}}</h3>
        <el-button @click="btnHandler1">-1</el-button>

        <el-button @click="btnHandler2">-2执行回调</el-button>

        <p>使用模块里的状态：{{$store.state.moduleA.firstName}}</p>
        <p>模块getters:{{fullName}}</p>
        <p>外面的getters:{{fullName2}}</p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods:{
      btnHandler1:function(){
          //第一种调用mutations的方法
          this.$store.commit("sub")
      },
      btnHandler2(){
        this.$store.dispatch('subAsync',2).then((result)=>{
          console.log(result)
        })
      }
  },
  computed:{
    fullName() {
      return this.$store.getters['moduleA/fullName']
    },
    fullName2() {
      return this.$store.getters.fullName
    }
  }
}
</script>