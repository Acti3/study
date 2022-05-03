import Vue from 'vue'
import App from './App.vue'
//引入swiper样式
import "swiper/css/swiper.css"
//引入MockServe.js
import '@/mock/mockServe'
//全局组件
import TypeNav from '@/components/TypeNav'
//引入仓库
import store from '@/store'
Vue.component(TypeNav.name,TypeNav)

//引入路由
import router from '@/router'
Vue.config.productionTip = false
import {reqCategoryList} from '@/network'
reqCategoryList()
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
},
  router,
  store
}).$mount('#app')
