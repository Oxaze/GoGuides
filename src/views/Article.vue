<template>
  <div class="article">
      <p>Test</p>
  </div>
</template> 

<script>
import { remove } from "30-seconds-of-code/dist/_30s.es5.min.js";
import { createClient } from "@/contentful.js";
const client = createClient();

export default {
  name: "article",
  mounted() {
    this.fetchContent();
  },
  data() {
    return {};
  },
  methods: {
    fetchContent() {}
  }
};
</script>
