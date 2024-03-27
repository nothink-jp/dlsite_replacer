let isEnabled = true;

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ enabled: isEnabled });
  updateIcon();
});

chrome.browserAction.onClicked.addListener(function (tab) {
  isEnabled = !isEnabled;
  chrome.storage.local.set({ enabled: isEnabled });
  updateIcon();
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleEnabled", enabled: isEnabled });
  });
});

function updateIcon() {
  const iconPaths = {
    "16": isEnabled ? "icons/icon16.png" : "icons/icon_disable16.png",
    "32": isEnabled ? "icons/icon32.png" : "icons/icon_disable32.png",
    "48": isEnabled ? "icons/icon48.png" : "icons/icon_disable48.png",
    "96": isEnabled ? "icons/icon96.png" : "icons/icon_disable96.png"
  };
  chrome.browserAction.setIcon({ path: iconPaths });
}
