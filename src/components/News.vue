<template>
  <div class="news">
		<div>
    <router-link :to="`news/${id}`" class="news__img-link">
      <img v-bind:src="this.newsContent(id).imageUrl" alt="thumbnail" class="news__img">
    </router-link>
    <div class="news__wrapper">
      <router-link :to="`news/${id}`" class="news__heading">
        <h3>{{ newsContent(id).title }}</h3>  
      </router-link>
      <p>{{ newsContent(id).contentType }}  •  {{ newsContent(id).releaseDate }}</p>
    </div>
		</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// TODO: Add animation

export default {
	name: "News",
	props: {
		id: String,
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
	computed: {
		...mapGetters(["newsContent"]),
	},
};
</script>
