<template>
	<div class="article-wrapper">
		<v-wait for="loadGuide">
			<template slot="waiting">
				<div>				
					<p>Please wait...</p>
				</div>
			</template>

			<h1>{{ this.content.title }}</h1>
			<div v-html="compiledMarkdown" v-if="!$wait.is('loadGuide')">></div>
		</v-wait>
	</div>
</template> 

<script>
import { mapActions, mapGetters } from "vuex";
import marked from "marked";

export default {
	name: "guide-article",
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
