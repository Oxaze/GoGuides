import Vue from "vue";
import Vuex from "vuex";
import cms from "../api/contentfulService";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = [...state.news, news];
		},
	},
	actions: {
		async getEntries({ commit, getters }, { type, lim }) {
			const data = await cms.getEntries(type, lim);

			switch (type) {
				case "news":
					data.items.forEach(el => {
						if (!getters.allNewsIDs.some(id => id === el.sys.id)) {
							commit("SET_NEWS", el);
						}
					});
					break;
				default:
					throw type ? new Error(`Type "${type}" not available`) : new Error("No type set");
			}
		},
		async getEntry({ commit, getters }, { type, id }) {
			const data = await cms.getEntry(id);
			switch (type) {
				case "news":
					if (!getters.allNewsIDs.some(existingID => existingID === id)) {
						commit("SET_NEWS", data);
					}
					break;
				default:
					throw type ? new Error(`Type "${type}" not available`) : new Error("No type set");
			}
		},
	},
	getters: {
		fractionatedNewsIDs(state) {
			const fourIDs = state.news.slice(0, 4);
			return [
				fourIDs.map(el => el.sys.id).filter((value, index) => index % 2 === 0),
				fourIDs.map(el => el.sys.id).filter((value, index) => index % 2 !== 0),
			];
		},
		allNewsIDs(state) {
			return state.news.map(el => el.sys.id);
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

// -> https://gist.github.com/DawidMyslak/2b046cca5959427e8fb5c1da45ef7748
