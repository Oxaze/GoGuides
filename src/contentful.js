const contentful = require("contentful");

export function createClient() {
	return contentful.createClient({
		space: "yxx9mzsxhmgs",
		accessToken: "666b9beb820f58595efd23cb53ed8fadba040ee27f88917737137f97231cbde3",
	});
}

export class ContentfulHandler {
	constructor() {
		this.client = createClient();
	}

	syncData(type) {
		return new Promise((resolve, reject) => {
			const syncToken = window.localStorage.getItem("contentfulSyncToken");

			if (!syncToken) {
				this.client
					.sync({ initial: true, content_type: type })
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

	getDataIds(lim = 1, type) {
		const ids = {
			all: [],
			f1: [],
			f2: [],
		};
		this.syncData("news")
			.then(() => {
				const allEntries = JSON.parse(window.localStorage.getItem("contentfulEntries"));

				const newsEntries = allEntries.filter(el => el.sys.contentType.sys.id === type);
				ids.all = newsEntries.slice(0, lim).map(el => el.sys.id);
				ids.f1 = ids.all.filter((value, index) => index % 2 === 0);
				ids.f2 = ids.all.filter((value, index) => index % 2 !== 0);
			})
			.catch(err => {
				console.error(err);
			});

		return ids;
	}

	static getBundleData(id) {
		const cData = {
			title: null,
			imageUrl: null,
			newsText: null,
			author: null,
			releaseDate: null,
			contentType: null,
		};

		const allEntries = JSON.parse(window.localStorage.getItem("contentfulEntries"));
		const news = allEntries.find(el => el.sys.id === id);

		cData.title = news.fields.title["en-US"];
		cData.imageUrl = news.fields.imageUrl["en-US"];
		cData.newsText = news.fields.newsText["en-US"];
		cData.author = news.fields.author;
		cData.releaseDate = news.fields.releaseDate["en-US"];
		cData.contentType = news.sys.contentType.sys.id;

		return cData;
	}

	getSingleData(id, type) {
		const cData = {
			title: null,
			imageUrl: null,
			newsText: null,
			author: null,
			releaseDate: null,
			contentType: null,
		};

		this.syncData(type)
			.then(() => {
				const allEntries = JSON.parse(window.localStorage.getItem("contentfulEntries"));
				const news = allEntries.find(el => el.sys.id === id);

				cData.title = news.fields.title["en-US"];
				cData.imageUrl = news.fields.imageUrl["en-US"];
				cData.newsText = news.fields.newsText["en-US"];
				cData.author = news.fields.author;
				cData.releaseDate = news.fields.releaseDate["en-US"];
				cData.contentType = news.sys.contentType.sys.id;
			})
			.catch(err => {
				console.error(err);
			});

		return cData;
	}
}

export const cDynamic = new ContentfulHandler();
