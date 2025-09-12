// Define um nome e versão para o nosso cache
const CACHE_NAME = 'reservas-pwa-v1';

// Lista de todos os arquivos que o PWA precisa para funcionar offline
const urlsToCache = [
  '/',
  '/index.html',
  '/SIMU_01.html',
  '/SIMU_02.html',
  '/SIMU_03.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

// 1. Evento de Instalação: Salva todos os nossos arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Evento de Fetch: Intercepta as requisições
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Tenta encontrar a requisição no cache primeiro
    caches.match(event.request)
      .then((response) => {
        // Se encontrar no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não encontrar, faz a requisição à rede (online)
        return fetch(event.request);
      })
  );

});

