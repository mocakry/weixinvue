// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/style.css'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title || to.meta.title == '') {
    document.title = to.meta.title;
  }
  next();
});

