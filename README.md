# nelyasi.github.io — Website Source

A clean, separated source for the academic portfolio site.

## 📁 Folder Structure

```
nelyasi.github.io/
│
├── index.html              ← Main page (HTML structure only — no CSS or JS inline)
│
├── css/                    ← One file per concern — edit just what you need
│   ├── variables.css       ← 🎨 Design tokens: colours, fonts, spacing — retheme here
│   ├── base.css            ← Reset, body, links, containers, fade-up animation
│   ├── navbar.css          ← Fixed top navigation + mobile hamburger
│   ├── hero.css            ← Full-height hero, buttons, Bloch sphere container
│   ├── about.css           ← About section: avatar, bio, tags, social pills
│   ├── publications.css    ← Publications list, year filters
│   └── sections.css        ← Projects · Gallery · Videos · Contact · Footer
│
├── js/                     ← One file per feature
│   ├── bloch.js            ← Animated Bloch sphere canvas (dark, electric cyan)
│   ├── render.js           ← Renders publications, projects, gallery, videos from data
│   └── nav.js              ← Scroll progress bar, hamburger, active nav links
│
├── data/
│   └── content.js          ← ✏️  YOUR CONTENT — edit this to update the site
│
└── assets/
    └── images/
        └── navid.png       ← Profile photo (replace with your own)
```

---

## ✏️ How to Update Content

**Only edit `data/content.js`** for all content changes:

| What to change | Where |
|---|---|
| Publications | `PUBLICATIONS` array |
| Projects | `PROJECTS` array |
| Gallery images | `GALLERY` array |
| Video talks | `VIDEOS` array |

Each array has commented examples showing exactly how to add a new item.

---

## 🎨 How to Retheme

Open `css/variables.css` and change the hex values:

```css
--gold: #1a56db;   /* main accent colour */
--bg:   #f8f9fc;   /* page background    */
```

Every component inherits from these tokens — one edit ripples through the whole site.

---

## 🖼️ Adding Images to Gallery

1. Drop the image file into `assets/images/`
2. In `data/content.js`, set `src: "assets/images/your-file.png"`

---

## 🚀 Deploy to GitHub Pages

Upload the entire folder to your `nelyasi.github.io` repository root.  
GitHub Pages serves `index.html` automatically.

Or use the **CMS GUI** (see `website-cms.jsx`) to push directly from the browser.
