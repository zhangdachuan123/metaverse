import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //活动
  {
    path: '/active',
    name: 'active',
    component: () => import('../views/ActiveView.vue')
  },
  //技术派
  {
    path: '/technocracy',
    name: 'technocracy',
    component: () => import('../views/TechnocracyView.vue')
  },
  //登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  //注册
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  //联系我们
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  //我要投稿
  {
    path: '/contribute',
    name: 'contribute',
    component: () => import('../views/RegisterView.vue')
  },
  //元宇宙
  {
    path: '/metaverse',
    name: 'metaverse',
    component: () => import('../views/MetaverseView.vue')
  },
  //政策
  {
    path: '/policy',
    name: 'policy',
    component: () => import('../views/PolicyView.vue')
  },
  //文章详情
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/DetailsView.vue')
  },
  //资讯
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/web3.0',
    name: 'web3.0',
    component: () => import('../views/Web3.0View.vue')
  },
  //作者详情页
  {
    path: '/authorpage',
    name: 'authorpage',
    component: () => import('../views/AuthorpageView.vue')
  },
  //研报
  {
    path: '/research-report',
    name: 'research-report',
    component: () => import('../views/ResearchreportView.vue')
  },
  //专题
  {
    path: '/subject',
    name: 'subject',
    component: () => import('../views/SubjectView.vue')
  },
  // 矿业
  {
    path: '/mining',
    name: 'mining',
    component: () => import('../views/MiningView.vue')
  },
  // 创投
  {
    path: '/venture',
    name: 'venture',
    component: () => import('../views/VentureView.vue')
  },
  //独家
  {
    path: '/exclusive',
    name: 'exclusive',
    component: () => import('../views/ExclusiveView.vue')
  },
  //文章
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
