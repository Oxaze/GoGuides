// @ts-ignore
import Vue from "vue";

import NProgress from "vue-nprogress";
import VueWait from "vue-wait";
import router from "./router";
import store from "./store/index.js";

import "./registerServiceWorker";
// @ts-ignore
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(NProgress);
Vue.use(VueWait);

const nprogress = new NProgress({ parent: "#app" });
const wait = new VueWait({ useVuex: true });

// @ts-ignore
new Vue({
	router,
	store,
	nprogress,
	wait,
	render: h => h(App),
}).$mount("#app");
