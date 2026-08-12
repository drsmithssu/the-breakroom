/* ============================================================
   THE BREAKROOM - Wardplay weekly mini crossword schedule
   ------------------------------------------------------------
   - Each puzzle has a "weekOf" Monday date; the site shows the
     latest puzzle whose Monday has arrived (same as Connections).
   - Grid format: 5 strings of 5 characters, "#" = black square.
   - Clues: num/dir/r/c/len/ans/text. Dr. Smith reviews every
     clue before a puzzle is loaded.
   - This is the ONLY file that changes for new puzzles.
   ============================================================ */

window.WARDPLAY_PUZZLES = [
  {
    weekOf: "2026-08-24",
    grid: [
      "#SCAN",
      "SCALE",
      "TONES",
      "APART",
      "BELT#"
    ],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"SCAN",  text:"Imaging study — CT, PET, or bone ___"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"SCALE", text:"Braden ___ — rates pressure-injury risk"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"TONES", text:"Skin ___ — assess them in good lighting"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"APART", text:"How to keep clean and contaminated supplies"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"BELT",  text:"Gait ___ — wrap it snug before a transfer"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"SCOPE", text:"___ of practice; also the end of a stethoscope"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"CANAL", text:"Ear ___ — straighten it to use an otoscope"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"ALERT", text:"\"___ and oriented ×4\""},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"NEST",  text:"Robin's construction project"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"STAB",  text:"Sharp, knife-like — as a patient might describe pain"}
    ]
  },
  {
    weekOf: "2026-08-31",
    grid: [
      "#ATOP",
      "GLOVE",
      "APNEA",
      "SHIRT",
      "PACT#"
    ],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"ATOP",  text:"Resting on"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"GLOVE", text:"Don it before patient contact — sterile or not"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"APNEA", text:"Pause in breathing — literally \"without breath\""},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"SHIRT", text:"Dressing tip: the affected arm goes into this first"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"PACT",  text:"Solemn agreement"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"ALPHA", text:"First in a Greek series"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"TONIC", text:"___-clonic seizure"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"OVERT", text:"Out in the open — opposite of hidden"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"PEAT",  text:"Bog moss once used in battlefield wound dressings"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"GASP",  text:"Sudden sharp breath"}
    ]
  },
  {
    weekOf: "2026-09-07",
    grid: ["DISC#","ALARM","MILIA","EATER","#CYST"],
    clues: [
      {num:1, dir:"A", r:0, c:0, len:4, ans:"DISC",  text:"Herniated back part"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"ALARM", text:"Bed ___ — falls prevention for high-risk patients"},
      {num:7, dir:"A", r:2, c:0, len:5, ans:"MILIA", text:"Tiny white newborn facial bumps — normal, don't squeeze"},
      {num:8, dir:"A", r:3, c:0, len:5, ans:"EATER", text:"Picky ___ (toddler mealtime challenge)"},
      {num:9, dir:"A", r:4, c:1, len:4, ans:"CYST",  text:"Fluid-filled sac"},
      {num:1, dir:"D", r:0, c:0, len:4, ans:"DAME",  text:"Notre ___"},
      {num:2, dir:"D", r:0, c:1, len:5, ans:"ILIAC", text:"___ crest — hip landmark you can palpate"},
      {num:3, dir:"D", r:0, c:2, len:5, ans:"SALTY", text:"Like a diet that worsens hypertension"},
      {num:4, dir:"D", r:0, c:3, len:5, ans:"CRIES", text:"What a healthy newborn does at delivery, to everyone's relief"},
      {num:6, dir:"D", r:1, c:4, len:4, ans:"MART",  text:"Shopping stop"}
    ]
  },
  {
    weekOf: "2026-09-14",
    grid: ["LABS#","ELOPE","ATRIA","PANTS","#REST"],
    clues: [
      {num:1, dir:"A", r:0, c:0, len:4, ans:"LABS",  text:"Morning draw results"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"ELOPE", text:"What a wander-risk patient may attempt (it's not romantic)"},
      {num:7, dir:"A", r:2, c:0, len:5, ans:"ATRIA", text:"The heart's receiving chambers"},
      {num:8, dir:"A", r:3, c:0, len:5, ans:"PANTS", text:"Scrub bottoms"},
      {num:9, dir:"A", r:4, c:1, len:4, ans:"REST",  text:"First ingredient in recovery"},
      {num:1, dir:"D", r:0, c:0, len:4, ans:"LEAP",  text:"Jump — or a year with an extra day"},
      {num:2, dir:"D", r:0, c:1, len:5, ans:"ALTAR", text:"Wedding focal point"},
      {num:3, dir:"D", r:0, c:2, len:5, ans:"BORNE", text:"Blood___ pathogens (annual training topic)"},
      {num:4, dir:"D", r:0, c:3, len:5, ans:"SPITS", text:"Expels, as a toddler with medicine"},
      {num:6, dir:"D", r:1, c:4, len:4, ans:"EAST",  text:"Sunrise direction"}
    ]
  },
  {
    weekOf: "2026-09-21",
    grid: ["#BILL","RADIO","EDEMA","AGAIN","PEST#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"BILL",  text:"Itemized hospital statement"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"RADIO", text:"How EMS calls in a report en route"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"EDEMA", text:"+2 pitting finding"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"AGAIN", text:"Once more — like vitals q4h"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"PEST",  text:"Bedbug, for one"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"BADGE", text:"It gets you through the med-room door"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"IDEAS", text:"Brainstorm output"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"LIMIT", text:"Visitor-policy number"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"LOAN",  text:"Nursing-school financing, often"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"REAP",  text:"Harvest — as in what you sow"}
    ]
  },
  {
    weekOf: "2026-09-28",
    grid: ["SCAM#","COLIC","AMINO","NEVUS","#TEST"],
    clues: [
      {num:1, dir:"A", r:0, c:0, len:4, ans:"SCAM",  text:"Phishing email, e.g. — do not click"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"COLIC", text:"Inconsolable infant crying — remember the rule of threes"},
      {num:7, dir:"A", r:2, c:0, len:5, ans:"AMINO", text:"___ acids — protein's building blocks"},
      {num:8, dir:"A", r:3, c:0, len:5, ans:"NEVUS", text:"Mole, in chart-speak (watch its ABCDEs)"},
      {num:9, dir:"A", r:4, c:1, len:4, ans:"TEST",  text:"It's coming Thursday, probably"},
      {num:1, dir:"D", r:0, c:0, len:4, ans:"SCAN",  text:"Bladder ___ before you consider a straight cath"},
      {num:2, dir:"D", r:0, c:1, len:5, ans:"COMET", text:"Icy streaker across the night sky"},
      {num:3, dir:"D", r:0, c:2, len:5, ans:"ALIVE", text:"What the ABCs keep people"},
      {num:4, dir:"D", r:0, c:3, len:5, ans:"MINUS", text:"Below-zero sign"},
      {num:6, dir:"D", r:1, c:4, len:4, ans:"COST",  text:"Tuition figure"}
    ]
  },
  {
    weekOf: "2026-10-05",
    grid: ["MARS#","ADULT","SOBER","SPREE","#TAPE"],
    clues: [
      {num:1, dir:"A", r:0, c:0, len:4, ans:"MARS",  text:"The red planet"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"ADULT", text:"Med-surg patient, typically"},
      {num:7, dir:"A", r:2, c:0, len:5, ans:"SOBER", text:"Clear-headed — a recovery milestone"},
      {num:8, dir:"A", r:3, c:0, len:5, ans:"SPREE", text:"Shopping binge"},
      {num:9, dir:"A", r:4, c:1, len:4, ans:"TAPE",  text:"It secures the dressing"},
      {num:1, dir:"D", r:0, c:0, len:4, ans:"MASS",  text:"Palpable finding to report"},
      {num:2, dir:"D", r:0, c:1, len:5, ans:"ADOPT", text:"Take in — a pet or a healthy habit"},
      {num:3, dir:"D", r:0, c:2, len:5, ans:"RUBRA", text:"Lochia ___ — days 1–3 postpartum"},
      {num:4, dir:"D", r:0, c:3, len:5, ans:"SLEEP", text:"What nursing students chronically lack"},
      {num:6, dir:"D", r:1, c:4, len:4, ans:"TREE",  text:"Bronchial ___"}
    ]
  },
  {
    weekOf: "2026-10-12",
    grid: ["#MEAT","BORNE","ATRIA","STOOL","HORN#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"MEAT",  text:"Protein to cut small for a dysphagia diet"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"BORNE", text:"Vector-___ illness (think ticks)"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"ATRIA", text:"Upper heart chambers (yes, again — they matter)"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"STOOL", text:"Specimen checked for occult blood"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"HORN",  text:"It honks"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"MOTTO", text:"Words to live by"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"ERROR", text:"What incident reports document — systems, not blame"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"ANION", text:"Negatively charged ion — chloride, for one"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"TEAL",  text:"Blue-green scrub shade"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"BASH",  text:"Big party"}
    ]
  },
  {
    weekOf: "2026-10-19",
    grid: ["#SPOT","SHOVE","NARES","ALERT","PEST#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"SPOT",  text:"Pressure-injury warning: a red one that doesn't blanch"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"SHOVE", text:"Rude push"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"NARES", text:"Nostrils, to the charting nurse"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"ALERT", text:"First word of a favorable neuro check"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"PEST",  text:"Annoying critter"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"SHALE", text:"Layered sedimentary rock"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"PORES", text:"Skin's tiny openings"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"OVERT", text:"Out in the open — opposite of covert"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"TEST",  text:"Reason to open an NCLEX prep app"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"SNAP",  text:"Sound of a glove going on"}
    ]
  },
  {
    weekOf: "2026-10-26",
    grid: ["USER#","SINUS","EDEMA","DEMON","#DARE"],
    clues: [
      {num:1, dir:"A", r:0, c:0, len:4, ans:"USER",  text:"Login owner"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"SINUS", text:"Normal ___ rhythm — the ECG you want to see"},
      {num:7, dir:"A", r:2, c:0, len:5, ans:"EDEMA", text:"Swelling — press and count the seconds"},
      {num:8, dir:"A", r:3, c:0, len:5, ans:"DEMON", text:"Halloween fiend 👻"},
      {num:9, dir:"A", r:4, c:1, len:4, ans:"DARE",  text:"Truth's alternative"},
      {num:1, dir:"D", r:0, c:0, len:4, ans:"USED",  text:"Like the needles in the sharps container"},
      {num:2, dir:"D", r:0, c:1, len:5, ans:"SIDED", text:"One-___ weakness, as after a stroke"},
      {num:3, dir:"D", r:0, c:2, len:5, ans:"ENEMA", text:"7-Across's famously confused cousin — know the difference!"},
      {num:4, dir:"D", r:0, c:3, len:5, ans:"RUMOR", text:"Break-room gossip"},
      {num:6, dir:"D", r:1, c:4, len:4, ans:"SANE",  text:"Sound of mind — also a forensic nurse examiner acronym"}
    ]
  },
  {
    weekOf: "2026-11-02",
    grid: ["#OATH","APNEA","REGAL","CREST","HARE#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"OATH",  text:"Nightingale Pledge, for one"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"APNEA", text:"Sleep-study finding — pauses in breathing"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"REGAL", text:"Fit for a king"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"CREST", text:"Iliac ___"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"HARE",  text:"Tortoise's overconfident rival"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"OPERA", text:"Dramatic stage production"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"ANGER", text:"A Kübler-Ross stage of grief"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"TEASE", text:"Needle — in the non-clinical sense"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"HALT",  text:"Hungry, Angry, Lonely, Tired — the relapse-risk check"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"ARCH",  text:"The foot's curve (fallen, in flat feet)"}
    ]
  },
  {
    weekOf: "2026-11-09",
    grid: ["#GIFT","HELLO","ANION","TRACE","HECK#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"GIFT",  text:"Present"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"HELLO", text:"First word to every patient — with your name and role"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"ANION", text:"Chloride or bicarbonate, charge-wise"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"TRACE", text:"Tiny amount on a urine dipstick"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"HECK",  text:"Mild exclamation"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"GENRE", text:"Mystery or romance"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"ILIAC", text:"___ crest — bone-marrow biopsy site"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"FLOCK", text:"Birds of a feather"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"TONE",  text:"Muscle quality on a neuro exam"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"HATH",  text:"Has, to Shakespeare"}
    ]
  },
  {
    weekOf: "2026-11-16",
    grid: ["#SLAM","STOLE","NASAL","ALERT","GERM#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"SLAM",  text:"Poetry event or door sound"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"STOLE", text:"Took without asking"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"NASAL", text:"___ cannula — 1–6 L/min of O₂"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"ALERT", text:"How you want the mental status"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"GERM",  text:"What hand hygiene defeats"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"STALE", text:"Like week-old bread"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"LOSER", text:"Sore ___ (bad sport)"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"ALARM", text:"The IV pump's favorite sound"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"MELT",  text:"What ice chips do"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"SNAG",  text:"Small hitch in the plan"}
    ]
  },
  {
    weekOf: "2026-11-23",
    grid: ["#SNOW","STOVE","CODES","ALERT","NEST#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"SNOW",  text:"Winter forecast (please, not on clinical days)"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"STOVE", text:"Kitchen burn source"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"CODES", text:"Blue means resuscitation; red means fire"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"ALERT", text:"…and oriented ×4"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"NEST",  text:"Cozy bird construction"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"STOLE", text:"Fur wrap — or filched"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"NODES", text:"Lymph ___ — palpate gently"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"OVERT", text:"In plain sight"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"WEST",  text:"Sunset direction"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"SCAN",  text:"Barcode ___ before every med"}
    ]
  },
  {
    weekOf: "2026-11-30",
    grid: ["#STAT","SCENE","TONGS","UPSET","DEER#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"STAT",  text:"Right now, in order-speak"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"SCENE", text:"EMS safety check: 'Is the ___ safe?'"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"TONGS", text:"Sterile pickup tool"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"UPSET", text:"Stomach descriptor before finals"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"DEER",  text:"Headlights stare-r (you, during a pop quiz)"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"SCOPE", text:"Colonoscopy tool"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"TENSE", text:"Like shoulders in finals week — unclench"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"ANGER", text:"Emotion to de-escalate calmly"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"TEST",  text:"Finals-week fixture"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"STUD",  text:"Earring post"}
    ]
  },
  {
    weekOf: "2026-12-07",
    grid: ["#SCAR","BARGE","ANION","STENT","EASY#"],
    clues: [
      {num:1, dir:"A", r:0, c:1, len:4, ans:"SCAR",  text:"Healed wound's souvenir"},
      {num:5, dir:"A", r:1, c:0, len:5, ans:"BARGE", text:"___ in — what not to do during report"},
      {num:6, dir:"A", r:2, c:0, len:5, ans:"ANION", text:"Negative ion — the semester's last chemistry cameo"},
      {num:7, dir:"A", r:3, c:0, len:5, ans:"STENT", text:"Artery-propping device"},
      {num:8, dir:"A", r:4, c:0, len:4, ans:"EASY",  text:"How we're keeping the last puzzle — you've earned it"},
      {num:1, dir:"D", r:0, c:1, len:5, ans:"SANTA", text:"December rounds-maker with a list (checked twice)"},
      {num:2, dir:"D", r:0, c:2, len:5, ans:"CRIES", text:"Releases stress, one healthy way"},
      {num:3, dir:"D", r:0, c:3, len:5, ans:"AGONY", text:"10/10 pain, dramatically"},
      {num:4, dir:"D", r:0, c:4, len:4, ans:"RENT",  text:"Monthly housing bill"},
      {num:5, dir:"D", r:1, c:0, len:4, ans:"BASE",  text:"Acid's opposite"}
    ]
  }
];
