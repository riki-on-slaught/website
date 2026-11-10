# Sharad Chandra Shrestha — Portfolio

A static, multi-page portfolio. Each section is its own HTML document under a named directory, so the URLs work as independent pages on static hosting without a build step or database.

## Run locally

Open `index.html`, or serve the `Website` folder with any static file server. Static hosts such as GitHub Pages or Netlify can publish this folder directly.

## Contact form

The contact form submits to FormSubmit at `sharad.ch.stha2002@gmail.com`. FormSubmit sends a one-time verification email to that address before delivering the first submission. Confirm that email to activate delivery; no API key or backend is required. If you prefer another provider, replace the form's `action` in `contact\index.html`.

## CV

`assets\Sharad_Chandra_Shrestha_CV.pdf` is the supplied CV image packaged as a one-page PDF. The navigation download saves it with the requested filename, and the home page and footer also link to open it in a new tab. Replace this file with an updated CV PDF whenever one is available.

## Editable content

- Replace the clearly labeled portfolio sample artwork and descriptions with real project work.
- Add verified social profile URLs to the `socialLinks` array in `app.js` (for example, `{ label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" }`); social links are not fabricated.
- Add official certificate scans and any confirmed education or work details when available.
- The provided CV artwork is retained in `assets\Professional A4 CV_20261108_183211_0000.png`.
