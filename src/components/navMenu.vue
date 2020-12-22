<template>
  <div class="divMenu">
    <el-menu
      :default-active = "$route.path"
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
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>Vuex</span>
        </template>
        <el-menu-item index="/vuex/jishuqi">计数器修改2</el-menu-item>
        <el-menu-item index="/vuex/demo1">demo1</el-menu-item>
        <el-submenu index="2-2">
          <template slot="title">选项4</template>
          <el-menu-item index="2-2-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">合同</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">质量</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath)
    }
  }
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
.el-menu-item a{display: inline-block;width: 100%;height: 100%; }
</style>