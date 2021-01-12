<template>
  <div class="divMenu">
    <el-menu
      :default-active="$route.path"
      unique-opened
      router
      class="el-menu-vertical-demo el-menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="/vuex">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>Vuex</span>
        </template>
        <el-menu-item index="/vuex/jishuqi">计数器修改2</el-menu-item>
        <el-menu-item index="/vuex/demo1">demo1</el-menu-item>
      </el-submenu>
      <el-submenu index="/Vue">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>Vue</span>
        </template>
        <el-menu-item index="/Vue/ChaZhi">插值操作</el-menu-item>
        <el-menu-item index="/Vue/Vbind">v-bind操作</el-menu-item>
        <el-menu-item index="/Vue/Computed">Computed计算属性</el-menu-item>
        <el-menu-item index="/Vue/Von">v-on操作</el-menu-item>
        <el-menu-item index="/Vue/Vif">v-if操作</el-menu-item>
        <el-menu-item index="/Vue/Vfor">v-for操作及数组响应式方法</el-menu-item>
        <el-menu-item index="/Vue/CaseShopingCar">购物车案例</el-menu-item>
        <el-menu-item index="/Vue/VModel">v-model操作</el-menu-item>
        <el-menu-item index="/Vue/Prop">父子组件传值</el-menu-item>
        <el-menu-item index="/Vue/Slot">Slot 插槽</el-menu-item>
        <el-menu-item index="/Vue/Router/10001" :route="url">Vue Router</el-menu-item>
        <el-menu-item index="/Vue/axios">Axios</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>VueCli</span>
        </template>
        <el-menu-item index="/VueCli/VueCliConfig">VueCli 配置</el-menu-item>
      </el-submenu> -->
      <el-submenu index="/JS">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>JS</span>
        </template>
        <el-menu-item index="/JS/ES6">ES6 语法</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:{path:'/Vue/Router/10001',query:{name:'zhangsan',age:18,length:20}}
    }
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {
      //console.log(key, keyPath)
    },
  },
}
</script>

<style scoped>
.el-menu {
  text-align: left;
}
.divMenu {
  height: calc(100% - 50px);
  overflow-y: auto;
}
.el-menu-item a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>