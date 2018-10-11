import Vue from "vue";

import NProgress from "vue-nprogress";
import router from "./router";
import store from "./store/index.js";

import "./registerServiceWorker";
// @ts-ignore
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(NProgress, {
	showSpinner: false,
});

const nprogress = new NProgress({ parent: "#app" });

// @ts-ignore
new Vue({
	router,
	store,
	// @ts-ignore
	nprogress,
	render: h => h(App),
}).$mount("#app");
