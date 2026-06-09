/* ============================================================
   data/content.js  —  ✏️  EDIT YOUR CONTENT HERE
   This is the ONLY file you need to touch to update the site.
   ============================================================ */

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


/* ── Gallery ───────────────────────────────────────────────── */
// To show a real image: upload the file to assets/images/ next to index.html,
// then set src: "assets/images/my-figure.png"
window.GALLERY = [
  { src: "assets/images/anne.jpeg", caption: "Visiting Anne L'Huillier in 2025 WACQT may meeting.", dirac: "Visit" },

  // ── ADD a gallery item:
  // { src: "assets/images/my-figure.png", caption: "Figure caption here", dirac: "|fig⟩" },
];



/* ── Videos ────────────────────────────────────────────────── */
// YouTube: find the video ID after ?v= in the URL
// Vimeo:   find the numeric ID in the URL
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
  //
  // ── ADD a Vimeo talk:
  // {
  //   type:    "vimeo",
  //   videoId: "123456789",
  //   title:   "Seminar Title",
  //   meta:    "Chalmers Seminar Series · 2025",
  // },
];
