<template>
  <div class="divMain">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      status-icon
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="userNameOrEmailAddress">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="form.userNameOrEmailAddress"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          show-password
          placeholder="请输入密码"
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="btnLogin"
          type="primary"
          v-on:click="onSubmit('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 6) {
        callback(new Error("用户名长度必须大于6"));
      } else {
        callback();
      }
    };
    return {
      form: {
        userNameOrEmailAddress: "",
        password: "",
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        userNameOrEmailAddress: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" },
        ],
      },

      // 对话框显示和隐藏
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    onSubmit(formName) {
       let _this = this;
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/apis/OAUserInfo/Authenticate",
            data: _this.form,
          })
            .then((res) => {
              //console.log(res.data);
              _this.userToken = "Bearer " + res.data.result.obj.accessToken;
              // 将用户token保存到vuex中
              _this.changeLogin({ Authorization: _this.userToken });
              _this.$router.push("/");
            })
            .catch((error) => {
              this.$message({message:"账号或密码错误",type:"error"});
              //console.log(error);
            });

          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          //this.$router.push("/main");
        } else {
          //this.dialogVisible = true;
          return false;
        }
      });
    },
  },
};
</script>

<style  scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto 0;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background: #fff;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.btnLogin {
  margin-left: -80px;
}
.divMain {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url(../assets/bg.jpg) no-repeat 100% 100%;
}
</style>