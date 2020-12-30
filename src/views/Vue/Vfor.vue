<template>
  <div class="content">
      <h3 style="text-align:center;">v-for 操作</h3>
      <p>1.数组的用法</p>
      <ul>
          <li v-for="(item,index) in list1">{{index}}.{{item.name}}</li>
      </ul>
      <p>2.对象的用法</p>
      <ul>
          <li v-for="(value,key,index) in info">{{index}}.{{key}}:{{value}}</li>
      </ul>
      <p>3.key的作用主要是为了高效的更新虚拟DOM</p>
      <ul>
           <li v-for="(item,index) in list1" :key="item.name">{{index}}.{{item.name}}</li>
      </ul>
      <p>4.数组中哪些方法是响应式的</p>
      <ul>
          <li v-for="item in litter">{{item}}</li>
      </ul>
      <el-button type="primary" @click="btnClick">数组中哪些方法是响应式</el-button>
      <el-button type="primary" @click="btnClick2(1,2,3,4,5,6,7)">可变参数</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list1:[{name:'zx',age:18},{name:'ly',age:16}],
            info:{
                name:'zx',
                age:17,
                height:1.5
            },
            litter:['A','B','C','D','E']
        }
    },
    methods:{
        btnClick() {
            //1.在数组最后追加元素
            this.litter.push('F')
            //2.pop 删除数组最后一个元素
            this.litter.pop()
            //3.shift 删除数组第一个元素
            this.litter.shift()
            //4.unshift 在数组最前面追加元素
            this.litter.unshift("G")
            //5.splice作用 删除、插入、替换
            //删除元素:第二个参数传入你要删除几个元素(如果没有传,就删除后面所有的元素)
            //替换元素:第二个参数，表示我们要替换几个元素，后面是用于替换前面的元素
            this.litter.splice(1,3,'V','B','N','M')
            Vue.set(this.litter,0,'aaa')//vue内部实现
            //6.sort
            //7.reverse
            //不是响应式的
            this.litter[0]='aaa'
           
        },
        //可变参数
        btnClick2(...num){
            console.log(num)
        }
    }
}
</script>

<style scoped>

</style>