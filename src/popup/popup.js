document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('murloc-button');
  const responseDiv = document.getElementById('response');

  button.addEventListener('click', async () => {
    try {
      const response = await chrome.runtime.sendMessage({action: 'murloc_ping'});
      const responseText = responseDiv.querySelector('.response-text');
      responseText.textContent = response.message;
    } catch (error) {
      console.error('Erro:', error);
      responseDiv.textContent = 'MRRGL... (Algo deu errado)';
    }
  });
});
