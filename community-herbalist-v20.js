/* NHMEC Herbalist Learning App — Version 20
   Community Herbalist Diploma — Level II Applied Studies.
   Built only from the supplied NHMEC program overview, Community Herbalist eGuide,
   and Modules 1–16, plus the two official Google Forms supplied by NHMEC.
*/
(() => {
  const COURSE_ID = 'community-herbalist-diploma';
  const PROGRESS_KEY = 'nhmec-community-herbalist-progress-v20';
  const ASSIGNMENT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSf6s7YLWBvsYkxsa8GYEMgls1-JizwjV5cbNYTtnqIx--ZGtw/viewform';
  const FINAL_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScWDnVc4xsO_Ixi9Q9VYROy-rMlP40ZbufkcG-kt_6OVHZg6A/viewform';

  const PROGRAM = {
    title: 'Community Herbalist Diploma',
    level: 'Level II — Applied Studies',
    credential: 'Diploma of Completion — Community Herbalist',
    length: '16 Weeks',
    studyHours: 'Approximately 180–220 Study Hours',
    requiredText: 'Community Herbalist eGuide',
    prerequisites: ['Kitchen Herbalist Certificate', 'Family Herbalist Certificate'],
    description: 'Students move beyond learning herbs for themselves and their families and begin learning how to responsibly serve, educate, and support their communities through ethical herbalism.',
    scope: 'This diploma emphasizes community education, stewardship, ethical herbal practice, leadership, outreach, applied projects, and public service within an educational scope rather than diagnosis or medical treatment.'
  };

  const MODULES = [
    {n:1,title:'Orientation to Community Herbalism',file:'community-herbalist-module-01.pdf',summary:'Introduces community herbalism as education, stewardship, ethical practice, outreach, and servant leadership beyond home and family herbalism.'},
    {n:2,title:'The Many Roles of the Community Herbalist',file:'community-herbalist-module-02.pdf',summary:'Explores the Community Herbalist as educator, formulator, gardener, organizer, advocate, mentor, and community servant.'},
    {n:3,title:'Herbal Preparations: From Plant to Preparation',file:'community-herbalist-module-03.pdf',summary:'Develops practical understanding of traditional preparation methods, plant parts, sanitation, labeling, documentation, storage, and preparation choice.'},
    {n:4,title:'Ethical Wildcrafting, Sustainable Harvesting & Herbal Stewardship',file:'community-herbalist-module-04.pdf',summary:'Focuses on responsible harvesting, conservation, cultivation, biodiversity, legal awareness, and stewardship of medicinal plants.'},
    {n:5,title:'Teaching Herbal Education in Your Community',file:'community-herbalist-module-05.pdf',summary:'Builds skills for public speaking, workshops, demonstrations, educational materials, audience adaptation, and ethical herbal teaching.'},
    {n:6,title:'Building Your Community Herbal Resource Library',file:'community-herbalist-module-06.pdf',summary:'Guides students in organizing monographs, field journals, recipes, reference materials, handouts, and teaching resources for lifelong learning.'},
    {n:7,title:'Community Outreach, Herbal Events & Wellness Leadership',file:'community-herbalist-module-07.pdf',summary:'Prepares students to plan outreach events, herb walks, community wellness programs, volunteer efforts, partnerships, and ethical public education.'},
    {n:8,title:'Community Herb Gardens & Medicinal Landscapes',file:'community-herbalist-module-08.pdf',summary:'Covers educational medicinal-garden design, plant selection, seasonal planning, pollinator support, signage, volunteers, and environmental stewardship.'},
    {n:9,title:'Community Herbal First Aid & Wellness Preparedness',file:'community-herbalist-module-09.pdf',summary:'Teaches educational preparedness, herbal first-aid kit organization, safe storage, traditional applications, and recognition of when emergency medical care is needed.'},
    {n:10,title:'Community Nutrition & Food as Herbal Medicine',file:'community-herbalist-module-10.pdf',summary:'Connects nutrition education, culinary herbs, seasonal eating, food preservation, and practical community cooking demonstrations.'},
    {n:11,title:'Herbal Safety, Ethics & Legal Considerations',file:'community-herbalist-module-11.pdf',summary:'Centers ethical responsibility, educational scope, safety, referral awareness, professional documentation, labeling, and responsible communication.'},
    {n:12,title:'Designing Community Herbal Education Programs',file:'community-herbalist-module-12.pdf',summary:'Develops structured multi-session programs, learning objectives, participant materials, instructor resources, evaluation methods, and long-term education initiatives.'},
    {n:13,title:'Leadership, Volunteer Management & Community Organization',file:'community-herbalist-module-13.pdf',summary:'Builds servant-leadership, volunteer recruitment and training, communication, conflict resolution, partnerships, project management, and sustainable organization skills.'},
    {n:14,title:'Professional Development & Continuing Education',file:'community-herbalist-module-14.pdf',summary:'Creates a long-term professional-growth plan through continuing education, networking, mentorship, portfolio development, mission, vision, and community-service goals.'},
    {n:15,title:'Applied Community Herbal Practicum',file:'community-herbalist-module-15.pdf',summary:'Applies community herbal education, leadership, organization, outreach, and service through documented real-world practicum activities.',special:'15–20 documented practicum hours • at least one educational event • practicum report and portfolio'},
    {n:16,title:'Community Herbalist Capstone Portfolio & Final Comprehensive Examination',file:'community-herbalist-module-16.pdf',summary:'Brings the full diploma together through a professional capstone portfolio, reflection, documented competency, and the final comprehensive examination.',special:'Professional capstone portfolio • review of all 16 modules • 100-question open-book final examination'}
  ];

  const OUTCOMES = [
    'Serve communities through ethical herbal education, stewardship, and outreach.',
    'Prepare and document traditional herbal preparations responsibly.',
    'Develop educational resources, workshops, events, gardens, and community programs.',
    'Apply safety, legal awareness, referral boundaries, and professional communication.',
    'Organize volunteers, partnerships, leadership plans, and community initiatives.',
    'Complete an applied practicum, professional portfolio, and final comprehensive examination.'
  ];

  // Add a dedicated Diploma Programs pathway without mixing this diploma into the Level 2 course list.
  let diplomaPathway = PATHWAYS.find(p => p.id === 'diploma-programs');
  if (!diplomaPathway) {
    diplomaPathway = {
      id: 'diploma-programs',
      title: 'Diploma Programs',
      subtitle: 'Applied professional-development pathways built from completed NHMEC diploma curriculum.',
      courses: []
    };
    PATHWAYS.push(diplomaPathway);
  }

  const existing = diplomaPathway.courses.find(c => c.id === COURSE_ID);
  const courseCard = {
    id: COURSE_ID,
    title: PROGRAM.title,
    category: PROGRAM.level,
    description: '16-week applied Community Herbalist diploma with approximately 180–220 study hours, 16 modules, a form beneath every lesson, community projects, practicum, capstone portfolio, and a separate official final assessment.',
    outcomes: OUTCOMES,
    lessons: MODULES.map(m => [`Module ${m.n}: ${m.title}`, m.n < 15 ? 'Applied Studies' : (m.n === 15 ? 'Practicum' : 'Capstone & Final')])
  };
  if (existing) Object.assign(existing, courseCard); else diplomaPathway.courses.push(courseCard);

  function chGetProgress(){
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
    catch (_) { return {}; }
  }
  function chSetProgress(n, checked){
    const p = chGetProgress();
    p[n] = !!checked;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
    chRenderProgress();
  }
  window.chSetProgress = chSetProgress;

  function chRenderProgress(){
    const el = document.getElementById('chProgressSummary');
    if (!el) return;
    const p = chGetProgress();
    const done = MODULES.filter(m => p[m.n]).length;
    const pct = Math.round((done / MODULES.length) * 100);
    el.innerHTML = `<strong>${done} of ${MODULES.length} modules complete</strong><div class="progress" style="margin-top:10px"><span style="width:${pct}%"></span></div><small>${pct}% complete</small>`;
  }
  window.chRenderProgress = chRenderProgress;

  function chList(items){
    return `<ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
  }

  function chModuleCard(m){
    const checked = !!chGetProgress()[m.n];
    return `<article class="card ch-module-card">
      <div class="ch-module-head">
        <div><span class="badge">Module ${m.n}</span><h3>${esc(m.title)}</h3></div>
        <label class="ch-complete"><input type="checkbox" ${checked?'checked':''} onchange="chSetProgress(${m.n},this.checked)"> Complete</label>
      </div>
      <p>${esc(m.summary)}</p>
      ${m.special ? `<div class="notice ch-special"><b>Required milestone:</b> ${esc(m.special)}</div>` : ''}
      <div class="ch-actions">
        <button class="btn btn-green" onclick="openCommunityHerbalistModule(${m.n})">Module Overview</button>
        <a class="btn btn-light" href="${m.file}" target="_blank" rel="noopener noreferrer">Open Module PDF ↗</a>
      </div>
    </article>`;
  }

  window.openCommunityHerbalistCourse = function(pushHash=true){
    document.getElementById('courseDetail').innerHTML = `
      <div class="backbar"><button class="backbtn" onclick="showSection('courses')">← All courses</button></div>
      <div class="detail-hero">
        <span class="badge">Diploma Program • ${esc(PROGRAM.level)}</span>
        <h2>${esc(PROGRAM.title)}</h2>
        <p>${esc(PROGRAM.credential)}</p>
      </div>

      <div class="card ch-program-overview">
        <span class="status-pill">Active Diploma Program</span>
        <h3>Program Overview</h3>
        <p>${esc(PROGRAM.description)}</p>
        <p>${esc(PROGRAM.scope)}</p>
        <div class="ch-stat-grid">
          <div><b>Program Length</b><span>${esc(PROGRAM.length)}</span></div>
          <div><b>Study Time</b><span>${esc(PROGRAM.studyHours)}</span></div>
          <div><b>Credential</b><span>${esc(PROGRAM.credential)}</span></div>
          <div><b>Required Text</b><span>${esc(PROGRAM.requiredText)}</span></div>
        </div>
        <div id="chProgressSummary" class="ch-progress"></div>
      </div>

      <div class="card">
        <h3>Prerequisites</h3>
        <p>Students must successfully complete both prerequisite certificates before enrolling:</p>
        ${chList(PROGRAM.prerequisites)}
        <div class="ch-actions">
          <button class="btn btn-light" onclick="openCourse('kitchen-herbalist')">Open Kitchen Herbalist</button>
          <button class="btn btn-light" onclick="openCourse('family-herbalist')">Open Family Herbalist</button>
        </div>
      </div>

      <div class="card">
        <span class="badge">Required Text</span>
        <h3>Community Herbalist eGuide</h3>
        <p>Required reading is assigned throughout the 16 modules. Students should complete the assigned eGuide sections before each module's work.</p>
        <a class="btn btn-green" href="community-herbalist-eguide.pdf" target="_blank" rel="noopener noreferrer">Open Community Herbalist eGuide ↗</a>
      </div>

      <div class="card">
        <h3>Program Outcomes</h3>
        ${chList(OUTCOMES)}
      </div>

      <div class="section-head"><div><h2>Modules 1–16</h2><p>Open each original NHMEC module PDF for the full reading, lecture, vocabulary, reflection, assignments, projects, quizzes, and completion checklist.</p></div></div>
      <div class="ch-module-grid">${MODULES.map(chModuleCard).join('')}</div>

      <div class="card ch-practicum">
        <span class="badge">Applied Practicum • Module 15</span>
        <h3>Community Service & Educational Outreach</h3>
        <p>Module 15 requires <b>15–20 documented practicum hours</b>. Activities focus on education, stewardship, outreach, or community service, and the module requires a Community Herbal Education Event plus practicum documentation and portfolio work.</p>
        <a class="btn btn-green" href="community-herbalist-module-15.pdf" target="_blank" rel="noopener noreferrer">Open Practicum Module ↗</a>
      </div>

      <div class="card ch-capstone">
        <span class="badge">Capstone & Final • Module 16</span>
        <h3>Community Herbalist Capstone Portfolio & Final Comprehensive Examination</h3>
        <p>Module 16 organizes work from the entire diploma into the professional Community Herbalist Portfolio and concludes with the <b>100-question open-book final comprehensive examination</b>.</p>
        <a class="btn btn-green" href="community-herbalist-module-16.pdf" target="_blank" rel="noopener noreferrer">Open Capstone & Final Module ↗</a>
      </div>

      <div class="card official-submit-card">
        <span class="badge">Final Assessment • After Module 16</span>
        <h3>Official Final Assessment Form</h3>
        <p>After completing all 16 modules and the Community Herbalist capstone portfolio, open the official NHMEC Final Assessment Form.</p>
        <a class="btn btn-green" href="${FINAL_FORM}" target="_blank" rel="noopener noreferrer">Complete Final Assessment ↗</a>
      </div>
      <div class="card">
        <span class="badge">Diploma Completion</span>
        <h3>Diploma of Completion — Community Herbalist</h3>
        <p>The program page states that the diploma certificate will be emailed after successful completion of the program requirements.</p>
      </div>

      <div class="card is-placeholder">
        <span class="status-pill">Registration Link Pending</span>
        <h3>Registration</h3>
        <p>The current program page includes a Registration section, but an official registration link has not been identified for this app build. No registration form has been guessed or assigned.</p>
      </div>

      <div class="notice install-box"><b>NHMEC Educational Notice:</b> NHMEC is a private faith-based wellness education center. This diploma is non-degree, non-licensure education. It does not authorize diagnosis, prescribing, medical treatment, or claims to treat, cure, or prevent disease. Students remain responsible for applicable laws, scope, safety, and appropriate referral.</div>
    `;
    showSection('course-detail', false);
    chRenderProgress();
    if (pushHash) history.pushState(null,'','#course/' + COURSE_ID);
  };

  window.openCommunityHerbalistModule = function(number, pushHash=true){
    const m = MODULES.find(x => x.n === Number(number));
    if (!m) return openCommunityHerbalistCourse(pushHash);
    const p = chGetProgress();
    document.getElementById('lessonDetail').innerHTML = `
      <div class="backbar"><button class="backbtn" onclick="openCommunityHerbalistCourse()">← Community Herbalist Diploma</button></div>
      <div class="detail-hero">
        <span class="badge">Module ${m.n} • ${esc(PROGRAM.level)}</span>
        <h2>${esc(m.title)}</h2>
        <p>${esc(PROGRAM.title)}</p>
      </div>
      <div class="card">
        <h3>Module Overview</h3>
        <p>${esc(m.summary)}</p>
        ${m.special ? `<div class="notice ch-special"><b>Required milestone:</b> ${esc(m.special)}</div>` : ''}
        <p>The complete NHMEC module PDF contains the official module overview, objectives, required eGuide reading, instructor lecture, vocabulary, reflections, practical work, assignments/projects, quiz, and completion checklist as supplied for this diploma.</p>
        <div class="ch-actions">
          <a class="btn btn-green" href="${m.file}" target="_blank" rel="noopener noreferrer">Open Full Module PDF ↗</a>
          <a class="btn btn-light" href="community-herbalist-eguide.pdf" target="_blank" rel="noopener noreferrer">Open eGuide ↗</a>
        </div>
      </div>
      <div class="card official-submit-card">
        <span class="badge">Required Assignment • Module ${m.n}</span>
        <h3>Complete Assignment Form</h3>
        <p>This is the official NHMEC submission form used after each Community Herbalist module. Complete the module reading and assigned practical work before submitting.</p>
        <a class="btn btn-green" href="${ASSIGNMENT_FORM}" target="_blank" rel="noopener noreferrer">Complete Assignment Form ↗</a>
      </div>
      ${m.n===16?`<div class="card official-submit-card"><span class="badge">Final Assessment</span><h3>Community Herbalist Final Assessment</h3><p>After the capstone portfolio and Module 16 assignment, submit the official final assessment.</p><a class="btn btn-green" href="${FINAL_FORM}" target="_blank" rel="noopener noreferrer">Open Final Assessment ↗</a></div>`:''}
      <div class="card">
        <label class="ch-complete"><input type="checkbox" ${p[m.n]?'checked':''} onchange="chSetProgress(${m.n},this.checked)"> Mark Module ${m.n} complete</label>
      </div>
      <div class="notice install-box"><b>Educational scope:</b> Community Herbalist training emphasizes education, service, stewardship, safety, and appropriate referral. It does not authorize medical diagnosis or treatment.</div>
    `;
    showSection('lesson-detail', false);
    if (pushHash) history.pushState(null,'',`#course/${COURSE_ID}/module/${m.n}`);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  // Chain after the Version 19 nutrition router.
  const previousOpenCourse = openCourse;
  openCourse = function(id, pushHash=true){
    if (id === COURSE_ID) return openCommunityHerbalistCourse(pushHash);
    return previousOpenCourse(id, pushHash);
  };

  if (typeof renderPathways === 'function') renderPathways();

  const style = document.createElement('style');
  style.textContent = `
    .ch-module-grid{display:grid;gap:16px}.ch-module-card{padding:20px}.ch-module-head{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}.ch-module-head h3{margin:8px 0}.ch-complete{display:flex;gap:7px;align-items:center;font-weight:700;color:#345b3c;white-space:nowrap}.ch-complete input{width:20px;height:20px}.ch-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}.ch-special{margin:14px 0}.ch-stat-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0}.ch-stat-grid div{padding:14px;border-radius:14px;background:#f7f3e7;border:1px solid rgba(52,91,60,.12)}.ch-stat-grid b,.ch-stat-grid span{display:block}.ch-stat-grid span{margin-top:5px;color:#62675f}.ch-progress{margin-top:18px}.ch-practicum,.ch-capstone{border:1px solid rgba(52,91,60,.2)}@media(max-width:600px){.ch-module-head{display:block}.ch-complete{margin-top:10px}.ch-stat-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const hash = location.hash || '';
  if (hash === '#course/' + COURSE_ID) {
    setTimeout(() => openCommunityHerbalistCourse(false), 0);
  } else {
    const match = hash.match(/^#course\/community-herbalist-diploma\/module\/(\d+)$/);
    if (match && MODULES.some(m => m.n === Number(match[1]))) {
      setTimeout(() => openCommunityHerbalistModule(Number(match[1]), false), 0);
    }
  }
})();
