<template>
  <div class="news">
    <h3>{{ title }}</h3>
    <p>{{ newsText }}</p>
    <br><br>
  </div>
</template>

<script>
import { createClient } from "@/contentful.js";
const client = createClient();

export default {
  name: "News",
  props: {
    id: String
  },
  mounted() {
    this.fetchContent();
  },
  data() {
    return {
      title: null,
      newsText: null
    };
  },
  methods: {
    fetchContent() {
      client
        .getEntry(this.id)
        .then(async entry => {
          this.title = await entry.fields.title;
          this.newsText = await entry.fields.newsText;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

