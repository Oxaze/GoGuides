<template>
    <div>
        <div class="guides" style="height: 1000px; margin-top: -0.8rem;">
            <figure style="position: relative; height: 1000px; overflow: hidden; margin: 0;">
                <img class="parallax" src="https://res.cloudinary.com/yrfhccre/image/upload/v1532900285/GoGuides/header-bg.jpg" />
            </figure>
            
            <div style="height: 200px; width: 100%;height: 200px;width: 100%;position: absolute;top: 300px;background-color: white;"></div>
        </div>
    </div>
</template>

<script>
import * as Parallax from "scroll-parallax/dist/Parallax.min.js";
window.onload = () => {
  const p = new Parallax(".parallax", {
    // offsetYBounds: 150,
    // intensity: 50,
    // center: 0.5
  }).init();
};

export default {
  name: "guides",
  data() {
    return {};
  },
  methods: {}
};
</script>
