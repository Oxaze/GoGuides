<template>
  <div class="main-wrapper">
      <p>{{ title }}</p>
      <p>{{ newsText }}</p>
  </div>
</template> 

<script>
import { remove } from "30-seconds-of-code/dist/_30s.es5.min.js";
import { createClient } from "@/contentful.js";
const client = createClient();

export default {
  name: "news-article",
  mounted() {
    this.fetchContent();
  },
  data() {
    return {
      id: this.$route.params.id,
      title: null,
      imageUrl: null,
      newsText: null,
      author: null,
      releaseDate: null
    };
  },
  methods: {
    fetchContent() {
      client
        .getEntry(this.id)
        .then(async entry => {
          this.title = await entry.fields.title;
          this.imageUrl = await entry.fields.imageUrl;
          this.newsText = await entry.fields.newsText;
          this.author = await entry.fields.author;
          this.releaseDate = await entry.fields.releaseDate;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>
