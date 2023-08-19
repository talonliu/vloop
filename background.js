chrome.browserAction.onClicked.addListener(function (tab) {
  // 执行content.js文件
  chrome.tabs.executeScript(tab.id, { file: 'content.js' });
});

// 当收到消息时，执行action的回调函数
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getSentences') {
    // 发送消息，返回vloop.getSentences()
    sendResponse({ sentences: vloop.getSentences() });
  }
});