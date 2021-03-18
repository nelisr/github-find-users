/* eslint-disable no-undef */
importScripts(
  "https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js"
);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "images-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 24 * 7
      })
    ]
  })
);


self.addEventListener("message", msg => {
  const {
    data: { action }
  } = msg;
  if (action === "skipWaiting") {
    self.skipWaiting();
  }
});





