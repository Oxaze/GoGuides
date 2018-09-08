<template>
  <div class="news">
		<div v-if="cData.imageUrl">
    <router-link :to="`news/${id}`" class="news__img-link">
      <img v-bind:src="cData.imageUrl" alt="thumbnail" class="news__img">
    </router-link>
    <div class="news__wrapper">
      <router-link :to="`news/${id}`" class="news__heading">
        <h3>{{ cData.title }}</h3>  
      </router-link>
      <p>{{ uppercasedContentType }}  •  {{ formattedDate }}</p>
    </div>
		</div>
  </div>
</template>

<script>
import { ContentfulHandler } from "@/contentful.js";

// TODO: Add animation

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
			cData: {
				title: null,
				imageUrl: null,
				newsText: null,
				author: null,
				releaseDate: null,
				contentType: null,
			},
		};
	},
	methods: {
		fetchContent() {
			this.cData = ContentfulHandler.getBundleData(this.id);
		},
	},
	computed: {
		formattedDate() {
			const d = new Date(Date.parse(this.cData.releaseDate));
			return d.toLocaleDateString("de-DE");
		},
		uppercasedContentType() {
			const word = this.cData.contentType;
			return word.charAt(0).toUpperCase() + word.slice(1);
		},
	},
};
</script>
