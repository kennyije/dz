import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Game from '@/pages/game'
import Customer from '@/pages/customer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path: '/game',
			name: 'game',
			component: Game
		},
		{
			path: '/customer',
			name: 'customer',
			component: Customer
		}
  ]
})
