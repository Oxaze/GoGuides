<template>
  <div class="main-wrapper">
      <p>Test</p>
  </div>
</template> 

<script>
// eslint-disable-next-line
import { cDynamic } from "@/contentful.js";

export default {
	name: "guides-home",
	data() {
		return {
			ids: {
				all: new Array(10),
				f1: [],
				f2: [],
			},
		};
	},
	methods: {
		fetchContent() {
			this.$wait.start("guidesLoad");
			this.ids = cDynamic.getDataIds(10, "guide");
			this.$wait.end("guidesLoad");
		},
	},
};
</script>
