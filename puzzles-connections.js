/* ============================================================
   THE BREAKROOM — Connections puzzle schedule
   ------------------------------------------------------------
   HOW THIS FILE WORKS (for Dr. Smith):
   - Each puzzle has a "weekOf" date (a Monday, YYYY-MM-DD).
     The site automatically shows the latest puzzle whose
     Monday has arrived. Nothing else to do weekly.
   - archiveOpen: false  → students see only this week's puzzle.
     Change to true (and re-upload this file) to open the
     archive for special occasions; set back to false after.
   - To add puzzles: ask Claude for an updated copy of this
     file, then upload it to GitHub (Add file → Upload files,
     confirm replace). This is the ONLY file that changes.
   ============================================================ */

window.BREAKROOM_SETTINGS = {
  archiveOpen: false
};

window.CONNECTIONS_PUZZLES = [
  {
    weekOf: "2026-08-24",
    title: "Vital Signs",
    subtitle: "Values, sites, and patterns",
    groups: [
      { name: "Normal Adult Vital Sign Values", color: "yellow",
        words: ["98.6°F", "60–100 bpm", "12–20 /min", "120/80 mmHg"],
        rationale: "Normal adult ranges: temperature ~98.6°F (37°C), heart rate 60–100 beats/min, respirations 12–20 breaths/min, and blood pressure around 120/80 mmHg." },
      { name: "Pulse Assessment Sites", color: "green",
        words: ["Radial", "Carotid", "Brachial", "Apical"],
        rationale: "Common pulse points: radial (wrist), carotid (neck — used in emergencies), brachial (inner arm — used for infants and BP), and apical (5th intercostal space, midclavicular line — auscultated for a full minute)." },
      { name: "Breathing Patterns", color: "blue",
        words: ["Eupnea", "Tachypnea", "Bradypnea", "Apnea"],
        rationale: "Eupnea = normal breathing; tachypnea = rate >20/min; bradypnea = rate <12/min; apnea = absence of breathing." },
      { name: "Blood Pressure Terms", color: "purple",
        words: ["Systolic", "Diastolic", "Korotkoff", "Orthostatic"],
        rationale: "Systolic = pressure during ventricular contraction; diastolic = pressure during relaxation; Korotkoff sounds are what you auscultate when measuring BP; orthostatic hypotension is a BP drop on standing (≥20 systolic or ≥10 diastolic)." }
    ]
  },
  {
    weekOf: "2026-08-31",
    title: "Infection Control",
    subtitle: "Sort by precaution type — watch for traps!",
    groups: [
      { name: "Personal Protective Equipment", color: "yellow",
        words: ["Gloves", "Gown", "Mask", "Goggles"],
        rationale: "Standard PPE items. Donning order: gown → mask → goggles → gloves. Doffing order: gloves → goggles → gown → mask." },
      { name: "Contact Precautions", color: "green",
        words: ["MRSA", "VRE", "C. diff", "Scabies"],
        rationale: "Spread by direct/indirect touch — gown and gloves required. For C. diff, wash hands with soap and water (alcohol rub does not kill spores)." },
      { name: "Droplet Precautions", color: "blue",
        words: ["Influenza", "Pertussis", "Mumps", "Rubella"],
        rationale: "Spread by large droplets within ~3–6 feet — wear a surgical mask; patient wears a mask during transport." },
      { name: "Airborne Precautions", color: "purple",
        words: ["TB", "Measles", "Varicella", "Dissem. zoster"],
        rationale: "Spread by small airborne particles — requires N95 respirator and negative-pressure room. Remember “My Chicken Hez TB”: Measles, Chickenpox (varicella), Herpes zoster (disseminated), TB." }
    ]
  },
  {
    weekOf: "2026-09-07",
    title: "Med Administration & Math",
    subtitle: "Rights, routes, conversions, and abbreviations",
    groups: [
      { name: "“Rights” of Medication Administration", color: "yellow",
        words: ["Patient", "Drug", "Dose", "Time"],
        rationale: "Core rights of safe medication administration: right patient, drug, dose, time — plus route, documentation, reason, and the patient’s right to refuse." },
      { name: "Parenteral Routes", color: "green",
        words: ["IV", "IM", "Subcut", "Intradermal"],
        rationale: "Parenteral = bypasses the GI tract by injection: intravenous, intramuscular, subcutaneous, and intradermal (e.g., TB skin test). PO is NOT parenteral — it’s enteral." },
      { name: "Dosage Calculation Equivalents", color: "blue",
        words: ["1 tsp = 5 mL", "1 kg = 2.2 lb", "1 oz = 30 mL", "1 g = 1,000 mg"],
        rationale: "Must-memorize conversions for dosage calculation exams: 1 teaspoon = 5 mL, 1 kg = 2.2 lb, 1 ounce = 30 mL, 1 gram = 1,000 mg." },
      { name: "“Do Not Use” Abbreviations", color: "purple",
        words: ["U", "QD", "MS", "cc"],
        rationale: "Error-prone abbreviations: write “unit” not U, “daily” not QD, spell out morphine sulfate vs magnesium sulfate instead of MS, and use mL instead of cc." }
    ]
  },
  {
    weekOf: "2026-09-14",
    title: "A&P Foundations",
    subtitle: "Structures and directional terms",
    groups: [
      { name: "Bones", color: "yellow",
        words: ["Femur", "Humerus", "Sternum", "Clavicle"],
        rationale: "Femur (thigh — longest bone), humerus (upper arm), sternum (breastbone), clavicle (collarbone)." },
      { name: "Heart Structures", color: "green",
        words: ["Atrium", "Ventricle", "Aorta", "Septum"],
        rationale: "Atria receive blood, ventricles pump it out, the aorta carries oxygenated blood from the left ventricle, and the septum divides right and left sides." },
      { name: "Parts of a Neuron", color: "blue",
        words: ["Axon", "Dendrite", "Synapse", "Myelin"],
        rationale: "Dendrites receive impulses, the axon carries them away from the cell body, myelin insulates and speeds conduction, and the synapse is the junction between neurons." },
      { name: "Anatomical Directional Terms", color: "purple",
        words: ["Proximal", "Distal", "Medial", "Lateral"],
        rationale: "Proximal = closer to the trunk/point of attachment; distal = farther away; medial = toward the midline; lateral = away from the midline." }
    ]
  },
  {
    weekOf: "2026-09-21",
    title: "Fundamentals Grab Bag",
    subtitle: "Frameworks every Level I student needs",
    groups: [
      { name: "Nursing Process Steps", color: "yellow",
        words: ["Assessment", "Diagnosis", "Planning", "Evaluation"],
        rationale: "ADPIE: Assessment, Diagnosis, Planning, Implementation, Evaluation. (Implementation is the missing step here!)" },
      { name: "Maslow’s Hierarchy Levels", color: "green",
        words: ["Physiological", "Safety", "Belonging", "Esteem"],
        rationale: "From the base up: physiological needs → safety → love/belonging → esteem → self-actualization. Physiological needs (airway, breathing, circulation) come first when prioritizing care." },
      { name: "Patient Positions", color: "blue",
        words: ["Fowler’s", "Supine", "Prone", "Sims’"],
        rationale: "Fowler’s = head of bed elevated (semi-Fowler’s 30–45°); supine = flat on back; prone = on abdomen; Sims’ = side-lying with upper leg flexed (used for enemas)." },
      { name: "Braden Scale Subscales", color: "purple",
        words: ["Moisture", "Activity", "Mobility", "Friction"],
        rationale: "The Braden Scale rates pressure-injury risk on six subscales: sensory perception, moisture, activity, mobility, nutrition, and friction/shear. Lower score = higher risk (≤18 = at risk)." }
    ]
  }
];
