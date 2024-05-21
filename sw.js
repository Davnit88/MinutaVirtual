self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mi-pwa-cache').then(cache => {
            return cache.addAll([
                '/index.html',
                '/script.js',
                '/styles.css',
                '/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});