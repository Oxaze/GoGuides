<template>
	<div class="article-wrapper">
		<div class="guide-block-outer">
			<div class="guide-block-inner">
				<v-wait for="loadGuide">
					<template slot="waiting">
						<div>				
							<p>Please wait...</p>
						</div>
					</template>

					<div class="hero-image">
						<h1>{{ this.content.title }}</h1>
					</div>

					<div v-html="compiledMarkdown" v-if="!$wait.is('loadGuide')">></div>
				</v-wait>
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
import { mapActions, mapGetters } from "vuex";
import marked from "marked";

export default {
	name: "guide-article",
	components: {
		Parallax,
	},
	data() {
		return {
			id: this.$route.params.id,
			content: {},
		};
	},
	created() {
		this.$wait.start("loadGuide");
		this.getEntry({
			type: "guide",
			id: this.id,
		})
			.then(() => {
				this.content = this.guideContent(this.id);
				this.$wait.end("loadGuide");
				this.resizeParallax();
			})
			.catch(err => {});
	},
	updated() {
		this.resizeParallax();
	},
	methods: {
		...mapActions(["getEntry"]),
		resizeParallax() {
			const nbw = document.querySelector(".guide-block-outer").offsetHeight;
			document.querySelector(".Masthead").style.height = `calc(${nbw}px + 4rem)`;
		},
	},
	computed: {
		...mapGetters(["guideContent"]),
		compiledMarkdown() {
			return marked(this.content.guideText, { sanitize: true });
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.id = to.params.id;
		this.getEntry({
			type: "guide",
			id: this.id,
		})
			.then(() => {
				this.content = this.guideContent(this.id);
			})
			.catch(err => {});
		next();
	},
};
</script>
