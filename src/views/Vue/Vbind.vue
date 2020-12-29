<template>
  <div class="content">
    <h3 style="text-align: center">V-bind操作</h3>
    <p>1.基本使用</p>
    <p>2.语法糖 :</p>
    <a v-bind:href="aHref" target="_blank"
      ><img :class="small" v-bind:src="imgUrl" alt=""
    /></a>
    <p>3.对象语法 动态绑定class</p>
    <p :class="{ isActive: isActive, isLine: isLine }">这里是文字内容</p>
    <el-button type="primary" @click="ChangeClass">点击</el-button>

    <p>4.v-for与动态class绑定结合案例</p>
    <ul>
      <li v-for="(item,index) in movies" :class="getClass(item.active)" @click="ChangeClass(index)">
        {{ item.name }}
      </li>
    </ul>

    <p>5.v-bind 动态绑定style</p>
    <p>可以用驼峰，也可以用原属性</p>
    <h3 :style="{'font-size':finalSize,backgroundColor:bgColor}">阿双方均爱疯</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: 'https://cn.vuejs.org/images/logo.png',
      aHref: 'https://cn.vuejs.org',
      isActive: true,
      isLine: true,
      small: 'small',
      movies: [
        { name: '金刚狼', active: true },
        { name: '钢铁侠', active: false },
        { name: '绿巨人', active: false },
        { name: '美国队长', active: false },
      ],
      finalSize:'24px',
      bgColor:'red'
    }
  },
  methods: {
    ChangeClass() {
      this.isActive = !this.isActive
      this.isLine = !this.isLine
    },
    getClass(isActive) {
      return isActive ? 'isActive' : ''
    },
    ChangeClass(index){
        this.movies.forEach(element => {
            if (element.active) {
                element.active=false
            }
        });
        this.movies[index].active=true
    }
  }
}
</script>

 <style scoped>
.isActive {
  color: red;
}
.isLine {
  text-decoration: underline;
}
.small {
  width: 50px;
}
</style>