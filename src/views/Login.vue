<template>
  <div>
    用户名: <input type="text" v-model="this.loginForm.username" placeholder="Please input username">
    <br>
    密码: <input type="password" v-model="this.loginForm.password" placeholder="Please input password">
    <br>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { loginApi } from '../request/api'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      loginApi(
        this.loginForm.username,
        this.loginForm.password
      ).then(response => {
        if (response.code === 200) {
          this.$router.replace({
            path: '/index'
          })
        }
      })
        .catch(e => {

        })
    }
  }
}
</script>
