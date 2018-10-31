<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <nav class="nav">
      <div class="nav__wrapper">
        <h3 class="nav__logo"><router-link class="nav__link" :to="{ path: '/'}">GoGuides</router-link></h3>
        <ul class="nav__list">
          <li class="nav__item nav__item--first"><router-link class="nav__link" exact-active-class="nav__link--active" :to="{ path: '/guides'}">Guides <span class="nav__link__indicator"></span></router-link></li>
          <li class="nav__item"><router-link class="nav__link" exact-active-class="nav__link--active" :to="{ path: '/skins'}">Skins <span class="nav__link__indicator"></span></router-link></li>
          <li class="nav__item"><router-link class="nav__link" exact-active-class="nav__link--active" :to="{ path: '/maps'}">Maps <span class="nav__link__indicator"></span></router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="footer__wrapper">
        <p class="footer_copyright">Copyright © GoGuides 2018</p>
        <ul class="footer__list">
          <li class="footer__item footer__item--first"><router-link :to="{ path: '/imprint'}">Impressum</router-link></li>
          <li class="footer__item"><router-link :to="{ path: '/privacy'}">Datenschutz</router-link></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style src="./styles/main.scss" lang="scss">
</style>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer.vue";

export default {
	components: {
		NprogressContainer,
	},
};
</script>
