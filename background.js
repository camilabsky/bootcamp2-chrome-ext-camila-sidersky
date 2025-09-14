// Background service worker
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'murloc_ping') {
    sendResponse({message: 'MRRRRRRRGL! (Murloc says hello!)'});
  }
  return true; // Will respond asynchronously
});
