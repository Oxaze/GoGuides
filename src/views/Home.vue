<template>
	<div class="home-view">
		<div class="news-block-outer">
			<div class="news-block-inner">
				<div>
					<News v-for="id in fractionatedNewsIDs[0]" :key="id" v-bind:id="id"></News>
				</div>
				<div>
					<News v-for="id in fractionatedNewsIDs[1]" :key="id" v-bind:id="id"></News>
				</div>
			</div>
		</div>

		<!-- {{ testObserver() }} -->

		<parallax :sectionHeight="120" :breakpoint="'(min-width: 768px)'">
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
		})
			.then(() => {
				// ADD: window.addEventListener("resize", handleResize)
				this.resizeParallax();
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	updated() {
		this.resizeParallax();
	},
	computed: {
		...mapGetters(["fractionatedNewsIDs"]),
	},
	methods: {
		...mapActions(["getEntries"]),
		resizeParallax() {
			const nbw = document.querySelector(".news-block-outer").offsetHeight;
			document.querySelector(".Masthead").style.height = `calc(${nbw}px + 6rem)`;
		},
		// testObserver() {
		// 	const myObserver = new ResizeObserver(entries => {
		// 		entries.forEach(entry => {
		// 			console.log("width", entry.contentRect.width);
		// 			console.log("height", entry.contentRect.height);
		// 		});
		// 	});
		// 	return myObserver.observe(".news");
		// },
	},
};
</script>
