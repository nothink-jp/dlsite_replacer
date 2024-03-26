function replaceText(node, originalText, replacementText, wordBoundary = false) {
    if (node.nodeType === Node.TEXT_NODE) {
      const regex = new RegExp(originalText, wordBoundary ? '\\b' : 'g');
      node.textContent = node.textContent.replace(regex, replacementText);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let child of node.childNodes) {
        replaceText(child, originalText, replacementText, wordBoundary);
      }
    }
  }
  
  function updateIcon() {
    const iconPaths = {
      "16": isEnabled ? "icons/icon_enable16.png" : "icons/icon_disable16.png",
      "32": isEnabled ? "icons/icon_enable32.png" : "icons/icon_disable32.png",
      "48": isEnabled ? "icons/icon_enable48.png" : "icons/icon_disable48.png",
      "96": isEnabled ? "icons/icon_enable96.png" : "icons/icon_disable96.png"
    };
    chrome.browserAction.setIcon({ path: iconPaths });
  }

  chrome.storage.local.get("enabled", function (data) {
    if (data.enabled) {
  
  replaceText(document.body, 'ざぁ～こ♡', 'メスガキ');
  replaceText(document.body, '合意なし', 'レイプ');
  replaceText(document.body, 'ひよこ', 'ロリ');
  replaceText(document.body, 'ひよこババア', 'ロリババア');
  replaceText(document.body, '閉じ込め', '監禁');
  replaceText(document.body, '逆レ', '逆レイプ');
  replaceText(document.body, '命令', '強制');
  replaceText(document.body, '責め苦', '拷問');
  replaceText(document.body, '近親もの', '近親相姦');
  replaceText(document.body, 'トランス', '催眠');
  replaceText(document.body, '暗示', '催眠');
  replaceText(document.body, '動物なかよし', '獣姦');
  replaceText(document.body, '精神支配', '洗脳');
  replaceText(document.body, '秘密さわさわ', '痴漢');
  replaceText(document.body, 'しつけ', '調教');
  replaceText(document.body, '下僕', '奴隷');
  replaceText(document.body, '屈辱', '凌辱');
  replaceText(document.body, '回し', '輪姦');
  replaceText(document.body, '虫えっち', '蟲姦');
  replaceText(document.body, 'モブおじさん', 'モブ姦');
  replaceText(document.body, '異種えっち', '異種姦');
  replaceText(document.body, 'すやすやえっち', '睡眠姦');
  replaceText(document.body, 'トランスボイス', '催眠音声');
  replaceText(document.body, '暗示ボイス', '催眠音声');

  replaceText(document.body, 'CrackerJaxx', '↑こいつはバカ');
}
});