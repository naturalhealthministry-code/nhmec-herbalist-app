/* NHMEC Herbalist Learning App — Version 20
   NHMEC 305 Wellness Herbalist Diploma, Professional Registration Program.
   Supplied 12 NHMEC modules and PDFs remain the authoritative lesson text.
   No instructor-only answer key is bundled or exposed.
*/
(() => {
  const COURSE_ID = 'wellness-herbalist-diploma';
  const PROGRESS_KEY = 'nhmec-wellness-herbalist-progress-v20';
  const ASSIGNMENT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdQ6F7aMcxjTeLwplOnaIAmymsL11xDeIH789FajcfmJw7XMw/viewform';
  const FINAL_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSc3CAo4yG2B-kMVZHXkEF3s8nEn6ANGbc3qXN0NeTQkhWjYbA/viewform';
  const MODULES = [{"n":1,"title":"Identity of the Wellness Herbalist","studyHours":"20–25 hours","summary":"The Wellness Herbalist as biblical steward, educator, mentor, and ethical non-medical wellness professional.","file":"wellness-herbalist-module-01.pdf","quiz":"wellness-herbalist-module-01-quiz.pdf"},{"n":2,"title":"The Holistic P.E.N. Way™ Framework","studyHours":"20–25 hours","summary":"Perspective (Spirit), Essence (Soul), and Nutrition (Body), integrated in individualized whole-person wellness education.","file":"wellness-herbalist-module-02.pdf","quiz":"wellness-herbalist-module-02-quiz.pdf"},{"n":3,"title":"Wellness Observation, Assessment & Educational Planning","studyHours":"25–30 hours","summary":"Ethical observation, wellness interviews, recognizing patterns, professional records, and education plans without diagnosis.","file":"wellness-herbalist-module-03.pdf","quiz":"wellness-herbalist-module-03-quiz.pdf"},{"n":4,"title":"Seasonal Wellness Planning","studyHours":"25–30 hours","summary":"Spring, summer, autumn, and winter nutrition, herbs, lifestyle education, and seasonal family preparedness.","file":"wellness-herbalist-module-04.pdf","quiz":"wellness-herbalist-module-04-quiz.pdf"},{"n":5,"title":"Therapeutic Kitchen Herbalism & Functional Nutrition","studyHours":"25–30 hours","summary":"Kitchen organization, whole foods, culinary herbs, wellness menus, seasonal pantry planning, and nutrition education.","file":"wellness-herbalist-module-05.pdf","quiz":"wellness-herbalist-module-05-quiz.pdf"},{"n":6,"title":"Immune Wellness, Community Herbalism & Outreach","studyHours":"25–30 hours","summary":"Immune wellness education, seasonal preparedness, community care initiatives, and responsible outreach.","file":"wellness-herbalist-module-06.pdf","quiz":null},{"n":7,"title":"Evidence-Informed Herbal Practice & Professional Research","studyHours":"25–30 hours","summary":"Finding, reading, evaluating, and communicating research; distinguishing traditional use from scientific evidence.","file":"wellness-herbalist-module-07.pdf","quiz":null},{"n":8,"title":"Developing Family Wellness Systems","studyHours":"25–30 hours","summary":"Age-appropriate family wellness education, home herbal organization, seasonal planning, and daily routines.","file":"wellness-herbalist-module-08.pdf","quiz":null},{"n":9,"title":"Leadership, Teaching & Professional Wellness Education","studyHours":"25–30 hours","summary":"Servant leadership, adapting presentations, public speaking, workshops, and professional teaching materials.","file":"wellness-herbalist-module-09.pdf","quiz":null},{"n":10,"title":"Professional Practice, Ethics & Documentation","studyHours":"25–30 hours","summary":"Educational scope, professional ethics, informed consent, confidential recordkeeping, and documentation.","file":"wellness-herbalist-module-10.pdf","quiz":null},{"n":11,"title":"Integrative Wellness Education, Ministry & Mentorship","studyHours":"25–30 hours","summary":"Building educational programs, group facilitation, Christian wellness ministry, mentorship, and evaluation.","file":"wellness-herbalist-module-11.pdf","quiz":null},{"n":12,"title":"Professional Registration Capstone & Comprehensive Assessment","studyHours":"35–40 hours","summary":"Professional registration portfolio, five educational wellness plans, seasonal guide, kitchen portfolio, community project, and comprehensive assessment.","file":"wellness-herbalist-module-12.pdf","quiz":null}];
  const RESOURCE_GROUPS = [["Primary Study Guides",[["Wellness Herbalist Level 2 Companion eGuide","https://drive.google.com/file/d/1V5eIzCTt11M14OYbjpvzUyZyqx7-nQYU/preview?authuser=0"],["Level 3 Winter Wellness Workshop eGuide","https://drive.google.com/file/d/11zPHsKHwCtUgOMDZ2MP1fVXpdJ3ObITt/preview?authuser=0"],["Module 9 Guide — Updated","https://drive.google.com/file/d/11KthOw6gD6qOVj5muetRa0c1kAMEle0r/preview?authuser=0"]]],["Research & Community Resources",[["Blood Group Antigens and Infectious Susceptibility Across Pathogens","https://drive.google.com/file/d/1uRRyhdgEamxh-jWbc-_NCjVOZiFNHu2b/preview?authuser=0"],["Winter Wellness Tea Blends — Blood Type AB","https://drive.google.com/file/d/1d20O_tcI8E0OTKAFq_8yal8lK91amXRB/preview?authuser=0"],["Winter Wellness Tea Blends — Blood Type B","https://drive.google.com/file/d/1OEonf5Ea9kx_ZpLmjkClYJhZBm-9xYim/preview?authuser=0"],["Herbs for Immunity — Guide 1","https://drive.google.com/file/d/1szGPSIB-4oWcxTOnXhx_2BuPUqmYVbRv/preview?authuser=0"],["Hers for Immunity — Additional Guide (source filename)","https://drive.google.com/file/d/1nWWe-kKkWr5PYW7pcLkKid461LlHnzRX/preview?authuser=0"],["Herbs for Immunity — Worksheet","https://drive.google.com/file/d/1uSDsDMsB7RJChgun2agXwDgpKlxPff2h/preview?authuser=0"]]],["Presentations & Demonstrations",[["Wellness Herbalist Level 2 Presentation — Video 1","https://drive.google.com/file/d/17Qfvkf-zYGfVU16JJOYOdFxfeUlaUPzw/preview?authuser=0"],["Wellness Herbalist Protocol — Video 2","https://drive.google.com/file/d/1LHcYEtjcLa9PmbJFgbxixLq1G8u7W6tB/preview?authuser=0"],["Winter Wellness Workshop Level 3 — Video","https://drive.google.com/file/d/1fqEqJ-hb0c_URGWVMcIQa30P1zW_VI3M/preview?authuser=0"]]]];
  const PROGRAM = {
    title:'Wellness Herbalist Diploma', code:'NHMEC 305', level:'Professional Registration Diploma',
    credential:'Diploma of Completion', designation:'Registered Wellness Herbalist (RWH-NHMEC) — registry application pathway',
    description:'The capstone educational program integrates previously acquired knowledge into a comprehensive wellness education model grounded in biblical stewardship, seasonal wellness, the Holistic P.E.N. Way™, and professional education. Students develop individualized wellness education plans, community initiatives, research literacy, teaching methods, and professional portfolio work.',
    prerequisites:['Kitchen PENothecary™ Herbalist','Family Herbalist','Community Herbalist','Holistic Anatomy & Physiology','Holistic Nutrition'],
    requiredText:'The Wellness Herbalist: A Guide to Family, Community, Kitchen, and Seasonal Wellness',
    outcomes:['Integrate Perspective (Spirit), Essence (Soul), and Nutrition (Body) in non-medical wellness education.','Develop individualized wellness education plans, seasonal wellness guides, and family routines.','Teach herbal, nutrition, kitchen, and community wellness information safely and responsibly.','Evaluate research and communicate limitations, safety concerns, and referral boundaries.','Prepare professional documentation, teaching materials, a capstone portfolio, and final assessment.']
  };

  let diplomaPathway=PATHWAYS.find(p=>p.id==='diploma-programs');
  if(!diplomaPathway){
    diplomaPathway={id:'diploma-programs',title:'Diploma Programs',subtitle:'NHMEC structured private, non-licensure diploma pathways.',courses:[]};
    PATHWAYS.push(diplomaPathway);
  }
  const courseCard={
    id:COURSE_ID,title:'Wellness Herbalist Diploma (NHMEC 305)',category:'Professional Registration Program',
    description:'A complete 12-module Wellness Herbalist diploma integrating whole-person wellness education, seasonal living, therapeutic kitchen, research, ethics, community teaching, and a 50-question open-book final examination.',
    outcomes:PROGRAM.outcomes,
    lessons:MODULES.map(m=>[`Module ${m.n}: ${m.title}`,m.n===12?'Capstone & Final':'Full lesson PDF and assignment form'])
  };
  const existing=diplomaPathway.courses.find(c=>c.id===COURSE_ID);
  if(existing) Object.assign(existing,courseCard); else diplomaPathway.courses.push(courseCard);

  const escapeText=x=>esc(String(x));
  function list(items){return `<ul class="outcomes">${items.map(x=>`<li>${escapeText(x)}</li>`).join('')}</ul>`;}
  function readProgress(){try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}')}catch(e){return {};}}
  window.whSetComplete=(n,val)=>{
    const p=readProgress();p[String(n)]=!!val;
    try{localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));}catch(e){}
    updateProgress();
  };
  function updateProgress(){
    const area=document.getElementById('whProgress'); if(!area)return;
    const p=readProgress(),done=MODULES.filter(m=>p[String(m.n)]).length,pct=Math.round(done/MODULES.length*100);
    area.innerHTML=`<div class="course-progress-head"><div><h3>Course Progress</h3><p>${done} of 12 modules marked complete on this device</p></div><b>${pct}%</b></div><div class="progress"><span style="width:${pct}%"></span></div><small>Progress is a personal study tracker, not confirmation of official submission or NHMEC approval.</small>`;
  }
  function moduleLink(m){return `<a class="btn btn-green" href="${m.file}" target="_blank" rel="noopener noreferrer">Open Full Module ${m.n} PDF ↗</a>`;}
  function externalResource([name,url]){return `<a class="card external-resource" href="${url}" target="_blank" rel="noopener noreferrer"><span class="resource-icon">📚</span><span><h3>${escapeText(name)}</h3><p>Open NHMEC resource in Google Drive ↗</p></span></a>`;}
  function moduleResources(n){
    const items=[];
    if(n===2) items.push(...RESOURCE_GROUPS[2][1].slice(0,2));
    if(n===3)items.push(['Herb Inventory Worksheet (image)','wellness-herb-inventory.jpg']);
    if(n===4)items.push(RESOURCE_GROUPS[0][1][1],RESOURCE_GROUPS[2][1][2]);
    if(n===5)items.push(['Therapeutic Kitchen Practical Guide','wellness-therapeutic-kitchen-guide.pdf'],['Therapeutic Kitchen Illustrated Guide','wellness-therapeutic-kitchen-illustrated.pdf'],['Therapeutic Kitchen Illustrated Cover','wellness-therapeutic-kitchen-cover.png']);
    if(n===6)items.push(...RESOURCE_GROUPS[1][1].slice(1));
    if(n===7)items.push(RESOURCE_GROUPS[1][1][0]);
    if(n===9)items.push(RESOURCE_GROUPS[0][1][2]);
    return items;
  }
  function extraResourcesHTML(n){
    const items=moduleResources(n);
    if(!items.length)return '';
    return `<div class="card"><h3>Supporting Resources for Module ${n}</h3><div class="wh-resource-links">${items.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">📚 ${escapeText(name)} ↗</a>`).join('')}</div></div>`;
  }
  function moduleCard(m){const checked=!!readProgress()[String(m.n)];
    return `<article class="card wh-module-card">
       <span class="badge">Module ${m.n}</span><h3>${escapeText(m.title)}</h3>
       <p>${escapeText(m.summary)}</p><p class="wh-muted">Estimated study: ${escapeText(m.studyHours)}</p>
       <div class="wh-actions"><button class="btn btn-green" onclick="openWellnessHerbalistModule(${m.n})">Open Lesson & Assignment</button>${moduleLink(m)}</div>
       <label class="wh-check"><input type="checkbox" ${checked?'checked':''} onchange="whSetComplete(${m.n},this.checked)"> Mark complete</label>
    </article>`;
  }
  window.openWellnessHerbalistCourse=function(pushHash=true){
    document.getElementById('courseDetail').innerHTML=`
      <div class="backbar"><button class="backbtn" onclick="showSection('courses')">← All courses</button></div>
      <div class="detail-hero"><span class="badge">${PROGRAM.code} • ${escapeText(PROGRAM.level)}</span>
        <h2>${escapeText(PROGRAM.title)}</h2><p>${escapeText(PROGRAM.credential)} • ${escapeText(PROGRAM.designation)}</p></div>
      <div class="card wh-cover-card"><img loading="lazy" src="wellness-herbalist-banner.png" alt="NHMEC Wellness Herbalist Diploma illustrated cover title" class="wh-cover"><div><span class="status-pill">Active Diploma Program</span><h3>Program Purpose</h3><p>${escapeText(PROGRAM.description)}</p></div></div>
      <div class="card"><h3>Prerequisites</h3><p>Complete the following foundation certificates and studies before admission:</p>${list(PROGRAM.prerequisites)}
       <p><b>Professional Registration:</b> The diploma is an educational milestone. Professional Registry recognition is subject to NHMEC’s separate registration requirements and approval, not automatic licensure.</p></div>
      <div class="card"><h3>Learning Outcomes</h3>${list(PROGRAM.outcomes)}<div id="whProgress"></div></div>
      <div class="card"><span class="badge">Required Text</span><h3>${escapeText(PROGRAM.requiredText)}</h3>
        <p>Read the assigned chapters before completing the matching lesson/module.</p>
        <a class="btn btn-green" href="wellness-herbalist-eguide.pdf" target="_blank" rel="noopener noreferrer">Open Wellness Herbalist eGuide ↗</a></div>
      <div class="section-head"><div><h2>12 Course Modules</h2><p>All twelve original NHMEC lesson PDFs are supplied. Quizzes 1–5 appear with their specific modules; no unprovided quiz is invented.</p></div></div>
      <div class="wh-module-grid">${MODULES.map(moduleCard).join('')}</div>
      <div class="section-head"><div><h2>Resource Library</h2><p>NHMEC documents and Google Drive presentation resources. Drive access may require your Google sign-in.</p></div></div>
      ${RESOURCE_GROUPS.map(([group,links])=>`<div class="card"><h3>${escapeText(group)}</h3><div class="wh-resource-grid">${links.map(externalResource).join('')}</div></div>`).join('')}
      <div class="card wh-final"><span class="badge">Final Assessment • After Module 12</span><h3>50-Question Open-Book Examination</h3>
        <p><b>Passing score: 80% (40 correct of 50).</b> Review the capstone portfolio requirements in Module 12 and complete the official Google Form after your course work. The instructor answer key is never made available in the student app.</p>
        <div class="wh-actions"><a class="btn btn-light" href="wellness-herbalist-final-50q.pdf" target="_blank" rel="noopener noreferrer">Open 50-Question Study Examination ↗</a>
        <a class="btn btn-green" href="${FINAL_FORM}" target="_blank" rel="noopener noreferrer">Complete Final Assessment Form ↗</a></div></div>
      <div class="card"><span class="badge">Diploma Completion</span><h3>Diploma of Completion</h3><p>Upon successful completion of NHMEC’s diploma requirements, the diploma certificate will be emailed. This program provides non-degree, non-licensure wellness education.</p></div>
      <div class="notice install-box"><b>NHMEC Educational Notice:</b> NHMEC is a private, faith-based, non-licensure wellness education center. This program does not authorize diagnosis, medical treatment, prescribing, or regulated clinical practice. The Holistic P.E.N. Way™ is an educational framework. Seek appropriate licensed medical assessment when indicated.</div>
    `;
    showSection('course-detail',false); updateProgress();
    if(pushHash)history.pushState(null,'','#course/'+COURSE_ID);
  };
  window.openWellnessHerbalistModule=function(number,pushHash=true){
    const m=MODULES.find(x=>x.n===Number(number));if(!m)return;
    const isQuiz=!!m.quiz;
    document.getElementById('lessonDetail').innerHTML=`
      <div class="backbar"><button class="backbtn" onclick="openWellnessHerbalistCourse()">← Wellness Herbalist Diploma</button></div>
      <div class="detail-hero"><span class="badge">${PROGRAM.code} • Module ${m.n} / 12</span><h2>${escapeText(m.title)}</h2><p>Estimated study time: ${escapeText(m.studyHours)}</p></div>
      <div class="card lesson-body"><h3>Lesson Overview</h3><p>${escapeText(m.summary)}</p>
        <p>Read the complete supplied NHMEC module PDF, including its official objectives, required eGuide readings, teaching content, and assignments.</p>
        <div class="wh-actions">${moduleLink(m)}<a class="btn btn-light" href="wellness-herbalist-eguide.pdf" target="_blank" rel="noopener noreferrer">Open Required eGuide ↗</a></div></div>
      ${extraResourcesHTML(m.n)}
      ${isQuiz?`<div class="card wh-quiz"><span class="badge">Module ${m.n} Quiz</span><h3>Official Module ${m.n} Quiz</h3><p>Module quiz supplied by NHMEC. <b>Passing score: 80%.</b> Complete the quiz in accordance with the course’s instructions.</p><a class="btn btn-green" href="${m.quiz}" target="_blank" rel="noopener noreferrer">Open Module Quiz PDF ↗</a></div>`:`<div class="card"><span class="status-pill">No separate quiz PDF supplied</span><p>Any required quiz, reflection, or activity for this module remains within the official module PDF. A separate quiz has not been invented.</p></div>`}
      <div class="card official-submit-card"><span class="badge">Assignment Submission • Module ${m.n}</span><h3>Complete Assignment Form</h3>
        <p>After reading the full module, completing its assigned work${isQuiz?', and reviewing the module quiz':''}, use the official NHMEC submission form below.</p>
        <a class="btn btn-green" href="${ASSIGNMENT_FORM}" target="_blank" rel="noopener noreferrer">Complete Assignment Form ↗</a></div>
      ${m.n===12?`<div class="card wh-final"><span class="badge">Final Comprehensive Examination</span><h3>50 Questions • Open Book • 80% Passing</h3><p>After finishing Module 12 and the Professional Registration Capstone Portfolio, complete the official final assessment form.</p><div class="wh-actions"><a class="btn btn-light" href="wellness-herbalist-final-50q.pdf" target="_blank" rel="noopener noreferrer">Open 50-Question Examination PDF ↗</a><a class="btn btn-green" href="${FINAL_FORM}" target="_blank" rel="noopener noreferrer">Complete Final Assessment Form ↗</a></div></div>`:''}
      <div class="card wh-check-box"><label class="wh-check"><input type="checkbox" ${readProgress()[String(m.n)]?'checked':''} onchange="whSetComplete(${m.n},this.checked)"> Mark Module ${m.n} complete on this device</label><p><small>This does not transmit an assignment or certify a grade; use the NHMEC Google Forms above for submissions.</small></p></div>
      <div class="lesson-nav"><button class="btn btn-sage" onclick="openWellnessHerbalistCourse()">Course contents</button>${m.n<12?`<button class="btn btn-green" onclick="openWellnessHerbalistModule(${m.n+1})">Next module →</button>`:''}</div>
      <div class="notice install-box"><b>Educational Scope:</b> This course teaches wellness education and does not authorize diagnosis, prescribing, or medical treatment.</div>
    `;
    showSection('lesson-detail',false);
    if(pushHash)history.pushState(null,'',`#course/${COURSE_ID}/module/${m.n}`);
    window.scrollTo({top:0,behavior:'smooth'});
  };
  // The former V20 Community Herbalist routing layer remains intact.
  const previousOpenCourse=openCourse;
  openCourse=function(id,pushHash=true){
    if(id===COURSE_ID)return openWellnessHerbalistCourse(pushHash);
    return previousOpenCourse(id,pushHash);
  };
  if(typeof renderPathways==='function')renderPathways();
  const style=document.createElement('style');
  style.textContent=`
    .wh-cover-card{overflow:hidden}.wh-cover{width:100%;max-width:100%;height:auto;border-radius:12px;display:block;margin-bottom:18px}
    .wh-module-grid{display:grid;gap:16px}.wh-module-card{padding:20px}.wh-module-card h3{margin:10px 0 6px}
    .wh-muted{font-size:.9em;color:#677266}.wh-actions{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}
    .wh-check{display:flex;align-items:center;gap:9px;font-weight:700;color:#345b3c;margin:12px 0}
    .wh-check input{height:21px;width:21px;flex:none}
    .wh-resource-grid{display:grid;gap:12px}.wh-resource-grid a{text-decoration:none;color:inherit}
    .wh-resource-links{display:grid;gap:9px}.wh-resource-links a{color:#285c3d;font-weight:650;line-height:1.5}
    .wh-final{border:2px solid #b58b46;background:#fffdf8}.wh-quiz{border-left:4px solid #345b3c}
    .wh-check-box{background:#f0f7ee}
    @media (min-width:670px){.wh-resource-grid{grid-template-columns:repeat(2,1fr)}}
    @media (max-width:600px){.wh-actions .btn{width:100%;text-align:center;justify-content:center}}
  `;
  document.head.appendChild(style);
  const hash=location.hash||'';
  if(hash==='#course/'+COURSE_ID){setTimeout(()=>openWellnessHerbalistCourse(false),0);}
  else {const m=hash.match(/^#course\/wellness-herbalist-diploma\/module\/(\d+)$/);
    if(m&&MODULES.some(x=>x.n===Number(m[1])))setTimeout(()=>openWellnessHerbalistModule(Number(m[1]),false),0);
  }
})();
