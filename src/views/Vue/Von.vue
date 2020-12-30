<template>
    <div class="content">
        <h3 style="text-align:center;">v-on 操作</h3>
        <p>1.传参</p>
        <el-button type="primary" @click="btnClick1">默认会传一个event</el-button>
        <el-button type="primary" @click="btnClick2('xx',$event)">需要event和其他参数</el-button>
        <br>
        <p>2.v-on的修饰符</p>
        <p>①阻止事件冒泡 stop</p>
        <div @click="btnClick3" class="divcss1">
            <p>aaaaaaaaaa</p>
            <el-button type="primary" @click.stop="btnClick4">阻止事件冒泡</el-button>
        </div>
        <p>②阻止默认事件 prevent</p>
        <div class="divcss1">
            <form action="baidu">
               
                <el-button @click.prevent="btnClick5" type="primary"  native-type='submit'>el-提交</el-button>
                <button @click.prevent="btnClick5" type="submit">提交</button>
            </form>
        </div>
        <p>③监听键盘</p>
         <div class="divcss1">
            <input type="text" @keyup.enter="KeyUp" placeholder="普通input 监听回车">
            <br>
           <el-input v-model="input" @keyup.enter.native="KeyUp" placeholder="el-input 监听回车"></el-input>
        </div>
        <p>④ once 只点击一次</p>
        <div class="divcss1">
           <el-button @click.once="btnClick3" type="primary">只能点击一次</el-button>
        </div>
           <br>   <br>   <br>   <br>   <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input:''
        }
    },
    methods:{
        btnClick1(event) {
            console.log(event);
        },
        btnClick2(str,event){
           console.log(str,event);
        },
        btnClick3(){
            console.log('divClick');
        },
        btnClick4(){
            console.log('btnClick');
        },
        btnClick5() {
            console.log('btnSubmit');
        },
        KeyUp(){
            console.log('keyUp');
        }
    }
}
</script>

<style scoped>
    .divcss1{border: 1px solid #ccc;padding: 10px;}
</style>