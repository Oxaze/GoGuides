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
    <!-- <router-view/> -->
    <div class="fakeView"></div>
    <div class="fakeView__box"></div>
    <footer class="footer"></footer>
  </div>
</template>

<style src="./styles/main.scss" lang="scss"></style>
