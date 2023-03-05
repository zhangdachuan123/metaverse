<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <Navigation />
  </div>
</template>

<script>
//引入头部组件
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
// import Portrait from "@/components/Portrait.vue";

export default {
  name: "APP",
  components: {
    Header,
    Footer,
    Navigation,
    // Portrait,
  },
};
</script>
<style scoped lang="scss">
@import "./assets/css/style.scss";
</style>
