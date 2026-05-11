# Happy Hearts Co. — Website

A multi-page static website for Happy Hearts Co., ready to host on Netlify.

## Project Structure

```
happyhearts/
├── index.html          ← Homepage
├── css/
│   └── styles.css      ← All styles (design tokens, components, pages)
├── js/
│   └── main.js         ← Nav, scroll reveal, testimonials, forms, FAQ
├── events/
│   └── index.html      ← Upcoming + past events with city/type filters
├── vendors/
│   └── index.html      ← Book a Stall page with stall tiers + application form
├── gallery/
│   └── index.html      ← Masonry photo gallery with filters
├── venues/
│   └── index.html      ← Venue list by city + "Host a Market" CTA
├── about/
│   └── index.html      ← Founder story, mission, timeline
├── contact/
│   └── index.html      ← Contact form + channels
├── press/
│   └── index.html      ← Media kit, boilerplate, press coverage
├── images/             ← ADD YOUR IMAGES HERE (create this folder)
│   ├── logo.png
│   ├── vidhi.jpg
│   └── gallery/
├── netlify.toml        ← Netlify config (caching, headers)
└── _redirects          ← URL redirects

```

---

## Deploying to Netlify

### Option A — Drag & Drop (Quickest)
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the entire `happyhearts/` folder onto the Netlify dashboard
3. Your site is live instantly

### Option B — GitHub (Recommended for ongoing edits)
1. Create a new GitHub repository
2. Push this folder to the repo: `git init && git add . && git commit -m "initial" && git push`
3. In Netlify: **Add new site → Import from Git → Select your repo**
4. Set **Publish directory** to `.` (root)
5. Click **Deploy**

---

## Things to Update Before Going Live

### 1. Logo
Replace the text logo in every page's `<nav>` with:
```html
<img class="nav-logo-img" src="/images/logo.png" alt="Happy Hearts Co.">
```
And in every `<footer>`:
```html
<img class="footer-logo-img" src="/images/logo.png" alt="Happy Hearts Co.">
```

### 2. WhatsApp Number
Search and replace all instances of `91XXXXXXXXXX` with your real number (digits only, no spaces).
E.g. `+91 98765 43210` → use `919876543210`

### 3. Email Addresses
- `hello@happyhearts.co` — main enquiries
- `press@happyhearts.co` — press page

### 4. Real Photos
- **Founder photo** (`/about`): Replace the placeholder `<div>` with `<img src="/images/vidhi.jpg">`
- **Gallery** (`/gallery`): Replace `.gallery-placeholder` divs with real `<img>` tags:
  ```html
  <img src="/images/gallery/event-name.jpg" alt="Event description" style="width:100%;display:block;border-radius:16px;">
  ```
- **Instagram section** (`/index.html`): Replace `.insta-placeholder` divs with real images or an Instagram embed widget

### 5. Netlify Forms
The vendor form and contact form already have the `netlify` attribute.
After first deploy:
- Go to Netlify Dashboard → **Forms**
- Add your notification email to receive form submissions

### 6. Events Content
Update the event cards in `/events/index.html` with real event names, dates, and venues.

### 7. Media Kit PDF
In `/press/index.html`, replace `href="#"` on the download button with the actual PDF path:
```html
<a href="/media-kit-2025.pdf" class="btn-white">⬇ Download Media Kit (PDF)</a>
```

### 8. Social Media Links
Update all `href="#"` social links with real URLs for Facebook, etc.

---

## Design Tokens (for easy rebranding)
All colours and fonts are defined as CSS variables at the top of `css/styles.css`:

```css
:root {
  --brand:      #c43670;   /* Main pink */
  --brand-dark: #9e2959;   /* Hover state */
  --gold:       #D4A853;   /* Accent gold */
  --cream:      #FAF3E8;   /* Page background */
  --espresso:   #1A0A14;   /* Dark text */
}
```

Change any of these and the whole site updates automatically.

---

## Adding New Pages
1. Create a new folder, e.g. `blog/`
2. Add `index.html` inside it — copy the nav and footer HTML from any existing page
3. Link `<link rel="stylesheet" href="/css/styles.css">` and `<script src="/js/main.js"></script>`
4. Add a link in the footer nav if needed

---

## Support
For questions about this website, refer to the code comments or reach out to your developer.
