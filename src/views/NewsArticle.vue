<template>
	<div class="news-article">
		<v-wait for="loadNews" style="height: 100%">
			<template slot="waiting">
				<div class="spinner">
					<hollow-dots-spinner
						:animation-duration="1125"
						:dot-size="18"
						:dots-num="3"
						color="#27426F"
					/>
				</div>
			</template>

			<div class="article-hero">
				<div class="article-hero__outer">
					<div class="article-hero__inner">
						<h1>{{ content.title }}</h1>
						<p class="article-hero__meta">{{ content.contentType }} • {{ content.releaseDate }}</p>
					</div>
				</div>

				<parallax :breakpoint="'(min-width: 768px)'">
					<img v-bind:src="content.imageUrl" alt="Background Image" />
				</parallax>
			</div>

			<div class="article-text">
				<div v-html="compiledMarkdown" v-if="!$wait.is('loadNews')"></div>
				<br />
				<p class="article-text__source">
					Quelle: <a v-bind:href="content.source">{{ sourceHostName }}</a>
				</p>
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
			.catch(err => {
				console.error(err);
				this.$router.replace({ name: "page-not-found" });
			});
	},
	methods: {
		...mapActions(["getEntry"]),
	},
	computed: {
		...mapGetters(["newsContent"]),
		compiledMarkdown() {
			if (this.content.newsText) {
				return marked(this.content.newsText, { sanitize: true, breaks: true });
			}
		},
		sourceHostName() {
			if (this.content.source) {
				const match = this.content.source.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
				if (
					match != null &&
					match.length > 2 &&
					typeof match[2] === "string" &&
					match[2].length > 0
				) {
					return match[2];
				}
				return null;
			}
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
			.catch(err => {
				console.error(err);
				this.$router.replace({ name: "page-not-found" });
			});
		next();
	},
};
</script>
