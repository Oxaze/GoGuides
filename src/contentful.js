const contentful = require("contentful");

const config = {
	space: "yxx9mzsxhmgs",
	accessToken: "666b9beb820f58595efd23cb53ed8fadba040ee27f88917737137f97231cbde3",
};

export function createClient() {
	return contentful.createClient(config);
}

// -> https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
