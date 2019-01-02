<template>
	<div>
		<div class="guides-view">
			<div class="guides-block">
				<Guide v-for="id in allIDsOfType('guides')" :key="id" v-bind:id="id"></Guide>
			</div>
		</div>
		<div class="guides-placeholder">
			<!-- Fill with input dor submitting more guide examples -->
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
