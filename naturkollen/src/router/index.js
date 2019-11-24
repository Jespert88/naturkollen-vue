import Vue from 'vue'
import Router from "vue-router"

import Home from '../containers/Home'
import Trees from '../containers/Trees'

Vue.use(Router)

export default new Router({
	mode:'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/trees",
			name: "Trees",
			component: Trees
		},
		/* {
			path: "/dashboard",
			name: "Dashboard",
			component: Dashboard,
			children: [
				{ path: '/dashboard', component: UserOverview, props: true },
				{ path: '/createprogram', component: CreateProgram, props: true },
			]
		}, */
	
	]
})