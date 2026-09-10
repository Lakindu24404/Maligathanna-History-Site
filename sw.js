/* ============================================================
   MALIGATHANNA ARCHAEOLOGICAL HERITAGE SITE
   sw.js — Service Worker for Full Offline & PWA Caching
   ============================================================ */

const CACHE_NAME = 'maligathanna-v1.2';

// Core essential assets to precache immediately on install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/script.js',
  './manifest.json',
  './assets/images/facon.jpg',
  './assets/images/cursor.png',
  './assets/images/img01-chankamana-aerial.jpg',
  './assets/images/img02-patana-aerial.jpg',
  './assets/images/img03-stone-stairway.jpg',
  './assets/images/img04-site-aerial-wide.jpg',
  './assets/images/img05-platform-steps.jpg',
  './assets/images/img06-chankamana-interior.jpg',
  './assets/images/img07-stone-wall-door.jpg',
  './assets/images/img08-platform-wall-exterior.jpg',
  './assets/images/img09-patana-upper-platform.jpg',
  './assets/images/img10-chankamana-inner.jpg',
  './assets/images/img11-nature-site-view.jpg',
  './assets/images/img12-outer-platform-view.jpg',
  './assets/images/img13-stone-detail.jpg',
  './assets/images/img14-chankamana-axis.jpg',
  './assets/images/img15-steps-under-tree.jpg',
  './assets/images/img16-gateway-entrance.jpg',
  './assets/images/img17-stone-doorframe.jpg',
  './assets/images/nearby-arankele.jpg',
  './assets/images/nearby-athugala.jpg',
  './assets/images/nearby-haththikuchchi.jpg',
  './assets/images/nearby-resvehera.jpg',
  './assets/images/nearby-ridiviharaya.jpg',
  './assets/images/nearby-yapahuwa.jpg'
];

// Install Event: Precache app shell and take control immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Precache local assets safely (individual catch to avoid install failure on single missing asset)
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn(`[SW] Precache failed for ${url}:`, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clear older caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Removing old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Smart offline caching strategy
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests and http/https schemes
  if (request.method !== 'GET') return;
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) return;

  // Strategy 1: For HTML navigation requests (Page loads / reloads)
  // Network first -> Cache fallback (Prevents browser dinosaur / ERR_INTERNET_DISCONNECTED)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Clone and update cache with freshest HTML
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Network failed (offline) -> Return cached page shell
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // Fallback to cached index.html
          return caches.match('./index.html') || caches.match('./');
        })
    );
    return;
  }

  // Strategy 2: For static assets (CSS, JS, Images, Fonts, CDNs)
  // Cache First with network fallback & dynamic caching
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version, and update in background if online
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
          })
          .catch(() => {
            /* offline, ignore */
          });
        return cachedResponse;
      }

      // Not in cache, fetch from network and cache for future offline use
      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If both cache and network fail for an image, could return a placeholder if needed
          return new Response('', { status: 408, statusText: 'Offline' });
        });
    })
  );
});
