import Vue from 'vue'
import Router from "vue-router"

import Home from '../containers/Home'
import About from '../containers/About'
import Trees from '../containers/Trees'
import Animals from '../containers/Animals'

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
			path: "/about",
			name: "About",
			component: About
		},
		{
			path: "/trees",
			name: "Trees",
			component: Trees
		},
		{
			path: "/animals",
			name: "Animals",
			component: Animals
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