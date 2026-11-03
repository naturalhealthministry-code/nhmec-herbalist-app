/* NHMEC Herbalist Learning App — Version 19
   Holistic Human Nutrition Certificate Program.
   Source basis: current PENothecary™ course page + supplied NHMEC nutrition guides and Lessons 1–2.
   The existing Level 1 Holistic Nutrition Foundations class remains separate.
*/
(() => {
  const COURSE_ID = 'holistic-human-nutrition-certificate';
  const PROGRESS_KEY = 'nhmec-holistic-human-nutrition-progress-v19';

  const COURSE = {
    id: COURSE_ID,
    title: 'Holistic Human Nutrition Certificate Program',
    category: 'Nutrition Certificate',
    description: 'A self-paced certificate course introducing holistic human nutrition through food, herbs, vitamins, minerals, body-system support, lifestyle habits, and practical wellness planning. Lessons 1–2 are fully built from supplied NHMEC materials; Lessons 3–6 and the final assessment remain reserved until their source materials are supplied.',
    instructor: 'Rev. Penny Lane Whittemore, CNC, BCNWP, CHGp, RHCH',
    credential: 'Certificate of Completion',
    outcomes: [
      'Explain holistic nutrition as a whole-person, individualized approach to nourishment and wellness.',
      'Distinguish macronutrients and micronutrients and describe foundational roles of carbohydrates, proteins, fats, vitamins, and minerals.',
      'Recognize whole foods, hydration, movement, rest, emotional wellness, mindful eating, and lifestyle habits as connected foundations.',
      'Use a food-first framework in which herbs and supplements complement rather than replace balanced nutrition.',
      'Progress into body-system nutrition and whole-body herbs, vitamins, minerals, and supplements as later lessons are completed.',
      'Remain within educational wellness scope and refer medical diagnosis, treatment, and prescribing to qualified licensed professionals.'
    ],
    lessons: [
      ['Lesson 1: Foundations of Holistic Nutrition', 'Built • whole-person nutrition • five foundations • whole foods • individualized nutrition'],
      ['Lesson 2: Understanding Nutrients — Macronutrients and Micronutrients', 'Built • carbohydrates • proteins • fats • vitamins • minerals • nutrient balance'],
      ['Lesson 3: Nutrition and the Body Systems', 'Course page title supplied • lesson content not yet supplied'],
      ['Lesson 4: Herbs, Vitamins, Minerals, and Supplements for Whole-Body Wellness', 'Course page title supplied • lesson content not yet supplied'],
      ['Lesson 5', 'Placeholder reserved • title/content not yet supplied'],
      ['Lesson 6', 'Placeholder reserved • title/content not yet supplied']
    ]
  };

  const LESSONS = {
    1: {
      number: 1,
      title: 'Foundations of Holistic Nutrition',
      status: 'Built from supplied NHMEC lesson PDF',
      overview: [
        'Holistic nutrition is presented as intentional nourishment of the whole person rather than a focus on food or isolated symptoms alone.',
        'The lesson views the body as an interconnected system in which organs, tissues, cells, lifestyle choices, hydration, movement, rest, stress, emotional wellness, and nutritional status influence overall wellness.',
        'Food is treated as nourishment, while healthy habits work together to support normal body function and long-term wellness.'
      ],
      objectives: [
        'Define holistic nutrition.',
        'Explain the difference between holistic and reductionist approaches to nutrition.',
        'Identify foundational principles of holistic nutrition.',
        'Describe the importance of whole foods.',
        'Understand the relationship between nutrition and lifestyle.',
        'Explain the importance of individualized nutrition.',
        'Recognize how nutrition supports the body’s natural wellness processes.'
      ],
      sections: [
        {
          heading: 'What Is Holistic Nutrition?',
          blocks: [
            'Holistic nutrition studies nourishment through wholesome foods, balanced lifestyle habits, appropriate supplementation when needed, and mindful living.',
            'Rather than asking only what disease a person has, this lesson asks what the person’s body needs to function at its best.',
            'Nutrition is considered in relation to the entire person and the interconnected body systems.'
          ]
        },
        {
          heading: 'The Interconnected Body',
          blocks: [
            'The digestive system influences the immune system; the nervous system affects digestion; hormones influence metabolism; sleep affects immunity; stress can change nutritional requirements; and movement supports circulation.',
            'Because no body system works independently, the lesson considers hydration, physical activity, rest, stress management, emotional wellness, environmental influences, nutritional status, and lifestyle habits alongside food.'
          ]
        },
        {
          heading: 'The Five Foundations of Holistic Health',
          bullets: [
            'Hydration — supports cellular function, nutrient transport, temperature regulation, waste removal, joint lubrication, and circulation.',
            'Balanced Nutrition — provides raw materials for energy, growth, repair, hormone production, immune support, and brain function.',
            'Movement — supports cardiovascular health, muscle strength, bone health, flexibility, lymphatic circulation, and mental wellness.',
            'Rest — supports tissue repair, hormone production, immune function, memory, and restoration of energy.',
            'Emotional Wellness — includes stress management, healthy relationships, purpose, gratitude, and emotional resilience.'
          ]
        },
        {
          heading: 'Whole Foods First',
          blocks: [
            'The lesson emphasizes foods that remain as close as practical to their natural form and that provide combinations of vitamins, minerals, fiber, antioxidants, phytonutrients, protein, healthy fats, and complex carbohydrates.',
            'Examples in the supplied lesson include vegetables, fruits, whole grains, beans, lentils, nuts, seeds, eggs, poultry, fish when appropriate, and other minimally processed foods.'
          ]
        },
        {
          heading: 'Individualized Nutrition & Mindful Eating',
          blocks: [
            'No single eating plan is presented as appropriate for everyone. Individual needs may differ with age, activity level, genetics, health history, lifestyle, preferences, and cultural traditions.',
            'Mindful eating includes slowing down, reducing distractions, recognizing hunger and fullness cues, appreciating food, and developing a healthier relationship with eating.'
          ]
        },
        {
          heading: 'Foods, Herbs & Supplements',
          blocks: [
            'Foods remain the primary source of nourishment within the lesson framework.',
            'Herbs are presented as traditional wellness supports that can complement a healthy lifestyle.',
            'Supplements may be considered when dietary intake alone does not meet nutritional needs, but they are intended to complement—not replace—a balanced diet.'
          ]
        }
      ],
      keyTerms: ['Holistic Nutrition','Whole Foods','Nutrient-Dense Foods','Macronutrients','Micronutrients','Hydration','Mindful Eating','Individualized Nutrition','Wellness','Balance','Homeostasis'],
      reading: [
        'The Holistic Guide to Human Nutrition — Chapters 1–2',
        'Holistic Nutrition Class — sections covering Understanding Holistic Nutrition and Core Principles of Holistic Nutrition'
      ],
      pdf: 'holistic-nutrition-lesson-1.pdf'
    },
    2: {
      number: 2,
      title: 'Understanding Nutrients — Macronutrients and Micronutrients',
      status: 'Built from supplied NHMEC lesson PDF',
      overview: [
        'Lesson 2 introduces nutrients as substances the body requires for energy, growth, repair, cellular function, hormone production, immune support, brain function, reproduction, healing, and overall wellness.',
        'Nutrients are divided into two primary groups: macronutrients and micronutrients.',
        'The lesson emphasizes balanced, varied, nutrient-dense whole foods rather than extreme or restrictive patterns.'
      ],
      objectives: [
        'Define macronutrients.',
        'Define micronutrients.',
        'Identify the three macronutrients.',
        'Explain the functions of carbohydrates, proteins, and fats.',
        'Describe the importance of vitamins and minerals.',
        'Understand nutrient balance.',
        'Recognize how inadequate nutrient intake may affect wellness.'
      ],
      sections: [
        {
          heading: 'Macronutrients',
          blocks: [
            'Macronutrients are required in larger amounts because they provide energy and structural support.',
            'The three major macronutrients presented in the lesson are carbohydrates, proteins, and fats.'
          ]
        },
        {
          heading: 'Carbohydrates & Fiber',
          bullets: [
            'Carbohydrates are presented as a major energy source and are broken down into glucose for cellular use.',
            'Simple carbohydrates digest more quickly; complex carbohydrates generally digest more slowly and often contain fiber.',
            'Fiber supports healthy digestion, regularity, satiety, blood-sugar balance, and healthy cholesterol levels.'
          ]
        },
        {
          heading: 'Protein & Amino Acids',
          blocks: [
            'Protein is described as a major building material used in muscle development, tissue repair, hormone and enzyme production, immune function, skin, hair, nails, and organ function.',
            'Proteins are built from amino acids. Some amino acids are made by the body, while essential amino acids must come from food.',
            'The supplied lesson includes both animal and plant protein sources and encourages variety.'
          ]
        },
        {
          heading: 'Healthy Fats',
          bullets: [
            'Healthy fats support energy storage, cell membranes, hormone production, brain and nervous-system function, vitamin absorption, organ protection, and temperature regulation.',
            'The lesson emphasizes moderation and quality when choosing dietary fats.'
          ]
        },
        {
          heading: 'Micronutrients: Vitamins & Minerals',
          blocks: [
            'Micronutrients are needed in smaller amounts but are essential for regulating biochemical processes.',
            'Vitamins discussed include A, B complex, C, D, E, and K. Minerals include major minerals such as calcium, magnesium, potassium, sodium, and phosphorus, along with trace minerals such as zinc, iron, selenium, copper, and iodine.'
          ]
        },
        {
          heading: 'Nutrient Density, Balance & Deficiency',
          blocks: [
            'Nutrient-dense foods provide substantial vitamins, minerals, fiber, healthy fats, protein, and phytonutrients with fewer highly processed ingredients.',
            'The lesson teaches that balance is more important than extremes and that no single food supplies every nutrient.',
            'Inadequate nutrition over time may be associated with fatigue, poor concentration, slow healing, weak bones, reduced immune function, muscle weakness, dry skin, hair changes, and digestive disturbances.'
          ]
        },
        {
          heading: 'Whole Foods First',
          blocks: [
            'Food is presented as the primary nutrient source whenever possible because whole foods naturally contain combinations of nutrients and plant compounds.',
            'Supplements may be appropriate in some situations but are presented as complements to—not replacements for—a balanced diet.'
          ]
        }
      ],
      keyTerms: ['Nutrient','Macronutrient','Micronutrient','Carbohydrate','Protein','Fat','Amino Acid','Vitamin','Mineral','Dietary Fiber','Nutrient Density','Essential Nutrient','Balanced Nutrition'],
      reading: [
        'The Holistic Guide to Human Nutrition — Chapter 3: Understanding Macronutrients and Micronutrients',
        'Holistic Nutrition Class — suggested study areas: Human Nutrition, Macronutrients, Micronutrients, Protein, Carbohydrates, Nutritional Science, and Nutrient Classes'
      ],
      pdf: 'holistic-nutrition-lesson-2.pdf'
    }
  };

  const RESOURCES = [
    {
      title: 'The Holistic Guide to Human Nutrition',
      note: 'NHMEC guide: Nourishing the Body with Herbs, Supplements, and Vitamins.',
      file: 'holistic-guide-to-human-nutrition.pdf',
      icon: '📘'
    },
    {
      title: 'Holistic Nutrition Class Guide',
      note: 'NHMEC course guide and reference material.',
      file: 'holistic-nutrition-class.pdf',
      icon: '📗'
    },
    {
      title: 'Lesson 1 PDF — Foundations of Holistic Nutrition',
      note: 'Original supplied NHMEC Lesson 1 PDF.',
      file: 'holistic-nutrition-lesson-1.pdf',
      icon: '📄'
    },
    {
      title: 'Lesson 2 PDF — Understanding Nutrients',
      note: 'Original supplied NHMEC Lesson 2 PDF.',
      file: 'holistic-nutrition-lesson-2.pdf',
      icon: '📄'
    }
  ];

  // Add/update the course without assigning an NHMEC number that has not been supplied.
  const level2 = PATHWAYS.find(p => p.id === 'level-2');
  if (level2) {
    const existing = level2.courses.find(c => c.id === COURSE_ID);
    if (existing) Object.assign(existing, COURSE);
    else {
      // Place the unnumbered certificate course after the current 200-level sequence.
      const insertAfter = level2.courses.findIndex(c => c.id === 'home-herbal-preparations');
      if (insertAfter >= 0) level2.courses.splice(insertAfter + 1, 0, COURSE);
      else level2.courses.push(COURSE);
    }
  }

  function hnGetProgress(){
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
    catch(e){ return {}; }
  }

  function hnSetProgress(number, checked){
    const p = hnGetProgress();
    p[number] = !!checked;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
    hnRenderProgress();
  }
  window.hnSetProgress = hnSetProgress;

  function hnRenderProgress(){
    const target = document.getElementById('hnProgressSummary');
    if(!target) return;
    const p = hnGetProgress();
    const built = [1,2];
    const done = built.filter(n => p[n]).length;
    const pct = Math.round((done / built.length) * 100);
    target.innerHTML = `<strong>${done} of ${built.length} currently built lessons complete</strong>
      <div class="progress" style="margin-top:10px"><span style="width:${pct}%"></span></div>
      <small>${pct}% of available lessons complete • Lessons 3–6 remain in development</small>`;
  }

  function hnList(items){
    return `<ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
  }

  function hnResourceCards(){
    return RESOURCES.map(r => `
      <a class="card external-resource" href="${r.file}" target="_blank" rel="noopener noreferrer">
        <span class="resource-icon">${r.icon}</span>
        <span><h3>${esc(r.title)}</h3><p>${esc(r.note)} ↗</p></span>
      </a>`).join('');
  }

  function hnLessonSummary(number){
    const l = LESSONS[number];
    const p = hnGetProgress();
    return `<article class="card">
      <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
        <div><span class="badge">Lesson ${l.number}</span><h3>${esc(l.title)}</h3><p>${esc(l.status)}</p></div>
        <label style="white-space:nowrap"><input type="checkbox" ${p[number]?'checked':''} onchange="hnSetProgress(${number},this.checked)"> Complete</label>
      </div>
      <p>${esc(l.overview[0])}</p>
      <button class="btn btn-green" onclick="openHolisticNutritionLesson(${number})">Open Lesson ${number}</button>
      <a class="btn btn-light" href="${l.pdf}" target="_blank" rel="noopener noreferrer">Open PDF ↗</a>
    </article>`;
  }

  function hnPlaceholder(number, title, suppliedTitle){
    const note = suppliedTitle
      ? 'The current PENothecary™ page supplies this lesson title, but the full lesson document/content has not yet been supplied for the app.'
      : 'A lesson space exists on the current PENothecary™ page, but its title and full lesson content have not yet been supplied.';
    return `<article class="card is-placeholder">
      <span class="status-pill">Coming Soon • Lesson in Development</span>
      <h3>${esc(title)}</h3>
      <p>${esc(note)}</p>
      <p><b>Reserved:</b> The app will add this lesson only from the completed NHMEC source material.</p>
    </article>`;
  }

  window.openHolisticNutritionCourse = function(pushHash=true){
    const lessons = [
      hnLessonSummary(1),
      hnLessonSummary(2),
      hnPlaceholder(3,'Lesson 3: Nutrition and the Body Systems',true),
      hnPlaceholder(4,'Lesson 4: Herbs, Vitamins, Minerals, and Supplements for Whole-Body Wellness',true),
      hnPlaceholder(5,'Lesson 5',false),
      hnPlaceholder(6,'Lesson 6',false)
    ].join('');

    document.getElementById('courseDetail').innerHTML = `
      <div class="backbar"><button class="backbtn" onclick="showSection('courses')">← All courses</button></div>
      <div class="detail-hero">
        <span class="badge">Nutrition Certificate Program</span>
        <h2>Holistic Human Nutrition Certificate Program</h2>
        <p>Certificate of Completion • Instructor: ${esc(COURSE.instructor)}</p>
      </div>

      <div class="card">
        <span class="status-pill">Active Build • Lessons 1–2 Available</span>
        <h3>Course Description</h3>
        <p>This self-paced certificate course introduces students to the principles of holistic human nutrition by exploring how food, herbs, vitamins, minerals, and lifestyle habits work together to support whole-body wellness.</p>
        <p>Using the supplied NHMEC guides as the primary learning resources, students develop a foundational understanding of nutrition, nutrient classes, body systems, herbs and supplements, and practical wellness planning.</p>
        <p><b>Educational scope:</b> This program is educational and does not qualify graduates to diagnose, treat, prescribe for, cure, or prevent disease.</p>
        <div id="hnProgressSummary" style="margin-top:18px"></div>
      </div>

      <div class="card">
        <h3>Learning Outcomes</h3>
        ${hnList(COURSE.outcomes)}
      </div>

      <div class="section-head"><div><h2>Resource Library</h2><p>NHMEC course materials supplied for this app build.</p></div></div>
      <div class="resource-grid">${hnResourceCards()}</div>

      <div class="card">
        <span class="badge">Supplemental Reference</span>
        <h3>Introduction to Human Nutrition, Second Edition</h3>
        <p>The supplied course-page screenshot lists this Nutrition Society/Wiley-Blackwell textbook in the resource library. Because it is a commercially published copyrighted work, the public GitHub app does not redistribute the uploaded PDF. Students should use a lawfully obtained copy.</p>
        <a class="btn btn-green" href="https://drive.google.com/file/d/1Y7TLRP8IYVMdXiBDzQhP8ETPkd4OWlsI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Open Supplemental Textbook ↗</a>
        <p class="media-note">Opens the external Google Drive textbook link supplied for this course. Access depends on the file's sharing permissions.</p>
      </div>

      <div class="section-head"><div><h2>Course Lessons</h2><p>Only source-supported lesson content is activated.</p></div></div>
      <div class="card-grid">${lessons}</div>

      <div class="card is-placeholder">
        <span class="status-pill">Coming Soon • Assessment in Development</span>
        <h3>Final Assessment</h3>
        <p>The current PENothecary™ page reserves a Final Assessment section. An official assessment or Google Form has not yet been supplied for this app build, so no questions or passing score have been invented.</p>
      </div>

      <div class="card">
        <span class="badge">Certificate of Completion</span>
        <h3>Course Completion</h3>
        <p>The current course page identifies the credential as a Certificate of Completion. Final completion requirements will be linked when the remaining lesson materials and official assessment are supplied.</p>
      </div>

      <div class="notice install-box"><b>NHMEC Educational Notice:</b> This private faith-based wellness education is non-degree and non-licensure education. Course materials are educational only and are not intended to diagnose, treat, cure, or prevent disease or replace licensed healthcare.</div>
    `;
    showSection('course-detail', false);
    hnRenderProgress();
    if(pushHash) history.pushState(null,'','#course/' + COURSE_ID);
  };

  window.openHolisticNutritionLesson = function(number, pushHash=true){
    const l = LESSONS[number];
    if(!l) return openHolisticNutritionCourse(pushHash);
    const sections = l.sections.map(s => `
      <div class="card">
        <h3>${esc(s.heading)}</h3>
        ${s.blocks ? s.blocks.map(b => `<p>${esc(b)}</p>`).join('') : ''}
        ${s.bullets ? hnList(s.bullets) : ''}
      </div>`).join('');

    document.getElementById('lessonDetail').innerHTML = `
      <div class="backbar"><button class="backbtn" onclick="openHolisticNutritionCourse()">← Holistic Human Nutrition</button></div>
      <div class="detail-hero">
        <span class="badge">Lesson ${l.number}</span>
        <h2>${esc(l.title)}</h2>
        <p>${esc(l.status)}</p>
      </div>

      <div class="card">
        <h3>Lesson Overview</h3>
        ${l.overview.map(p => `<p>${esc(p)}</p>`).join('')}
      </div>

      <div class="card">
        <h3>Learning Objectives</h3>
        ${hnList(l.objectives)}
      </div>

      ${sections}

      <div class="card">
        <h3>Key Terms</h3>
        ${hnList(l.keyTerms)}
      </div>

      <div class="card">
        <h3>Required Reading</h3>
        ${hnList(l.reading)}
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px">
          <a class="btn btn-green" href="${l.pdf}" target="_blank" rel="noopener noreferrer">Open Lesson PDF ↗</a>
          <a class="btn btn-light" href="holistic-guide-to-human-nutrition.pdf" target="_blank" rel="noopener noreferrer">Open Human Nutrition Guide ↗</a>
          <a class="btn btn-light" href="holistic-nutrition-class.pdf" target="_blank" rel="noopener noreferrer">Open Class Guide ↗</a>
        </div>
      </div>

      <div class="card">
        <label><input type="checkbox" ${hnGetProgress()[number]?'checked':''} onchange="hnSetProgress(${number},this.checked)"> Mark Lesson ${number} complete</label>
      </div>

      <div class="notice install-box"><b>Educational scope:</b> This lesson provides general wellness education. It does not diagnose, treat, prescribe for, cure, or prevent disease.</div>
    `;
    showSection('lesson-detail', false);
    if(pushHash) history.pushState(null,'','#course/' + COURSE_ID + '/lesson/' + number);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  // Chain after the Version 18 Kitchen PENothecary™ router.
  const previousOpenCourse = openCourse;
  openCourse = function(id, pushHash=true){
    if(id === COURSE_ID) return openHolisticNutritionCourse(pushHash);
    return previousOpenCourse(id, pushHash);
  };

  // Refresh pathway cards now that the new certificate course is present.
  if(typeof renderPathways === 'function') renderPathways();

  // Support refresh/direct-link routing after this patch loads.
  const hash = location.hash || '';
  if(hash === '#course/' + COURSE_ID){
    setTimeout(() => openHolisticNutritionCourse(false), 0);
  } else {
    const match = hash.match(/^#course\/holistic-human-nutrition-certificate\/lesson\/(\d+)$/);
    if(match && LESSONS[Number(match[1])]) setTimeout(() => openHolisticNutritionLesson(Number(match[1]), false), 0);
  }
})();
