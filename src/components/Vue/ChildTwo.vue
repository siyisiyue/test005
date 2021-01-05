<template>
  <div>
    <h3>num:{{ num1 }}, propsNumber:{{ number1 }}</h3>
    <el-input :value="num1" @input="inputHandler1" />
    <el-input v-model="num1" />
    <h3>num:{{ num2 }}, propsNumber:{{ number2 }}</h3>
    <el-input :value="num2" @input="inputHandler2" />
    <el-input v-model="num2" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: this.number1,
      num2: this.number2,
    }
  },
  props: {
    number1: Number,
    number2: Number,
  },
  methods: {
    inputHandler1(e) {
      this.num1 = e
      this.$emit('num1change', this.num1)
      this.num2 = this.num1 * 10
      this.$emit('num2change', this.num2)
    },
    inputHandler2(e) {
      this.num2 = e
      this.$emit('num2change', this.num2)
      this.num1 = this.num2 / 10
      this.$emit('num1change', this.num1)
    },
  },
  //监听
  watch: {
    num1(newval, oldval) {
      this.num2 = newval * 10
      this.$emit('num1change', newval)
    },
    num2(newval, oldval) {
      this.num1 = newval / 10
      this.$emit('num2change', newval)
    },
  },
}
</script>

<style scoped>
</style>