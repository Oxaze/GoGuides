<template>
	<div class="guide-article">
		<v-wait for="loadGuide" style="height: 100%">
			<template slot="waiting">
				<div class="spinner">
					<hollow-dots-spinner :animation-duration="1125" :dot-size="18" :dots-num="3" color="#27426F" />
				</div>
			</template>

			<div class="article-hero-wrapper">
				<div class="article-hero-outer">
					<div class="article-hero-inner">
						<h1>{{ this.content.title }}</h1>
						<p>{{ this.content.contentType }}</p>
					</div>
				</div>

			<parallax> 
				<img v-bind:src="this.content.imageUrl" alt="Background Image">
			</parallax>
		</div>

		<div class="article-text" v-html="compiledMarkdown" v-if="!$wait.is('loadGuide')"></div>
	
		</v-wait>
	</div>
</template> 

<script>
import parallax from "vue-parallaxy";
import marked from "marked";
import mediumZoom from "medium-zoom";
import { HollowDotsSpinner } from "epic-spinners";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "guide-article",
	components: {
		parallax,
		HollowDotsSpinner,
	},
	data() {
		return {
			id: this.$route.params.id,
			content: {},
		};
	},
	created() {
		this.$wait.start("loadGuide");
		document.querySelector("#app").classList.add("app-spinner-wrapper");
		this.getEntry({
			type: "guide",
			id: this.id,
		})
			.then(() => {
				this.content = this.guideContent(this.id);
				this.$wait.end("loadGuide");
				document.querySelector("#app").classList.remove("app-spinner-wrapper");
			})
			.then(() => {
				mediumZoom(".article-text img");
			})
			.catch(err => {});
	},
	methods: {
		...mapActions(["getEntry"]),
	},
	computed: {
		...mapGetters(["guideContent"]),
		compiledMarkdown() {
			return marked(this.content.guideText, { sanitize: true });
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.id = to.params.id;
		document.querySelector("#app").classList.add("app-spinner-wrapper");
		this.$wait.start("loadGuide");
		this.getEntry({
			type: "guide",
			id: this.id,
		})
			.then(() => {
				this.content = this.guideContent(this.id);
				this.$wait.end("loadGuide");
				document.querySelector("#app").classList.remove("app-spinner-wrapper");
			})
			.then(() => {
				mediumZoom(".article-text img");
			})
			.catch(err => {});
		next();
	},
};
</script>
