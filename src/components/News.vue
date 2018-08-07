<template>
  <div class="news">
    <router-link :to="id">
      <img v-bind:src="imageUrl" alt="thumbnail" class="news__img">
    </router-link>
    <div class="news__wrapper">
      <router-link to="" style="text-decoration: none;">
        <h3 class="news__heading">{{ title }}</h3>  
      </router-link>
      <p>News  •  {{ formattedDate }}</p>
    </div>
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
      imageUrl: null,
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

