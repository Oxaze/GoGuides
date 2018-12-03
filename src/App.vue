<template>
	<div id="app">
		<nprogress-container></nprogress-container>
		<nav class="nav">
			<div class="nav__wrapper">
				<h3 class="nav__logo">
					<router-link class="nav__link nav__link--left" :to="{ path: '/' }">GoGuides</router-link>
				</h3>

				<button class="nav__toggle-button nav__link nav__link--right btn" v-on:click="toggleMenu">
					<img src="./assets/menu.svg" alt="menu" />
				</button>

				<!--
					<p v-on:click="toggleMenu" class="nav__toggle-button nav__link nav__link--right">open</p>
				-->

				<ul class="nav__list" v-bind:class="{ 'nav__list--open': menuOpen }">
					<li>
						<router-link
							class="nav__link nav__link--left-mobile"
							exact-active-class="nav__link--active"
							:to="{ path: '/guides' }"
							>Guides <span class="nav__link__indicator"></span
						></router-link>
					</li>
					<li>
						<router-link
							class="nav__link"
							exact-active-class="nav__link--active"
							:to="{ path: '/skins' }"
							>Skins <span class="nav__link__indicator"></span
						></router-link>
					</li>
					<li>
						<router-link
							class="nav__link nav__link--right"
							exact-active-class="nav__link--active"
							:to="{ path: '/maps' }"
							>Maps <span class="nav__link__indicator"></span
						></router-link>
					</li>
				</ul>
			</div>
		</nav>

		<router-view />

		<footer class="footer">
			<div class="footer__wrapper">
				<p class="footer_copyright">Copyright © GoGuides 2018</p>
				<ul class="footer__list">
					<li class="footer__item footer__item--first">
						<router-link :to="{ path: '/imprint' }">Impressum</router-link>
					</li>
					<li class="footer__item">
						<router-link :to="{ path: '/privacy' }">Datenschutz</router-link>
					</li>
				</ul>
			</div>
		</footer>
		<transition name="notification__animation"
			><notification v-cloak v-if="messageIsVisible" v-bind:text="messageText"></notification
		></transition>
	</div>
</template>

<style src="./styles/main.scss" lang="scss"></style>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer.vue";
import Notification from "@/components/Notification.vue";

export default {
	components: {
		NprogressContainer,
		Notification,
	},
	data() {
		// TODO: Add cookie notification
		return {
			isOffline: !navigator.onLine,
			messageText: "",
			messageIsVisible: !navigator.onLine,
			menuOpen: false,
		};
	},
	created() {
		window.addEventListener("online", () => {
			this.offlineHandler();
		});
		window.addEventListener("offline", () => {
			this.offlineHandler();
		});

		let lastScrollTop = 0;
		window.addEventListener(
			"scroll",
			() => {
				const st = window.pageYOffset || document.documentElement.scrollTop;
				if (st > lastScrollTop) {
					document.querySelector(".nav").style.top = `calc(-${
						document.querySelector(".nav").offsetHeight
					}px - 8px)`;
				} else {
					document.querySelector(".nav").style.top = "0";
				}
				lastScrollTop = st;
			},
			false
		);

		window.addEventListener("resize", () => {
			this.menuOpen = false;
		});

		// setTimeout(() => {
		// 	const hamburger = document.querySelector(".hamburger");
		// 	hamburger.addEventListener("click", () => {
		// 		hamburger.classList.toggle("is-active");
		// 	});
		// }, 1000);
	},
	watch: {
		$route(to, from) {
			this.menuOpen = false;
		},
	},
	methods: {
		offlineHandler() {
			this.isOffline = !navigator.onLine;
			if (this.isOffline) {
				this.messageIsVisible = false;
				setTimeout(() => {
					this.messageText =
						"Du scheinst momentan offline zu sein! GoGuides könnte nicht volständig funktionieren. ⚠️";
					this.messageIsVisible = true;
					setTimeout(() => {
						this.messageIsVisible = false;
					}, 5000);
				}, 150);
			} else {
				this.messageIsVisible = false;
				setTimeout(() => {
					this.messageText = "Du bist wieder online! 😎";
					this.messageIsVisible = true;
					setTimeout(() => {
						this.messageIsVisible = false;
					}, 5000);
				}, 150);
			}
		},
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},
	},
};
</script>
