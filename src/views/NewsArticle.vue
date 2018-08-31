<template>
  <div class="main-wrapper">
      <p>{{ data.title }}</p>
      <p>{{ data.newsText }}</p>
  </div>
</template> 

<script>
import { cData } from "@/contentful.js";

export default {
  name: "news-article",
  mounted() {
    this.fetchContent();
  },
  data() {
    return {
      id: this.$route.params.id,
      data: {
        title: null,
        imageUrl: null,
        newsText: null,
        author: null,
        releaseDate: null
      }
    };
  },
  methods: {
    fetchContent() {
      this.data = cData.getNews(this.id);
    }
  }
};
</script>
