# Pembrokeshire Silage Day – Visitor App

A mobile-first visitor guide for **Pembrokeshire Silage Day**, a charity silage
machinery demonstration near Haverfordwest on **Saturday 11 September 2027**.

Built with plain HTML, CSS and a little JavaScript. No frameworks, no build step.

## What each file does

| File | What it's for |
|------|---------------|
| `index.html` | The page itself: all the words and the structure (header, five sections, bottom nav). |
| `css/style.css` | How it looks: big text, high-contrast colours, spacing, the bottom nav bar. |
| `js/main.js` | Small extras: the "days to go" countdown and highlighting the current section in the nav. |
| `images/site-map-placeholder.svg` | A stand-in site map. Replace it with the real map later. |
| `.nojekyll` | An empty file that tells GitHub Pages to serve the files exactly as they are. |
| `README.md` | This file: notes for people working on the project. |

## Viewing it on your computer

Double-click `index.html` to open it in your browser. To see the phone layout,
open your browser's developer tools (F12) and switch on the device toolbar.

## Publishing with GitHub Pages

1. Make sure the files are on the `main` branch on GitHub.
2. On GitHub, open the repository and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose branch **main** and folder **/ (root)**, then click **Save**.
5. After a minute or two the site will be live at
   `https://<your-username>.github.io/silage-day-app/`.

## Filling in the placeholders

Anything still to be confirmed is wrapped in `<span class="placeholder">…</span>`
in `index.html`. Search the file for `placeholder` to find them all:
gate time, address and postcode, entry price, charity name, dog policy,
timetable times, contact details, and the site map image.
