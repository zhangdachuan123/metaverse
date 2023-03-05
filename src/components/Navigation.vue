<template>
  <div class="nav">
    <div class="sidebar-container">
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="collapse">
            <router-link :to="{ path: '/' }" class="menu-title">
              首页
            </router-link>
          </li>
          <li @mouseover="mouseover()" @mouseout="mouseout()">
            <router-link :to="{ path: '/news' }" class="menu-title">
              资讯
            </router-link>
            <ul class="submenu" v-show="submenu_con">
              <li>
                <router-link :to="{ path: '/news' }" class="submenu-title"
                  >最新</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/exclusive' }" class="submenu-title"
                  >独家</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/venture' }" class="submenu-title"
                  >创投</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/mining' }" class="submenu-title"
                  >矿业</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/subject' }" class="submenu-title"
                  >专题</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ path: '/research-report' }"
                  class="submenu-title"
                  >研报</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ path: '/metaverse' }" class="menu-title">
              元宇宙
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/web3.0' }" class="menu-title">
              Web3.0
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/policy' }" class="menu-title">
              政策
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submenu_con: false,
    };
  },
  methods: {
    mouseover() {
      this.submenu_con = true;
    },

    mouseout() {
      this.submenu_con = false;
    },
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/css/style.scss";

.sidebar-container .submenu a {
  display: block;
  text-align: center;
  margin-bottom: 20px;
  color: #a9b3b3;
  font-size: 16px;
  font-weight: 400;
  transition: all, 0.3s;
  &:hover {
    color: #000;
  }
  &.router-link-exact-active {
    color: #ea554a;
  }
}
.sidebar-container {
  position: fixed;
  top: 220px;
  left: 185px;
}
.sidebar-container .menu-title {
  display: block;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  transition: all, 0.3s;
  &:hover:not(.router-link-exact-active) {
    color: $theme-colors;
  }
  &.router-link-exact-active {
    display: block;
    color: #fff;
    background: #ea554a;
  }
}
</style>
