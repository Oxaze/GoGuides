<template>
  <div class="news">
    <img v-bind:src="imageUrl" alt="thumbnail" class="news__img">
    <h3>{{ title }}</h3>
    <p>News  •  {{ formattedDate }}</p>
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
      imageUrl:
        "http://res.cloudinary.com/yrfhccre/image/upload/c_fit,f_auto,q_auto:best,fl_progressive/v1491951924/placeholder_2_jzkqjm",
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
          this.releaseDate = await entry.fields.releaseDate;
        })
        .catch(err => console.error(err));
    }
  },
  computed: {
    formattedDate() {
      let d = new Date(Date.parse(this.releaseDate));
      return d.toLocaleDateString("de-DE");
    }
  }
};
</script>

