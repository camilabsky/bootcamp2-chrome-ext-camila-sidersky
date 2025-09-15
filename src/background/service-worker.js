chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'murloc_ping') {
    const responses = [
      'MRRRRRRRGL! (Murloc diz olá!)',
      'Grrrglglgl! (Saudações do Murloc!)',
      'Blblblbl! (Murloc está feliz em ver você!)',
      'Rwlrlrlrl! (Murloc manda um abraço!)',
      'Glglglgl! (Murloc deseja um bom dia!)'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    sendResponse({ message: randomResponse });
  }
  return true;
});
