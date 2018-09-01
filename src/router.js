// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import NewsArticle from "./views/NewsArticle.vue";

// function parseID(params) {
// 	client
// 		.getEntry(this.id)
// 		.then(async entry => {
// 			this.title = await entry.fields.title;
// 			this.imageUrl = await entry.fields.imageUrl;
// 			this.releaseDate = await entry.fields.releaseDate;
// 		})
// 		.catch(err => console.error(err));
// }

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
