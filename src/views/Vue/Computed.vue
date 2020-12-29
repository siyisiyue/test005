<template>
  <div class="content">
      <h3 style="text-align:center;">计算属性</h3>
      <p>1. 基本操作</p>
    <p>{{ fullName }}</p>
    <p>2. getter和setter</p>
    <p>{{fullName2}}</p>
    <el-button type='primary' @click="ChangeName">改变name</el-button>

    <p>3. computed与methods对比</p>
    <p>methods调用一次就要执行一次，影响效率，computed只执行一次，只有原数据发生变化时才重新执行</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'zhang',
      lastName: 'san',
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    fullName2: {
        get(){
            return this.firstName + ' ' + this.lastName
        },
        set(newVal){
            const names =newVal.split(' ')
            this.firstName=names[0]
            this.lastName=names[1]
        }
    }
  },
  methods:{
      ChangeName() {
          this.fullName2="li si"
      }
  }
}
</script>

<style scoped>
</style>
