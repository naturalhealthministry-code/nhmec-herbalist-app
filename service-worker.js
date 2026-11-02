const CACHE='nhmec-herbal-v6';
const CORE=['./','./index.html','./styles.css?v=6','./app.js?v=6','./manifest.json','./icon-192.png','./icon-512.png'];
const COURSE_ASSETS=[
'./nhmec-student-handbook.pdf','./nhmec-orientation.pdf','./nhmec-welcome-orientation-guide-2026.pdf',
'./module-6-guide-updated.pdf',
'./nhf-lesson-1-assignment.png','./nhf-lesson-2-wellness-journal.png','./nhf-lesson-3-abc-plus-d.png',
'./nhf-lesson-4-personal-plan.png','./nhf-lesson-4-30-day-plan.png',
'./module-7-guide-updated.pdf',
'./bfh-lesson-1-word-intake.png','./bfh-lesson-2-journey-wholeness.png','./bfh-lesson-3-tripartite-map.png','./bfh-lesson-4-healing-through-jesus.png',
'./module-2-1-biblical-herbalism-guidebook.pdf','./module-2-holistic-christian-herbalist-guidebook.pdf','./bh-lesson-1-welcome.pdf','./bh-lesson-2-christian-herbalist.pdf','./bh-lesson-3-discernment.pdf','./bh-lesson-4-good-samaritan.pdf','./bh-lesson-5-prayer-scripture.pdf','./bh-lesson-6-foods-herbs-oils-spices.pdf','./bh-lesson-7-herb-studies.pdf','./bh-lesson-8-women-healing-restoration.pdf'
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
