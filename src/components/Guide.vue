<template>
  <div class="guide">
		<div>
    <router-link :to="`guides/${id}`" class="guide__img-link">
      <img v-bind:src="this.guideContent(id).imageUrl" alt="thumbnail" class="guide__img">
    </router-link>
    <div class="guide__wrapper">
      <router-link :to="`guides/${id}`" class="guide__heading">
        <h3>{{ guideContent(id).title }}</h3>  
      </router-link>
      <p>{{ guideContent(id).contentType }}  •  {{ guideContent(id).releaseDate }}</p>
    </div>
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
