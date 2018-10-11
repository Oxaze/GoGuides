<template>
  <div class="main-wrapper">
      <p>{{ cData.title }}</p>
      <p>{{ cData.newsText }}</p>
  </div>
</template> 

<script>
// eslint-disable-next-line
// import { cDynamic } from "@/contentful.js";

export default {
	name: "guide",
	created() {
		this.fetchContent();
	},
	data() {
		return {
			id: this.$route.params.id,
			cData: {
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
			this.cData = cDynamic.getSingleData(this.id, "guide");
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.id = to.params.id;
		this.fetchContent();
		next();
	},
};
</script>
