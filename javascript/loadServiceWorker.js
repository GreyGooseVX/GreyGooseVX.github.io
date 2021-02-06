if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/ServiceWorker.js")
			.then((reg) => {
				console.log("ServiceWorker Registered:", reg)
			})
			.catch((err) => {
				console.log("Failed to register ServiceWorker: ", err)
			})
	})
}
