document.getElementById('splitButton').addEventListener('click', () => {
  // 获取输入框中的值
  const repeatCount = parseInt(document.getElementById('repeatCountInput').value);
  // 获取当前tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // 发送消息，指定tabId，action为split，repeatCount为repeatCount
    chrome.tabs.sendMessage(tabs[0].id, { action:'split', repeatCount: repeatCount });
  });
});