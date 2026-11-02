
const COURSES = [{"level": "Level 1 \u2014 Foundations", "title": "Foundations of Herbalism", "desc": "Start with plant identification, herbal actions, safety, preparations, and foundational natural wellness concepts.", "lessons": ["Herbalist Orientation", "Herbal Actions", "Plant Parts & Harvesting", "Infusions & Decoctions", "Safety & Contraindications"]}, {"level": "Level 1 \u2014 Foundations", "title": "Biblical Herbalism", "desc": "Study herbs, foods, oils, and plant references through a faith-centered learning framework.", "lessons": ["Plants in Scripture", "Oils & Resins", "Food as Nourishment", "Stewardship & Creation", "Study Reflection"]}, {"level": "Level 2 \u2014 Applied", "title": "Kitchen Herbalism", "desc": "Turn common culinary herbs and pantry ingredients into practical herbal preparations.", "lessons": ["Kitchen Materia Medica", "Herbal Vinegars", "Glycerites", "Syrups", "Tea Formulation"]}, {"level": "Level 2 \u2014 Applied", "title": "Body Systems", "desc": "Learn how herbalists organize study by body system while staying within an educational, non-diagnostic scope.", "lessons": ["Digestive", "Respiratory", "Nervous", "Urinary", "Lymphatic"]}, {"level": "Level 3 \u2014 Advanced", "title": "Formulation Lab", "desc": "Practice building thoughtful formulas by actions, energetics, preparation method, and client-centered considerations.", "lessons": ["Formula Structure", "Primary & Supporting Herbs", "Energetics", "Preparation Choice", "Case Practice"]}, {"level": "Level 3 \u2014 Advanced", "title": "Holistic P.E.N. Way\u2122", "desc": "Explore Perspective \u2022 Essence \u2022 Nutrition and organize educational wellness plans in a whole-person framework.", "lessons": ["Perspective", "Essence", "Nutrition", "Renew & Nourish", "Balance & Support"]}];
const HERBS = [{"common": "Nettle", "latin": "Urtica dioica", "parts": "Leaf, seed, root", "actions": "Nutritive, mineral-rich, traditional urinary support", "prep": "Infusion, tincture, food", "notes": "Commonly studied as a nourishing herb. Root and leaf have different traditional uses.", "safety": "Use appropriate plant part and preparation; review individual contraindications and medications."}, {"common": "Lemon Balm", "latin": "Melissa officinalis", "parts": "Leaf", "actions": "Aromatic, calming, carminative", "prep": "Tea, tincture, glycerite", "notes": "A classic gentle aromatic herb often included in relaxation and digestive formulas.", "safety": "Review thyroid conditions/medications and individual sensitivities when appropriate."}, {"common": "Cleavers", "latin": "Galium aparine", "parts": "Aerial parts", "actions": "Traditional lymphatic and urinary support", "prep": "Fresh juice, tea, tincture", "notes": "Often studied in spring herbalism and lymphatic-focused materia medica.", "safety": "Use clean, correctly identified plant material; review individual kidney/urinary concerns."}, {"common": "Calendula", "latin": "Calendula officinalis", "parts": "Flower", "actions": "Soothing, vulnerary, traditional lymphatic support", "prep": "Tea, infused oil, salve, tincture", "notes": "Frequently used in topical herbal preparations and gentle tea blends.", "safety": "Avoid with known Asteraceae-family allergy."}, {"common": "Peppermint", "latin": "Mentha \u00d7 piperita", "parts": "Leaf", "actions": "Aromatic, carminative, cooling", "prep": "Tea, tincture, culinary", "notes": "Widely used in digestive and refreshing tea blends.", "safety": "May aggravate reflux in some people; essential oil requires additional safety considerations."}, {"common": "Ginger", "latin": "Zingiber officinale", "parts": "Rhizome", "actions": "Warming, aromatic, carminative", "prep": "Tea, decoction, tincture, food", "notes": "A versatile culinary and herbal ingredient used in warming formulations.", "safety": "Use caution with individual bleeding risk, medications, or sensitivity to warming herbs."}, {"common": "Marshmallow", "latin": "Althaea officinalis", "parts": "Root, leaf", "actions": "Demulcent, soothing", "prep": "Cold infusion, tea, syrup", "notes": "Especially valued for mucilage; cold infusion is a classic preparation method.", "safety": "Separate from oral medications by an appropriate interval because mucilage may affect absorption."}, {"common": "Elder", "latin": "Sambucus nigra", "parts": "Flower, fully ripe cooked berry", "actions": "Traditional respiratory and seasonal wellness support", "prep": "Tea, syrup, tincture", "notes": "Flower and berry are treated as distinct materia medica entries in many herbal traditions.", "safety": "Unripe berries and other plant parts can cause illness; proper identification and preparation matter."}];
const QUIZ = [{"q": "Which preparation is classically used to extract mucilage from marshmallow root?", "answers": ["Cold infusion", "Dry roasting", "Steam distillation", "Powder-only capsule"], "correct": 0, "explain": "Cold water is commonly used to extract marshmallow's mucilaginous constituents."}, {"q": "What is a decoction most commonly used for?", "answers": ["Delicate flower petals", "Hard roots, bark, or seeds", "Essential oils only", "Fresh salads"], "correct": 1, "explain": "Decoctions use sustained heat and are commonly used for tougher plant material."}, {"q": "Which Latin name belongs to lemon balm?", "answers": ["Melissa officinalis", "Urtica dioica", "Galium aparine", "Calendula officinalis"], "correct": 0, "explain": "Lemon balm is Melissa officinalis."}, {"q": "A good herbal monograph should include:", "answers": ["Only common name", "Only taste and color", "Identification, parts used, actions, preparations, and safety", "Only a recipe"], "correct": 2, "explain": "A useful materia medica entry combines identity, use, preparation, and safety information."}, {"q": "The safest educational approach to herbalism is to:", "answers": ["Diagnose every condition", "Ignore medications", "Teach scope, safety, contraindications, and referral awareness", "Assume natural always means safe"], "correct": 2, "explain": "Good herbal education includes clear scope, safety, and referral boundaries."}];
const state = { section:'home', quizIndex:0, score:0, answered:false };
function showSection(id) {
  state.section=id;
  document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id===id));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.section===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderCourses() {
  document.getElementById('courseGrid').innerHTML=COURSES.map(c=>`
  <article class="card"><span class="level">${c.level}</span><h3>${c.title}</h3><p>${c.desc}</p>
  <ul class="lesson-list">${c.lessons.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
}
function renderHerbs(filter='') {
  const q=filter.trim().toLowerCase();
  const list=HERBS.filter(h=>[h.common,h.latin,h.parts,h.actions,h.prep,h.notes].join(' ').toLowerCase().includes(q));
  document.getElementById('herbCount').textContent=`${list.length} herb${list.length===1?'':'s'}`;
  document.getElementById('herbGrid').innerHTML=list.map(h=>`
  <details class="card herb-card"><summary><h3>${h.common}</h3><div class="latin">${h.latin}</div></summary>
  <div class="meta"><b>Parts used</b><span>${h.parts}</span><b>Actions</b><span>${h.actions}</span><b>Preparations</b><span>${h.prep}</span><b>Study notes</b><span>${h.notes}</span><b>Safety</b><span>${h.safety}</span></div></details>`).join('') || `<div class="notice">No herbs matched that search yet.</div>`;
}
function renderQuiz() {
  const q=QUIZ[state.quizIndex], pct=(state.quizIndex/QUIZ.length)*100;
  document.getElementById('quizProgress').style.width=pct+'%';
  document.getElementById('quizStatus').textContent=`Question ${state.quizIndex+1} of ${QUIZ.length}`;
  document.getElementById('quizArea').innerHTML=`<div class="quiz-card"><h3>${q.q}</h3><div>${q.answers.map((a,i)=>`<button class="answer" onclick="answerQuiz(${i},this)">${a}</button>`).join('')}</div><div class="quiz-feedback" id="quizFeedback"></div><button id="nextQuiz" class="btn" style="background:var(--green);color:white;display:none" onclick="nextQuiz()">Next question</button></div>`;
  state.answered=false;
}
function answerQuiz(i,btn) {
  if(state.answered)return; state.answered=true; const q=QUIZ[state.quizIndex]; const buttons=[...document.querySelectorAll('.answer')];
  buttons[q.correct].classList.add('correct'); if(i!==q.correct)btn.classList.add('wrong'); if(i===q.correct)state.score++;
  document.getElementById('quizFeedback').innerHTML=`<b>${i===q.correct?'Correct.':'Not quite.'}</b> ${q.explain}`; document.getElementById('nextQuiz').style.display='inline-block';
}
function nextQuiz() {
  state.quizIndex++;
  if(state.quizIndex>=QUIZ.length) {
    document.getElementById('quizProgress').style.width='100%'; document.getElementById('quizStatus').textContent='Completed';
    document.getElementById('quizArea').innerHTML=`<div class="quiz-card"><h3>Study quiz complete 🌿</h3><p>You scored <b>${state.score} out of ${QUIZ.length}</b>.</p><button class="btn" style="background:var(--green);color:white" onclick="restartQuiz()">Take it again</button></div>`;
  } else renderQuiz();
}
function restartQuiz() { state.quizIndex=0; state.score=0; state.answered=false; renderQuiz(); }
document.addEventListener('DOMContentLoaded',()=>{
  renderCourses(); renderHerbs(); renderQuiz();
  document.getElementById('herbSearch').addEventListener('input',e=>renderHerbs(e.target.value));
  document.querySelectorAll('[data-go]').forEach(x=>x.addEventListener('click',()=>showSection(x.dataset.go)));
  document.querySelectorAll('.nav-btn').forEach(x=>x.addEventListener('click',()=>showSection(x.dataset.section)));
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
