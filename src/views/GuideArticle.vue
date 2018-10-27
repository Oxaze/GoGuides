<template>
	<div class="guide">
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
import Parallax from "vue-parallaxy";
import { HollowDotsSpinner } from "epic-spinners";
import { mapActions, mapGetters } from "vuex";
import marked from "marked";

export default {
	name: "guide-article",
	components: {
		Parallax,
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
			.catch(err => {});
		next();
	},
};
</script>
