chrome.runtime.onMessage.addListener(
  function(x, y) {
    chrome.tabs.remove(y.tab.id);
  }
);
  