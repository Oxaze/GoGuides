<template>
  <div>
    <div class="fakeView">
      <div class="home-wrapper">
        <News v-for="id in ids" :key="id" v-bind:id="id"></News>
      </div>
    </div>
    <div class="fakeView__box"></div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import News from "@/components/News.vue";
// import { db } from "@/firebase.js";
import { createClient } from "@/contentful.js";
const client = createClient();

export default {
  name: "home",
  components: {
    HelloWorld,
    News
  },
  mounted() {
    this.fetchContent();
  },
  data() {
    return {
      ids: []
    };
  },
  methods: {
    fetchContent() {
      client
        .getEntries({
          limit: 4,
          order: "-sys.createdAt"
        })
        .then(entries => {
          entries.items.forEach(async entry => {
            if (entry.sys.id) {
              await this.ids.push(entry.sys.id);
            }
          });
        })
        .catch(err => console.error(err));
    }
  }
};
</script>
