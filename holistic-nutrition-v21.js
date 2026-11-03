/* NHMEC Herbalist Learning App — Version 21
   Complete eight-lesson Holistic Human Nutrition Certificate (distinct from NHMEC 105 / NHMEC 305).
   Lessons 1–4 are supplied original NHMEC lessons; 5–8 are new instructor-review expansions.
   Progress key intentionally retained from V19 so previous Lesson 1–2 completion survives upgrade.
*/
(() => {
  const COURSE_ID='holistic-human-nutrition-certificate';
  const PROGRESS_KEY='nhmec-holistic-human-nutrition-progress-v19';
  const COURSE={
  "id": "holistic-human-nutrition-certificate",
  "title": "Holistic Human Nutrition for Whole Body Wellness",
  "category": "Nutrition Certificate",
  "description": "Self-paced, eight-lesson certificate study in whole-person nourishment, nutrients, body systems, kitchen herbs, supplements, normal elimination physiology, and practical nutrition education. Original NHMEC Lessons 1–4 and newly drafted extensions 5–8 are available as PDFs. New extensions require instructor review.",
  "instructor": "Min. Penny Lane Whittemore, CNC, BCNWP, CHGp, RHCH, CHHWC",
  "credential": "Certificate of Completion",
  "outcomes": [
    "Explain holistic nutrition and whole-person foundations of food, hydration, movement, rest and emotional wellness.",
    "Distinguish macro- and micronutrients and their roles in normal physiology.",
    "Describe how nutrition supports connected major body systems.",
    "Explain traditional culinary herbs and supplement categories without overstating efficacy.",
    "Assess nutrition and supplement information using food-first reasoning and safety awareness.",
    "Discuss normal metabolism and elimination without unsupported detoxification claims.",
    "Develop a flexible, non-diagnostic nutrition education plan and identify referral boundaries."
  ],
  "lessons": [
    [
      "Lesson 1: Foundations of Holistic Nutrition",
      "Complete NHMEC lesson • PDF and in-app guide"
    ],
    [
      "Lesson 2: Understanding Nutrients — Macronutrients and Micronutrients",
      "Complete NHMEC lesson • PDF and in-app guide"
    ],
    [
      "Lesson 3: Nutrition and the Body Systems",
      "Complete NHMEC lesson • PDF and in-app guide"
    ],
    [
      "Lesson 4: Herbs, Vitamins, Minerals, and Supplements for Whole-Body Wellness",
      "Complete NHMEC lesson • PDF and in-app guide"
    ],
    [
      "Lesson 5: Herbs for Nutrition",
      "New lesson draft • PDF and in-app guide; instructor review recommended"
    ],
    [
      "Lesson 6: Vitamins and Supplements",
      "New lesson draft • PDF and in-app guide; instructor review recommended"
    ],
    [
      "Lesson 7: Detoxification",
      "New lesson draft • PDF and in-app guide; instructor review recommended"
    ],
    [
      "Lesson 8: Creating a Holistic Nutrition Plan",
      "New lesson draft • PDF and in-app guide; instructor review recommended"
    ]
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
    },
    3: {
    "number": 3,
    "title": "Nutrition and the Body Systems",
    "status": "Original NHMEC lesson • full lesson PDF supplied",
    "overview": [
        "Every major body system depends on essential nutrients, hydration, and adequate energy to perform normal functions. The digestive, circulatory, nervous, endocrine, immune, respiratory, musculoskeletal, urinary, reproductive, integumentary, lymphatic and sensory systems work together.",
        "The supplied NHMEC lesson introduces traditional herbs associated with each system and key nutrients in a food-first, whole-body framework. These associations are for education, not medical treatment recommendations."
    ],
    "objectives": [
        "Explain how nutrition supports major body systems.",
        "Identify the primary function of each body system.",
        "Recognize traditional herbs associated with each system.",
        "Identify key vitamins and minerals supporting normal body function.",
        "Understand why whole-body nutrition matters."
    ],
    "sections": [
        {
            "heading": "Connected Body Systems",
            "blocks": [
                "Digestion breaks down and absorbs nutrients; circulation delivers nutrients and oxygen; the nervous and endocrine systems coordinate signaling and metabolism; and immune and lymphatic systems contribute to defense and fluid balance. No system functions independently."
            ]
        },
        {
            "heading": "Digestion and Circulation",
            "bullets": [
                "Digestion — consider fiber, water, balanced meals, regular eating patterns, and nourishing whole foods; ginger, peppermint, and fennel are traditional educational examples.",
                "Circulation — fruits, vegetables, whole grains and healthy fats are central to a heart-supportive eating pattern; hawthorn and garlic are examples in traditional herbal literature."
            ]
        },
        {
            "heading": "Nervous, Endocrine, and Immune Functions",
            "bullets": [
                "Nervous system — dietary fats, B vitamins, minerals and hydration contribute to normal nerve and brain function.",
                "Endocrine system — adequate nourishment, sleep and stress management accompany study of hormone regulation and metabolism.",
                "Immune system — balanced food intake, sleep, regular activity, adequate hydration and food safety provide everyday support."
            ]
        },
        {
            "heading": "Other Systems and Whole-Person Nutrition",
            "blocks": [
                "Respiratory, musculoskeletal, skin, urinary, reproductive, lymphatic, and sensory functions are addressed in the full NHMEC lesson. Consider how sufficient nutrients and varied foods support each normal body function, while traditional herb associations do not establish clinical effectiveness."
            ]
        },
        {
            "heading": "Consistent Lifestyle Foundations",
            "bullets": [
                "Eat a variety of whole foods.",
                "Hydrate appropriately.",
                "Include suitable physical activity and adequate rest.",
                "Consider stress, environment, and emotional wellbeing.",
                "Refer clinical concerns for licensed medical evaluation rather than interpreting symptoms as nutritional diagnoses."
            ]
        }
    ],
    "keyTerms": [
        "Digestive System",
        "Circulatory System",
        "Respiratory System",
        "Nervous System",
        "Endocrine System",
        "Immune System",
        "Musculoskeletal System",
        "Integumentary System",
        "Urinary System",
        "Reproductive System",
        "Lymphatic System",
        "Sensory System",
        "Homeostasis"
    ],
    "reading": [
        "The Holistic Guide to Human Nutrition — Chapters 4–15 (major body systems).",
        "Holistic Nutrition Class — body systems, whole foods, lifestyle integration (older Canvas directions are obsolete)."
    ],
    "pdf": "holistic-nutrition-lesson-3.pdf",
    "origin": "original"
},
    4: {
    "number": 4,
    "title": "Herbs, Vitamins, Minerals, and Supplements for Whole-Body Wellness",
    "status": "Original NHMEC lesson • full lesson PDF supplied",
    "overview": [
        "Food should remain the primary source of nourishment whenever practical. The supplied lesson surveys culinary and traditional herbs, vitamins, minerals, and supplemental products as possible adjuncts, not substitutes for varied foods and responsible medical care.",
        "Students distinguish traditional use from proven benefit and consider allergies, pregnancy, breastfeeding, health conditions, medicine interactions, product quality, and dose."
    ],
    "objectives": [
        "Explain the role of herbs in holistic nutrition.",
        "Distinguish herbs, vitamins, minerals, and supplements.",
        "Identify common wellness herbs and traditional uses.",
        "Describe important functions of vitamins and minerals.",
        "Explain circumstances that may warrant professional supplement review.",
        "Recognize why nutrient intake begins with whole foods."
    ],
    "sections": [
        {
            "heading": "Food Comes First",
            "blocks": [
                "Whole foods provide vitamins, minerals, fiber, fats, protein, phytochemicals and antioxidants together. A balanced, varied dietary pattern remains the foundation of nutrition education."
            ]
        },
        {
            "heading": "Herbal Traditions by Body System",
            "bullets": [
                "Digestive traditions: ginger, peppermint, fennel.",
                "Circulatory traditions: hawthorn, garlic, cayenne.",
                "Respiratory traditions: mullein, thyme, eucalyptus.",
                "Nervous-system traditions: ashwagandha, ginkgo, gotu kola.",
                "Other traditional categories in the lesson include immune, skin, urinary, lymphatic, endocrine, and sensory wellness."
            ],
            "blocks": [
                "These are examples of historical usage described in course materials, not claims that the herbs can diagnose, prevent, or treat particular conditions."
            ]
        },
        {
            "heading": "Vitamins and Minerals",
            "bullets": [
                "Vitamins A, B complex, C, D, E and K have distinct physiological functions; study everyday food sources first.",
                "Calcium, magnesium, potassium, iron, zinc, and iodine participate in normal structural and metabolic processes.",
                "Nutrient needs differ by person and life stage; inappropriate high doses may be unsafe."
            ]
        },
        {
            "heading": "Supplements and Safety",
            "blocks": [
                "Probiotics, omega-3 fatty acids, CoQ10, digestive enzymes, electrolytes and other products may be discussed educationally. Product suitability and evidence vary. Consider interactions with medicines, individual sensitivity, life stage, dose, and manufacturing quality."
            ],
            "bullets": [
                "Never present an herbal supplement as a substitute for medical care.",
                "Avoid guaranteed outcomes and exaggerated claims.",
                "Refer medical deficiencies, medication interactions, and high-dose decisions to licensed professionals."
            ]
        }
    ],
    "keyTerms": [
        "Herb",
        "Botanical",
        "Phytochemical",
        "Vitamin",
        "Mineral",
        "Dietary Supplement",
        "Probiotic",
        "Adaptogen",
        "Antioxidant",
        "Nutrient Density",
        "Whole Foods"
    ],
    "reading": [
        "The Holistic Guide to Human Nutrition — Chapters 16–18.",
        "Holistic Nutrition Class — herbs, vitamins, minerals and functional-food discussions; disregard obsolete Canvas navigation."
    ],
    "pdf": "holistic-nutrition-lesson-4.pdf",
    "origin": "original"
},
    5: {
    "number": 5,
    "title": "Herbs for Nutrition",
    "status": "Newly authored NHMEC extension • instructor review recommended",
    "overview": [
        "Build practical culinary herbal literacy using ordinary meals, food preparation, herb identity, food safety and clearly documented educational demonstrations. Lesson 5 expands the earlier eight-lesson outline rather than reproducing a previously supplied lesson.",
        "Students learn why culinary use, an infusion, a concentrated extract and an essential oil are not interchangeable."
    ],
    "objectives": [
        "Distinguish culinary herbal use from concentrated supplements.",
        "Identify familiar kitchen herbs, plant parts, and food applications.",
        "Document common and verified botanical plant names.",
        "Compare food use with basic water-based preparations.",
        "Practice hygienic sourcing, labeling, and storage.",
        "Prepare or design a documented food-first herbal activity.",
        "Identify safety and referral situations."
    ],
    "sections": [
        {
            "heading": "Herbal Nutrition Begins on the Plate",
            "blocks": [
                "An herb may add flavor, aroma and plant compounds, while the overall meal supplies essential nutrients. For example, the beans and vegetables in a soup supply significant protein, fiber and micronutrients; thyme or rosemary provide culinary flavor. Avoid claiming a small herb garnish replaces vegetables or a balanced diet."
            ]
        },
        {
            "heading": "Culinary vs. Concentrated Use",
            "blocks": [
                "Culinary herbs in meals, steeped teas, tinctures, essential oils, and high-potency extracts differ in concentration, constituents and safety. Food use does not establish safety for larger or concentrated doses. Do not teach ingestion of essential oils as a kitchen wellness practice."
            ]
        },
        {
            "heading": "Correct Plant Identification",
            "blocks": [
                "Record common and, when verified, botanical names and plant parts; choose reputable suppliers, document dates, and maintain clean, dry containers. Avoid uncertain wildcrafted plants or herbs from contaminated areas."
            ]
        },
        {
            "heading": "Common Culinary Applications",
            "bullets": [
                "Ginger — grated into soup, vegetables, or tea.",
                "Basil — in beans, tomato dishes and salads.",
                "Thyme — in soups, roasted vegetables, and broths.",
                "Rosemary — sparingly in roots and grains.",
                "Peppermint — in food or a leaf infusion, distinct from concentrated oil.",
                "Fennel seed or parsley — familiar culinary applications with plant-part and allergy review."
            ]
        },
        {
            "heading": "Safety and Practice",
            "blocks": [
                "Students design one simple food or beverage recipe, recording ingredient amounts, method, hygiene, storage, sensory observations, and known safety concerns. Check allergy or medication questions with qualified professionals; do not promise cures."
            ]
        }
    ],
    "keyTerms": [
        "Culinary herb",
        "Botanical name",
        "Plant part",
        "Phytochemical",
        "Infusion",
        "Decoction",
        "Concentrated extract",
        "Traditional use",
        "Food safety",
        "Educational scope"
    ],
    "reading": [
        "The Holistic Guide to Human Nutrition — Chapter 16; revisit Chapter 19.",
        "Holistic Nutrition Class — food-first culinary herb sections (read older medical claims critically)."
    ],
    "activity": "Ungraded kitchen record: design or prepare a culinary-herb food or beverage; document ingredients, botanical identification where verified, preparation, safety, observations, and explain why food is foundational.",
    "pdf": "holistic-nutrition-lesson-5.pdf",
    "origin": "new"
},
    6: {
    "number": 6,
    "title": "Vitamins and Supplements",
    "status": "Newly authored NHMEC extension • instructor review recommended",
    "overview": [
        "This lesson expands Lessons 2 and 4 into practical food-first, evidence-aware supplement literacy. A nutrition educator can discuss nutrient functions, ordinary food sources and label questions, but may not diagnose deficiencies or prescribe medicines or high-dose supplements."
    ],
    "objectives": [
        "Distinguish vitamins, minerals, dietary supplements, and herbal extracts.",
        "Identify food sources of important nutrients.",
        "Explain why supplements cannot replace varied eating patterns.",
        "Identify basic label information.",
        "Recognize when additional professional review is appropriate.",
        "Discuss excessive intake, interactions and product quality.",
        "Use cautious evidence-informed communication."
    ],
    "sections": [
        {
            "heading": "Understand the Categories",
            "blocks": [
                "Vitamins and minerals are nutrients; supplement is a delivery/product category and may include herbs, isolated nutrients or mixtures. Supplements can contain doses substantially higher than food sources."
            ]
        },
        {
            "heading": "Use a Food-First Decision Sequence",
            "bullets": [
                "Begin with the person’s usual foods, access, preferences, and ability to eat a varied diet.",
                "Describe the nutrient’s normal physiological function and food sources.",
                "Clarify that a suspected deficiency cannot be diagnosed by symptoms alone.",
                "When risks or medical questions arise, refer to a physician, pharmacist or registered dietitian."
            ]
        },
        {
            "heading": "Reading a Supplement Label",
            "blocks": [
                "Discuss serving size, listed amounts, units, ingredient form, additional components, allergen warnings, use directions and any external quality information. Marketing language does not establish effectiveness."
            ]
        },
        {
            "heading": "Too Much Can Be Harmful",
            "blocks": [
                "Excess fat-soluble vitamins, iron, iodine, vitamin B6 and other nutrients may cause harm. Some herbs and supplements interact with prescription medications or are inappropriate for particular life stages. Never advise medication changes or unreviewed high-dose use."
            ]
        },
        {
            "heading": "Evidence-Aware Communication",
            "blocks": [
                "Distinguish preliminary laboratory or animal findings from human outcomes and explain the limitations of claims. Food remains the foundation; supplementation, when used, requires attention to genuine need, quality and safety."
            ]
        }
    ],
    "keyTerms": [
        "Vitamin",
        "Mineral",
        "Dietary supplement",
        "Supplement Facts",
        "Tolerable upper intake",
        "Food source",
        "Bioavailability",
        "Interaction",
        "Evidence quality",
        "Product quality"
    ],
    "reading": [
        "The Holistic Guide to Human Nutrition — Chapters 17–18.",
        "Holistic Nutrition Class — vitamins, supplements, and safety material; do not follow outdated Canvas steps."
    ],
    "activity": "Ungraded label study: compare two supplement labels and identify serving size, nutrient amounts, warnings, food sources and questions requiring professional input; do not recommend a dose.",
    "pdf": "holistic-nutrition-lesson-6.pdf",
    "origin": "new"
},
    7: {
    "number": 7,
    "title": "Detoxification",
    "status": "Newly authored NHMEC extension • instructor review recommended",
    "overview": [
        "This lesson distinguishes normal metabolism, elimination, and environmental exposure reduction from unverified commercial detoxification promises. It preserves the earlier curriculum topic while using cautious, physiological, evidence-aware language.",
        "Healthy nourishment, fiber, hydration suited to personal needs, movement, hygiene and sleep can support normal functions; they are not treatments for poisoning or organ disease."
    ],
    "objectives": [
        "Explain normal metabolism and elimination versus commercial detox claims.",
        "Describe liver, kidney, gastrointestinal and lung roles.",
        "Identify supportive habits for normal physiological functions.",
        "Recognize risks of aggressive fasting, laxatives, diuretics and cleanses.",
        "Explain why symptoms do not establish a toxin diagnosis.",
        "Identify urgent medical referral needs.",
        "Design a non-restrictive seven-day wellness habit review."
    ],
    "sections": [
        {
            "heading": "What the Body Normally Does",
            "blocks": [
                "The liver transforms many substances, kidneys filter blood and regulate fluid/electrolytes, the bowel eliminates waste through digestion, and the lungs exhale carbon dioxide. None of these processes requires a commercial detox product in an otherwise healthy individual."
            ]
        },
        {
            "heading": "Focus on Habits, Not Detox Promises",
            "bullets": [
                "Choose varied nourishing meals and fiber as appropriate.",
                "Maintain reasonable hydration and normal meal patterns.",
                "Practice suitable movement and adequate sleep.",
                "Reduce avoidable exposures using sound food and environmental safety practices.",
                "Avoid claims that foods, sweat or supplements remove a specific toxin without clinical evidence."
            ]
        },
        {
            "heading": "Herbal Language vs. Evidence",
            "blocks": [
                "Terms such as alterative, blood purifier, lymph cleanser and detoxifier appear in traditional herbal sources but are not proof that a particular substance is eliminated from a human body. Herbal effects and interactions require independent evaluation."
            ]
        },
        {
            "heading": "Risks and Referral",
            "blocks": [
                "Aggressive cleanses may cause dehydration, electrolyte disturbances or medication interactions. Suspected poisoning, confusion, persistent vomiting, yellowing skin or eyes, major urinary changes, severe dehydration and similar warning signs require prompt qualified assessment. Poison Control/emergency care is appropriate when indicated."
            ]
        }
    ],
    "keyTerms": [
        "Metabolism",
        "Biotransformation",
        "Excretion",
        "Elimination",
        "Liver",
        "Kidneys",
        "Electrolytes",
        "Fiber",
        "Commercial cleanse",
        "Clinical toxicology",
        "Referral"
    ],
    "reading": [
        "Holistic Nutrition Class — Detoxification and Toxin Exposure (evaluate older claims critically).",
        "The Holistic Guide to Human Nutrition — Chapters 12 and 19; revisit Chapters 2–3.",
        "Welcome Lecture Transcript — food, water, rest, movement and natural body functions."
    ],
    "activity": "Ungraded seven-day habits review: observe regular meals, produce variety, adequate fluid availability, movement and rest; choose one realistic change. Rewrite two unsupported detox claims in appropriate educational terms.",
    "pdf": "holistic-nutrition-lesson-7.pdf",
    "origin": "new"
},
    8: {
    "number": 8,
    "title": "Creating a Holistic Nutrition Plan",
    "status": "Newly authored NHMEC extension • instructor review recommended",
    "overview": [
        "The concluding lesson combines foundations, major nutrients, body systems, culinary herbs, supplements and ordinary physiology into a flexible nutrition-education plan. The goal is realistic, individual-focused education rather than diagnosis or medical nutrition therapy."
    ],
    "objectives": [
        "Gather a respectful picture of a person’s current food and lifestyle patterns.",
        "Identify existing strengths and practical opportunities.",
        "Explain a flexible food-first eating pattern.",
        "Choose two or three realistic and observable education goals.",
        "Develop a one-week education and lifestyle framework.",
        "Document and reflect on progress without medical claims.",
        "Recognize when licensed dietetic or medical referral is needed.",
        "Present an ungraded final nutrition education portfolio."
    ],
    "sections": [
        {
            "heading": "Begin With the Person",
            "blocks": [
                "Ask about usual foods, routines, budget, cooking facilities, allergies, access, preferences, cultural traditions, and household obligations. Respect privacy and avoid diagnosing a deficiency from a food recall or symptom alone."
            ]
        },
        {
            "heading": "Review Five Foundations",
            "bullets": [
                "Hydration",
                "Balanced Nutrition",
                "Movement",
                "Rest",
                "Emotional Wellness"
            ],
            "blocks": [
                "Use NHMEC’s Holistic P.E.N. Way™ as a complementary whole-person reflection where welcome: Perspective (Spirit), Essence (Soul), and Nutrition (Body). This is educational, not a substitute for clinical nutrition science."
            ]
        },
        {
            "heading": "Flexible Food-First Planning",
            "blocks": [
                "Teach ordinary balanced meal elements: vegetables or fruit, protein-containing foods, grains or suitable starches, healthful fats, and beverages. Balance can be considered across the day rather than rigidly on every plate. Culinary herbs may complement a meal but do not repair an otherwise inadequate eating pattern."
            ]
        },
        {
            "heading": "Goal Setting and Documentation",
            "blocks": [
                "Choose two or three relevant, manageable goals with observable steps. The planning worksheet in the PDF models seven days of food-first focus, hydration, activity, rest and brief observations. Follow-up reviews practicality, barriers, and participant preferences."
            ]
        },
        {
            "heading": "Educational Boundary and Final Practice",
            "blocks": [
                "Avoid treatment plans and supplement prescriptions. Significant involuntary weight changes, possible eating disorders, severe food reactions or complex disease-related diets warrant qualified professional care. The lesson concludes with a 2–4 page ungraded educational portfolio, not a substitute for the separate 50-question final examination."
            ]
        }
    ],
    "keyTerms": [
        "Nutrition education plan",
        "Food pattern",
        "Dietary recall",
        "Meal planning",
        "Nutrient density",
        "Individualization",
        "SMART-style goal",
        "Food accessibility",
        "Documentation",
        "Professional referral"
    ],
    "reading": [
        "The Holistic Guide to Human Nutrition — Chapters 19–20.",
        "Holistic Nutrition Class — individualized planning, whole foods, mindful eating and lifestyle integration.",
        "Review all Lessons 1–7 and the welcome lecture."
    ],
    "activity": "Ungraded final project: create a 2–4 page food-first education portfolio with patterns, strengths, a one-week framework, two or three goals, a culinary herb, safety boundaries and a follow-up reflection.",
    "pdf": "holistic-nutrition-lesson-8.pdf",
    "origin": "new"
}
  };
  const RESOURCES=[
  {
    "title": "The Holistic Guide to Human Nutrition",
    "note": "NHMEC guide: Nourishing the Body with Herbs, Supplements, and Vitamins.",
    "file": "holistic-guide-to-human-nutrition.pdf",
    "icon": "📘"
  },
  {
    "title": "Holistic Nutrition Class Guide",
    "note": "Reference only: contains outdated Canvas instructions; use the app for current navigation.",
    "file": "holistic-nutrition-class.pdf",
    "icon": "📗"
  },
  {
    "title": "Welcome Lecture Transcript",
    "note": "Six-page original course introduction • read before Lesson 1.",
    "file": "holistic-human-nutrition-welcome-lecture.pdf",
    "icon": "🎤"
  },
  {
    "title": "Lesson 1 PDF — Foundations of Holistic Nutrition",
    "note": "Original supplied NHMEC lesson PDF.",
    "file": "holistic-nutrition-lesson-1.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 2 PDF — Understanding Nutrients",
    "note": "Original supplied NHMEC lesson PDF.",
    "file": "holistic-nutrition-lesson-2.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 3 PDF — Nutrition and the Body Systems",
    "note": "Original supplied NHMEC lesson PDF.",
    "file": "holistic-nutrition-lesson-3.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 4 PDF — Herbs, Vitamins, Minerals, and Supplements for Whole-Body Wellness",
    "note": "Original supplied NHMEC lesson PDF.",
    "file": "holistic-nutrition-lesson-4.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 5 PDF — Herbs for Nutrition",
    "note": "Newly authored extension; instructor review recommended.",
    "file": "holistic-nutrition-lesson-5.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 6 PDF — Vitamins and Supplements",
    "note": "Newly authored extension; instructor review recommended.",
    "file": "holistic-nutrition-lesson-6.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 7 PDF — Detoxification",
    "note": "Newly authored extension; instructor review recommended.",
    "file": "holistic-nutrition-lesson-7.pdf",
    "icon": "📄"
  },
  {
    "title": "Lesson 8 PDF — Creating a Holistic Nutrition Plan",
    "note": "Newly authored extension; instructor review recommended.",
    "file": "holistic-nutrition-lesson-8.pdf",
    "icon": "📄"
  },
  {
    "title": "Holistic Human Nutrition — Visual Overview",
    "note": "Course botanical and food-first overview illustration.",
    "file": "holistic-human-nutrition-visual-overview.png",
    "icon": "🖼️"
  },
  {
    "title": "Herbs, Vitamins, Minerals & Supplements — Reference Graphic",
    "note": "Whole-body educational overview; use with individual safety review.",
    "file": "holistic-human-nutrition-visual-herbs-vitamins.png",
    "icon": "🖼️"
  }
];
  const MEDIA=[
    'holistic-human-nutrition-slideshow-part-00.mp4',
    'holistic-human-nutrition-slideshow-part-01.mp4',
    'holistic-human-nutrition-slideshow-part-02.mp4'
  ];
  // Insert into the same pathway position as V19.1 without changing course identifiers.
  const level2=PATHWAYS.find(p=>p.id==='level-2');
  if(level2) {
    const existingCourse=level2.courses.find(c=>c.id===COURSE_ID);
    if(existingCourse)Object.assign(existingCourse,COURSE);
    else {
      const after=level2.courses.findIndex(c=>c.id==='home-herbal-preparations');
      if(after>=0)level2.courses.splice(after+1,0,COURSE);else level2.courses.push(COURSE);
    }
  }
  const escapeText=x=>esc(String(x));
  const list=xs=>'<ul class="outcomes">'+xs.map(x=>'<li>'+escapeText(x)+'</li>').join('')+'</ul>';
  const progress=()=>{try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}');}catch(e){return {};}};
  window.hnSetProgress=(n,value)=>{const p=progress();p[n]=!!value;localStorage.setItem(PROGRESS_KEY,JSON.stringify(p));renderProgress();};
  function renderProgress(){
    const target=document.getElementById('hnProgressSummary');if(!target)return;
    const p=progress(),done=Object.keys(LESSONS).filter(k=>p[k]).length,total=8,pct=Math.round(done/total*100);
    target.innerHTML=`<strong>${done} of ${total} lessons marked complete</strong><div class="progress" style="margin-top:10px"><span style="width:${pct}%"></span></div><small>${pct}% of eight lessons • progress saved only in this browser</small>`;
  }
  function resourceCard(r){return `<a class="card external-resource" href="${encodeURI(r.file)}" target="_blank" rel="noopener noreferrer"><span class="resource-icon">${r.icon}</span><span><h3>${escapeText(r.title)}</h3><p>${escapeText(r.note)} ↗</p></span></a>`;}
  function lessonCard(n){
    const l=LESSONS[n],checked=!!progress()[n];
    return `<article class="card hn-lesson-card"><div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px"><div><span class="badge">Lesson ${n} / 8</span><h3>${escapeText(l.title)}</h3></div><label class="hn-mini-check"><input aria-label="Mark lesson ${n} complete" type="checkbox" ${checked?'checked':''} onchange="hnSetProgress(${n},this.checked)"> Done</label></div><p>${escapeText(l.overview[0])}</p><p class="hn-source">${escapeText(l.status)}</p><div class="hn-actions"><button class="btn btn-green" onclick="openHolisticNutritionLesson(${n})">Open Lesson ${n}</button><a class="btn btn-light" href="${l.pdf}" target="_blank" rel="noopener noreferrer">Lesson PDF ↗</a></div></article>`;
  }
  function videoGallery(){return `<div class="card"><span class="badge">Welcome Presentation</span><h3>Holistic Human Nutrition Slideshow</h3><p>The original approximately 7½-minute presentation is supplied in three GitHub-friendly MP4 segments. Play parts 1, 2, and 3 in order.</p>${MEDIA.map((f,i)=>`<div class="hn-video"><b>Presentation Part ${i+1} of 3</b><video controls preload="none" playsinline src="${f}">Your browser does not support MP4 playback.</video><a class="btn btn-light" href="${f}" target="_blank" rel="noopener noreferrer">Open video file ↗</a></div>`).join('')}</div>`;}
  window.openHolisticNutritionCourse=function(pushHash=true){
    document.getElementById('courseDetail').innerHTML=`
      <div class="backbar"><button class="backbtn" onclick="showSection('courses')">← All courses</button></div>
      <div class="detail-hero"><span class="badge">Nutrition Certificate • 8 Lessons</span><h2>Holistic Human Nutrition for Whole Body Wellness</h2><p>Certificate of Completion • Instructor: ${escapeText(COURSE.instructor)}</p></div>
      <div class="card"><span class="status-pill">Eight lessons available • Instructor review for newly written lessons 5–8</span><h3>Course Overview</h3><p>${escapeText(COURSE.description)}</p><p><b>Guiding principle:</b> Food is the foundation. Herbs and supplements are supportive.</p><p><b>Current source rule:</b> This is the separate Holistic Human Nutrition certificate—not NHMEC 105 Foundations or the NHMEC 305 Wellness Herbalist Diploma. Previous Canvas directions inside older reference PDFs are not current instructions.</p><div id="hnProgressSummary" style="margin-top:18px"></div></div>
      <div class="card hn-intro"><h3>Start Here — Welcome Lecture</h3><p>Read the six-page original NHMEC Welcome Lecture Transcript before studying Lessons 1–8. It introduces whole-body nourishment, nutrient classes, and food-first support.</p><a class="btn btn-green" href="holistic-human-nutrition-welcome-lecture.pdf" target="_blank" rel="noopener noreferrer">Open Welcome Lecture PDF ↗</a></div>
      ${videoGallery()}
      <div class="card"><h3>Learning Outcomes</h3>${list(COURSE.outcomes)}</div>
      <div class="section-head"><div><h2>Course Lessons</h2><p>All eight lessons now have in-app guides and full PDFs.</p></div></div><div class="card-grid">${Array.from({length:8},(_,i)=>lessonCard(i+1)).join('')}</div>
      <div class="section-head"><div><h2>Resource Library</h2><p>Source PDFs, lecture and supplemental charts.</p></div></div><div class="resource-grid">${RESOURCES.map(resourceCard).join('')}</div>
      <div class="card hn-image-card"><h3>Nutrition & Whole-Body Wellness</h3><a href="holistic-human-nutrition-visual-overview.png" target="_blank" rel="noopener"><img loading="lazy" src="holistic-human-nutrition-visual-overview.png" alt="NHMEC Holistic Nutrition for Whole Body Wellness food-first course overview graphic"></a><p class="media-note">Educational visual; review individual nutritional needs and product safety.</p></div>
      <div class="card hn-image-card"><h3>Herbs, Vitamins, Minerals & Supplements</h3><a href="holistic-human-nutrition-visual-herbs-vitamins.png" target="_blank" rel="noopener"><img loading="lazy" src="holistic-human-nutrition-visual-herbs-vitamins.png" alt="Overview graphic relating traditional herbs, vitamins, minerals and supplements to different body systems"></a><p class="media-note">Traditional herb associations are not evidence of treatment benefits or instructions for supplementation.</p></div>
      <div class="card"><span class="badge">Supplemental Reference</span><h3>Introduction to Human Nutrition, Second Edition</h3><p>This commercially published work is not redistributed in the public app. Use a lawfully obtained copy; the external Google Drive resource link was previously supplied with the course.</p><a class="btn btn-sage" href="https://drive.google.com/file/d/1Y7TLRP8IYVMdXiBDzQhP8ETPkd4OWlsI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Open Supplemental Textbook ↗</a></div>
      <div class="card hn-final"><span class="status-pill">Official Google Form not supplied</span><h3>Final Assessment</h3><p>The documented course plan calls for <b>one 50-question multiple-choice, open-book final examination (80% passing)</b>, rather than lesson quizzes. The official assessment form/questions have not been provided for this particular certificate; no link or exam content has been invented.</p><p><b>Lesson 8’s portfolio is ungraded practice</b> and does not replace the final assessment.</p></div>
      <div class="card"><span class="badge">Certificate of Completion</span><h3>Course Completion</h3><p>Review the eight lessons and their activities. The official assessment and certificate process will become available when NHMEC publishes its examination link. Checking lessons complete here records only local study progress.</p></div>
      <div class="notice install-box"><b>NHMEC Educational Notice:</b> Private faith-based, non-degree, non-licensure wellness education. No diagnosis, treatment, prescribing, curing or prevention of disease is authorized. Where appropriate, consult licensed medical or dietetic professionals.</div>
    `;
    showSection('course-detail',false);renderProgress();
    if(pushHash)history.pushState(null,'','#course/'+COURSE_ID);
  };
  window.openHolisticNutritionLesson=function(number,pushHash=true){
    const l=LESSONS[Number(number)];if(!l)return openHolisticNutritionCourse(pushHash);
    const blocks=l.sections.map(s=>`<div class="card hn-content"><h3>${escapeText(s.heading)}</h3>${(s.blocks||[]).map(p=>`<p>${escapeText(p)}</p>`).join('')}${s.bullets?list(s.bullets):''}</div>`).join('');
    document.getElementById('lessonDetail').innerHTML=`
      <div class="backbar"><button class="backbtn" onclick="openHolisticNutritionCourse()">← Holistic Human Nutrition</button></div>
      <div class="detail-hero"><span class="badge">Lesson ${l.number} / 8</span><h2>${escapeText(l.title)}</h2><p>${escapeText(l.status)}</p></div>
      ${l.origin==='new'?'<div class="notice">New instructional extension (Lessons 5–8): prepared from the earlier course outline and NHMEC source guides. Instructor approval is recommended before public student use; this lesson is not a recovered original.</div>':''}
      <div class="card"><h3>Lesson Overview</h3>${l.overview.map(p=>`<p>${escapeText(p)}</p>`).join('')}</div>
      <div class="card"><h3>Learning Objectives</h3>${list(l.objectives)}</div>
      ${blocks}
      ${l.activity?`<div class="card assignment-card"><span class="badge">Ungraded Guided Practice</span><h3>Activity</h3><p>${escapeText(l.activity)}</p><p>Activity instructions and worksheets are in the lesson PDF. This activity is not a graded module exam.</p></div>`:''}
      <div class="card"><h3>Key Terms</h3>${list(l.keyTerms)}</div>
      <div class="card"><h3>Reading & Full Lesson PDF</h3>${list(l.reading)}<div class="hn-actions"><a class="btn btn-green" href="${l.pdf}" target="_blank" rel="noopener noreferrer">Open Full Lesson ${l.number} PDF ↗</a><a class="btn btn-light" href="holistic-guide-to-human-nutrition.pdf" target="_blank" rel="noopener noreferrer">Open Required Guide ↗</a></div></div>
      <div class="card"><label class="hn-check"><input type="checkbox" ${progress()[l.number]?'checked':''} onchange="hnSetProgress(${l.number},this.checked)"> Mark Lesson ${l.number} complete on this device</label><small>Progress is stored locally; marking complete does not submit an assignment or award credit.</small></div>
      <div class="lesson-nav"><button class="btn btn-sage" onclick="openHolisticNutritionCourse()">Course contents</button>${l.number<8?`<button class="btn btn-green" onclick="openHolisticNutritionLesson(${l.number+1})">Next lesson →</button>`:''}</div>
      <div class="notice install-box"><b>Educational scope:</b> This lesson supports responsible nutrition education; it does not authorize diagnosis, medical nutrition therapy, treatment, prescribing, or discontinuing medicines.</div>
    `;
    showSection('lesson-detail',false);
    if(pushHash)history.pushState(null,'','#course/'+COURSE_ID+'/lesson/'+l.number);
    if(typeof window.scrollTo==='function')window.scrollTo({top:0,behavior:'smooth'});
  };
  const previousOpenCourse=openCourse;
  openCourse=function(id,pushHash=true){if(id===COURSE_ID)return openHolisticNutritionCourse(pushHash);return previousOpenCourse(id,pushHash);};
  if(typeof renderPathways==='function')renderPathways();
  const style=document.createElement('style');style.textContent=`
    .hn-lesson-card{border-left:4px solid #55785a}
    .hn-actions{display:flex;gap:10px;flex-wrap:wrap;margin:13px 0 4px}
    .hn-actions .btn{flex:1 1 auto}
    .hn-source{font-size:.85em;color:#697a63}
    .hn-mini-check{white-space:nowrap;display:flex;align-items:center;gap:5px;font-size:.85em;color:#345b3c;font-weight:700}
    .hn-mini-check input,.hn-check input{width:20px;height:20px;accent-color:#345b3c}
    .hn-check{display:flex;gap:8px;align-items:center;font-weight:750;color:#345b3c}
    .hn-video{margin-top:18px;padding:12px;border:1px solid #dde4d8;border-radius:14px;background:#f6faf5}
    .hn-video video{display:block;width:100%;max-height:300px;background:#102b1a;margin:10px 0;border-radius:10px}
    .hn-video .btn{font-size:.9em}
    .hn-image-card img{display:block;width:100%;max-height:460px;object-fit:contain;border-radius:10px}
    .hn-intro{border-left:4px solid #b58b46}
    .hn-final{border:2px solid #ceb978;background:#fffdf5}
    .hn-content h3{color:#345b3c}
  `;document.head.appendChild(style);
  const hash=location.hash||'';
  if(hash==='#course/'+COURSE_ID)setTimeout(()=>openHolisticNutritionCourse(false),0);
  else{const match=hash.match(/^#course\/holistic-human-nutrition-certificate\/lesson\/(\d+)$/);
    if(match&&LESSONS[Number(match[1])])setTimeout(()=>openHolisticNutritionLesson(Number(match[1]),false),0);}
})();
