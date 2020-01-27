self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.6b5b42654657d9aebcbb.js",
    "revision": "b29b243bfce03480f23c"
  },
  {
    "url": "/_next/static/chunks/framework.74d547792b3163b4d6d2.js",
    "revision": "7769a45dde4b24cf5e11"
  },
  {
    "url": "/_next/static/fGE5lN1i9cbi2En_-1uOS/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/fGE5lN1i9cbi2En_-1uOS/pages/_app.js",
    "revision": "1d8d54be21a8adc5b01d"
  },
  {
    "url": "/_next/static/fGE5lN1i9cbi2En_-1uOS/pages/_error.js",
    "revision": "2f4168825931ebc7d551"
  },
  {
    "url": "/_next/static/fGE5lN1i9cbi2En_-1uOS/pages/index.js",
    "revision": "8d128b0f7a0e2802c28f"
  },
  {
    "url": "/_next/static/runtime/main-73c5bb40f43c6379d1c8.js",
    "revision": "77b8117d7bbfd9984a5b"
  },
  {
    "url": "/_next/static/runtime/polyfills-59d32c5e0ed3dd797824.js",
    "revision": "f5f90f842eb19065a2dd"
  },
  {
    "url": "/_next/static/runtime/webpack-91b117697e716c22a78b.js",
    "revision": "959f28c20c788af74930"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
