// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";

// import Home from "./views/Home.vue";
// import NewsArticle from "./views/NewsArticle.vue";
// import GuideArticle from "./views/GuideArticle.vue";
// import GuidesHome from "./views/GuidesHome.vue";
// import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
	// mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("./views/Home.vue"),
		},
		{
			path: "/news/:id",
			name: "news-article",
			component: () => import("./views/NewsArticle.vue"),
		},
		{
			path: "/news/",
			redirect: "/",
		},
		{
			path: "/guides/:id",
			name: "guide-article",
			component: () => import("./views/GuideArticle.vue"),
		},
		// Perhaps add nested routing like in vue docs or vue example app
		{
			path: "/guides/",
			name: "guides-home",
			component: () => import("./views/GuidesHome.vue"),
		},
		{
			path: "*",
			name: "page-not-found",
			component: () => import("./views/PageNotFound.vue"),
		},
	],
});

// UPDATE: https://router.vuejs.org/guide/essentials/history-mode.html
