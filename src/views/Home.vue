<template>
	<div class="home-view">
		<div class="news-block">
			<div>
				<News v-for="id in ids.f1" :key="id" v-bind:id="id"></News>
			</div>
			<div>
				<News v-for="id in ids.f2" :key="id" v-bind:id="id"></News>
			</div>
		</div>

		<parallax :sectionHeight="120">
			<!-- <img src="https://res.cloudinary.com/yrfhccre/image/upload/f_auto,q_auto:best,r_0/v1535827389/GoGuides/gg-bg" alt="Background Image"> -->
			<img 
			srcset="https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto%2Cw_600%2Cfl_progressive/v1535831110/GoGuides/background-4k 600w,
			https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto:good%2Cw_900%2Cfl_progressive/v1535831110/GoGuides/background-4k 900w,
			https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto:best%2Cfl_progressive/v1535831110/GoGuides/background-4k 1200w"
			src="https://res.cloudinary.com/yrfhccre/image/upload/f_auto,q_auto/v1535831110/GoGuides/background-4k" sizes="100vw" alt="Background Image">
			<!-- <img src="https://res.cloudinary.com/yrfhccre/image/upload/f_auto,q_auto:best/v1535831110/GoGuides/gg-bg" alt="Test" srcset=""> -->
		</parallax>
	</div>
</template> 

<script>
import Parallax from "vue-parallaxy";

import News from "@/components/News.vue";
import { cData, ContentfulHandler } from "@/contentful.js";

export default {
	name: "home",
	components: {
		News,
		Parallax,
	},
	mounted() {
		this.fetchContent();
	},
	updated() {
		this.resizeParallax();
	},
	data() {
		return {
			ids: {
				all: new Array(4),
				f1: [],
				f2: [],
			},
		};
	},
	methods: {
		fetchContent() {
			cData
				.syncNews()
				.then(() => {
					this.ids = ContentfulHandler.getNewsIds();
				})
				.catch(err => {
					console.error(err);
				});
		},
		resizeParallax() {
			const nbw = document.querySelector(".news-block").offsetHeight;
			document.querySelector(".Masthead").style.height = `calc(${nbw}px + 6rem)`;
		},
	},
};
</script>
