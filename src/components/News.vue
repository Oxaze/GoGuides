<template>
	<div class="news">
		<router-link :to="`news/${id}`" class="news__img-link">
			<img v-bind:src="this.newsContent(id).imageUrl" alt="thumbnail" class="news__img" />
		</router-link>
		<div class="news__wrapper">
			<router-link :to="`news/${id}`" class="news__heading">
				<h3>{{ newsContent(id).title }}</h3>
			</router-link>
			<p class="news__meta-data">
				{{ newsContent(id).contentType }} • {{ newsContent(id).releaseDate }}
			</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
// TODO: Add animation

export default {
	name: "news",
	props: {
		id: String,
	},
	computed: {
		...mapGetters(["newsContent"]),
	},
};
</script>
