module.exports = {
	pwa: {
		name: "GoGuides",
		themeColor: "#27426f",
		msTileColor: "#facc33",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "white",
		// configure the workbox plugin
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			// swSrc is required in InjectManifest mode.
			swSrc: "public/service-worker.js",
			// ...other Workbox options...
		},
	},
};
