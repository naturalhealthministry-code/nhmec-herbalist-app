/* NHMEC Herbalist Learning App — Version 18
   NHMEC 202 Kitchen PENothecary™ structure correction.
   NHMEC 201 Kitchen Herbalist remains a separate course.
*/
(() => {
  const COURSE_ID = 'kitchen-penothecary';
  const PROGRESS_KEY = 'nhmec-kitchen-penothecary-progress-v18';

  const KP_FORM_MAP = {
    2: 'https://docs.google.com/forms/d/e/1FAIpQLSc9JQTf9CdPeczxikBF_8yphE-FGXydfXjnHRUeQcCgUKrqOQ/viewform',
    3: 'https://docs.google.com/forms/d/e/1FAIpQLScV3vxx3EHHDm2I2Z9vXoidEeFUWAoHejDEHESM70X_kx2GMA/viewform',
    4: 'https://docs.google.com/forms/d/e/1FAIpQLSfRg_78zAk1UGDcOLNgogn2aIrImkjnNYyK4h_4P1VisKQuIQ/viewform',
    6: 'https://docs.google.com/forms/d/e/1FAIpQLSdK8VX9XDvRpxlQQdZAps2RAl89yuT8aYpaZ7V-NpdUON779Q/viewform'
  };
  const KP_SCOPE_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScO4pcexOAecwmNVG-s1Dh9UC2BAHmx40ueJ0J3WSSHVRBUYw/viewform';

  const course = PATHWAYS.flatMap(p => p.courses || []).find(c => c.id === COURSE_ID);
  if (course) {
    course.description = 'NHMEC 202 Kitchen PENothecary™ is a seven-section applied course in faith-centered kitchen herbalism, foundational culinary herbs, hands-on preparations, wellness planning, family herbal care, lifestyle integration, and advancement into further NHMEC training.';
    course.outcomes = [
      'Explain the biblical and traditional foundations of Kitchen PENothecary™ practice',
      'Study six foundational culinary herbs: Basil, Cinnamon, Garlic, Ginger, Rosemary, and Turmeric',
      'Practice teas, infusions, decoctions, herbal oils, honey infusions, syrups, and oxymels',
      'Build a practical daily and seasonal herbal wellness plan within educational scope',
      'Apply family herbal-care safety, children-related caution, and referral awareness',
      'Integrate herbalism sustainably into everyday kitchen and family life',
      'Complete the course quiz and Scope of Practice step before certificate completion'
    ];
    course.lessons = [
      ['Section 1: Welcome & Foundations', '6 lectures • video • presentation • pages 1–54'],
      ['Section 2: The 6 Foundational Herbs', 'Basil • Cinnamon • Garlic • Ginger • Rosemary • Turmeric • pages 55–141'],
      ['Section 3: Herbal Preparations (Hands-On)', 'Teas • infusions • decoctions • oils • honey infusions • syrups • oxymels • pages 141–179'],
      ['Section 4: Building Your Wellness Plan', 'Daily routine • seasonal use • body signals • simple protocols • pages 180–186'],
      ['Section 5: Family Herbal Care', 'Family protocols • children + herbs • immune/digestive plans • referral • pages 187–195'],
      ['Section 6: Lifestyle Integration', 'Sustainable herbalism • kitchen setup • quiz • scope of practice • pages 195–199'],
      ['Section 7: Advancing Your Training', 'Family Herbalist • Community Herbalist progression']
    ];
  }

  KITCHEN_PENOTHECARY.status = 'Complete 7-section applied course';
  KITCHEN_PENOTHECARY.note = 'Course structure updated from the current PENothecary™ Classes page. Kitchen PENothecary™ remains a separate NHMEC 202 course from NHMEC 201 Kitchen Herbalist.';
  KITCHEN_PENOTHECARY.sections = [
    {number:1,title:'Welcome & Foundations',reading:'Read pages 1–54 of the Kitchen PENothecary™ textbook.',topics:['Lecture 1 — Welcome to Kitchen PENothecary','Lecture 2 — What Is Kitchen Herbalism?','Lecture 3 — The History of Culinary Herbs as Medicine','Lecture 4 — The Kitchen as the First Apothecary','Lecture 5 — Biblical Foundation of Herbalism','Lecture 6 — Safety, Contraindications & Wisdom'],assignment:['Download/view the course textbook.','Watch the course video.','Watch the Kitchen PENothecary™ presentation.','Read pages 1–54 of the textbook.']},
    {number:2,title:'The 6 Foundational Herbs',reading:'Read pages 55–141 of the Kitchen PENothecary™ textbook.',topics:['Basil — overview & energetics; digestive + nervous-system support; kitchen use','Cinnamon — blood sugar + circulation; warming energetics; daily use','Garlic — immune defense; alternatives for sensitivity; practical use','Ginger — digestive activation; nausea support; tea preparation','Rosemary — brain + circulation; memory support; culinary integration','Turmeric — inflammation; liver support; golden milk demonstration'],assignment:['Read pages 55–141 in the textbook.','Download the WebQuest.','Complete the WebQuest as you study.','Save the completed work as a DOC or PDF.','Submit the completed WebQuest using the supplied submission form.']},
    {number:3,title:'Herbal Preparations (Hands-On)',reading:'Read pages 141–179 of the Kitchen PENothecary™ textbook.',topics:['Teas, Infusions & Decoctions','Herbal Oils','Honey Infusions','Syrups','Oxymels'],assignment:['Read pages 141–179.','Download the Practical Assignment — Hands-On.','Complete the hands-on assignment.','Save it as a DOC or PDF.','Submit the completed assignment using the supplied submission form.']},
    {number:4,title:'Building Your Wellness Plan',reading:'Read pages 180–186 of the Kitchen PENothecary™ textbook.',topics:['Creating a daily herbal routine','Seasonal herbal use','Understanding body signals','Simple protocols'],assignment:['Read pages 180–186.','Download the workbook.','Complete the assignment.','Save it as a DOC or PDF.','Submit the workbook using the supplied submission form.']},
    {number:5,title:'Family Herbal Care',reading:'Read pages 187–195 of the Kitchen PENothecary™ textbook.',topics:['Creating family protocols','Children + herbal use','Immune + digestive plans','When to refer out'],assignment:['Read pages 187–195.','Download and read the Family Protocol document.']},
    {number:6,title:'Lifestyle Integration',reading:'Read pages 195–199 of the Kitchen PENothecary™ textbook.',topics:['Making herbalism sustainable','Avoiding overwhelm','Kitchen setup','Final encouragement'],assignment:['Read pages 195–199.','Download the quiz.','Take the quiz.','Save it as a DOC or PDF.','Submit the quiz using the supplied submission form.','Sign the Scope of Practice.']},
    {number:7,title:'Advancing Your Training',reading:'',topics:['Advance to Family Herbalist (NHMEC 203)','Advance to the Community Herbalist Diploma pathway'],assignment:[]}
  ];

  function kpGetProgress(){ try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch(e){ return {}; } }
  function kpSetProgress(number, checked){ const p=kpGetProgress(); p[number]=!!checked; localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); kpRenderProgress(); }
  function kpRenderProgress(){
    const target=document.getElementById('kpProgressSummary'); if(!target) return;
    const p=kpGetProgress(); const done=KITCHEN_PENOTHECARY.sections.filter(s=>p[s.number]).length; const total=KITCHEN_PENOTHECARY.sections.length; const pct=Math.round((done/total)*100);
    target.innerHTML=`<strong>${done} of ${total} sections complete</strong><div class="progress" style="margin-top:10px"><span style="width:${pct}%"></span></div><small>${pct}% complete</small>`;
  }
  window.kpSetProgress=kpSetProgress;

  function kpList(items){ return `<ul class="kp-list">${items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`; }
  function kpSectionCard(section){
    const p=kpGetProgress();
    const assignment=section.assignment.length ? `<div class="kp-assignment"><h4>Assignment</h4>${kpList(section.assignment)}</div>` : '';
    const submit = KP_FORM_MAP[section.number] ? `<div class="kp-actions"><a class="btn btn-green" href="${KP_FORM_MAP[section.number]}" target="_blank" rel="noopener noreferrer">${section.number===6?'Submit the Quiz':'Submit Section '+section.number+' Assignment'} ↗</a>${section.number===6?`<a class="btn btn-light" href="${KP_SCOPE_FORM}" target="_blank" rel="noopener noreferrer">Sign Scope of Practice ↗</a>`:''}</div>` : '';
    const advancement=section.number===7 ? `<div class="kp-actions"><button class="btn btn-green" onclick="openCourse('family-herbalist')">Become a Family Herbalist</button><button class="btn btn-light" onclick="showSection('courses')">View NHMEC Pathways</button></div>` : '';
    return `<article class="card kp-section" id="kp-section-${section.number}"><div class="kp-section-head"><div><span class="badge">Section ${section.number}</span><h3>${esc(section.title)}</h3></div><label class="kp-complete"><input type="checkbox" ${p[section.number]?'checked':''} onchange="kpSetProgress(${section.number},this.checked)"> Complete</label></div>${section.reading?`<p class="kp-reading"><b>Required reading:</b> ${esc(section.reading)}</p>`:''}<h4>Course Topics</h4>${kpList(section.topics)}${assignment}${submit}${advancement}</article>`;
  }

  openKitchenPenothecaryCourse = function(pushHash=true){
    const docs=KITCHEN_PENOTHECARY.documents.map((u,i)=>`<a class="card external-resource" href="${u}" target="_blank" rel="noopener noreferrer"><span class="resource-icon">📄</span><span><h3>Assignment Resource ${i+1}</h3><p>Open supplied Kitchen PENothecary™ Google Doc ↗</p></span></a>`).join('');
    const namedForms=[
      ['Section 2 — Submit WebQuest',KP_FORM_MAP[2]],
      ['Section 3 — Submit Hands-On Assignment',KP_FORM_MAP[3]],
      ['Section 4 — Submit Workbook',KP_FORM_MAP[4]],
      ['Section 6 — Submit Quiz',KP_FORM_MAP[6]],
      ['Scope of Practice',KP_SCOPE_FORM]
    ].map(([label,u])=>`<a class="card external-resource" href="${u}" target="_blank" rel="noopener noreferrer"><span class="resource-icon">✅</span><span><h3>${esc(label)}</h3><p>Open Kitchen PENothecary™ Google Form ↗</p></span></a>`).join('');
    const vids=KITCHEN_PENOTHECARY.videos.map((v,i)=>`<button class="card video-resource" onclick="openKitchenVideo(${i})"><span class="resource-icon">▶️</span><span><h3>${esc(v.title)}</h3><p>${esc(v.source)}</p></span><span class="arrow">›</span></button>`).join('');
    const sections=KITCHEN_PENOTHECARY.sections.map(kpSectionCard).join('');
    document.getElementById('courseDetail').innerHTML=`<div class="backbar"><button class="backbtn" onclick="showSection('courses')">← All courses</button></div><div class="detail-hero"><span class="badge">${esc(KITCHEN_PENOTHECARY.code)} • Applied Herbalism</span><h2>${esc(KITCHEN_PENOTHECARY.title)}</h2><p>${esc(KITCHEN_PENOTHECARY.status)}</p></div><div class="card kp-intro"><span class="status-pill">Active Course</span><h3>The Kitchen Is the First Apothecary</h3><p>Before pharmacies existed, there was the hearth. Kitchen PENothecary™ teaches the intentional use of culinary herbs through practical family wellness education, traditional herbal wisdom, biblical stewardship, hands-on preparation, safety, and responsible scope.</p><p><b>Course structure:</b> Seven sections with textbook reading, videos, a presentation, applied assignments, submission forms, a quiz, Scope of Practice, and advancement into further NHMEC training.</p><div id="kpProgressSummary" class="kp-progress"></div></div><div class="card"><span class="badge">Presentation</span><h3>Kitchen PENothecary™ Canva Presentation</h3><p>Course presentation supplied for Section 1 — Welcome & Foundations.</p><a class="btn btn-green" href="${KITCHEN_PENOTHECARY.canva}" target="_blank" rel="noopener noreferrer">Open Canva Presentation ↗</a></div><div class="section-head"><div><h2>Course Sections</h2><p>Follow Sections 1–7 in order.</p></div></div><div class="kp-sections">${sections}</div><div class="section-head"><div><h2>Course Videos</h2><p>${KITCHEN_PENOTHECARY.videos.length} supplied video resources already stored in the app.</p></div></div><div class="card-grid">${vids}</div><div class="section-head"><div><h2>Assignment Resources</h2><p>Supplied Google Docs are preserved without guessing which section they belong to when the source does not identify the exact mapping.</p></div></div><div class="resource-grid">${docs}</div><div class="section-head"><div><h2>Submission Forms</h2><p>Mapped Kitchen PENothecary™ Google Forms for Sections 2, 3, 4, and 6, plus the Scope of Practice form.</p></div></div><div class="resource-grid">${namedForms}</div><div class="card kp-certificate"><span class="badge">Certificate of Completion</span><h3>Course Completion</h3><p>After completing the required course work, quiz, submissions, and Scope of Practice step, the Certificate of Completion is emailed according to the current PENothecary™ course instructions.</p></div><div class="notice install-box"><b>Educational scope:</b> NHMEC course materials are provided for education and traditional wellness learning. They do not authorize medical diagnosis, treatment, prescribing, cure claims, or licensure. Students remain responsible for lawful scope and appropriate referral.</div>`;
    showSection('course-detail',false); kpRenderProgress(); if(pushHash)history.pushState(null,'','#course/kitchen-penothecary');
  };


  // Refresh the course-card summary so NHMEC 202 no longer reads as a resource hub.
  if (typeof renderPathways === 'function') {
    renderPathways = function(){
      const wrap=document.getElementById('pathways'); if(!wrap) return;
      wrap.innerHTML=PATHWAYS.map(p=>`
        <div class="pathway">
          <div class="pathway-banner"><h3>${esc(p.title)}</h3><p>${esc(p.subtitle)}</p></div>
          <div class="card-grid course-grid">
            ${p.courses.map(c=>{
              const detail = c.status==='development' ? 'Coming Soon • Course in Development' : c.id==='welcome-orientation' ? '10 modules • 46 lessons' : c.id==='foundations-natural-health' ? '4 lessons • final project' : c.id==='biblical-herbalism' ? '8 lessons • Module 2.1' : c.id==='medicinal-foods-garden' ? 'Course space reserved' : c.id==='ap110-foundations' ? '16 modules • Modules 1–3 open' : c.id==='molybdenum-sulfites-nervous-system' ? 'Levels 1–4 open' : c.id==='kitchen-herbalist' ? '8 modules • textbook • portfolio' : c.id==='kitchen-penothecary' ? '7 sections • applied course • certificate' : c.id==='family-herbalist' ? 'Guidebook available • course structure developing' : c.id==='christian-herbalist-foundations-204' ? 'Modules 2.0–2.4 • KJV-only app editions' : c.id==='herbs-overwhelmed-woman' ? 'Clinical guide • worksheet • 6-part presentation' : c.id==='vet-clinical-anatomy-302' ? '9 modules • final project • certificate' : c.id==='original-medicine-312' ? '12 modules • capstone • final assessment' : `${c.lessons.length} lessons`;
              return `<button class="card course-card ${c.status==='development'?'is-placeholder':''}" onclick="openCourse('${c.id}')"><span class="badge">${esc(c.category)}</span><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p><div class="course-meta"><span>${detail}</span><span class="arrow">›</span></div></button>`;
            }).join('')}
          </div>
        </div>`).join('');
    };
    renderPathways();
  }

  // If a saved/bookmarked Kitchen PENothecary route loaded before this patch, redraw it with V18.
  if (location.hash === '#course/kitchen-penothecary') {
    openKitchenPenothecaryCourse(false);
  }

  const style=document.createElement('style');
  style.textContent='.kp-sections{display:grid;gap:16px}.kp-section{padding:22px}.kp-section-head{display:flex;gap:12px;align-items:flex-start;justify-content:space-between}.kp-section h3{margin:8px 0 4px}.kp-section h4{margin:16px 0 8px}.kp-list{margin:8px 0 0;padding-left:22px}.kp-list li{margin:7px 0;line-height:1.45}.kp-reading{padding:12px 14px;border-radius:12px;background:#f4f0df}.kp-assignment{margin-top:16px;padding:14px;border-radius:14px;background:#f8f5eb;border:1px solid rgba(52,91,60,.15)}.kp-complete{display:flex;align-items:center;gap:7px;font-weight:700;color:#345b3c;white-space:nowrap}.kp-complete input{width:20px;height:20px}.kp-progress{margin-top:18px}.kp-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.kp-intro p{line-height:1.55}.kp-certificate{border:1px solid rgba(154,114,34,.28)}@media(max-width:560px){.kp-section-head{display:block}.kp-complete{margin-top:12px}}';
  document.head.appendChild(style);
})();
