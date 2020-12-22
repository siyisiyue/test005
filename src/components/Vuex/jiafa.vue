<template>
  <div>
    <h3>当前count的值为：{{ count }}</h3>
    <el-button @click="btnHandler1">+1</el-button>
    <el-button @click="btnHandler2">+N</el-button>
    <el-button @click="btnHandler3">+N3</el-button>
    <el-button @click="addN(4)">+N4</el-button>
    <el-button @click="btnHandler4">+1 async</el-button>
    <el-button @click="btnHandler5">+N async(带参数)</el-button>
    <el-button @click="btnHandler6">+N async(带参数)第二种方式</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations , mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    //vuex第一种使用方式：this.$store.state.count
    //vuex的第二种使用方式
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['add', 'addN']),
    ...mapActions(['addAsync','addNAsync']),
    btnHandler1: function () {
      this.$store.commit('add')
    },
    btnHandler2: function () {
      //mutations传参
      this.$store.commit('addN', 2)
    },
    //mutations传参第二种使用方式
    //按需导入 mapMutations  ...mapMutations(['add','addN']),
    btnHandler3: function () {
      this.addN(3)
    },
    btnHandler4: function () {
      //这里的dispatch函数专门用来触发action
      this.$store.dispatch('addAsync')
    },
    btnHandler5: function () {
      this.$store.dispatch('addNAsync', 5)
    },
    btnHandler6:function(){
      this.addNAsync(7)
    }
  },
}
</script>