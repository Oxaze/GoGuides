workbox.setConfig({
	debug: false,
});

// Precache most important assets
workbox.precaching.precacheAndRoute(["index.html"]);

// Cache less important assets
workbox.routing.registerRoute(
	/\.(?:js|css|woff|woff2)$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: "static-resources",
	})
);

// Cache up to 20 images for 15 days
workbox.routing.registerRoute(
	/^https:\/\/res\.cloudinary\.com\/yrfhccre\//,
	new workbox.strategies.CacheFirst({
		cacheName: "images",
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20,
				maxAgeSeconds: 15 * 24 * 60 * 60, // 15 Days
			}),
			new workbox.cacheableResponse.Plugin({
				statuses: [0, 200],
			}),
		],
	})
);

// Cache Cloudinary api responses for 15 days
workbox.routing.registerRoute(
	/^https:\/\/cdn\.contentful\.com/,
	new workbox.strategies.NetworkFirst({
		cacheName: "api-responses",
		networkTimeoutSeconds: 3,
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 60,
				maxAgeSeconds: 15 * 24 * 60 * 60, // 15 Days
			}),
		],
	})
);
