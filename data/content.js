/* ============================================================
   data/content.js  —  ✏️  EDIT YOUR CONTENT HERE
   This is the ONLY file you need to touch to update the site.
   Covers: main site + hobbies page + electronics page
   ============================================================ */


/* ══════════════════════════════════════════════════════════════
   MAIN SITE
   ══════════════════════════════════════════════════════════════ */

/* ── Publications ──────────────────────────────────────────── */
window.PUBLICATIONS = [
  {
    year: 2026,
    title: "Impact of Delay and Measurement Error on Remote Gate Fidelity in Quantum Data Centers",
    authors: "S. N. Elyasi, R. Lin, P. Monti",
    venue: "Optica Quantum 2.0, Glasgow, 2026",
    url: null,
  },
  {
    year: 2026,
    title: "Feasibility of Distributed Measurement-Based Quantum Computing in Quantum Data Centers",
    authors: "S. N. Elyasi, R. Lin, P. Monti",
    venue: "Optica Quantum 2.0, Glasgow, 2026",
    url: null,
  },
  {
    year: 2026,
    title: "Emulation of Optically Interconnected Quantum Data Center Topologies for Cost–Fidelity Benchmarking",
    authors: "S. N. Elyasi, S. M. Ahmadian, R. Lin, P. Monti",
    venue: "Optical Fiber Communication Conference (OFC), 2026",
    url: null,
  },
  {
    year: 2025,
    title: "Toward Quantum Data Centers: Noise Evaluation of Fiber-Based Interconnects Through Distributed Algorithm Emulation",
    authors: "S. N. Elyasi, S. M. Ahmadian, J. Li, P. Monti, R. Lin",
    venue: "European Conference on Optical Communications (ECOC), pp. 1–4, 2025",
    url: null,
  },
  {
    year: 2025,
    title: "A Framework for Quantum Data Center Emulation Using Digital Quantum Computers",
    authors: "S. N. Elyasi, P. Monti, J. Li, R. Lin",
    venue: "arXiv:2509.04029, 2025",
    url: "https://arxiv.org/abs/2509.04029",
  },
  {
    year: 2025,
    title: "Experimental Simulation of Daemonic Work Extraction in Open Quantum Batteries on a Digital Quantum Computer",
    authors: "S. N. Elyasi, M. A. C. Rossi, M. G. Genoni",
    venue: "Quantum Science and Technology, 10(2), 025017, 2025",
    url: null,
  },
  {
    year: 2025,
    title: "Waveguide Evanescent Field Fluorescence Microscopy Images of Osteoblast Cells: The Effect of Trypsin and Image Processing Using TrackMate",
    authors: "A. Hassanzadeh, S. N. Elyasi, S. Salih, S. S. Abdulkareem, S. R. Saeed",
    venue: "Microscopy Research and Technique, 88(5), 1326–1334, 2025",
    url: null,
  },
  {
    year: 2025,
    title: "Implementing Direct Three-Tangle Measurement of Tripartite GHZ States on IBM Quantum Platforms",
    authors: "S. N. Elyasi, M. Yahyavi, N. Karimi",
    venue: "Quantum Information Processing, 24(1), 26, 2025",
    url: null,
  },
  {
    year: 2024,
    title: "Implementation and Measurement of Quantum Entanglement Using IBM Quantum Platforms",
    authors: "N. Karimi, S. N. Elyasi, M. Yahyavi",
    venue: "Physica Scripta, 99(4), 045121, 2024",
    url: null,
  },
  // ── ADD a new publication:
  // {
  //   year: 2027,
  //   title: "Your Paper Title Here",
  //   authors: "S. N. Elyasi, Co-Author Name",
  //   venue: "Journal or Conference Name, Year",
  //   url: "https://doi.org/...",   // or null if no link yet
  // },
];


/* ── Projects ──────────────────────────────────────────────── */
window.PROJECTS = [
  {
    type: "Research Tool",
    name: "OQB Implementation — BatSim",
    desc: "Full protocol and all visualisations for the open quantum batteries paper. Demonstrates daemonic work extraction on IBM Quantum hardware.",
    tags: ["Python", "Qiskit", "Jupyter", "Open Quantum Systems"],
    url:  "https://github.com/nelyasi/OQB-implementation---Batsim",
  },
  {
    type: "Research Framework",
    name: "Quantum Data Center Emulator",
    desc: "A framework for emulating optically-interconnected quantum data center topologies using digital quantum computers, benchmarking cost–fidelity trade-offs.",
    tags: ["Python", "Qiskit", "Distributed QC", "OFC 2026"],
    url:  null,
  },
  // ── ADD a new project:
  // {
  //   type: "Software / Tool / Simulation / etc.",
  //   name: "Project Name",
  //   desc: "Short description of the project.",
  //   tags: ["Tag1", "Tag2"],
  //   url:  "https://github.com/nelyasi/...",  // or null
  // },
];


/* ── Gallery (main site) ───────────────────────────────────── */
window.GALLERY = [

{ src: "assets/images/anne.jpeg", caption: "Visiting Anne L'Huillier at the 2025 WACQT May Meeting.", dirac: "Visit" },
{ src: "assets/images/Peter.jpg", caption: "Visiting Sir Peter Knight at the QNetworks Workshop in Bristol May 2026.", dirac: "Visit" },
{ src: "assets/images/Quantum20.jpg", caption: "Presenting at the Quantum 2.0 conference in 2026, Glasgow, Scotland.", dirac: "Presentation" },
{ src: "assets/images/Lab.jpg", caption: "Visiting Smart Internet Lab at the University of Bristol in the June 2026.", dirac: "Visit" },
{ src: "assets/images/Sima.jpg", caption: "Visiting Dr. Sima Bahrani at the University of Bristol to work on a collaborative project in 2026.", dirac: "Visit" },
{ src: "assets/images/Lund_Visit.jpg", caption: "Visiting the Quantum Physics Lab at Lund University during the WACQT Lab Course.", dirac: "Visit" },
{ src: "assets/images/Poster_Summer.jpg", caption: "Presenting my research as a poster at the WACQT 2025 Summer School.", dirac: "Poster" },
{ src: "assets/images/Poster_May.jpg", caption: "Presenting my research as a poster at the WACQT 2025 May Meeting.", dirac: "Poster" },
{ src: "assets/images/my_fab.jpg", caption: "Visiting Myfab at the MC2 Department, Chalmers University of Technology.", dirac: "Visit" },
{ src: "assets/images/ECOC.jpg", caption: "Attending the ECOC 2025 conference in Copenhagen Denmark.", dirac: "Visit" },
{ src: "assets/images/MC2_Seminar.jpg", caption: "Presenting my research of my MSc degree at the MC2 Department at the Chalmers University of Technology.", dirac: "Visit" },
{ src: "assets/images/MC2_Lab.jpg", caption: "Visiting Superconducting Quantum Computing Lab at Chalmers University of Technology.", dirac: "Visit" },

  // ── ADD a gallery item:
  // { src: "assets/images/my-figure.png", caption: "Figure caption here." },
];


/* ── Videos (main site) ────────────────────────────────────── */
window.VIDEOS = [
  {
    type:    "youtube",
    videoId: "are6Ra75Zs4",
    title:   "Toward Quantum Data Centers: Noise Evaluation of Fiber-Based Interconnects Through Distributed Algorithm Emulation",
    meta:    "ECOC 2025 · European Conference on Optical Communications",
  },
  {
    type:    "youtube",
    videoId: "7tPHb9aZ6Zg",
    title:   "Investigation of open quantum batteries and using IBM quantum computers to simulate them",
    meta:    "QSD2023",
  },
  // ── ADD a YouTube talk:
  // {
  //   type:    "youtube",
  //   videoId: "VIDEO_ID_HERE",
  //   title:   "Talk Title — Conference 2026",
  //   meta:    "Optica Quantum 2.0 · Glasgow · June 2026",
  // },
];


/* ── Peer Review (journals + conferences) ──────────────────── */
window.REVIEWS = {
  journals: [
    { name: "Advanced Quantum Technologies",                              publisher: "Wiley" },
    { name: "IEEE Journal on Selected Areas in Communications (JSAC)",    publisher: "IEEE" },
    { name: "Discover Networks",                                          publisher: "Springer Nature" },
    // ── ADD a journal you review for:
    // { name: "Journal Name", publisher: "Publisher" },
  ],
  conferences: [
    { name: "ONDM 2026",          full: "Int. Conference on Optical Network Design and Modelling" },
    { name: "IEEE GLOBECOM 2026", full: "IEEE Global Communications Conference" },
    // ── ADD a conference you review for:
    // { name: "Conference 2027", full: "Full conference name" },
  ],
};


/* ══════════════════════════════════════════════════════════════
   HOBBIES PAGE  (hobbies.html)
   ══════════════════════════════════════════════════════════════ */

/* ── Fishing Photos ─────────────────────────────────────────── */
// Each item is a photo you've taken out fishing.
// Upload your image to assets/images/ then set src below.
window.FISHING_PHOTOS = [
  // ── ADD a fishing photo:
  {
    src:     "assets/images/Gbg_fish.jpg",
    caption: "Pike on a Lure, Gothenburg, June 2025",
    location: "Gothenburg, Sweden",
  },
  {
    src:     "assets/images/Gbg_fish2.jpg",
    caption: "Pike on a Lure, Gothenburg, June 2025",
    location: "Gothenburg, Sweden",
  },
    {
    src:     "assets/images/Fishing.jpg",
    caption: "Boating, Lake Öxen, August 2025",
    location: "Gothenburg, Sweden",
  },
  {
    src:     "assets/images/Ger_fish.jpg",
    caption: "Trout fishing in Isar, Germany, June 2025",
    location: "Munich, Germany",
  },
    {
    src:     "assets/images/Ger_fish2.jpg",
    caption: "Trout fishing in Isar, Germany, June 2025",
    location: "Munich, Germany",
  },
      {
    src:     "assets/images/Lak.jpg",
    caption: "Fishing at Lake Öxen, August 2025",
    location: "Gothenburg, Sweden",
  },
        {
    src:     "assets/images/Fishes.jpg",
    caption: "Fishing at Gothenburg Harbour, July 2025",
    location: "Gothenburg, Sweden",
  },
        {
    src:     "assets/images/Qeshlagh.jpg",
    caption: "Fishing at Qeshlagh Dam, June 2021",
    location: "Sanandaj, Iran",
  },        
        {
    src:     "assets/images/Zribar.jpg",
    caption: "Fishing at Zribar Lake, July 2021",
    location: "Marivan, Iran",
  },
          {
    src:     "assets/images/Pike.jpg",
    caption: "Catching Pike in Zribar Lake, July 2021",
    location: "Marivan, Iran",
  },
            {
    src:     "assets/images/Carp.jpg",
    caption: "Catching Carp in Qeshlagh Dam, July 2018",
    location: "Sanandaj, Iran",
  },
];

/* ── Fishing Videos ─────────────────────────────────────────── */
// Embed YouTube or Vimeo videos from your fishing trips.
window.FISHING_VIDEOS = [
  // ── ADD a fishing video:
  {
    type:    "youtube",
    videoId: "avvLjEPZF4U",
    title:   "My fishing journies in 2025",
    meta:    "2025",
  },
];

/* ── Fishing info cards ─────────────────────────────────────── */
// These cards describe the types of fishing you do.
window.FISHING_SPOTS = [
  {
    icon:    "🎣",
    title:   "Freshwater Fishing",
    desc:    "Seeking out lakes and rivers — chasing perch, pike, and trout in the Swedish countryside. There is a particular satisfaction in reading the water, choosing the right lure, and waiting.",
    tags:    ["Lure Fishing", "Fly Fishing", "Spin Casting"],
  },
  {
    icon:    "🌊",
    title:   "Sea Fishing",
    desc:    "Saltwater trips along the west coast of Sweden. The combination of tides, weather, and fish behaviour makes every session a small puzzle — not unlike debugging a quantum simulation.",
    tags:    ["Saltwater", "Shore Fishing", "Boat Trips"],
  },
  {
    icon:    "🗺️",
    title:   "Exploring New Spots",
    desc:    "Part of the joy is the hunt for new water. Maps, local knowledge, and a good pair of boots are the tools of the trade. Gothenburg and its archipelago offer endless variety.",
    tags:    ["Gothenburg", "Archipelago", "Scouting"],
  },
  // ── ADD a fishing card:
  // {
  //   icon:  "🏕️",
  //   title: "Night Fishing",
  //   desc:  "Carp and catfish come alive after dark. Bivvy, bite alarms, and a flask of coffee.",
  //   tags:  ["Carp", "Night Sessions", "Bite Alarms"],
  // },
];


/* ══════════════════════════════════════════════════════════════
   ELECTRONICS PAGE  (electronics.html)
   ══════════════════════════════════════════════════════════════ */

/* ── Blog Posts ─────────────────────────────────────────────── */
// Each post can contain text, images, and a YouTube/Vimeo video.
// Posts are shown newest-first.
window.ELECTRONICS_POSTS = [
  // ── ADD a blog post (copy and uncomment this template):
  // {
  //   date:    "2025-06-01",        // YYYY-MM-DD format
  //   title:   "Building an ESP32 Weather Station",
  //   tags:    ["ESP32", "C++", "BME280", "OLED"],
  //   // Text: each string in the array becomes a paragraph.
  //   text: [
  //     "I've been meaning to build a low-power weather logger for the balcony for a while. The ESP32 wakes every 10 minutes, reads temperature, humidity, and pressure from a BME280, and pushes the data to a local MQTT broker over Wi-Fi.",
  //     "The trickiest part was getting deep-sleep current low enough for the LiPo + solar setup to actually be self-sustaining in Swedish winter light levels. Spoiler: it required disabling the Wi-Fi PA and tuning the wakeup timer carefully.",
  //   ],
  //   // Images: upload files to assets/images/ and list them here.
  //   images: [
  //     { src: "assets/images/esp32-weather-pcb.jpg", caption: "The custom PCB before soldering the SMD passives." },
  //     { src: "assets/images/esp32-weather-case.jpg", caption: "Finished unit in its 3D-printed weatherproof enclosure." },
  //   ],
  //   // Video: paste a YouTube or Vimeo video, or set to null to skip.
  //   video: { type: "youtube", videoId: "VIDEO_ID_HERE", title: "ESP32 Weather Station Demo" },
  //   // video: null,
  // },
  //
  // ── Another example — text-only post, no images or video:
  // {
  //   date:    "2025-03-14",
  //   title:   "First PCB from KiCad to JLCPCB",
  //   tags:    ["KiCad", "PCB Fab", "SMD"],
  //   text: [
  //     "Placed my first PCB order at JLCPCB after two evenings in KiCad. The process was smoother than expected — Gerber export, upload, and 5 boards arrived in 10 days for less than a coffee.",
  //     "Main lesson: double-check footprint pad sizes against your actual component datasheets. The 0402 pads I picked from the library were slightly narrow for the BME280 variant I had in hand.",
  //   ],
  //   images: [],
  //   video: null,
  // },
];
