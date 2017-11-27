# Angular5Pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0-rc.0.

## Install

* npm install @angular/cli@next -g
* ng new angular5-pwa --service-worker --routing
* cd angular5-pwa
* ng serve
* ng build --prod
* npm install http-server -g
* npm install materialize-css
* cd dist
* http-server

## Cache

### installMode

* **prefetch**  All resources are downloaded when the service worker is setting up caching for this app version. This mode should be used for all the assets required for bootstrapping the application (application shell) if your application aims to be capable of full offline mode.
* **lazy**  Each resource is cached individually when it’s requested.

### updateMode

Determines how each cached asset behaves when a new version of the application is downloaded. It has same 2 options :

* **prefetch** Refresh the asset (if needed) on every new version. For files with hashes (versionedFiles), the asset is downloaded only if the hash has changed. For URLs in the cache, they will be refreshed always (possibly with an If-Modified-Since request).
* **lazy** The above flow will be performed only when the resource was requested.

### cacheConfig

* **maxSize**  maximum number of responses cached per group.
* **maxAge** to specify how long the cached response is valid. Could be set as a number of seconds, minutes, hours or days. Like 30m, 2h, 1d.
* **timeout** valid for Freshness strategy (see below). The response waiting time after which there will be a fallback to the cache. Set in the same unit as maxAge.
* **strategy** two options: “freshness” VS “performance”. Basically, Network-First VS Cache-First caching strategies.
