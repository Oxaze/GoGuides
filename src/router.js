// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import NewsArticle from "./views/NewsArticle.vue";

Vue.use(Router);

export default new Router({
	// mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/news/:id",
			name: "news-article",
			component: NewsArticle,
		},
		{
			path: "/news/",
			redirect: "/",
		},
	],
});

// UPDATE: https://router.vuejs.org/guide/essentials/history-mode.html
