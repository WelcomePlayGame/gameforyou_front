import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "document" ||
    request.destination === "image",
  new NetworkFirst()
);

// Добавим маршруты и стратегии кэширования для других типов ресурсов, например, для шрифтов
registerRoute(
  ({ request }) =>
    request.destination === "font",
  new StaleWhileRevalidate({
    cacheName: "fonts-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
// Добавим маршруты и стратегии кэширования для API запросов
registerRoute(
  ({ url }) =>
    url.origin === "https://servergameforyou.online/",
  new NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
// Для статических ресурсов, например, CSS и JS файлов, используем стратегию StaleWhileRevalidate
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script",
  new StaleWhileRevalidate()
);

// Для HTML документов используем NetworkFirst стратегию
registerRoute(
  ({ request }) =>
    request.destination === "document",
  new NetworkFirst()
);

// Для изображений используем CacheFirst стратегию
registerRoute(
  ({ request }) =>
    request.destination === "image",
  new CacheFirst()
);


