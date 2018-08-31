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
		this.ids = {
			all: [],
			f1: [],
			f2: [],
		};
	}

	getPosts(lim) {
		this.client
			.getEntries({
				limit: lim,
				order: "-sys.createdAt",
			})
			.then(entries => {
				entries.items.forEach(async entry => {
					if (entry.sys.id) {
						await this.ids.all.push(entry.sys.id);
					}
				});
				this.splitIds();
			})
			.catch(err => console.error(err));
		return this.ids;
	}

	splitIds() {
		this.ids.f1 = this.ids.all.filter((value, index) => index % 2 === 0);
		this.ids.f2 = remove(this.ids.all, n => this.ids.all.indexOf(n) % 2 !== 0);
		this.ids.all = this.ids.f1.concat(this.ids.f2);
	}
}

export const cData = new ContentfulHandler();

// -> https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
