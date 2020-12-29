<template>
  <div class="content">
      <h3 style="text-align:center;">插值操作</h3>
    <p>1. v-once</p>
    <ul>
      <li>该指令后面不需要跟任何表达式(比如之前的v-for后面是由跟表达式的)</li>
      <li>
        该指令表示元素和组件(组件后面才会学习)只渲染一次，不会随着数据的改变而改变。
      </li>
    </ul>
    <p>eg:</p>
    <p>不使用v-once:{{ message }}</p>
    <p v-once>使用v-once:{{ message }}</p>
    <el-button type="primary" @click="changeMessage">点击改变</el-button>
    <br />
    <br />
    <p>2. v-html</p>
    <ul>
      <li>
        某些情况下，我们从服务器请求到的数据本身就是一个HTML代码口如果我们直接通过得}来输出，会将HTML代码也一起输出。
      </li>
      <li>
        但是我们可能希望的是按照HTML格式进行解析，并且显示对应的内容。如果我们希望解析出HTML展示
      </li>
      <li>
        该指令后面往往会跟上一个string类型,会将string的html解析出来并且进行渲染
      </li>
    </ul>
    <p>eg:</p>
    <p v-html="url"></p>
    <br />
    <p>3. v-text</p>
    <ul>
      <li>v-text作用和Mustache比较相似︰都是用于将数据显示在界面中</li>
      <li>v-text通常情况下，接受一个string类型</li>
      <li>使用时会覆盖html里的内容，不易于拼接</li>
    </ul>
    <p>eg:</p>
    <p v-text="message"></p>
    <br />
    <p>4：v-pre</p>
    <ul>
      <li>
        v-pre用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法
      </li>
    </ul>
    <p>eg:</p>
    <p v-pre>{{ message }}</p>
    <br />
    <p> 5. v-cloak</p>
    <ul>
        <li>在某些情况下，我们浏览器可能会直接显然出未编译的Mustache标签</li>
        <li>配合css[v-cloak] 使用</li>
    </ul>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world',
      url:
        '<a target="_blank" href="https://www.bilibili.com/video/BV15741177Eh?p=14">bilibili 干杯</a>',
    }
  },
  methods: {
    changeMessage: function () {
      this.message = 'hello vue'
    },
  },
}
</script>

<style scoped>

[v-cloak]{
    display: none;
}
</style>