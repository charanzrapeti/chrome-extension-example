chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(handleNavigationCompleted);
    chrome.tabs.query({ url: "https://www.example.com/*" }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      });
    });
  });
  
  function handleNavigationCompleted(details) {
    if (details.url.startsWith('https://www.example.com')) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content.js"],
      });
    }
  }
  