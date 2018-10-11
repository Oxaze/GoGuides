<template>
	<div class="home-view">
		<div class="news-block">
			<div>
				<News v-for="id in newsIDs[0]" :key="id" v-bind:id="id"></News>
			</div>
			<div>
				<News v-for="id in newsIDs[1]" :key="id" v-bind:id="id"></News>
			</div>
		</div>

		<parallax :sectionHeight="120">
			<img 
			srcset="https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto%2Cw_600%2Cfl_progressive/v1535831110/GoGuides/background-4k 600w,
			https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto:good%2Cw_900%2Cfl_progressive/v1535831110/GoGuides/background-4k 900w,
			https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto:best%2Cfl_progressive/v1535831110/GoGuides/background-4k 1200w"
			src="https://res.cloudinary.com/yrfhccre/image/upload/f_auto,q_auto/v1535831110/GoGuides/background-4k" sizes="100vw" alt="Background Image">
		</parallax>
	</div>
</template> 

<script>
import Parallax from "vue-parallaxy";
import News from "@/components/News.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "home",
	components: {
		News,
		Parallax,
	},
	created() {
		this.getEntries({
			type: "news",
			lim: 4,
		});
	},
	updated() {
		this.resizeParallax();
	},
	computed: {
		...mapGetters(["newsIDs"]),
	},
	methods: {
		...mapActions(["getEntries"]),
		resizeParallax() {
			const nbw = document.querySelector(".news-block").offsetHeight;
			document.querySelector(".Masthead").style.height = `calc(${nbw}px + 6rem)`;
		},
	},
};
</script>
