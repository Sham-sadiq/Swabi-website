# Swabi website

Redesign of [swabi.onepage.me](https://swabi.onepage.me/), Swabi's crypto tax practice site, built to live at **swabi.co.uk**.

Hosted free on GitHub Pages, which builds it with Jekyll automatically on every change. There's nothing to install.

**To add a blog post, see [BLOGGING.md](BLOGGING.md).**

## Files

| Path | What it is |
| --- | --- |
| `index.html` | Home page content |
| `blog/index.html` | Blog listing page (swabi.co.uk/blog/) |
| `_posts/` | Blog posts, one Markdown file each |
| `_layouts/`, `_includes/` | Shared page shell: head, header, footer, post template |
| `assets/css/site.css`, `assets/js/site.js` | Styles and script for every page |
| `assets/` | Logo, favicon, portrait, social image; `assets/blog/` for post images |
| `_config.yml` | Site settings (address, blog URL format, feed, sitemap) |

The sitemap (`/sitemap.xml`) and RSS feed (`/blog/feed.xml`) are generated automatically.

## Configured

- **Contact form:** posts to Formspree (`https://formspree.io/f/xqpeypdd`). Confirm the form's email the first time a submission arrives.
- **Socials:** Facebook and the r/Crypto_Taxes_UK subreddit, plus WhatsApp and email.
- **Custom domain:** `CNAME` contains `swabi.co.uk` for GitHub Pages.

## Still to do

1. Replace `assets/swabi-mark.png` and `assets/sham-sadiq.jpg` with the original high-resolution files.
2. Review the FAQ answers and the CARF (1 January 2026) notice.
3. Optional: an Instagram link, a Calendly booking link, a privacy policy page, testimonials.

## Preview locally

Needs Ruby: `bundle install`, then `bundle exec jekyll serve --unpublished` and visit http://localhost:4000.
