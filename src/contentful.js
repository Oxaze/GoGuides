import contentful from "contentful";

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

	static getNews(id) {
		const data = {
			title: null,
			imageUrl: null,
			newsText: null,
			author: null,
			releaseDate: null,
		};

		const allEntries = JSON.parse(window.localStorage.getItem("contentfulEntries"));
		const news = allEntries.find(el => el.sys.id === id);
		data.title = news.fields.title;
		data.imageUrl = news.fields.imageUrl;
		data.newsText = news.fields.newsText;
		data.author = news.fields.author;
		data.releaseDate = news.fields.releaseDate;
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
