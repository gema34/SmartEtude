const staticCacheName = 'v1.0.0';
const assetsToCache = [
    '/',
    '/static/css/style.css',
    '/static/js/main.js',
    '/static/icons/AppImages/android/android-launchericon-192-192.png',
    '/static/icons/AppImages/android/android-launchericon-512-512.png',
    '/static/icons/AppImages/ios/152.png',
    '/static/icons/AppImages/ios/384.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => cache.addAll(assetsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});