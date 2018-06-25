// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import vueResource from 'vue-resource'
// import infiniteScroll from 'vue-infinite-scroll' // 引入滑动模块
// import VueLazyload from 'vue-lazyload'  // 引入图片懒加载模块

Vue.config.productionTip = false
Vue.use(vueResource)
// Vue.use(infiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
