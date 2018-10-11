import Vue from "vue";
import Vuex from "vuex";
// import * as contentful from "contentful";
import cms from "../api/contentfulService";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = news.items;
		},
	},
	actions: {
		async getEntries({ commit }, { type, lim }) {
			const data = await cms.getEntries(type, lim);

			switch (type) {
				case "news":
					commit("SET_NEWS", data);
					break;
				default:
					throw type ? new Error(`Type "${type}" not available`) : new Error("No type set");
			}
		},
	},
	getters: {
		newsIDs(state) {
			return [
				state.news.map(el => el.sys.id).filter((value, index) => index % 2 === 0),
				state.news.map(el => el.sys.id).filter((value, index) => index % 2 !== 0),
			];
		},
		newsContent(state) {
			return id => {
				const entry = state.news.find(el => el.sys.id === id);
				return {
					title: entry.fields.title,
					imageUrl: entry.fields.imageUrl,
					newsText: entry.fields.newsText,
					releaseDate: new Date(Date.parse(entry.fields.releaseDate)).toLocaleDateString("de-DE"),
					contentType:
						entry.sys.contentType.sys.id.charAt(0).toUpperCase() +
						entry.sys.contentType.sys.id.slice(1),
				};
			};
		},
	},
});
