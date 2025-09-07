// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
  // Quando a página carregar, tentamos registrar o service worker
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}

// Adiciona um evento simples ao formulário de simulação
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const result = document.getElementById('result');
            result.textContent = `Olá, ${name}! Sua simulação de reserva foi registrada com sucesso.`;
            form.reset();
        });
    }
});