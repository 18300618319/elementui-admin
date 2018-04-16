<style lang="less">
@import "./login.less";
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <el-card :bordered="false">
                <p slot="title">
                    <i class="el-log-in"></i>
                    
                    欢迎登录
                </p>
                <div class="form-con">
                    <el-form ref="loginForm" :model="form" :rules="rules">
                        <el-form-item prop="userName">
                            <el-input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <i class="el-person"></i>
                                 
                                </span>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                     <i class="el-locked"></i>
                                   
                                </span>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="handleSubmit" type="primary" long>登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          Cookies.set("user", this.form.userName);
          this.$router.push({
            name: "home_index"
          });
        }
      });
    }
  }
};
</script>

<style>

</style>
