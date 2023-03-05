<template>
  <!-- 广告 -->
  <div class="advertising">
    <router-link :to="{ path: '/article' }">
      <img src="../assets/images/ad.png" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.advertising {
  position: absolute;
  top: 70px;
  right: 150px;
  width: 260px;
  height: 151.2px;
  cursor: pointer;
  overflow: hidden;
}
.advertising img {
  display: block;
  width: 252px;
  height: 151.2px;
  transition: all 0.3s;
}
.advertising img:hover {
  transform: scale(1.1);
}
</style>