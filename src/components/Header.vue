<template>
  <div class="header">
    <div class="nav">
      <router-link class="active" :to="{ path: '/active' }">活动</router-link>
      <router-link class="technology" :to="{ path: '/technocracy' }"
        >技术派</router-link
      >
      <router-link class="login" :to="{ path: '/login' }">登录</router-link>
      <span class="interval">|</span>
      <router-link class="register" :to="{ path: '/register' }"
        >注册</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header .nav {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #474444;
}
.header a {
  color: #b3b3b3;
  transition: all, 0.3s;
}
.header a:hover {
  color: #fff;
}
.header .nav .active {
  position: absolute;
  top: 10px;
  left: 368px;
}
.header .nav .technology {
  position: absolute;
  top: 10px;
  left: 465px;
}
.header .nav .login {
  position: absolute;
  top: 10px;
  right: 197px;
}
.header .nav .interval {
  color: #fff;
  position: absolute;
  top: 10px;
  right: 168px;
}
.header .nav .register {
  position: absolute;
  top: 10px;
  right: 107px;
}
</style>
