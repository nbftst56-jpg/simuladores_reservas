const CACHE_NAME = "simuladores-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./SIMU_01.html",
  "./SIMU_02.html",
  "./SIMU_03.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
