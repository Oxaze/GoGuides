import { remove } from "30-seconds-of-code/dist/_30s.es5.min.js";

const contentful = require("contentful");

export function createClient() {
	return contentful.createClient({
		space: "yxx9mzsxhmgs",
		accessToken: "666b9beb820f58595efd23cb53ed8fadba040ee27f88917737137f97231cbde3",
	});
}

export const client = createClient();

// Handler Class

export class ContentfulHandler {
	constructor() {
		this.client = createClient();
	}

	// getNewsIds(lim) {
	// 	const ids = {
	// 		all: [],
	// 		f1: [],
	// 		f2: [],
	// 	};

	// 	this.client
	// 		.getEntries({
	// 			limit: lim,
	// 			order: "-sys.createdAt",
	// 			content_type: "news",
	// 		})
	// 		.then(entries => {
	// 			entries.items.forEach(async entry => {
	// 				if (entry.sys.id) {
	// 					await ids.all.push(entry.sys.id);
	// 				}
	// 			});
	// 			ids.f1 = ids.all.filter((value, index) => index % 2 === 0);
	// 			ids.f2 = ids.all.filter((value, index) => index % 2 !== 0);
	// 		})
	// 		.catch(err => console.error(err));
	// 	return ids;
	// }

	static getNewsIds() {
		const ids = {
			all: [],
			f1: [],
			f2: [],
		};
		const allEntries = JSON.parse(window.localStorage.getItem("contentfulEntries"));

		const newsEntries = allEntries.filter(el => el.sys.contentType.sys.id === "news");
		ids.all = newsEntries.map(el => el.sys.id);
		ids.f1 = ids.all.filter((value, index) => index % 2 === 0);
		ids.f2 = ids.all.filter((value, index) => index % 2 !== 0);

		return ids;
	}

	getNews(id) {
		const data = {
			title: null,
			imageUrl: null,
			newsText: null,
			author: null,
			releaseDate: null,
		};

		this.client
			.getEntry(id)
			.then(async entry => {
				data.title = await entry.fields.title;
				data.imageUrl = await entry.fields.imageUrl;
				data.newsText = await entry.fields.newsText;
				data.author = await entry.fields.author;
				data.releaseDate = await entry.fields.releaseDate;
			})
			.catch(err => console.error(err));
		return data;
	}

	syncNews() {
		return new Promise((resolve, reject) => {
			const syncToken = window.localStorage.getItem("contentfulSyncToken");

			if (!syncToken) {
				this.client
					.sync({ initial: true })
					.then(res => {
						// @ts-ignore
						const responseObj = JSON.parse(res.stringifySafe());
						const { entries } = responseObj;
						window.localStorage.setItem("contentfulEntries", JSON.stringify(entries));

						window.localStorage.setItem("contentfulSyncToken", res.nextSyncToken);

						return res ? resolve(res) : reject(new Error("No entries in storage"));
					})
					.catch(err => {
						reject(err);
					});
			}

			if (syncToken) {
				this.client
					.sync({ nextSyncToken: syncToken })
					.then(res => {
						window.localStorage.setItem("contentfulSyncToken", res.nextSyncToken);

						return res ? resolve(res) : reject(new Error("No entries in storage"));
					})
					.catch(err => {
						reject(err);
					});
			}
		});
	}
}

export const cData = new ContentfulHandler();

// -> https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
