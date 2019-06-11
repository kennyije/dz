import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Game from '@/pages/game'

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
		}
  ]
})
