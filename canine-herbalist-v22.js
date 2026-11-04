/* NHMEC Herbalist Learning App — Version 22
   Canine Herbalist Coach Training • eight modules • supplied official course links
   Keeps this unnumbered certificate distinct from NHMEC 302 and the catalog's NHMEC 309.
   Third-party copyrighted textbooks and private animal reports are NOT bundled.
   Student paper final is the 12-page questions-only edition (original answer key removed).
*/
(() => {
  'use strict';
  const COURSE_ID = 'canine-herbalist-coach-training';
  const PROGRESS_KEY = 'nhmec-canine-coach-progress-v22';
  const URLS = Object.freeze({
    guide: 'https://drive.google.com/file/d/1nvswzs6ORWMhTsiVzleC854hKMCvgeVa/view',
    workbook: 'https://drive.google.com/file/d/1Xovb1u3rK6fns8HyDD2MVRX1aI0N8oUp/view',
    library: 'https://drive.google.com/drive/u/2/folders/1IXeBjaZFMCCAw2t0kc2Ztt5lCsuDSZFn?usp=drive_link',
    studyopedia: 'https://sites.google.com/view/penothecary/diploma-programs/learning-library/studyopedia?authuser=0',
    module5: 'https://docs.google.com/forms/d/e/1FAIpQLSerF9y0Y25aNtVim8FJ6ZwTxm18quLa-63iIZVNlpKcyyGxwg/viewform',
    paperSource: 'https://drive.google.com/file/d/1dx0uZY_hwMpzNXPo_85LNGXL2ycdPmgy/view',
    onlineFinal: 'https://docs.google.com/forms/d/e/1FAIpQLSfhcTqTon7kbPV1kqTi5rhy4VEljvTxq8CM0tuv5bhtsYAiGw/viewform',
    allWork: 'https://docs.google.com/forms/d/e/1FAIpQLSctX1CTHsXZ6P7AGr-rVkwF4PCjgPO6nruswoi1sTgMu-Cj_Q/viewform',
    scope: 'https://docs.google.com/forms/d/e/1FAIpQLSfhPJNvTqCqydzCa5nSWloTrbqA7sg8bO2QrKqr4dBJHs1T_w/viewform?usp=send_form',
    pledge: 'https://docs.google.com/forms/d/e/1FAIpQLSeE76TQdoJzL8Mmr9bcAOZqP9BQZqS6xcGs5dqvQeXtqsQQ0g/viewform'
  });
  const MODULES = [
    {
      n: 1, chapters: '1–6', pages: '1–54', title: 'Foundations & Course Orientation',
      assignments: [
        'Download and review the Canine Herbalist Coach Course Guide.',
        'Download and review the Course Workbook.',
        'Watch the assigned course video when available on the official course page.',
        'Review the Resource Library and Studyopedia.',
        'Read pages 1–54 in the Course Guide.'
      ], note: 'The original site refers to a video, but a verified video file/link has not been supplied for the app.'
    },
    {
      n: 2, chapters: '7–15', pages: '55–72', title: 'Canine Herbalism — Continued Study',
      assignments: ['Read pages 55–72 in the Course Guide.'],
      note: 'Use the official guide for chapter titles and full instructional content; additional assignments were not supplied.'
    },
    {
      n: 3, chapters: '16–18', pages: '73–89', title: 'Materia Medica Research & Herb Study',
      assignments: [
        'Read pages 73–89 in the Course Guide.',
        'Continue the canine herbal materia medica study, herbs 9–100, using the Course Workbook worksheets.',
        'For each studied herb, record the botanical name, plant family, traditional body-system associations, traditional actions, safety considerations, preparation method, and appropriate applications.',
        'Use the same structured herb monograph format throughout this assignment.'
      ], note: 'The full Top 100 herb reference is in the course materials, rather than duplicated as unsupported dosing recommendations.'
    },
    {
      n: 4, chapters: '19–30', pages: '90–107', title: 'Wellness Protocol Planning',
      assignments: [
        'Read pages 90–107 in the Course Guide.',
        'Complete the Wellness Protocol Building Worksheet in the Course Workbook.'
      ], note: 'Practice designing educational wellness-support documents; veterinary diagnosis and treatment belong to licensed professionals.'
    },
    {
      n: 5, chapters: '31–48', pages: '108–124', title: 'Formulation Records & Hands-On Practice',
      assignments: [
        'Read pages 108–124 in the Course Guide.',
        'Complete Formulation Records & Documentation in the Workbook.',
        'Complete the Practical Formulation Assignment as described in the Workbook.',
        'Upload photographs of at least TWO finished hands-on projects using the Module 5 form.'
      ], note: 'Hands-on preparations must be appropriate for the exercise and reviewed for animal safety; completion does not authorize treatment of animal disease.',
      upload: URLS.module5
    },
    {
      n: 6, chapters: '49–62', pages: '125–141', title: 'Breed Assessment',
      assignments: [
        'Read pages 125–141 in the Course Guide.',
        'Complete the Breed Assessment Worksheet in the Workbook.'
      ], note: 'Document breed-related characteristics and potential considerations without assuming a breed determines a diagnosis.'
    },
    {
      n: 7, chapters: '63–79', pages: '142–159', title: 'Five Foundations & Canine Nutrition',
      assignments: [
        'Read pages 142–159 in the Course Guide.',
        'Complete the NHMEC Wellness Lifestyle Model — The Five Foundations worksheet.',
        'Complete the Nutrition Assessment Worksheet in the Workbook.'
      ], note: 'Focus on nutrition and lifestyle education; substantial diet changes or supplements require appropriate veterinary assessment.'
    },
    {
      n: 8, chapters: '80–100', pages: '160–180', title: 'Practicum & Final Stewardship Project',
      assignments: [
        'Read pages 160–180 in the Course Guide.',
        'Complete the Canine Herbalist Coach Practicum: 10 Breed Reviews, 10 Herbal Monographs, 5 Wellness Protocols, 3 Case Studies, and the Final Stewardship Project.',
        'Complete the Final Stewardship Project: Breed Assessment, Wellness Evaluation, Nutrition Review, Herbal Support Plan, Educational Handout, and Client Follow-up Plan.',
        'Prepare the complete Workbook and supporting documents for final submission.'
      ], note: 'Case studies and protocols are educational exercises; use de-identified or consented material and remain within scope.'
    }
  ];

  const PATHWAY_ID = 'animal-herbalism-certificate';
  if (typeof PATHWAYS !== 'undefined') {
    let pathway = PATHWAYS.find(p => p.id === PATHWAY_ID);
    if (!pathway) {
      pathway = {
        id: PATHWAY_ID,
        title: 'Animal Herbalism — Certificate Training',
        subtitle: 'Faith-centered canine herbal education and responsible companion-animal wellness stewardship. Separate from veterinary anatomy and diploma programs.',
        courses: []
      };
      const diplomaIdx = PATHWAYS.findIndex(p => p.id === 'diploma-programs');
      if (diplomaIdx >= 0) PATHWAYS.splice(diplomaIdx, 0, pathway); else PATHWAYS.push(pathway);
    }
    const card = {
      id: COURSE_ID,
      title: 'Canine Herbalist Coach Training Program',
      category: 'Canine Herbalism • Certificate',
      description: 'Eight modules with course guide, workbook, materia medica, breed assessments, hands-on formulation work, practicum, final examination, and required ethical agreements. The live course page does not establish an NHMEC number.',
      outcomes: [
        'Apply biblical stewardship to canine wellness education.',
        'Study canine body systems and responsible botanical materia medica.',
        'Document formulation exercises, breed considerations, and wellness observations.',
        'Recognize unsafe practices, red flags, and veterinary referral boundaries.',
        'Complete workbook, practicum, assessment, and required agreements.'
      ],
      lessons: MODULES.map(m => [`Module ${m.n}: ${m.title}`, `Chapters ${m.chapters} • Course Guide pages ${m.pages}`])
    };
    const old = pathway.courses.find(c => c.id === COURSE_ID);
    if (old) Object.assign(old, card); else pathway.courses.push(card);
  }

  const link = (url,label,cls='btn btn-green') => `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
  const list = x => `<ol>${x.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`;
  const getProgress = () => {try {return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}');} catch(_){return {};} };
  function setProgress(n,value){
    const p=getProgress();p[n]=!!value;
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch(_){ /* storage may be blocked in preview */ }
    updateProgressSummary();
  }
  window.canineCoachMarkComplete = setProgress;
  function updateProgressSummary(){
    const el=document.getElementById('canineCoachProgress');if(!el)return;
    const p=getProgress(), count=MODULES.filter(m=>p[m.n]).length;
    const pct=Math.round(100*count/MODULES.length);
    el.innerHTML=`<strong>${count} of ${MODULES.length} modules marked complete</strong><div class="progress" style="margin-top:10px"><span style="width:${pct}%"></span></div><small>${pct}% • Personal study tracker only. Official NHMEC submission and approval are separate.</small>`;
  }
  function moduleCard(m){
    const checked=!!getProgress()[m.n];
    return `<article class="card cc-card">
      <div class="cc-card-top"><span class="badge">Module ${m.n} • Ch. ${esc(m.chapters)}</span><label class="cc-check"><input aria-label="Mark Module ${m.n} complete" type="checkbox" ${checked?'checked':''} onchange="canineCoachMarkComplete(${m.n},this.checked)"> Studied</label></div>
      <h3>${esc(m.title)}</h3><p>Course Guide pages ${esc(m.pages)} • ${m.assignments.length} listed activity${m.assignments.length===1?'':'ies'}.</p>
      <div class="cc-actions"><button class="btn btn-green" onclick="openCanineCoachModule(${m.n})">Open Module ${m.n}</button>${link(URLS.guide,'Course Guide','btn btn-light')}</div>
    </article>`;
  }
  const safety = `<div class="notice cc-safety"><b>Canine Safety &amp; Scope:</b> This is education, not veterinary diagnosis, treatment or prescribing. Consult a licensed veterinarian before giving herbs, supplements or essential oils to an animal. Repeated vomiting, bloody diarrhea, inability to keep water down, unusual weakness, and dehydration need prompt veterinary care; a swollen abdomen with unproductive retching or difficulty breathing can be an emergency. Do not delay veterinary care for home preparations.</div>`;

  function resourcesSection(){
    return `<div class="card cc-resources">
      <span class="badge">Required Study Resources</span><h3>Course Guide • Workbook • Learning Library</h3>
      <p>Use the NHMEC source materials for all chapter readings and worksheet instructions. The links open their original locations; the app does not redistribute third-party veterinary textbooks.</p>
      <div class="cc-actions">${link(URLS.guide,'Open Course Guide')}${link(URLS.workbook,'Open Course Workbook')}${link(URLS.library,'Resource Library','btn btn-light')}${link(URLS.studyopedia,'Studyopedia','btn btn-light')}</div>
      <small>Some Google resources may require the correct PENothecary/Google account or viewer access.</small>
    </div>`;
  }
  function postersSection(){
    return `<div class="card cc-poster-section">
      <h3>Illustrated Protocol Study Posters</h3>
      <p><b>Instructor/veterinary review required.</b> These supplied infographics are available for critical reading and discussion, not as approved animal treatment plans. Statements about botanical effectiveness and safe administration have not been verified.</p>
      <details><summary>View digestive upset and allergy/itching study posters</summary>
        <div class="cc-poster-grid">
          <figure><img loading="lazy" src="canine-digestive-upset-poster.jpg" alt="Supplied infographic about canine digestive upset; unverified guidance for classroom critical review"><figcaption>Digestive upset: discuss differential causes and emergency referral.</figcaption></figure>
          <figure><img loading="lazy" src="canine-allergy-itching-poster.jpg" alt="Supplied canine skin and itching infographic; unverified herbal claims for classroom review"><figcaption>Allergy/itching: discuss causes, interactions, and veterinary referral.</figcaption></figure>
        </div>
      </details>
    </div>`;
  }
  function finalSection(){
    return `<div class="card cc-final">
      <span class="badge">Final Examination • 80% Minimum Passing Score</span>
      <h3>Canine Herbalist Coach Final Examination</h3>
      <p>The supplied paper assessment includes <b>35 multiple-choice questions</b> and <b>5 bonus written questions</b>, covering body systems, materia medica, safety, preparations, breed considerations, nutrition, and ethics.</p>
      <p>The student paper PDF bundled here contains the question pages only. <b>The instructor answer key has been removed.</b> The separately supplied Google Drive paper-final source could not be verified as free of the key, so students receive this clean edition instead.</p>
      <div class="cc-actions">${link('canine-herbalist-paper-final-student.pdf','Student Paper Final PDF')}${link(URLS.onlineFinal,'Online Final Form')}</div>
    </div>`;
  }
  function certificationSection(){
    return `<div class="card cc-cert">
      <span class="badge">Required Before Certificate Approval</span><h3>Certification Requirements &amp; Final Submissions</h3>
      ${list([
        'Complete Modules 1–8 and all assigned course readings.',
        'Complete and submit the Course Workbook.',
        'Complete hands-on practicum assignments, case studies, and final stewardship project.',
        'Pass the final examination with a minimum score of 80%.',
        'Sign the official Scope of Practice Agreement.',
        'Sign the official Pledge of Standards and agree to NHMEC ethical expectations.'
      ])}
      <div class="cc-submission-grid">
        ${link(URLS.allWork,'Upload All Completed Work')}
        ${link(URLS.scope,'Sign Scope of Practice','btn btn-light')}
        ${link(URLS.pledge,'Sign Pledge of Standards','btn btn-light')}
      </div>
      <p class="cc-muted">The course page states that NHMEC will email the Certificate of Completion after program requirements have been successfully met and reviewed. Checking progress in this app does not verify completion or award a credential.</p>
    </div>`;
  }

  window.openCanineCoachCourse = function(pushHash=true){
    const el=document.getElementById('courseDetail'); if(!el)return;
    el.innerHTML=`
      <div class="backbar"><button class="backbtn" onclick="showSection('courses')">← All courses</button></div>
      <div class="detail-hero cc-detail-hero"><span class="badge">Certificate • Canine Herbalist Coach Training</span>
        <h2>Canine Herbalist Coach Training Program</h2>
        <p>Biblical Stewardship Canine Herbalism • Body Systems • Materia Medica • Protocols • Breed Considerations</p>
      </div>
      <div class="card cc-overview"><span class="status-pill">Course materials collected</span>
        <h3>Welcome to Canine Herbalist Coach Training</h3>
        <p>Eight modules of faith-centered canine herbalism education with the official course guide and workbook, structured activities, practical formulation study, final practicum, and a separate assessment.</p>
        <blockquote>“A righteous man regardeth the life of his beast: but the tender mercies of the wicked are cruel.” <small>— Proverbs 12:10, KJV</small></blockquote>
        <p><b>Program credential:</b> NHMEC Canine Herbalist Coach Certificate of Completion (not veterinary licensure).</p>
        <p><b>Course numbering:</b> This specific live page has not supplied an official NHMEC course number. It is kept distinct from NHMEC 302 Veterinary Clinical Anatomy and the catalog listing for NHMEC 309 Canine Herbalist.</p>
        <div id="canineCoachProgress"></div>
      </div>
      ${resourcesSection()}
      ${safety}
      <div class="section-head"><div><h2>Modules 1–8</h2><p>Read the assigned Course Guide pages, use the Workbook and document the practical activities.</p></div></div>
      <div class="cc-grid">${MODULES.map(moduleCard).join('')}</div>
      ${postersSection()}
      ${finalSection()}
      ${certificationSection()}
      <div class="notice install-box"><b>NHMEC Educational Notice:</b> Private, faith-based, non-degree and non-licensure education. This training does not authorize veterinary diagnosis, prescribing, animal medical treatment, or practice of veterinary medicine. Students are responsible for applicable laws and veterinary referral.</div>
    `;
    showSection('course-detail',false);updateProgressSummary();
    if(pushHash)history.pushState(null,'','#course/'+COURSE_ID);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  window.openCanineCoachModule = function(n,pushHash=true){
    const m=MODULES.find(x=>x.n===Number(n));if(!m)return openCanineCoachCourse(pushHash);
    const p=getProgress(), prev=MODULES.find(x=>x.n===m.n-1), next=MODULES.find(x=>x.n===m.n+1);
    const el=document.getElementById('lessonDetail');if(!el)return;
    el.innerHTML=`
      <div class="backbar"><button class="backbtn" onclick="openCanineCoachCourse()">← Canine Herbalist Coach</button></div>
      <div class="detail-hero"><span class="badge">Module ${m.n} of 8 • Chapters ${esc(m.chapters)}</span><h2>${esc(m.title)}</h2><p>Assigned Course Guide reading: pages ${esc(m.pages)}</p></div>
      <div class="card"><h3>Module ${m.n} Assignments</h3>${list(m.assignments)}
        <div class="cc-actions">${link(URLS.guide,'Course Guide')}${link(URLS.workbook,'Course Workbook','btn btn-light')}</div>
        <p class="cc-muted">${esc(m.note)}</p>
      </div>
      ${m.n===1?`<div class="card"><h3>Start Here • Learning Resources</h3><div class="cc-actions">${link(URLS.library,'Resource Library')}${link(URLS.studyopedia,'Studyopedia','btn btn-light')}</div><p class="cc-muted">The source course references a welcome video, but no verified video URL has been provided. No substitute video was invented.</p></div>`:''}
      ${m.n===3?`<div class="card"><h3>Materia Medica Study</h3><p>For herbs 9–100, use the Course Guide and workbook monograph worksheets. Avoid assuming a plant is safe for dogs based on human use. Botanical identity, preparation, interactions and species-specific toxicity require careful review.</p></div>`:''}
      ${m.n===5?`<div class="card official-submit-card cc-highlight"><span class="badge">Required for Module 5</span><h3>Upload Completed Work &amp; Photos</h3><p>After completing formulation records and the hands-on exercise, submit the required photographs of <b>at least two</b> finished projects using this official NHMEC form.</p>${link(URLS.module5,'Upload Work and Photos')}</div>`:''}
      ${m.n===8?`<div class="card cc-highlight"><h3>Final Practicum &amp; Capstone</h3><p>Complete all listed practicum elements, assemble the workbook and supporting evidence, then proceed to the final assessment, final upload, and required signatures.</p><div class="cc-actions">${link(URLS.allWork,'Upload Completed Work')}</div></div>${finalSection()}${certificationSection()}`:''}
      <div class="card cc-check-card"><label class="cc-check"><input type="checkbox" ${p[m.n]?'checked':''} onchange="canineCoachMarkComplete(${m.n},this.checked)"> Mark Module ${m.n} studied</label><small>For your personal study progress only; official assignment acceptance is handled through NHMEC.</small></div>
      <div class="cc-actions cc-lesson-navigation">${prev?`<button class="btn btn-light" onclick="openCanineCoachModule(${prev.n})">← Module ${prev.n}</button>`:`<button class="btn btn-light" onclick="openCanineCoachCourse()">Course Overview</button>`}${next?`<button class="btn btn-green" onclick="openCanineCoachModule(${next.n})">Module ${next.n} →</button>`:`<button class="btn btn-green" onclick="openCanineCoachCourse()">Course &amp; Certification →</button>`}</div>
      ${safety}
    `;
    showSection('lesson-detail',false);
    if(pushHash)history.pushState(null,'',`#course/${COURSE_ID}/module/${m.n}`);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  if(typeof openCourse==='function'){
    const previousOpenCourse=openCourse;
    openCourse=function(id,pushHash=true){
      if(id===COURSE_ID)return openCanineCoachCourse(pushHash);
      return previousOpenCourse(id,pushHash);
    };
  }
  if(typeof renderPathways==='function') renderPathways();

  const style=document.createElement('style');
  style.textContent=`
    .cc-detail-hero{background:linear-gradient(135deg,#1c4331,#65805a);color:white}
    .cc-overview blockquote{margin:16px 0;padding:16px 20px;border-left:4px solid #a99457;background:#f4f7eb;border-radius:8px;color:#203f2c;font-family:Georgia,serif;font-size:1.07rem;line-height:1.6}
    .cc-overview blockquote small{display:block;margin-top:4px;font-family:system-ui,sans-serif;font-size:.82rem}
    .cc-grid{display:grid;grid-template-columns:1fr;gap:14px}
    .cc-card{padding:20px}.cc-card h3{margin:12px 0 4px}.cc-card-top{display:flex;gap:12px;justify-content:space-between;align-items:center;flex-wrap:wrap}
    .cc-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:14px 0}
    .cc-actions .btn{max-width:100%;white-space:normal;text-align:center}
    .cc-check{display:flex;gap:9px;align-items:center;font-weight:700;color:#345b3c}.cc-check input{width:20px;height:20px;flex:none}
    .cc-safety{border-left:4px solid #a45e28;background:#fff8ed;padding:16px;line-height:1.6;margin:18px 0}
    .cc-poster-grid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:14px}
    .cc-poster-grid figure{margin:0}.cc-poster-grid img{display:block;width:100%;height:auto;border-radius:9px;border:1px solid #dbe3d6}
    .cc-poster-grid figcaption{font-size:.89rem;color:#455949;margin-top:8px}
    .cc-poster-section details{margin-top:14px}.cc-poster-section summary{font-weight:700;color:#234c30;cursor:pointer;padding:10px 0}
    .cc-final{border:2px solid #bb995b;background:#fffdf6}.cc-cert{border-left:5px solid #345b3c}
    .cc-submission-grid{display:flex;flex-wrap:wrap;gap:10px}.cc-submission-grid .btn{max-width:100%;text-align:center}
    .cc-highlight{border-left:5px solid #507c48}.cc-muted{font-size:.9rem;color:#536257;line-height:1.55}
    .cc-check-card{background:#f0f7ee}.cc-lesson-navigation{justify-content:space-between}
    @media(min-width:760px){.cc-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cc-poster-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:600px){.cc-actions .btn,.cc-submission-grid .btn{width:100%;justify-content:center}.cc-lesson-navigation{display:grid;grid-template-columns:1fr 1fr}.cc-lesson-navigation .btn{font-size:.85rem;padding:10px 8px}}
  `;
  document.head.appendChild(style);

  // Keep deep links and browser Back working even though V21's original router
  // was registered before this incremental course script loaded.
  function handleRoute(){
    const hash=location.hash||'';
    if(hash==='#course/'+COURSE_ID){openCanineCoachCourse(false);return true;}
    const match=hash.match(/^#course\/canine-herbalist-coach-training\/module\/(\d+)$/);
    if(match && MODULES.some(m=>m.n===Number(match[1]))){openCanineCoachModule(Number(match[1]),false);return true;}
    return false;
  }
  window.addEventListener('popstate',()=>{if(handleRoute())return;});
  if(location.hash.startsWith('#course/'+COURSE_ID)){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(handleRoute,0),{once:true});
    else setTimeout(handleRoute,0);
  }
})();
