import Vue from "vue";
import Vuex from "vuex";
// import * as contentful from "contentful";
import cms from "../api/contentfulService";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: null,
	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = news;
		},
	},
	actions: {
		async getEntries({ commit }, { type, lim }) {
			const data = await cms.getData(type, lim);

			switch (type) {
				case "news":
					commit("SET_NEWS", data);
					break;
				default:
					throw type ? new Error(`Type "${type}" not available`) : new Error("No type set");
			}
		},
	},
	getters: {},
});
