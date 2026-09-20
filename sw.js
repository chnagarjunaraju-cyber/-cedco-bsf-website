const CACHE='cedco-sports-mobile-v7';
const CORE=['./','./index.html','data.json','./manifest.webmanifest','./assets/bsf_emblem.webp','./assets/bsf_eagle.webp','./assets/icon-192.png','./assets/icon-512.png'];
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js','https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js','https://cdn.jsdelivr.net/npm/jsbarcode@3.11.6/dist/JsBarcode.all.min.js'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(CORE);for(const u of CDN){try{const r=await fetch(u,{mode:'cors'});if(r.ok)await c.put(u,r.clone())}catch(e){}}}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request,{ignoreVary:true}).then(cached=>cached||fetch(event.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return resp}).catch(()=>caches.match('./index.html'))))});
