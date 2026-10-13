# Swabi website

Redesign of [swabi.onepage.me](https://swabi.onepage.me/), Swabi's crypto tax practice site, built to live at **swabi.co.uk**.

It is a single static page (`index.html`) with no build step and no dependencies, so it can be hosted for free on GitHub Pages, Netlify or Cloudflare Pages.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole site: markup, styles and a small script |
| `assets/` | Logo mark, favicon, portrait, social share image |
| `robots.txt`, `sitemap.xml` | For search engines |

## Configured

- **Contact form:** posts to Formspree (`https://formspree.io/f/xqpeypdd`). Confirm the form's email the first time a submission arrives.
- **Socials:** Facebook and the r/Crypto_Taxes_UK subreddit, plus WhatsApp and email.
- **Custom domain:** `CNAME` contains `swabi.co.uk` for GitHub Pages. `.nojekyll` serves files as-is.

## Still to do

1. Replace `assets/swabi-mark.png` and `assets/sham-sadiq.jpg` with the original high-resolution files.
2. Review the FAQ answers and the CARF (1 January 2026) notice.
3. Optional: an Instagram link, a Calendly booking link, a privacy policy page, testimonials.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.
