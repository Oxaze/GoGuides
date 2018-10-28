<template>
	<div class="news-article">
		<v-wait for="loadNews" style="height: 100%">
			<template slot="waiting">
				<div class="spinner">
					<hollow-dots-spinner :animation-duration="1125" :dot-size="18" :dots-num="3" color="#27426F" />
				</div>
			</template>

			<div class="article-hero-wrapper">
				<div class="article-hero-outer">
					<div class="article-hero-inner">
						<h1>{{ this.content.title }}</h1>
						<p>{{ newsContent(id).contentType }}  •  {{ newsContent(id).releaseDate }}</p>
					</div>
				</div>

			<parallax> 
				<img v-bind:src="this.content.imageUrl" alt="Background Image">
			</parallax>
		</div>

		<div class="article-text">
			<div v-html="compiledMarkdown" v-if="!$wait.is('loadNews')"></div>
			<p class="article-text__source">Quelle: <a v-bind:href="this.content.source">{{ newsContent(id).source }}</a></p>
		</div>
	
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
	name: "news-article",
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
		this.$wait.start("loadNews");
		document.querySelector("#app").classList.add("app-spinner-wrapper");
		this.getEntry({
			type: "news",
			id: this.id,
		})
			.then(() => {
				this.content = this.newsContent(this.id);
				this.$wait.end("loadNews");
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
		...mapGetters(["newsContent"]),
		compiledMarkdown() {
			return marked(this.content.newsText, { sanitize: true, breaks: true });
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.id = to.params.id;
		this.$wait.start("loadNews");
		document.querySelector("#app").classList.add("app-spinner-wrapper");
		this.getEntry({
			type: "news",
			id: this.id,
		})
			.then(() => {
				this.content = this.newsContent(this.id);
				this.$wait.end("loadNews");
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
