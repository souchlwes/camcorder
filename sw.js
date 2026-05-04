const CACHE_NAME = 'y2k-cam-v1';

// 1. Core local files to cache immediately
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './apple-touch-icon.png' // <-- Added your custom icon!
];

// Install the service worker and cache the core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching core assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Intercept network requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If we have it saved in the cache, use it!
      if (cachedResponse) {
        return cachedResponse;
      }

      // If not, go to the internet to get it
      return fetch(event.request).then((networkResponse) => {
        
        // --- DYNAMIC FONT CACHING ---
        // If the app is downloading the VT323 font files from Google, 
        // silently save a copy into the cache so they work offline next time!
        if (event.request.url.includes('fonts.googleapis.com') || 
            event.request.url.includes('fonts.gstatic.com')) {
          
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        
        return networkResponse;
      }).catch(() => {
        // This catch block prevents the app from completely crashing 
        // if it tries to fetch something from the internet while offline.
        console.log('Offline and resource not found in cache.');
      });
    })
  );
});
