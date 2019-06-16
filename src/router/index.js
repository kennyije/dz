import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Game from '@/pages/game'
import Customer from '@/pages/customer'
import Login from '@/pages/login'
import Container from '@/pages/container'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: Container,
	  children:[
		  {
				path: '/game',
				name: 'game',
				component: Game,
				meta: {
					title: '比赛',
					requireAuth: true
				}
		  },
		  {
				path: '/',
				name: 'home',
				component: Home
		  },
	  ]
    },
	{
		path: '/customer',
		name: 'customer',
		component: Customer
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	}
  ]
})
