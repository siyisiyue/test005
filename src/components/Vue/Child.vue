<template>
  <div>
    <h4>我是子组件<el-link type="danger">{{childNum}}</el-link> ,传过来的是：<el-link type='danger'>{{ childmssage }}</el-link>,驼峰:<el-link type='danger'>{{myChildMessage}}</el-link></h4>
    <ul>
        <li v-for="item in childList" @click="clickHander(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'abc'
    }
  },
  props: {
    //1.限定类型
    //childmssage:String
    //2.限定类型和默认值
    childmssage: {
      type: String,
      default: '默认值',
      //,required:true
    },
    childList:{
        type:Array,
        default() {
            return []
        }
    },
    childNum:{
        type:Number,
        default:1
    },
    myChildMessage:{
        type:String,
        default:'驼峰默认'
    }
  },
  methods:{
      clickHander(item) {
          this.$emit('clickhandler',item)
      }
  }
}
</script>

<style scoped>
</style>