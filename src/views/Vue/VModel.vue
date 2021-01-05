<template>
  <div class="content">
    <h3 class="title">v-model的一些操作</h3>
    <p>1.双向绑定原理</p>
    <div class="boder">
      <p>{{ msg }}</p>
      <input type="text" :value="msg" @input="changeVal" />
      <input
        type="text"
        :value="msg"
        @input="msg = $event.target.value"
        name=""
        id=""
      />
    </div>
    <p>2. 绑定rideo</p>
    <div class="border">
      <template>
        <el-radio v-model="radio" label="男">男</el-radio>
        <el-radio v-model="radio" label="女">女</el-radio>
      </template>
      <label for="male">
        <input type="radio" v-model="radio" id="male" value="男" />男
      </label>
      <label for="female">
        <input type="radio" v-model="radio" id="female" value="女" />女
      </label>
    </div>
    <p>3. 绑定checkbox</p>
    <div class="border">
      <p>单个绑定 {{ isAgree }}</p>
      <label for="agree">
        <input type="checkbox" id="agree" v-model="isAgree" /> 同意
        <el-checkbox v-model="isAgree">同意</el-checkbox>
      </label>
      <p>多个绑定 {{ hobby }}</p>
      <input type="checkbox" value="唱" v-model="hobby" />唱
      <input type="checkbox" value="跳" v-model="hobby" />跳
      <input type="checkbox" value="rap" v-model="hobby" />rap
      <input type="checkbox" value="篮球" v-model="hobby" />篮球
      <template>
        <el-checkbox-group v-model="hobby">
          <el-checkbox label="唱"></el-checkbox>
          <el-checkbox label="跳"></el-checkbox>
          <el-checkbox label="rap"></el-checkbox>
          <el-checkbox label="篮球"></el-checkbox>
        </el-checkbox-group>
      </template>
    </div>
    <h4>4.修饰符</h4>
    <p>layz : 回车或失去焦点时绑定  {{ipt}}</p>
    <input type="text" name="" id="" v-model.lazy="ipt">
    <p>number: 转数字 {{typeof(ipt1)}}:{{ipt1}}</p>
     <input type="number" name="" id="" v-model.number="ipt1">
     <p>trim: 去左右空格</p>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      msg: 'zx',
      radio: '男',
      isAgree: false,
      hobby: [],
      ipt:'zx',
      ipt1:0
    }
  },
  methods: {
    changeVal(e) {
      this.msg = e.target.value
    },
  },
}
</script>

<style scoped>
</style>