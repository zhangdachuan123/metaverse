<template>
  <div class="main">
    <div class="swiper-container">
      <!-- 轮播 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/l1.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/l2.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/l3.png" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/css/style.scss"; //全局样式
.main {
  display: flex;
  position: relative;
}
.swiper-container {
  display: flex;
  width: 750px;
  height: 266px;
  cursor: pointer;
  margin-top: -100px;
  margin-left: 200px;
}
.swiper-slide img {
  width: 750px;
  height: 266px;
  transition: all 0.4s;
}
.swiper-slide img:hover {
  transform: scale(1.1);
}
.swiper-pagination {
  width: 100px;
}
</style>