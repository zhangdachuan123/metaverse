<template>
  <div class="footer">
    <div class="bottom">
      <router-link class="about" :to="{ path: '/about' }">关于我们</router-link>
      <router-link class="contact" :to="{ path: '/contact' }"
        >联系我们</router-link
      >
      <router-link class="contribute" :to="{ path: '/contribute' }"
        >我要投稿</router-link
      >
      <p>Copyright 2022-2023 备案号</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer .bottom {
  position: relative;
  background-color: #474444;
  width: 100%;
  height: 120px;
  font-size: 12px;
  line-height: 50px;
}
.footer .bottom a {
  font-size: 16px;
  color: #b3b3b3;
  transition: all, 0.3s;
}
.footer .bottom a:hover {
  color: #fff;
}
.footer .bottom .about {
  position: absolute;
  top: 20px;
  left: 513px;
}
.footer .bottom .contact {
  position: absolute;
  top: 20px;
  left: 697px;
}
.footer .bottom .contribute {
  position: absolute;
  top: 20px;
  left: 883px;
}
.footer .bottom p {
  color: #ffffff;
  position: absolute;
  top: 70px;
  left: 645px;
}
</style>