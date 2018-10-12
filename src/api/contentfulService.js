import * as contentful from "contentful";

const client = contentful.createClient({
	space: "yxx9mzsxhmgs",
	accessToken: "666b9beb820f58595efd23cb53ed8fadba040ee27f88917737137f97231cbde3",
});

export default {
	getEntries(type, lim) {
		return new Promise((resolve, reject) => {
			client
				.getEntries({
					content_type: type,
					limit: lim,
					order: "-sys.createdAt",
				})
				.then(entries => {
					resolve(entries);
				})
				.catch(err => {
					reject(err);
				});
		});
	},
	getEntry(id) {
		return new Promise((resolve, reject) => {
			client
				.getEntry(id)
				.then(entry => {
					resolve(entry);
				})
				.catch(err => {
					reject(err);
				});
		});
	},
};
