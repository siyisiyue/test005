<template>
  <div class="content">
    <p>1.</p>
    <h3 v-if="score >= 90">优秀</h3>
    <h3 v-else-if="score >= 60">良好</h3>
    <h3 v-else>不及格</h3>
    <p>2.</p>
    <h3>{{ result }}</h3>

    <p>3.切换小案例,</p>
    <ul>
        <li>这是因为Vue在进行DOM渲染时，出于性能考虑，会尽可能的复用已经存在的元素,而不是重新创建新的元素。</li>
        <li>在上面的案例中，Vue内部会发现原来的input元素不再使用，直接作为else中的input来使用了。</li>
        <li>如果要不复用 增加一个key属性</li>
    </ul>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="账号登录" v-if="isUser">
        <el-input v-model="userName" placeholder="账号登录" ></el-input>
      </el-form-item>
     <el-form-item label="邮箱登录" v-else>
        <el-input v-model="email" placeholder="邮箱登录"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="isUser=!isUser">切换</el-button>
      </el-form-item>
    </el-form>
    <p>4.v-show 会渲染在dom，只是隐藏显示  v-if 不会渲染  </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 2,
      userName:'',
      email:'',
      isUser:true
    }
  },
  computed: {
    result() {
      let messge = ''
      if (this.score >= 90) {
        messge = '优秀'
      } else if (this.score >= 60) {
        messge = '良好'
      } else {
        messge = '差'
      }
      return messge
    },
  },
}
</script>

<style scoped>
</style>