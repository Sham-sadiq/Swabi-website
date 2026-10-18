# How to add a blog post

The easiest way: send the text (and any picture) to Claude and ask for it to be posted.

To do it yourself from a phone or computer:

1. Open **github.com/Sham-sadiq/Swabi-website/tree/main/_posts** in your browser (on a phone, switch to the desktop site).
2. Tap **Add file → Create new file**.
3. Name the file `YYYY-MM-DD-short-title.md`, for example `2026-11-05-staking-rewards-tax.md`.
   - Use today's date (or earlier). Posts dated in the future don't appear until that date.
   - Use lower case and hyphens, no spaces. The part after the date becomes the web address: `swabi.co.uk/blog/staking-rewards-tax/`.
4. Paste in this template and replace the text:

```markdown
---
title: "Your headline here"
description: "One or two sentences that sum up the post. Shown on the blog page and in Google."
tags: [Capital Gains, Staking]
---

Your opening paragraph goes here.

<!--more-->

## A subheading

More text. Leave a blank line between paragraphs.

- A bullet point
- Another bullet point

**Bold text**, *italic text* and [a link](https://www.gov.uk/).

> A highlighted note or quote.
```

5. Tap **Commit changes…**, then **Commit changes** again.
6. The post goes live on swabi.co.uk/blog/ within a couple of minutes.

## Adding a picture (optional)

1. Open **github.com/Sham-sadiq/Swabi-website/tree/main/assets/blog**, then tap **Add file → Upload files** and upload the image (a JPG under about 500 KB is ideal).
2. In the post's top section, add:

```yaml
image: /assets/blog/your-image-name.jpg
image_alt: "A short description of the picture"
```

## Drafts

Add `published: false` to the top section to keep a post hidden. Delete that line (or change it to `true`) to publish it.

## Editing or removing a post

Open the file in `_posts`, then tap the **pencil** icon to edit or the **⋯** menu → **Delete file**.
