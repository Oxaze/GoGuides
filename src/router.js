// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import NewsArticle from "./views/NewsArticle.vue";
import GuideArticle from "./views/GuideArticle.vue";
import GuidesHome from "./views/GuidesHome.vue";
import PageNotFound from "./views/PageNotFound.vue";

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
		{
			path: "/guides/:id",
			name: "guide-article",
			component: GuideArticle,
		},
		{
			path: "/guides/",
			name: "guides-home",
			component: GuidesHome,
		},
		{
			path: "*",
			name: "page-not-found",
			component: PageNotFound,
		},
	],
});

// UPDATE: https://router.vuejs.org/guide/essentials/history-mode.html
