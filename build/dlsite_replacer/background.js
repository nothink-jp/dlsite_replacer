let isEnabled = true;

chrome.browserAction.onClicked.addListener(function (tab) {
  isEnabled = !isEnabled;
  chrome.storage.local.set({ enabled: isEnabled });
  updateIcon();
});

function updateIcon() {
  const iconPath = isEnabled ? "icons/icon_enable96.png" : "icons/icon_disable96.png";
  chrome.browserAction.setIcon({ path: iconPath });
}

chrome.storage.local.get("enabled", function (data) {
  if (data.enabled !== undefined) {
    isEnabled = data.enabled;
    updateIcon();
  }
});