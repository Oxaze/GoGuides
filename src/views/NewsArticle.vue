<template>
  <div class="main-wrapper">
      <p>{{ this.content.title }}</p>
      <p>{{ this.content.newsText }}</p>
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
		this.getEntry({
			type: "news",
			id: this.id,
		})
			.then(() => {
				this.content = this.newsContent(this.id);
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
