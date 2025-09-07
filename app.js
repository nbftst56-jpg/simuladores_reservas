// Funções para cada página
const pages = {
  home: () => `
    <h1>Bem-vindo!</h1>
    <p>Escolha uma função no menu acima.</p>
  `,
  func1: () => `
    <h1>Função 1</h1>
    <button onclick="alert('Função 1 executada!')">Executar</button>
  `,
  func2: () => `
    <h1>Função 2</h1>
    <button onclick="alert('Função 2 executada!')">Executar</button>
  `
  // Adicione mais funções aqui
};

// Função para carregar a página
function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] ? pages[page]() : '<p>Página não encontrada</p>';
  // Atualiza menu ativo
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
}

// Evento de clique no menu
document.getElementById('menu').addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    loadPage(e.target.dataset.page);
  }
});

// Carrega página inicial
loadPage('home');
