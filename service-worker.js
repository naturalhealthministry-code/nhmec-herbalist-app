const CACHE='nhmec-herbal-v5';
const CORE=['./','./index.html','./styles.css?v=5','./app.js?v=5','./manifest.json','./icon-192.png','./icon-512.png'];
const COURSE_ASSETS=[
'./nhmec-student-handbook.pdf','./nhmec-orientation.pdf','./nhmec-welcome-orientation-guide-2026.pdf',
'./module-6-guide-updated.pdf',
'./nhf-lesson-1-assignment.png','./nhf-lesson-2-wellness-journal.png','./nhf-lesson-3-abc-plus-d.png',
'./nhf-lesson-4-personal-plan.png','./nhf-lesson-4-30-day-plan.png',
'./module-7-guide-updated.pdf',
'./bfh-lesson-1-word-intake.png','./bfh-lesson-2-journey-wholeness.png','./bfh-lesson-3-tripartite-map.png','./bfh-lesson-4-healing-through-jesus.png'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([...CORE,...COURSE_ASSETS])));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;

  // Network-first for page navigations and core code so updates appear without reinstalling.
  if(req.mode==='navigate' || /\/(index\.html|app\.js|styles\.css|manifest\.json)(\?|$)/.test(req.url)){
    event.respondWith(
      fetch(req).then(resp=>{
        const copy=resp.clone();
        caches.open(CACHE).then(cache=>cache.put(req,copy));
        return resp;
      }).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for PDFs/images, with background refresh.
  event.respondWith(
    caches.match(req).then(cached=>{
      const network=fetch(req).then(resp=>{
        if(resp && resp.ok){
          const copy=resp.clone();
          caches.open(CACHE).then(cache=>cache.put(req,copy));
        }
        return resp;
      }).catch(()=>cached);
      return cached || network;
    })
  );
});
