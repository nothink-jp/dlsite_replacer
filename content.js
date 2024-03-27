let isEnabled = true;
let replacements = [];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceText(node, wordMap) {
  if (node.nodeType === Node.TEXT_NODE) {
    let content = node.textContent;
    for (let [originalText, replacementText] of wordMap) {
      const regex = new RegExp(escapeRegExp(originalText), 'gi');
      if (regex.test(content)) {
        const originalContent = content;
        content = content.replace(regex, replacementText);
        if (content !== originalContent) {
          replacements.push({ node, originalContent });
        }
      }
    }
    node.textContent = content;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
      for (let child of node.childNodes) {
        replaceText(child, wordMap);
      }
    }
  }
}

function revertReplacements() {
  for (let { node, originalContent } of replacements) {
    node.textContent = originalContent;
  }
  replacements = [];
}

function processDocument() {
  const wordMap = new Map([
    ['ざぁ〜こ♡', 'メスガキ'],
    ['合意なし', 'レイプ'],
    ['閉じ込め', '監禁'],
    ['超ひどい', '鬼畜'],
    ['逆レ', '逆レイプ'],
    ['近親もの', '近親相姦'],
    ['責め苦', '拷問'],
    ['暗示', '催眠'],
    ['トランス', '催眠'],
    ['精神支配', '洗脳'],
    ['屈辱', '凌辱'],
    ['秘密さわさわ', '痴漢'],
    ['調教', 'しつけ'],
    ['下僕', '奴隷'],
    ['回し', '輪姦'],
    ['モブおじさん', 'モブ姦'],
    ['異種えっち', '異種姦'],
    ['機械えっち', '機械姦'],
    ['虫えっち', '蟲姦'],
    ['触手えっち', '触手姦'],
    ['すやすやえっち', '睡眠姦'],
    ['暗示ボイス', '催眠音声'],
    ['トランスボイス', '催眠音声'],
    ['つるぺた', 'ロリ'],
    ['畜えち', '獣姦'],
    //テスト用
    //['crackerjaxx', 'モロヘイヤを食う悪魔'],
    //['ダウナー', 'アッパー'],
  ]);

  replaceText(document.body, wordMap);
}

function enableAddon() {
  if (isEnabled) {
    processDocument();
  }
}

function disableAddon() {
  revertReplacements();
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleEnabled") {
    isEnabled = request.enabled;
    if (isEnabled) {
      enableAddon();
    } else {
      disableAddon();
    }
  }
});

chrome.storage.local.get("enabled", function (data) {
  isEnabled = data.enabled;
  if (isEnabled) {
    enableAddon();
  }
});
