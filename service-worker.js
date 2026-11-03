const CACHE='nhmec-herbal-v19-1';
const CORE=['./','./index.html','./styles.css?v=18','./app.js?v=17','./kitchen-penothecary-v18.js?v=18','./holistic-nutrition-v19.js?v=19.1','./manifest.json','./icon-192.png','./icon-512.png'];
const COURSE_ASSETS=[
'./nhmec-student-handbook.pdf','./nhmec-orientation.pdf','./nhmec-welcome-orientation-guide-2026.pdf',
'./module-6-guide-updated.pdf',
'./nhf-lesson-1-assignment.png','./nhf-lesson-2-wellness-journal.png','./nhf-lesson-3-abc-plus-d.png',
'./nhf-lesson-4-personal-plan.png','./nhf-lesson-4-30-day-plan.png',
'./module-7-guide-updated.pdf',
'./bfh-lesson-1-word-intake.png','./bfh-lesson-2-journey-wholeness.png','./bfh-lesson-3-tripartite-map.png','./bfh-lesson-4-healing-through-jesus.png',
'./module-2-1-biblical-herbalism-guidebook.pdf','./module-2-holistic-christian-herbalist-guidebook.pdf','./bh-lesson-1-welcome.pdf','./bh-lesson-2-christian-herbalist.pdf','./bh-lesson-3-discernment.pdf','./bh-lesson-4-good-samaritan.pdf','./bh-lesson-5-prayer-scripture.pdf','./bh-lesson-6-foods-herbs-oils-spices.pdf','./bh-lesson-7-herb-studies.pdf','./bh-lesson-8-women-healing-restoration.pdf',
'./module-3-level-1-herbalists-path.pdf','./hp-lesson-1-assignment.png','./hp-lesson-2-beginner-journal.png','./hp-lesson-3-materia-medica.png','./hp-lesson-4-personal-pathway.png',
'./module-4-holistic-nutrition-guidebook.pdf','./hn-lesson-1-assignment.png','./hn-lesson-2-nutritional-balance.png','./hn-lesson-3-nutrient-map.png','./hn-lesson-4-food-safety.png','./hn-final-project.png',
'./module-5-biblical-nutrition-guidebook.pdf','./bn-lesson-1-foundation.png','./bn-lesson-2-food-study.png','./bn-lesson-3-food-comparison.png','./bn-lesson-4-community-meal.png','./bn-final-project.png',
'./ap110-m1-body-map.png','./ap110-m1-structure-function-connection.png','./ap110-m1-first-ap-profile.png',
'./ap110-m2-2.1-activity.png','./ap110-m2-2.1-worksheet.png','./ap110-m2-2.2-directional-worksheet.png','./ap110-m2-2.2-directional-practice.png','./ap110-m2-directional-reference.png','./ap110-m2-2.3-planes.png','./ap110-m2-2.4-cavities.png','./ap110-m2-2.5-abdominal-regions.png','./ap110-m2-2.6-medical-word-building.png',
'./ap110-m3-3.1-worksheet.png','./ap110-m3-3.2-worksheet.png','./ap110-m3-3.3-worksheet.png','./ap110-m3-3.4-worksheet.png','./ap110-m3-3.5-worksheet.png',
'./family-herbalist-guidebook.pdf','./christian-herbalist-companion-guide.pdf','./christian-herbalist-expanded-textbook.pdf','./christian-herbalist-module-2-2-kjv-app-edition.pdf','./christian-herbalist-module-2-3-kjv-app-edition.pdf','./christian-herbalist-module-2-4-kjv-app-edition.pdf',
'./molybdenum-level-4-wellness-assessment.pdf','./vet-anatomy-portfolio-guide.pdf','./original-medicine-course-cover.png',
'./molybdenum-sulfites-nervous-system-levels-1-3.pdf','./moly-l3-worksheet-1-intake.png','./moly-l3-worksheet-2-nls-correlation.png','./moly-l3-worksheet-3-sulfite-tracking.png','./moly-l3-worksheet-4-red-flags.png','./moly-l3-worksheet-6-pen-followup.png','./moly-resource-gentle-calm-rollerball.png','./moly-resource-aroma-sticker.png','./moly-resource-melatonin-sleep-note.png'
];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([...CORE,...COURSE_ASSETS])));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 if(/\.mp4(\?|$)/i.test(req.url)){event.respondWith(fetch(req));return;}
 if(req.mode==='navigate'||/\/(index\.html|app\.js|kitchen-penothecary-v18\.js|holistic-nutrition-v19\.js|styles\.css|manifest\.json)(\?|$)/.test(req.url)){
  event.respondWith(fetch(req).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));return resp;}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));return;
 }
 event.respondWith(caches.match(req).then(cached=>{const network=fetch(req).then(resp=>{if(resp&&resp.ok){const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));}return resp;}).catch(()=>cached);return cached||network;}));
});
