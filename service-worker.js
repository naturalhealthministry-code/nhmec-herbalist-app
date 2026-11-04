/* NHMEC Herbalist Learning App • v22.1
   Safe incremental upgrade from v21. New PDFs cached when first opened (not mandatory to install).
   Does not precache MP4s or instructor-only materials.
*/
const CACHE = 'nhmec-herbal-v22-1';
const CORE = [
  './', './index.html','./styles.css?v=18','./app.js?v=20',
  './kitchen-penothecary-v18.js?v=18','./holistic-nutrition-v21.js?v=21',
  './community-herbalist-v20.js?v=22.1','./wellness-herbalist-v20.js?v=20',
  './canine-herbalist-v22.js?v=22',
  './manifest.json','./icon-192.png','./icon-512.png'
];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>Promise.allSettled(CORE.map(u=>cache.add(u)))));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||!req.url.startsWith(self.location.origin))return;
  if(/\.mp4(\?|$)/i.test(req.url)){event.respondWith(fetch(req));return;}
  const navigates=req.mode==='navigate';
  const isCore=/\/(index\.html|app\.js|community-herbalist-v20\.js|wellness-herbalist-v20\.js|kitchen-penothecary-v18\.js|holistic-nutrition-v21\.js|canine-herbalist-v22\.js|styles\.css|manifest\.json)(\?|$)/.test(req.url);
  if(navigates||isCore){
    event.respondWith(fetch(req).then(resp=>{
      if(resp.ok){const clone=resp.clone();caches.open(CACHE).then(cache=>cache.put(req,clone)).catch(()=>{});}
      return resp;
    }).catch(()=>caches.match(req).then(r=>r||(navigates?caches.match('./index.html'):Response.error()))));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(resp=>{
    if(resp.ok&&resp.type!=='opaque'){const clone=resp.clone();caches.open(CACHE).then(cache=>cache.put(req,clone)).catch(()=>{});}
    return resp;
  })));
});
