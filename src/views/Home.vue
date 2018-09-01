<template>
  <div class="main-wrapper">
    <div class="news-block">

      <img class="parallax" src="https://res.cloudinary.com/yrfhccre/image/upload/h_1080/v1532900285/GoGuides/header-bg.jpg" />

      <div class="news-block__wrapper">
        <div>
          <News v-for="id in ids.f1" :key="id" v-bind:id="id"></News>
        </div>
        <div>
          <News v-for="id in ids.f2" :key="id" v-bind:id="id"></News>
        </div>
      </div>

    </div>
    <div class="fakeView__box"></div>
  </div>
</template> 

<script>
import News from "@/components/News.vue";

import { cData, ContentfulHandler } from "@/contentful.js";
import Parallax from "scroll-parallax/dist/Parallax.min.js";

window.onload = () => {
	const p = new Parallax(".parallax", {
		intensity: 80,
	});
	p.on("image:loaded", i => {
		const nbw = document.querySelector(".news-block__wrapper").offsetHeight;
		const all = nbw + 48 + 38 + 48;
		const hc = (document.querySelector(".news-block").style.height = `${all}px`);
	});
	p.init();
};

export default {
	name: "home",
	components: {
		News,
	},
	mounted() {
		this.fetchContent();
	},
	data() {
		return {
			ids: {
				all: new Array(4),
				f1: [],
				f2: [],
			},
		};
	},
	methods: {
		fetchContent() {
			cData
				.syncNews()
				.then(() => {
					this.ids = ContentfulHandler.getNewsIds();
				})
				.catch(err => {
					console.error(err);
				});
		},
	},
};
</script>
