const CACHE_NAME = 'haya-v1';
const urlsToCache = [
  '/Islamic-website-portfolio-/',
  '/Islamic-website-portfolio-/index.html',
  '/Islamic-website-portfolio-/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
