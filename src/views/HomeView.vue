<template>
  <div class="home container">
    <Portrait />
    <Slideshow />
    <Advertising />
    <Flash />
    <div class="art">
      <div class="article">
        <img class="img" src="../assets/images/img6.png" alt="" />
        <div class="position">
          <div class="w1">
            <router-link :to="{ path: '/details' }"
              >注册制“三步走”将迎关键一跃</router-link
            >
          </div>
          <div class="w2">
            <router-link :to="{ path: '/details' }"
              >实施注册制的科创板、创业板和北交所等,正成为A股市场IPO的主场地</router-link
            >
          </div>
          <p class="name">作者名称</p>
          <p class="data">2022-12-31</p>
        </div>
      </div>

      <div class="article">
        <img class="img" src="../assets/images/img7.png" alt="" />
        <div class="position">
          <div class="w1">
            <router-link :to="{ path: '/details' }"
              >注册制“三步走”将迎关键一跃</router-link
            >
          </div>
          <div class="w2">
            <router-link :to="{ path: '/details' }"
              >实施注册制的科创板、创业板和北交所等,正成为A股市场IPO的主场地</router-link
            >
          </div>
          <p class="name">作者名称</p>
          <p class="data">2022-12-31</p>
        </div>
      </div>

      <div class="article">
        <img class="img" src="../assets/images/img8.png" alt="" />
        <div class="position">
          <div class="w1">
            <router-link :to="{ path: '/details' }"
              >注册制“三步走”将迎关键一跃</router-link
            >
          </div>
          <div class="w2">
            <router-link :to="{ path: '/details' }"
              >实施注册制的科创板、创业板和北交所等,正成为A股市场IPO的主场地</router-link
            >
          </div>
          <p class="name">作者名称</p>
          <p class="data">2022-12-31</p>
        </div>
      </div>

      <div class="article">
        <img class="img" src="../assets/images/img9.png" alt="" />
        <div class="position">
          <div class="w1">
            <router-link :to="{ path: '/details' }"
              >注册制“三步走”将迎关键一跃</router-link
            >
          </div>
          <div class="w2">
            <router-link :to="{ path: '/details' }"
              >实施注册制的科创板、创业板和北交所等,正成为A股市场IPO的主场地</router-link
            >
          </div>
          <p class="name">作者名称</p>
          <p class="data">2022-12-31</p>
        </div>
      </div>
    </div>
    <div class="more">
      <router-link :to="{ path: '/news' }">查看更多</router-link>
    </div>
  </div>
</template>

<script>
import Slideshow from "@/components/Slideshow.vue";
import Portrait from "@/components/Portrait.vue";
import Advertising from "@/components/Advertising.vue";
import Flash from "@/components/Flash.vue";

export default {
  components: {
    Slideshow,
    Portrait,
    Advertising,
    Flash,
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/css/style.scss"; //全局样式
.home {
  margin-left: 100px;
}
.home .img {
  width: 226px;
  height: 148px;
}
.home .art {
  /* display: flex; */
  padding-left: 200px;
  padding-top: 20px;
}
.home .article {
  width: 750px;
  margin-top: 20px;
  display: flex;
  transition: all 0.3s;
}
.home .article:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
  cursor: pointer;
}
.home .article .position .w1 {
  margin-top: 10px;
  margin-left: 20px;
}
.home .article .position .w2 {
  margin-top: 20px;
  margin-left: 20px;
}
.home .article .position .name {
  margin-left: 20px;
  margin-top: 40px;
}
.home .article .position .data {
  margin-left: 400px;
  margin-top: -20px;
}
.home .article .position a {
  color: #000;
  transition: all, 0.3s;
}
.home .article .position a:hover {
  color: $theme-colors;
}
.home .article .position .w1 a {
  font-size: 20px;
  font-weight: 700;
}
.home .more {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid $theme-colors;
  text-align: center;
  margin-left: 500px;
  margin-top: 30px;
  border-radius: 10px;
  transition: all 0.3s;
}
.home .more:hover {
  background-color: rgba(225, 67, 56, 0.1);
}
.home .more a {
  color: $theme-colors;
}
</style>
