<template>
	<div class="home-view">
		<div class="guide-block-outer">
			<div class="guide-block-inner">
				<Guide v-for="id in allIDsOfType('guides')" :key="id" v-bind:id="id"></Guide>
			</div>
		</div>

		<parallax :sectionHeight="120" :breakpoint="'(min-width: 768px)'">
			<img
				srcset="
					https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto%2Cw_600%2Cfl_progressive/v1535831110/GoGuides/background-4k       600w,
					https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto:good%2Cw_900%2Cfl_progressive/v1535831110/GoGuides/background-4k  900w,
					https://res.cloudinary.com/yrfhccre/image/upload/f_auto%2Cq_auto:best%2Cfl_progressive/v1535831110/GoGuides/background-4k         1200w
				"
				src="https://res.cloudinary.com/yrfhccre/image/upload/f_auto,q_auto/v1535831110/GoGuides/background-4k"
				sizes="100vw"
				alt="Background Image"
			/>
		</parallax>
	</div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Guide from "@/components/Guide.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "guides-home",
	components: {
		Guide,
		Parallax,
	},
	created() {
		this.getEntries({
			type: "guide",
			lim: 20,
		})
			.then(() => {
				this.resizeParallax();
			})
			.catch(err => {
				console.error(err);
			});

		window.addEventListener("resize", () => {
			this.resizeParallax();
		});
	},
	updated() {
		this.resizeParallax();
	},
	computed: {
		...mapGetters(["allIDsOfType"]),
	},
	methods: {
		...mapActions(["getEntries"]),
		resizeParallax() {
			const gbo = document.querySelector(".guide-block-outer").offsetHeight;
			document.querySelector(".Masthead").style.height = `calc(${gbo}px + 6rem)`;
		},
	},
};
</script>
