import Vue from "vue";
import NProgress from "vue-nprogress";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const nprogress = new NProgress({ parent: "#app" });
const options = {
	showSpinner: false,
};
Vue.use(NProgress, options);

new Vue({
	nprogress,
	router,
	render: h => h(App),
}).$mount("#app");
