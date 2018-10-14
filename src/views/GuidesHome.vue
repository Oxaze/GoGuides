<template>
  <div class="main-wrapper">
      <p>Test</p>
	  <Guide v-for="id in allIDsOfType('guides')[0]" :key="id" v-bind:id="id"></Guide>
  </div>
</template> 

<script>
import Guide from "@/components/Guide.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "guides-home",
	components: {
		Guide,
	},
	created() {
		this.getEntries({
			type: "guide",
			lim: 10,
		});
	},
	computed: {
		...mapGetters(["allIDsOfType"]),
	},
	methods: {
		...mapActions(["getEntries"]),
	},
};
</script>
