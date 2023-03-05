<template>
  <!-- 作者 -->
  <div class="author">
    <div class="img">
      <router-link :to="{ path: '/authorpage' }">
        <img src="../assets/images/head.jpeg" alt="" />
      </router-link>
      <div>
        <router-link :to="{ path: '/authorpage' }">
          <p class="name">娱乐独角兽</p>
          <p class="work">特邀作者</p>
        </router-link>
      </div>
    </div>
    <div class="include">
      <p class="includes">作者有点忙,还没写简介</p>
      <div class="flex">
        <span>|</span>
        <p class="article">发表文章485篇</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.author {
  position: fixed;
  top: 265px;
  left: 1140px;
  width: 225px;
  height: 160px;
  border-radius: 10px;
  border-top: 4px solid rgb(0, 170, 255);
  box-shadow: 2px 2px 5px rgb(211, 208, 208);
  cursor: pointer;
}

.author .img {
  display: flex;
}

.author .img img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-top: 10px;
  margin-left: 15px;
}

.author .include {
  height: 100px;
}

.author .name {
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 20px;
  color: #000;
}

.author .work {
  width: 60px;
  font-size: 12px;
  margin-left: 10px;
  color: rgb(0, 170, 255);
  border: 2px solid rgb(0, 170, 255);
  background-color: rgba(0, 170, 255, 0.3);
  text-align: center;
}

.author .include .includes {
  margin-top: 10px;
  margin-left: 15px;
  font-size: 14px;
  color: #a09496;
}

.author .include .article {
  margin-top: 10px;
  margin-left: 7px;
  font-size: 14px;
  color: #a09496;
}

.author .include .flex {
  display: flex;
}

.author .include .flex span {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  margin-left: 15px;
  color: rgb(0, 170, 255);
}
</style>