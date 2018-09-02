import Vue from "vue";
import NProgress from "vue-nprogress";
import VueWait from "vue-wait";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(NProgress, {
	showSpinner: false,
});
Vue.use(VueWait);

const nprogress = new NProgress({ parent: "#app" });
const wait = new VueWait();

new Vue({
	router,
	// @ts-ignore
	nprogress,
	wait,
	render: h => h(App),
}).$mount("#app");
