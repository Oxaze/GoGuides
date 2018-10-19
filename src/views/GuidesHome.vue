<template>
	<div class="guide-block">
		<div>
			<Guide v-for="id in allIDsOfType('guides')" :key="id" v-bind:id="id"></Guide>
		</div>
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
			lim: 20,
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
