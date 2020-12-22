<template>
  <div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
        <el-dropdown-item command="addCount">计数++</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data() {
    return {
      userName: '张三',
    }
  },
  methods: {
    // getUserInfo: function () {
    //   var _this = this
    //   this.axios({
    //     method: 'get',
    //     url: '/apis/OAUserInfo/GetCurrentUserDossier',
    //   })
    //     .then((res) => {
    //       this.userName = res.data.result.obj.userName
    //     })
    //     .catch((error) => {})
    // },
    handleCommand(command) {
      var _this = this
      if (command == 'loginOut') {
        localStorage.removeItem('Authorization')
        this.$router.push('/login')
      } else if (command == 'addCount') {
        _this.increment()
      }
    },
    increment() {
      this.$store.commit('increment')
    },
  },
  // mounted: function () {
  //   this.getUserInfo()
  // },
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>