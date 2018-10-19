import Vue from "vue";
import Vuex from "vuex";
import cms from "../api/contentfulService";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
		guides: [],
	},
	mutations: {
		SET_NEWS(state, news) {
			state.news = [...state.news, news];
		},
		SET_GUIDES(state, guide) {
			state.guides = [...state.guides, guide];
		},
	},
	actions: {
		async getEntries({ commit, getters }, { type, lim }) {
			const data = await cms.getEntries(type, lim);

			switch (type) {
				case "news":
					data.items.forEach(el => {
						if (!getters.allIDsOfType("news").some(id => id === el.sys.id)) {
							commit("SET_NEWS", el);
						}
					});
					break;
				case "guide":
					data.items.forEach(el => {
						if (!getters.allIDsOfType("guides").some(id => id === el.sys.id)) {
							commit("SET_GUIDES", el);
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
					if (!getters.allIDsOfType("news").some(existingID => existingID === id)) {
						commit("SET_NEWS", data);
					}
					break;
				case "guide":
					if (!getters.allIDsOfType("guides").some(existingID => existingID === id)) {
						commit("SET_GUIDES", data);
					}
					break;
				default:
					throw type ? new Error(`Type "${type}" not available`) : new Error("No type set");
			}
		},
	},
	getters: {
		fractionatedNewsIDs(state) {
			const lastIDs = state.news.slice(0, 4);
			return [
				lastIDs.map(el => el.sys.id).filter((value, index) => index % 2 === 0),
				lastIDs.map(el => el.sys.id).filter((value, index) => index % 2 !== 0),
			];
		},
		allIDsOfType(state) {
			return type => state[type].map(el => el.sys.id);
		},
		omega(state) {
			return ["6ky8AjOitOUWeMk8mo8Y8q"];
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
		guideContent(state) {
			return id => {
				const entry = state.guides.find(el => el.sys.id === id);
				return {
					title: entry.fields.title,
					imageUrl: entry.fields.imageUrl,
					newsText: entry.fields.guideText,
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
