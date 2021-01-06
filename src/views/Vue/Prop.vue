<template>
  <div class="content">
    <h3>1.父传子</h3>
    <my-child :childmssage="message" :childList="list"></my-child>
    <my-child ref="aaa" :childNum="2" :my-child-message="msg"></my-child>
    <br />
    <br />
    <h3>2.子传父</h3>
    <my-child
      :childNum="3"
      :childList="list"
      @clickhandler="clickHander"
    ></my-child>
    <br>
    <br>
    <h3>3.父访问子</h3>
    <el-button @click="btnHandler1">$children</el-button>
    <el-button @click="btnHandler2">$refs</el-button>
    <br />
    <h3>4.子访问父</h3>
    <el-button @click="btnHandler3">$parent</el-button>
    <el-button @click="btnHandler4">$root</el-button>
    <br />
    <h3>5.双向绑定</h3>
    <childtwo
      :number1="pnumber1"
      :number2="pnumber2"
      @num1change="num1Change"
      @num2change="num2Change"
    ></childtwo>
  </div>
</template>


<script>
import child from '../../components/Vue/Child.vue'
import childtwo from '../../components/Vue/ChildTwo.vue'
export default {
  data() {
    return {
      message: '父组件的东西',
      list: ['水贼王', '钢铁'],
      msg: '驼峰命名写法',
      pnumber1: 1,
      pnumber2: 10,
    }
  },
  name:'prop',
  components: {
    'my-child': child,
    childtwo,
  },
   created() {
    console.log('Prop组件被创建')
  },
  destroyed() {
    console.log('Prop组件被销毁')
  },
  methods: {
    clickHander(item) {
      console.log(item)
    },
    num1Change(val) {
      this.pnumber1 = parseInt(val)
    },
    num2Change(val) {
      this.pnumber2 =  parseInt(val)
    },
    btnHandler1() {
      console.log(this.$children)
    },
    btnHandler2() {
      console.log(this.$refs.aaa.msg)
    },
    btnHandler3() {
      console.log(this.$parent)
    },
    btnHandler4() {
      console.log(this.$root)
    }
  },
}
</script>

<style scoped>
</style>