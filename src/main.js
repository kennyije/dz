// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'
Vue.config.productionTip = false
Vue.use(VueAxios,axios);

router.beforeEach((to, from, next) => {
		// if(to.meta.title) {
		// 	document.title = to.meta.title
		// }
		/**
		 * 判断该路由是否需要登录权限
		 */
		if(to.matched.some(record => record.meta.requireAuth)) {
			if(store.state.Account.account) {
				next()
			} else {
				next({path: '/login'})
			}
		}else {
			next()
		}
} )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
