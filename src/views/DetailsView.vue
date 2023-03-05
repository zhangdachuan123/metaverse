<template>
  <div class="details container">
    <Advertising />
    <Portrait />
    <div class="det">
      <h1 class="title">年终盘点I票房重回亿元时代,分账剧市场真假“回春”?</h1>
      <p class="auther">
        作者名称:XXX |发布时间:2023-01-02|<i
          class="iconfont icon-liulanliang liulanliang"
          >5.8万</i
        >
        <i
          @click="like()"
          class="iconfont icon-dianzan dianzan"
          :class="{ btn: isActive }"
          >{{ this.love }}</i
        >
        <i
          @click="collect()"
          class="iconfont icon-shoucang shoucang"
          :class="{ btn1: isActive2 }"
          >{{ this.col }}</i
        >
      </p>
      <p class="content">
        今年分账剧市场表现十分亮眼,年初上线爱奇艺的《一闪一闪亮星星》累计票房突破1
        亿;优酷男频向分账剧 <br />
        《我是赵甲第》收官票房7075 万:悬疑探案类型的《拆案》系 列热播期分账6000
        万，分账剧票房重回亿元区间。<br />
        “节衣缩食”的视频平台，今年大剧都采取“播三休四”的方式，-部中等体量作品播放期将近3个月,观众的观看<br />需求未被满足,
        所以纷纷采用分账剧来补量。在长视频播放疲软的背景下,分账剧流量却逆势增长,成为长视频行业
        <br />少有的亮点。根据云合数据显示,2022年上线分账剧的有效播放为45亿次,较2021年同期上涨22%;<br />上新分账剧有效播放在上新网络剧中的占比为10%,上涨4个百分点。
        2022年连续剧整体播放量下滑,<br />全网连续剧正片有效播放累计2368亿,同比2021年同期下降4%
        账剧有效播放实现了正向增长，是剧集市场中<br />难得的增量。<br />
        免责声明:本文不代表xxx立场,且不构成投资建议,<br />
        请谨慎对待版权声明:作者保留权利。文章为作者独立观点,不代表xx立场。<br />
        版权认证:本文已在保全网存证确权，侵权必究!
      </p>
    </div>
    <Author />
    <Comment />
  </div>
</template>

<script>
import Author from "@/components/Author.vue";
import Comment from "@/components/Comment.vue";
import Portrait from "@/components/Portrait.vue";
import Advertising from "@/components/Advertising.vue";

export default {
  components: {
    Author,
    Comment,
    Portrait,
    Advertising,
  },
  data() {
    return {
      love: 0,
      col: 0,
      flg: true,
      add: true,
      isActive: false,
      isActive2: false,
    };
  },
  created() {},
  methods: {
    like() {
      if (this.flg == true) {
        this.love += 1;
        this.isActive = true;
        this.flg = false;
      } else {
        this.love -= 1;
        this.isActive = false;
        this.flg = true;
      }
    },
    collect() {
      if (this.add == true) {
        this.col += 1;
        this.isActive2 = true;
        this.add = false;
      } else {
        this.col -= 1;
        this.isActive2 = false;
        this.add = true;
      }
    },
  },
};
</script>

<style scoped lang='scss' >
@import "../assets/css/style.scss";
.details {
  margin-left: 100px;
}
.details .btn {
  color: $theme-colors;
}
.details .btn1 {
  color: $theme-colors;
}
.details .det {
  padding-left: 200px;
  margin-top: -106px;
}
.details .det .auther {
  margin: 30px 0;
}
.details .det .auther .liulanliang {
  font-size: 12px;
}
.details .det .auther .dianzan {
  cursor: pointer;
  margin-left: 400px;
}
.details .det .auther .shoucang {
  margin-left: 10px;
  cursor: pointer;
}
.details .det .content {
  text-indent: 2em;
  line-height: 40px;
}
</style>
