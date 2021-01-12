<template>
  <div class="content">
    <h2>Axios</h2>
    <h3>1.基本使用</h3>
    <el-button @click="btnhandler2">点击请求</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    btnHandler1() {
      this.axios({
        url: 'http://123.207.32.32:8000/home/data?type=prop&page=1',
      }).then((res) => {
        console.log(res)
      })
    },
    btnhandler2() {
      Promise.all([
        new Promise((resolve, reject) => {
          this.axios({
            url: 'http://123.207.32.32:8000/home/multidata',
          }).then((res) => {
            resolve(res)
          })
        }),
        new Promise((resolve, reject) => {
          this.axios({
            url: 'http://123.207.32.32:8000/home/data?type=prop&page=1',
          }).then((res) => {
            resolve(res)
          })
        }),
      ]).then((result) => {
        console.log(result)
      })
    },
  },
}
</script>

<style scoped >
</style>
