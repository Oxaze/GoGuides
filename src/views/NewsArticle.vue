<template>
	<div class="main-wrapper">
		<v-wait for="loadNews">
			<template slot="waiting">
				<div>				
					<p>Please wait...</p>
				</div>
			</template>

			<h1>{{ this.content.title }}</h1>
			<p>{{ this.content.newsText }}</p>
		</v-wait>
	</div>
</template> 

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "news-article",
	data() {
		return {
			id: this.$route.params.id,
			content: {},
		};
	},
	created() {
		this.$wait.start("loadNews");
		this.getEntry({
			type: "news",
			id: this.id,
		})
			.then(() => {
				this.content = this.newsContent(this.id);
				this.$wait.end("loadNews");
			})
			.catch(err => {});
	},
	methods: {
		...mapActions(["getEntry"]),
	},
	computed: {
		...mapGetters(["newsContent"]),
	},
	beforeRouteUpdate(to, from, next) {
		this.id = to.params.id;
		this.getEntry({
			type: "news",
			id: this.id,
		})
			.then(() => {
				this.content = this.newsContent(this.id);
			})
			.catch(err => {});
		next();
	},
};
</script>
