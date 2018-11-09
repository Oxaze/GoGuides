export function offlineController() {
	return navigator.onLine;
}

window.addEventListener("online", offlineController());
window.addEventListener("offline", offlineController());
