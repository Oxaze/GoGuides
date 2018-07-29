<template>
  <div class="home">
    <div class="news-block">
      <div class="news-block__wrapper">

        <div>
          <News v-for="id in ids1" :key="id" v-bind:id="id"></News>
        </div>

        <div>
          <News v-for="id in ids2" :key="id" v-bind:id="id"></News>
        </div>

      </div>
    </div>
    <div class="fakeView__box"></div>
  </div>
</template>

<script>
import News from "@/components/News.vue";

import { remove } from "30-seconds-of-code/dist/_30s.es5.min.js";
import { createClient } from "@/contentful.js";
const client = createClient();

export default {
  name: "home",
  components: {
    News
  },
  mounted() {
    this.fetchContent();
  },
  data() {
    return {
      allIds: [],
      ids1: [],
      ids2: []
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
              await this.allIds.push(entry.sys.id);
            }
          });
          this.changeArrays();
        })
        .catch(err => console.error(err));
    },
    changeArrays() {
      this.ids1 = this.allIds.filter((value, index, Arr) => index % 2 == 0);
      this.ids2 = remove(this.allIds, n => this.allIds.indexOf(n) % 2 !== 0);
      this.allIds = this.ids1.concat(this.ids2);
    }
  }
};
</script>
