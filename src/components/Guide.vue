<template>
	<div class="guide">
		<div class="guide__wrapper-left">
			<router-link :to="`guides/${id}`" class="guide__img-link">
				<img v-bind:src="this.guideContent(id).imageUrl" alt="thumbnail" class="guide__img" />
			</router-link>
		</div>

		<div class="guide__wrapper-right">
			<router-link :to="`guides/${id}`" class="guide__heading">
				<h2>{{ guideContent(id).title }}</h2>
			</router-link>
			<p>{{ guideContent(id).contentType }} • {{ guideContent(id).releaseDate }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
// TODO: Add animation

export default {
	name: "guide",
	props: {
		id: String,
	},
	computed: {
		...mapGetters(["guideContent"]),
	},
};
</script>
