let isEnabled = true;

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.set({ enabled: isEnabled });
	updateIcon();
});

chrome.browserAction.onClicked.addListener((tab) => {
	isEnabled = !isEnabled;
	chrome.storage.local.set({ enabled: isEnabled });
	updateIcon();
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "toggleEnabled",
			enabled: isEnabled,
		});
	});
});

function updateIcon() {
	const iconPaths = {
		16: isEnabled ? "icon/16.png" : "icon/16_disable.png",
		32: isEnabled ? "icon/32.png" : "icon/32_disable.png",
		48: isEnabled ? "icon/48.png" : "icon/48_disable.png",
		96: isEnabled ? "icon/96.png" : "icon/96_disable.png",
		128: isEnabled ? "icon/128.png" : "icon/128_disable.png",
	};
	chrome.browserAction.setIcon({ path: iconPaths });
}
