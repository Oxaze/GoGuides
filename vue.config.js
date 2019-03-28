module.exports = {
	pwa: {
		name: "GoGuides",
		themeColor: "#27426f",
		msTileColor: "#facc33",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "white",
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			swSrc: "public/service-worker.js",
		},
	},
};
