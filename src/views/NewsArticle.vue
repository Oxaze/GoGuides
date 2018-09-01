<template>
  <div class="main-wrapper">
      <p>{{ newsData.title }}</p>
      <p>{{ newsData.newsText }}</p>
  </div>
</template> 

<script>
// eslint-disable-next-line
import { ContentfulHandler } from "@/contentful.js";

export default {
	name: "news-article",
	mounted() {
		this.fetchContent();
	},
	data() {
		return {
			id: this.$route.params.id,
			newsData: {
				title: null,
				imageUrl: null,
				newsText: null,
				author: null,
				releaseDate: null,
			},
		};
	},
	methods: {
		fetchContent() {
			this.newsData = ContentfulHandler.getNews(this.id);
		},
	},
};
</script>
