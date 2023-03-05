<template>
  <div class="author">
    <!-- 作者介绍 -->
    <Portrait style="padding-left: 40px" />
    <div class="recommend">
      <div class="head">
        <img src="../assets/images/head2.jpeg" alt="" />
      </div>
      <div class="name">白泽研究院</div>
      <div class="page-view">
        <p class="p1">浏览量</p>
        <p class="p2">1.1千万</p>
      </div>
      <div class="dianzan">
        <p class="p1">获赞数</p>
        <p class="p2">0</p>
      </div>
      <div class="fans">
        <p class="p1">粉丝数</p>
        <p class="p2">341</p>
      </div>
      <div class="include">
        独到简介、干货分享，区块链前沿事件追随者。公众号[白泽研究院]
      </div>
      <div>
        <button>关注</button>
      </div>
    </div>
    <!-- 作者介绍结束 -->
    <!-- 文章内容 -->
    <div class="content">
      <div class="change">
        <ul>
          <li
            class="article"
            @click="(curId = 0), click()"
            :class="{ active: curId === 0 }"
          >
            文章<span class="s1">85</span>
          </li>
          <li
            class="comment"
            @click="(curId = 1), click1()"
            :class="{ active: curId === 1 }"
          >
            收到的评论<span class="s2">1</span>
          </li>
        </ul>
        <div :class="{ line: isActive }"></div>
        <div :class="{ line1: isActive2 }"></div>
      </div>

      <!-- 文章 -->
      <div class="essay" v-show="curId === 0">
        <div class="button">
          <ul>
            <li class="newbtn" @click="id = 0" :class="{ add: id === 0 }">
              最新
            </li>
            <li class="hotbtn" @click="id = 1" :class="{ add: id === 1 }">
              热门
            </li>
          </ul>
        </div>
        <!-- 最新 -->
        <div v-show="id === 0" class="new">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div v-show="id === 0" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>
        <div class="more" v-show="id === 0">
          <router-link :to="{ path: '/news' }">查看更多</router-link>
        </div>
        <!-- 最新结束 -->

        <!-- 热门 -->
        <div v-show="id === 1" class="new">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
        </div>

        <div v-show="id === 1" class="new line">
          <div class="flex">
            <div class="art">
              <router-link :to="{ path: '/article' }">
                <h3>对于冷场的 Web3 游戏，游戏时长过万的老玩家有话要说</h3>
              </router-link>
              <p>是什么阻碍了 GameFi / Web3游戏的普及?</p>
            </div>
            <router-link :to="{ path: '/article' }"
              ><img class="img1" src="../assets/images/article1.png"
            /></router-link>
          </div>
          <div class="bottom">
            <img class="img2" src="../assets/images/article2.jpeg" alt="" />
            <span>白泽研究院</span>
            <div class="time">2023-01-08</div>
            <div class="nav">
              <div class="nav1">web3</div>
              <div class="nav2">gamefi</div>
            </div>
            <div class="look">
              <i class="iconfont icon-liulanliang liulanliang"></i>2.5万
            </div>
          </div>
          <!-- 热门结束 -->
        </div>
        <div class="more" v-show="id === 1">
          <router-link :to="{ path: '/news' }">查看更多</router-link>
        </div>
      </div>
      <!--文章结束  -->

      <!-- 收到的评论 -->
      <div class="comments" v-show="curId === 1">
        <div class="c1">
          <div class="c2">
            <div class="c3">
              <img src="../assets/images/h3.jpg" alt="" />
            </div>
            <div class="c4">
              <p class="c5">好好念书的时候</p>
              <p class="c6">
                2021-09-13 评论于
                <router-link :to="{ path: '/article' }">
                  《斯坦福万字研讨：区块链将帮助监管科技突破壁垒》
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="comments" v-show="curId === 1">
        <div class="c1">
          <div class="c2">
            <div class="c3">
              <img src="../assets/images/h3.jpg" alt="" />
            </div>
            <div class="c4">
              <p class="c5">好好念书的时候</p>
              <p class="c6">
                2021-09-13 评论于
                <router-link :to="{ path: '/article' }">
                  《斯坦福万字研讨：区块链将帮助监管科技突破壁垒》
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="comments" v-show="curId === 1">
        <div class="c1">
          <div class="c2">
            <div class="c3">
              <img src="../assets/images/h3.jpg" alt="" />
            </div>
            <div class="c4">
              <p class="c5">好好念书的时候</p>
              <p class="c6">
                2021-09-13 评论于
                <router-link :to="{ path: '/article' }">
                  《斯坦福万字研讨：区块链将帮助监管科技突破壁垒》
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="comments" v-show="curId === 1">
        <div class="c1">
          <div class="c2">
            <div class="c3">
              <img src="../assets/images/h3.jpg" alt="" />
            </div>
            <div class="c4">
              <p class="c5">好好念书的时候</p>
              <p class="c6">
                2021-09-13 评论于
                <router-link :to="{ path: '/article' }">
                  《斯坦福万字研讨：区块链将帮助监管科技突破壁垒》
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 收到的评论结束 -->
    </div>
    <!-- 文章内容结束 -->
    <!-- 热门文章 -->
    <!-- <div class="open"> -->
    <div class="right-container">
      <div class="side-container">
        <div class="title">
          热门文章
          <router-link class="more" :to="{ path: '/article' }"
            >查看更多</router-link
          >
        </div>
        <div class="hot-article-list">
          <router-link :to="{ path: '/article' }">
            <div class="banner">
              <img src="../assets/images/hot2.png" alt="" />
              <p class="word">
                一文详解 Parallel 如何走出<br />
                GameFi Ponzi 怪圈
              </p>
            </div>
          </router-link>
          <div class="article-item">
            <div class="left">
              <router-link class="link-dark-major" :to="{ path: '/article' }">
                <p>观点：Web3 游戏不仅需要所有权，也离不开 AI</p>
              </router-link>
              <div class="time">2023-01-05</div>
            </div>
            <div class="right">
              <router-link class="h1" :to="{ path: '/article' }">
                <img src="../assets/images/hot1.png" alt="" />
              </router-link>
            </div>
          </div>

          <div class="article-item">
            <div class="left">
              <router-link class="link-dark-major" :to="{ path: '/article' }">
                <p>观点：Web3 游戏不仅需要所有权，也离不开 AI</p>
              </router-link>
              <div class="time">2023-01-05</div>
            </div>
            <div class="right">
              <router-link class="h1" :to="{ path: '/article' }">
                <img src="../assets/images/hot1.png" alt="" />
              </router-link>
            </div>
          </div>

          <div class="article-item">
            <div class="left">
              <router-link class="link-dark-major" :to="{ path: '/article' }">
                <p>观点：Web3 游戏不仅需要所有权，也离不开 AI</p>
              </router-link>
              <div class="time">2023-01-05</div>
            </div>
            <div class="right">
              <router-link class="h1" :to="{ path: '/article' }">
                <img src="../assets/images/hot1.png" alt="" />
              </router-link>
            </div>
          </div>

          <div class="article-item">
            <div class="left">
              <router-link class="link-dark-major" :to="{ path: '/article' }">
                <p>观点：Web3 游戏不仅需要所有权，也离不开 AI</p>
              </router-link>
              <div class="time">2023-01-05</div>
            </div>
            <div class="right">
              <router-link class="h1" :to="{ path: '/article' }">
                <img src="../assets/images/hot1.png" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- 热门文章结束 -->
  </div>
</template>

<script>
import Portrait from "@/components/Portrait.vue";

export default {
  components: {
    Portrait,
  },
  data() {
    return {
      curId: 0,
      id: 0,
      isActive: true,
      isActive2: false,
    };
  },
  methods: {
    click() {
      this.isActive = true;
      this.isActive2 = false;
    },

    click1() {
      this.isActive = false;
      this.isActive2 = true;
    },
  },
};
</script>

<style scoped lang='scss' >
@import "../assets/css/style.scss";

/* 作者介绍样式 */
.author {
  width: 1300px;
  height: 100%;
  margin: 30px auto;
  margin-left: 60px;
  position: relative;
}
.author .recommend {
  position: relative;
  width: 1070px;
  height: 212px;
  margin-top: -104px;
  margin-left: 240px;
  margin-bottom: 48px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px rgb(211, 208, 208);
  cursor: pointer;
}
.author .recommend .p1 {
  color: #666;
  font-size: 14px;
}
.author .recommend .p2 {
  font-size: 20px;
  color: #06080f;
  font-weight: 700;
}
.author .recommend .head img {
  width: 150px;
  height: 150px;
  border-radius: 100px;
  position: absolute;
  top: 30px;
  left: 50px;
  box-shadow: 5px 5px 8px rgb(211, 208, 208);
}
.author .recommend .name {
  font-size: 30px;
  font-weight: 700;
  color: #06080f;
  position: absolute;
  top: 30px;
  left: 250px;
}
.author .recommend .page-view .p1 {
  position: absolute;
  top: 22px;
  left: 460px;
}
.author .recommend .dianzan .p1 {
  position: absolute;
  top: 22px;
  left: 580px;
}
.author .recommend .fans .p1 {
  position: absolute;
  top: 22px;
  left: 690px;
}
.author .recommend .page-view .p2 {
  position: absolute;
  top: 52px;
  left: 460px;
}
.author .recommend .dianzan .p2 {
  position: absolute;
  top: 52px;
  left: 580px;
}
.author .recommend .fans .p2 {
  position: absolute;
  top: 52px;
  left: 690px;
}
.author .recommend .include {
  color: #666;
  font-size: 14px;
  position: absolute;
  top: 120px;
  left: 250px;
}
.author .recommend button {
  font-weight: 600;
  width: 122px;
  height: 40px;
  color: #fff;
  background: #e14338;
  border-color: #e14338;
  border: 1px solid transparent;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 21px;
  position: absolute;
  top: 32px;
  left: 900px;
  transition: all 0.3s;
}
.author .recommend button:hover {
  opacity: 0.7;
}
/* 文章内容样式 */

.content {
  width: 906px;
  margin-left: 240px;
  position: relative;
}
.content .change li {
  font-size: 18px;
  cursor: pointer;
  transition: all 0.4s;
}
.content .change li:hover {
  color: #000;
}
.active {
  color: $theme-colors !important;
  font-weight: 700;
}
.content .change .article {
  color: $word-color;
  width: 67px;
}
.content .change .line {
  position: absolute;
  left: 0;
  width: 67px;
  height: 2.5px;
  margin-top: 5px;
  background-color: $theme-colors;
}
.content .change .article .s1 {
  margin-left: 7px;
}
.content .change .comment {
  color: $word-color;
  width: 109px;
  position: absolute;
  top: 0;
  left: 100px;
}
.content .change .line1 {
  position: absolute;
  left: 100px;
  width: 109px;
  height: 2.5px;
  margin-top: 5px;
  background-color: $theme-colors;
}
.content .change .comment .s2 {
  margin-left: 7px;
}
.content .essay .button .newbtn {
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  text-align: center;
  padding: 3px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.content .essay .button .newbtn:hover {
  color: #f46300;
  border-color: #f46300;
}
.content .essay .button .hotbtn {
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  text-align: center;
  padding: 3px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 25px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.content .essay .button .hotbtn:hover {
  color: #f46300;
  border-color: #f46300;
}
.add {
  color: #fff !important;
  background-color: #f46300;
}
.content .essay .new {
  width: 740px;
  height: 116px;
  padding: 15px;
  //   border: 1px solid red;
  transition: all 0.4s;
}
.content .essay .line {
  border: solid #f2f2f2;
  border-width: 1px 0 0;
}

.content .essay .new:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
  cursor: pointer;
}
.content .essay .new h3 {
  width: 500px;
  margin: 0;
  color: #06080f;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  transition: all 0.3s;
}
.content .essay .new h3:hover {
  color: #f46300;
}
.content .essay .new p {
  margin: 8px 0;
  color: #999;
  font-size: 14px;
  line-height: 24px;
  max-height: 48px;
  -moz-box-orient: vertical;
  word-break: break-all;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.content .essay .img1 {
  display: inline-block;
  width: 161px;
  height: 96px;
  margin-top: 5px;
  margin-left: 75px;
}
.content .essay .img2 {
  display: block;
  width: 24px;
  height: 24px;
  margin-top: -22px;
  border-radius: 50%;
}
.content .essay span {
  display: block;
  color: #06080f;
  font-weight: 700;
  font-size: 14px;
  margin-left: 35px;
  margin-top: -22px;
}
.content .essay .nav {
  margin-top: -22px;
}
.content .essay .nav1 {
  display: inline-block;
  color: #999;
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  padding: 0 8px;
  border-radius: 11px;
  background: #f5f5f5;
  margin-right: 8px;
  margin-left: 220px;
  cursor: pointer;
}
.content .essay .nav2 {
  display: inline-block;
  color: #999;
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  padding: 0 8px;
  border-radius: 11px;
  background: #f5f5f5;
  cursor: pointer;
}
.content .essay .time {
  color: #999;
  font-size: 14px;
  margin-left: 125px;
  margin-top: -18px;
}
.content .essay .look {
  color: #999;
  margin-left: 365px;
  margin-top: -21px;
}
.content .essay .more {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid $theme-colors;
  text-align: center;
  margin-left: 300px;
  margin-top: 30px;
  border-radius: 10px;
  transition: all 0.3s;
}
.content .essay .more:hover {
  background-color: rgba(225, 67, 56, 0.1);
}
.content .essay .more a {
  color: $theme-colors;
}
.comments .c1 {
  margin-bottom: 24px;
}
.comments .c2 {
  width: 750px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
  padding: 24px 0;
}
.comments .c2::before {
  display: table;
  content: "";
}
.comments .c3 {
  width: 100px;
  float: left;
  color: #06080f;
  display: block;
  text-align: center;
}
.comments .c3 img {
  width: 54px;
  height: 54px;
  float: left;
  border-radius: 50px;
  color: #06080f;
  display: block;
  text-align: center;
}
.comments .c4 {
  padding-left: 102px;
}
.comments .c4 .c5 {
  color: #06080f;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  word-wrap: break-word;
}
.comments .c4 .c6 {
  color: #666;
  margin-top: 8px;
}
.comments.c4 .c6 a {
  color: #06080f;
}
//热门文章
.open {
  width: 278px;
  height: 496px;
}
.right-container {
  width: 278px;
  height: 496px;
  padding: 0 16px;
  position: absolute;
  top: 263px;
  left: 1020px;
}
.side-container {
  position: relative;
}
.side-container .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #06080f;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 20px;
}
.side-container .title .more {
  color: #666;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  transition: all 0.4s;
}
.side-container .title .more:hover {
  color: #f46300;
}
.hot-article-list .banner {
  width: 100%;
  height: 138px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
}
.hot-article-list .banner .word {
  margin-left: 10px;
}
.hot-article-list .banner img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.hot-article-list .banner p {
  position: absolute;
  width: 100%;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  max-height: 45px;
  overflow: hidden;
  padding: 0 14px;
  margin: 0;
  z-index: 2;
}
.hot-article-list .banner::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 73px;
  opacity: 0.8;
  background: linear-gradient(0deg, #000, transparent);
  z-index: 1;
}
.hot-article-list .article-item {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.link-dark-major {
  color: #06080f;
}
.link-dark-major p {
  transition: all 0.4s;
}
.link-dark-major p:hover {
  color: $theme-colors;
}
.hot-article-list .article-item .left p {
  font-size: 14px;
  line-height: 20px;
  margin: 0 12px 4px 0;
  max-height: 40px;
  overflow: hidden;
  font-weight: 600;
}
.hot-article-list .article-item .left .time {
  color: #bfbfbf;
  font-size: 12px;
  line-height: 12px;
}
.hot-article-list .article-item .right {
  min-width: 74px;
  height: 44px;
  border-radius: 2px;
  overflow: hidden;
}
.hot-article-list .article-item .right h1 {
  color: #06080f;
}
.hot-article-list .article-item .right img {
  width: 74px;
  height: 44px;
}
</style>