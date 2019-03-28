workbox.setConfig({
	debug: false,
});

// workbox.precaching.precacheAndRoute([]);
workbox.navigationPreload.enable();

workbox.routing.registerRoute(
	/\.(?:png|gif|jpg|jpeg|svg|webp)$/,
	workbox.strategies.staleWhileRevalidate({
		cacheName: "images",
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);
