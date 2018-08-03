// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Guides from "./views/Guides.vue"

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/guides",
			name: "guides",
			component: Guides,
		}
	],
});
