'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d1237f35c8a16cea4eb1d504e58206b",
"assets/AssetManifest.bin.json": "61d9fcabd1aac46d7ec74e65ee4ee182",
"assets/AssetManifest.json": "1475d7f3bbf7a9b8e81a8d3f7e7600ea",
"assets/assets/apps/Almarasem/Almarasem1.png": "d5b53940b3730ae589a465f37f130cc4",
"assets/assets/apps/Almarasem/Almarasem10.png": "363e9a3db0daafa1d1d58db72ecac992",
"assets/assets/apps/Almarasem/Almarasem2.png": "5fd777a34e6de14e8e8bb9e6a55dbcb4",
"assets/assets/apps/Almarasem/Almarasem3.png": "a04ee0c8580f802fc21ff9a5d56de6c1",
"assets/assets/apps/Almarasem/Almarasem4.png": "d3f7dca9a6490074de1f3c998c92719f",
"assets/assets/apps/Almarasem/Almarasem5.png": "291901bf5fb636584482e220a2d4dffd",
"assets/assets/apps/Almarasem/Almarasem6.png": "d4d9cbd1a3727e6d730faf8557d7fb7a",
"assets/assets/apps/Almarasem/Almarasem7.png": "10ed0b29c85ab7662dc2a8de402759ca",
"assets/assets/apps/Almarasem/Almarasem8.png": "67955b7bce420f94b9c4fe98b181089f",
"assets/assets/apps/Almarasem/Almarasem9.png": "8e6f4d4d4c4a26440d5832a925c1b9ef",
"assets/assets/apps/BILL/BillScreen.png": "0eec1c2891b782f8f094e239dadfb767",
"assets/assets/apps/Language/tuko1.png": "2ac65c9fc2b59784e9db6763b5405927",
"assets/assets/apps/Language/tuko2.png": "eec8480f32c632fd852c8b7aa76fd888",
"assets/assets/apps/Language/tuko3.png": "78e8e211d04da0af667136dd49e251c7",
"assets/assets/apps/Language/tuko4.png": "6319bea5fee0340602b444cbbd9cebbb",
"assets/assets/apps/Language/tuko5.png": "a0a416baa98a77beb4525a4b8ddb53b0",
"assets/assets/apps/Menassat/Menassat1.png": "024a97667a42797b4df89291a714527c",
"assets/assets/apps/Menassat/Menassat2.png": "19bd6dd00da7e3147a13d1c14fa1297a",
"assets/assets/apps/Menassat/Menassat3.png": "55f9e1ee7af695104ed6d289086f45af",
"assets/assets/apps/Menassat/Menassat4.png": "52e8b5503b1850f311bb7724b73d431f",
"assets/assets/apps/Menassat/Menassat5.png": "0143bb05a853b90bf3c529363f3fa1bd",
"assets/assets/apps/Menassat%255CMenassat1.png": "024a97667a42797b4df89291a714527c",
"assets/assets/apps/news/News1.png": "35cb14f39c2be718dadb038e11439433",
"assets/assets/apps/news/News2.png": "c35365b05166ebd45002c0dbe460ea7d",
"assets/assets/apps/news/News3.png": "f5622fc3bf0888d739e616e1aab858ca",
"assets/assets/apps/news/News4.png": "8b360f7cfffb3009ab13dd3635b0d5a1",
"assets/assets/apps/shop/Shop1.png": "f6bfce817ebc29139b48c826005fdf5c",
"assets/assets/apps/shop/Shop2.png": "eb330e9a5ce81961d95decc63abade09",
"assets/assets/apps/shop/Shop3.png": "055abeb0bfa92aff8449490484c0cc22",
"assets/assets/apps/shop/Shop4.png": "81cb9a2fea50439a1f356f140083f6d5",
"assets/assets/apps/shop/Shop5.png": "29440c93ec86aec8d1e561157f568bf0",
"assets/assets/apps/shop/Shop6.png": "b28b5dcff01facead326d94ab226db4f",
"assets/assets/apps/shop/Shop7.png": "3b738b20612e8b1d0c87b4b22446d7d9",
"assets/assets/cv/CVFarouk.pdf": "6cdd35b1575eaac155ad74bc2b6f43a7",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "df58cbc5688dad2ba4d0ac9e1df05b32",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/Alma.png": "2ea8089f3f0085eb79755887e81ceb5d",
"assets/assets/images/AyaSofia1.jpg": "518e6611bf21ab0a5c23316643d96bdb",
"assets/assets/images/AyaSofia2.jpg": "d40372f00b8357ccd24d24c54b70ef5f",
"assets/assets/images/Bill.png": "20d1f2e25da4a0a96cae9b4eca86a24b",
"assets/assets/images/Farouk.png": "29894cd325f8191d7b1477808f439abd",
"assets/assets/images/Lang.png": "65e6525b29db92d7b8a6c54da814a638",
"assets/assets/images/News%2520App%2520Screens.png": "b3998b6710fa23bc48852732851bcb2c",
"assets/assets/images/real%2520esatae%2520app.png": "6613d6d58c5d7a69268f7184a27b3fb9",
"assets/assets/images/Shop%2520App.png": "4d1be42386cd07a9caff3e55de9ede00",
"assets/assets/images/SultanHassan.jpeg": "044601b201d1856e61e98ddd830f01a9",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "14bff4cd83a9e9f2948298cfc942b4d5",
"assets/NOTICES": "171002157529ee439b5e4788909fb703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6da50e1c0984773a6094dd6770b96dd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c0ead2d4b1824ada71ee52edce2dd1b",
"/": "6c0ead2d4b1824ada71ee52edce2dd1b",
"main.dart.js": "581b3ef4a7a6c732037142c29e421090",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
