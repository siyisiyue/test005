<template>
  <div class="divMain">
    <el-container>
      <el-aside :class="[isOpen ? 'asideOpen' : 'asideClose']">
        <a href="/" class="alogo"></a>
        <nav-menu />
      </el-aside>
      <el-main>
        <div class="divHeader">
          <ul class="ulNav">
            <li>
              <a href="javascript:;" @click="run()" title="侧边伸缩"
                ><i
                  :class="[isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
                ></i
              ></a>
            </li>
            <li>
              <a href="javascript:location.reload();" title="刷新"
                ><i class="el-icon-refresh"></i
              ></a>
            </li>
          </ul>
          <div class="divTitle">
            VUE.JS
          </div>
          <userInfo class="Uinfo" />
        </div>
        <div class="divContent">
          <div class="container">
            <router-view />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Store } from 'vuex'
import navMenu from '../components/navMenu.vue'
import userInfo from '../components/UserInfo'
export default {
  components: { navMenu, userInfo },
  name: 'layout',
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    run: function () {
      this.isOpen = this.isOpen ? false : true
    }
  },
}
</script>

<style scoped>
.el-aside {
  height: 100vh;
  background: #f0f3f6;
  transition: width 0.2s;
  overflow: hidden;
}
.el-main {
  position: relative;
  overflow: hidden;
  padding: 0;
}
.el-container{
  height: 100%;
}
.divHeader {
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: relative;
  overflow: hidden;
  background: #929dae;
}
.alogo {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: url(../assets/logo.png) no-repeat center center #929dae;
  background-size: auto 80%;
}
.divMain {
  background: #ecf0f5;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.el-header {
  padding: 0;
  background: #929dae;
  line-height: 50px;
}
.divTitle {
  width: 300px;
  color: #fff;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  text-align: center;
  font-size: 18px;
}
.asideOpen {
  width: 240px !important;
}
.asideClose {
  width: 0 !important;
}
.divContent {
  width: calc(100% - 30px);
  height: calc(100% - 80px);
  position: relative;
  overflow: hidden;
  padding: 15px;
}
.container {
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.ulNav {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ulNav li {
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
.ulNav li a {
  color: #fff;
  transition: all 0.3s;
  font-size: 20px;
  font-weight: 100;
}
.ulNav li a:hover {
  color: #1ea28e;
}
.Uinfo {
  position: absolute;
  top: 0;
  right: 20px;
}
.content {
  padding: 10px;
  text-align: left;
  background: #fff;
}
.content >>> .title{text-align: center;}
.content >>> .boder{border: 1px solid #999;padding: 10px;}
</style>