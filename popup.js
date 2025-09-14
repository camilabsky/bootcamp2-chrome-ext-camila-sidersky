// Popup script
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('murloc-button');
  const responseDiv = document.getElementById('response');

  button.addEventListener('click', async () => {
    // Send message to background script
    const response = await chrome.runtime.sendMessage({action: 'murloc_ping'});
    responseDiv.textContent = response.message;
  });
});
