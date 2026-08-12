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
  },
  {
    weekOf: "2026-09-28",
    title: "Know Your Meds",
    subtitle: "Pharmacology — group by drug class",
    groups: [
      { name: "Opioid Analgesics", color: "yellow",
        words: ["Morphine", "Fentanyl", "Codeine", "Tramadol"],
        rationale: "Opioids relieve pain via mu receptors. Priority monitoring: respiratory rate (hold and reassess if sedation climbs), and know where the naloxone is." },
      { name: "Anticoagulants", color: "green",
        words: ["Heparin", "Warfarin", "Apixaban", "Enoxaparin"],
        rationale: "All raise bleeding risk — watch for bruising, dark stools, oozing gums. Antidotes to know: protamine sulfate for heparin, vitamin K for warfarin." },
      { name: "Diuretics", color: "blue",
        words: ["Furosemide", "Spironolactone", "Mannitol", "Bumetanide"],
        rationale: "Daily weights are the best measure of fluid status. Furosemide and bumetanide waste potassium; spironolactone spares it; mannitol is the osmotic one for ICP." },
      { name: "Insulins", color: "purple",
        words: ["Lispro", "Aspart", "Glargine", "NPH"],
        rationale: "Lispro and aspart are rapid-acting (eat NOW); NPH is intermediate with a peak; glargine is long-acting with no pronounced peak. Hypoglycemia = shaky, sweaty, confused." }
    ]
  },
  {
    weekOf: "2026-10-05",
    title: "Reading the Numbers",
    subtitle: "Which lab panel does each belong to?",
    groups: [
      { name: "Electrolytes (BMP)", color: "yellow",
        words: ["Sodium", "Potassium", "Chloride", "Calcium"],
        rationale: "Memorize the big normals: Na 135–145, K 3.5–5.0, Ca 8.5–10.5. Potassium outside range = cardiac risk — always the first one to check." },
      { name: "CBC Components", color: "green",
        words: ["Hemoglobin", "Hematocrit", "Platelets", "WBC"],
        rationale: "H&H tracks oxygen-carrying capacity, platelets clotting (normal 150–400K), WBC infection (normal ~5–10K)." },
      { name: "Coagulation Studies", color: "blue",
        words: ["PT", "INR", "aPTT", "D-dimer"],
        rationale: "PT/INR monitors warfarin (therapeutic INR usually 2–3); aPTT monitors heparin; D-dimer screens for clot breakdown (think PE/DVT workup)." },
      { name: "Liver Panel", color: "purple",
        words: ["AST", "ALT", "Bilirubin", "Albumin"],
        rationale: "AST/ALT rise with hepatocellular injury, bilirubin with impaired clearance (jaundice), and albumin falls when a struggling liver can't synthesize protein." }
    ]
  },
  {
    weekOf: "2026-10-12",
    title: "Special Delivery",
    subtitle: "Maternity & newborn",
    groups: [
      { name: "Postpartum Assessment (BUBBLE)", color: "yellow",
        words: ["Breasts", "Uterus", "Bladder", "Lochia"],
        rationale: "BUBBLE: Breasts, Uterus (firm, midline, descending), Bladder, Bowel, Lochia, Episiotomy. A boggy uterus + heavy lochia = act fast — massage the fundus." },
      { name: "Normal Newborn Skin Findings", color: "green",
        words: ["Vernix", "Lanugo", "Milia", "Acrocyanosis"],
        rationale: "All normal, all reassure-the-parents findings: cheesy vernix, fine lanugo hair, tiny white milia, and bluish hands/feet (acrocyanosis) in the first day or two. Central cyanosis is NOT normal." },
      { name: "Hormones of Pregnancy & Birth", color: "blue",
        words: ["Oxytocin", "Prolactin", "Relaxin", "Progesterone"],
        rationale: "Oxytocin contracts the uterus (and bonds!), prolactin makes milk, relaxin loosens joints and the pelvis, progesterone maintains the pregnancy." },
      { name: "Signs Labor Is Near", color: "purple",
        words: ["Lightening", "Bloody show", "Nesting", "ROM"],
        rationale: "Lightening = baby drops; bloody show = mucus plug passes; a sudden urge to organize the house is real; ROM = rupture of membranes — note the time and check FHR." }
    ]
  },
  {
    weekOf: "2026-10-19",
    title: "In Our Feelings",
    subtitle: "Mental health nursing",
    groups: [
      { name: "Defense Mechanisms", color: "yellow",
        words: ["Denial", "Projection", "Regression", "Sublimation"],
        rationale: "Unconscious ways we protect ourselves: refusing reality (denial), assigning our feelings to others (projection), retreating to earlier behavior (regression), and channeling urges into something productive (sublimation — the healthy one)." },
      { name: "Therapeutic Communication", color: "green",
        words: ["Reflecting", "Restating", "Silence", "Clarifying"],
        rationale: "Open-ended and patient-centered. Silence is a technique, not an awkward gap. Avoid the non-therapeutic traps: 'why' questions, false reassurance, and giving advice." },
      { name: "SSRIs", color: "blue",
        words: ["Fluoxetine", "Sertraline", "Citalopram", "Paroxetine"],
        rationale: "First-line for depression and anxiety. Teach: 2–4 weeks to full effect, don't stop abruptly, and report agitation + fever + sweating (possible serotonin syndrome)." },
      { name: "Mood Stabilizers", color: "purple",
        words: ["Lithium", "Valproate", "Lamotrigine", "Carbamazepine"],
        rationale: "Lithium's range is narrow (~0.6–1.2) — dehydration and NSAIDs push levels up; early toxicity looks like GI upset and tremor. Lamotrigine's red flag is rash (Stevens-Johnson)." }
    ]
  },
  {
    weekOf: "2026-10-26",
    title: "Night Shift Frights 🎃",
    subtitle: "Halloween special",
    groups: [
      { name: "Creepy Crawly Infestations", color: "yellow",
        words: ["Scabies", "Lice", "Pinworms", "Giardia"],
        rationale: "Scabies burrows (contact precautions + treat close contacts), lice spread by direct contact, pinworms cause nighttime itching (tape test), giardia comes from contaminated water." },
      { name: "Actual Blood-Suckers", color: "green",
        words: ["Leech", "Tick", "Bedbug", "Mosquito"],
        rationale: "Ticks and mosquitoes are disease vectors (Lyme, West Nile). Plot twist: medicinal leeches are FDA-approved and used after reattachment surgeries to relieve venous congestion." },
      { name: "Zombie Look: Signs of Shock", color: "blue",
        words: ["Pallor", "Clammy", "Tachycardia", "Hypotension"],
        rationale: "Pale, cool, clammy, fast, and finally hypotensive — falling BP is a LATE sign. Catch shock at the tachycardia stage, not the zombie stage." },
      { name: "Witches' Brew: Herbal Supplements", color: "purple",
        words: ["Ginkgo", "Echinacea", "Valerian", "Kava"],
        rationale: "Always ask about supplements! Ginkgo raises bleeding risk with anticoagulants, valerian and kava add sedation, and kava is linked to liver injury." }
    ]
  },
  {
    weekOf: "2026-11-02",
    title: "Kid Stuff",
    subtitle: "Pediatrics — theorists, vaccines, and hearts",
    groups: [
      { name: "Erikson's Psychosocial Stages", color: "yellow",
        words: ["Trust", "Autonomy", "Initiative", "Industry"],
        rationale: "Trust (infant), autonomy (toddler — hence 'no!'), initiative (preschool), industry (school-age). Care that supports the stage = developmentally appropriate care." },
      { name: "Piaget's Cognitive Stages", color: "green",
        words: ["Sensorimotor", "Preoperational", "Concrete", "Formal"],
        rationale: "Sensorimotor (object permanence), preoperational (magical thinking — explain procedures simply!), concrete operational (logic arrives), formal operational (abstract thought)." },
      { name: "Childhood Vaccines", color: "blue",
        words: ["MMR", "DTaP", "Hib", "IPV"],
        rationale: "MMR and varicella are live vaccines — check immune status and pregnancy. Hib prevents a once-common cause of pediatric meningitis and epiglottitis." },
      { name: "Congenital Heart Defects", color: "purple",
        words: ["Tetralogy", "VSD", "ASD", "Coarctation"],
        rationale: "VSD/ASD are septal holes; coarctation narrows the aorta (arm BP > leg BP); tetralogy of Fallot has four defects and classic 'tet spells' — knees to chest." }
    ]
  },
  {
    weekOf: "2026-11-09",
    title: "Acronym Soup",
    subtitle: "Emergency edition — every group is an acronym",
    groups: [
      { name: "RICE (Sprains)", color: "yellow",
        words: ["Rest", "Ice", "Compression", "Elevation"],
        rationale: "First-line for musculoskeletal injury in the first 24–48 hours. Ice 20 minutes at a time — never directly on skin." },
      { name: "FAST (Stroke)", color: "green",
        words: ["Face", "Arms", "Speech", "Time"],
        rationale: "Face drooping, arm drift, slurred speech — Time to call for help. Time is brain: note when the patient was last seen normal." },
      { name: "RACE (Fire Response)", color: "blue",
        words: ["Rescue", "Alarm", "Confine", "Extinguish"],
        rationale: "Rescue anyone in danger, pull the Alarm, Confine by closing doors, then Extinguish or Evacuate. Patients first, always." },
      { name: "PASS (Fire Extinguisher)", color: "purple",
        words: ["Pull", "Aim", "Squeeze", "Sweep"],
        rationale: "Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep side to side. Paired with RACE on every NCLEX safety question ever written." }
    ]
  },
  {
    weekOf: "2026-11-16",
    title: "Acid-Base Whodunit",
    subtitle: "Match the culprit to the imbalance",
    groups: [
      { name: "Metabolic Acidosis Causes", color: "yellow",
        words: ["DKA", "Diarrhea", "Shock", "Aspirin OD"],
        rationale: "Acid gained (ketones, lactate, salicylate) or bicarb lost (diarrhea). Compensation: deep, fast Kussmaul respirations blowing off CO₂." },
      { name: "Respiratory Acidosis Causes", color: "green",
        words: ["COPD", "Opioid OD", "Hypoventilation", "Atelectasis"],
        rationale: "Anything that traps CO₂: obstructed airways, sedated breathing, collapsed alveoli. ROME: Respiratory Opposite — pH down, CO₂ up." },
      { name: "Metabolic Alkalosis Causes", color: "blue",
        words: ["Vomiting", "NG suction", "Antacids", "Diuretics"],
        rationale: "Acid lost from the stomach or excess base gained. Classic NCLEX patient: days of vomiting or continuous NG suction." },
      { name: "Respiratory Alkalosis Causes", color: "purple",
        words: ["Hyperventilation", "Anxiety", "High altitude", "Fever"],
        rationale: "Breathing too fast blows off CO₂. First intervention for anxiety-driven hyperventilation: coached slow breathing." }
    ]
  },
  {
    weekOf: "2026-11-23",
    title: "Thanksgiving Table Rounds 🦃",
    subtitle: "Nutrition — sort the menu",
    groups: [
      { name: "Potassium-Rich Foods", color: "yellow",
        words: ["Banana", "Potato", "Avocado", "Orange"],
        rationale: "Encourage for patients on potassium-wasting diuretics; restrict in renal failure. Salt substitutes are potassium chloride — a trap for renal patients." },
      { name: "Vitamin K Foods (Warfarin Watch)", color: "green",
        words: ["Kale", "Broccoli", "Cabbage", "Brussels sprouts"],
        rationale: "Vitamin K opposes warfarin. The teaching point isn't avoidance — it's CONSISTENCY: keep leafy-green intake steady so the INR stays steady." },
      { name: "Clear Liquid Diet", color: "blue",
        words: ["Broth", "Gelatin", "Popsicle", "Black coffee"],
        rationale: "If you can see through it at room temperature, it counts — yes, black coffee counts. First diet after many procedures; advance as tolerated." },
      { name: "High-Fiber Champions", color: "purple",
        words: ["Bran", "Lentils", "Prunes", "Oatmeal"],
        rationale: "Fiber plus fluid plus ambulation = the non-pharm constipation bundle, especially for patients on opioids." }
    ]
  },
  {
    weekOf: "2026-11-30",
    title: "Charge Nurse Energy",
    subtitle: "Leadership & delegation",
    groups: [
      { name: "Rights of Delegation", color: "yellow",
        words: ["Task", "Circumstance", "Person", "Direction"],
        rationale: "The five rights of delegation: right task, right circumstance, right person, right direction/communication — and the fifth, right supervision and evaluation." },
      { name: "RN Cannot Delegate", color: "green",
        words: ["Assessment", "Teaching", "Evaluation", "Care planning"],
        rationale: "The nursing-judgment steps stay with the RN. Stable, routine, predictable tasks can be delegated; anything requiring assessment or judgment cannot." },
      { name: "Leadership Styles", color: "blue",
        words: ["Autocratic", "Democratic", "Laissez-faire", "Transformational"],
        rationale: "Autocratic fits emergencies (someone must run the code); democratic builds buy-in; laissez-faire works with expert teams; transformational inspires change." },
      { name: "Quality Improvement Tools", color: "purple",
        words: ["PDSA", "Fishbone", "Pareto", "Root cause"],
        rationale: "PDSA cycles test small changes; fishbone diagrams sort contributing factors; Pareto charts find the vital few causes; root cause analysis digs past blame to systems." }
    ]
  },
  {
    weekOf: "2026-12-07",
    title: "Finals Week: You've Got This",
    subtitle: "One last round before break",
    groups: [
      { name: "Priority-Setting Frameworks", color: "yellow",
        words: ["ABC", "Maslow", "ADPIE", "Triage"],
        rationale: "Airway-Breathing-Circulation first, physiological needs before psychosocial, assess before you act. This is 80% of answering priority questions." },
      { name: "Famous Nurses", color: "green",
        words: ["Nightingale", "Barton", "Mahoney", "Wald"],
        rationale: "Florence Nightingale (evidence and environment), Clara Barton (American Red Cross), Mary Eliza Mahoney (first Black licensed nurse in the U.S.), Lillian Wald (public health nursing)." },
      { name: "NCLEX Item Types", color: "blue",
        words: ["SATA", "Ordering", "Matrix", "Cloze"],
        rationale: "Select-all-that-apply, drag-and-drop ordering, matrix grids, and fill-in-the-blank cloze items — all Next Gen NCLEX formats you'll meet. Now they're puzzle trivia. You're ready." },
      { name: "Study Strategies That Actually Work", color: "purple",
        words: ["Spacing", "Self-testing", "Sleep", "Interleaving"],
        rationale: "The evidence says: space your review out, test yourself instead of rereading, mix topics, and protect your sleep — memory consolidates while you rest. Good luck on finals. You've got this!" }
    ]
  }
];
