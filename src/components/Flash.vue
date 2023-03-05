<template>
  <!-- 快讯 -->
  <div class="flash">
    <div class="title">
      <img src="../assets/images/flash.png" alt="" />
      <span>快讯</span>
    </div>
    <div class="content">
      <div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            惠誉预计监管机构的关注焦点仍是主要稳定币与加密行业之间的密切联系
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            新华社和天下秀联合发布文旅沉浸式数字化云平台“云游中国”
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            山东广电推出首个超写实数字主持人“海蓝”
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            Chainalysis：2022 年非法使用加密货币的金额达 201
            亿美元，创下历史新高
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            XR 公司梦想绽放科技完成 4 亿元人民币 C 轮融资
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            韩国大检察厅：严厉打击价格操纵等虚拟资产五大犯罪类型
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            元宇宙公司 MultiMetaVerse 计划收购淘米集团 72.81% 股份
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            MetisDAO 基金会发布 2023 战略重点：Web3
            经济的多层解决方案堆栈和生态节点
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            法国兴业银行首次使用其 MakerDAO 金库提取价值 700 万美元的 DAI
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            Web3 风险工作室 Spartan Labs 负责人已离职
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            三星比特币期货主动型 ETF 已在港交所上市交易
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            元宇宙初创公司 Digital Village 完成 400
            万美元融资，欧莱雅旗下基金等参投
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            Azuki 正式推出由社区建设的虚拟城市“Hilumia”
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            Polygon 开发者提议在 1 月 17 日进行硬分叉，以解决区块重组和 Gas
            费飙升问题
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            惠誉预计监管机构的关注焦点仍是主要稳定币与加密行业之间的密切联系
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            Web3 文化遗产保护平台 Quantum Temple 完成 200 万美元 Pre 种子轮融资
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            法拉利结束与瑞士区块链技术公司 Velas 的合作协议
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            美国 12 月未季调 CPI 年率录得 6.5%，创 2021 年 10 月以来最小增幅
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            韩国杀毒软件公司 AhnLab 旗下区块链子公司推出 Web3 钱包 ABC Wallet
          </router-link>
        </div>
        <div class="content1">
          <div class="time">3小时前</div>
          <router-link :to="{ path: '/article' }">
            山东广电推出首个超写实数字主持人“海蓝”
          </router-link>
        </div>
      </div>
    </div>
    <router-link class="more" :to="{ path: '/article' }">查看更多</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import "../assets/css/style.scss";

.flash {
  position: absolute;
  top: 250px;
  left: 1110px;
  width: 252px;
  height: 494px;
}
.flash .title span {
  color: #e14338;
  font-weight: 700;
  font-size: 18px;
  position: absolute;
  left: 30px;
}
.flash .title img {
  width: 24px;
  height: 24px;
}
.content {
  position: relative;
  overflow: hidden;
  height: 410px;
  margin-top: 10px;
}

.content::before {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  left: 5px;
  width: 1px;
  height: calc(100% - 10px);
  border-radius: 10px;
  background: linear-gradient(180deg, #8f8f8f 76%, #fff);
}
.content > div {
  position: relative;
  overflow: auto;
  height: 400px;
  padding-top: 8px;
}
.content > div::-webkit-scrollbar {
  display: none;
}
.content .content1 {
  padding: 0 8px 0 20px;
  position: relative;
}
.content .content1::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 3px solid #8f8f8f;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.content .content1 .time {
  color: #666;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: center;
}
.content .content1 a {
  color: #000;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 4px 0 0;
  word-break: break-all;
  transition: all 0.3s;
}
.content .content1 a:hover {
  color: $theme-colors;
}
.more {
  display: block;
  width: 252px;
  height: 34px;
  margin-top: 24px;
  border-radius: 4px;
  color: $theme-colors;
  line-height: 34px;
  border: 1px solid $theme-colors;
  text-align: center;
  transition: all 0.3s;
}
.more:hover {
  background-color: rgba(225, 67, 56, 0.1);
}
</style>