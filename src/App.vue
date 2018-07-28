<template>
  <div id="app">
    <nav class="nav">
      <div class="nav__wrapper">
        <h3 class="nav__logo"><router-link class="nav__link" to="home">GoGuides</router-link></h3>
        <ul class="nav__list">
          <li class="nav__item"><router-link class="nav__link" to="guides">Guides</router-link></li>
          <li class="nav__item"><router-link class="nav__link" to="skins">Skins</router-link></li>
          <li class="nav__item"><router-link class="nav__link" to="maps">Maps</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="footer__wrapper">
        <p class="footer_copyright">Copyright © GoGuides 2018</p>
        <ul class="footer__list">
          <li class="footer__item"><router-link to="imprint">Impressum</router-link></li>
          <li class="footer__item"><router-link to="privacy">Datenschutz</router-link></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style src="./styles/main.scss" lang="scss"></style>
