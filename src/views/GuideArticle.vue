<template>
	<div>
		<v-wait for="loadGuide">
			<template slot="waiting">
				<div>				
					<p>Please wait...</p>
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
