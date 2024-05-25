const cacheName = "caching-test";
const staticAssets = [
    // Add any static assets you need to cache here
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(staticAssets);
        })
    );
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    // if (url.pathname === "/admin/asset/list") {
    //     event.respondWith(fetchAndHideResponse(event.request));
    // } else {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetchAndUpdateCache(event.request);
            })
        );
    // }
});

function fetchAndHideResponse(request) {
    return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
        }

        const responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache);
        });

        return response.json().then((data) => {
            // Modify the data as needed before returning the response
            data.hidden = true; // Example modification

            return new Response(JSON.stringify(data), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            });
        });
    });
}

function fetchAndUpdateCache(request) {
    return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
        }

        const responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache);
        });

        return response;
    });
}
