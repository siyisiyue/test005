<template>
  <div class="content">
    <p>ES5中的var是没有块级作用域的(if/fpr) ES6中的let是由块级作用的(if/for)</p>
    <p>
      ES5之前因为if和for都没有块级作用域的概念，所以在很多时候，我们都必须借助于function的作用?心域来解决应用外面变量的问题
    </p>
    <p>ES6中,加入了let, let它是有if和for的块级作用域.</p>

    <p>const常量不能被重新赋值，但是可以改它里面的属性</p>
     <img alt="Vue logo" src="../../assets/img1.png">

     <h3>对象字面量增强写法</h3>
     <img src="../../assets/img2.png" alt="">
      <img src="../../assets/img3.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>