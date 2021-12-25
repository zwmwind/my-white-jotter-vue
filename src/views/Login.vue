<template>
  <div>
    用户名: <input type="text" v-model="this.loginForm.username" placeholder="Please input username">
    密码: <input type="password" v-model="this.loginForm.password" placeholder="Please input password">
  </div>
</template>

<script>
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
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
    }
  }
}
</script>
