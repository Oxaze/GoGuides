<template>
  <div class="news">
		<div v-if="newsData.imageUrl">
    <router-link :to="`news/${id}`" class="news__img-link">
      <img v-bind:src="newsData.imageUrl" alt="thumbnail" class="news__img">
    </router-link>
    <div class="news__wrapper">
      <router-link to="" style="text-decoration: none;">
        <h3 class="news__heading">{{ newsData.title }}</h3>  
      </router-link>
      <p>News  •  {{ formattedDate }}</p>
    </div>
		</div>
  </div>
</template>

<script>
import { ContentfulHandler } from "@/contentful.js";

export default {
	name: "News",
	props: {
		id: String,
	},
	mounted() {
		this.fetchContent();
	},
	data() {
		return {
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
	computed: {
		formattedDate() {
			const d = new Date(Date.parse(this.newsData.releaseDate));
			return d.toLocaleDateString("de-DE");
		},
	},
};
</script>
