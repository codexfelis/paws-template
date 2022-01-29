---
layout: blog
title: 'Assets'
slug: 'assets'
description: 'What do I need to do about images for theming and content?'
tags: []
publishDate: '2021-09-15'
lastUpdated: '2021-09-15'
---

## Assets you need to provide

### Favicon

This is the tiny icon that appears in the browser tab for your website.

If you want to use a favicon, replace the files `static/Logo.png` (a 32x32px PNG file) and `static/Logo.svg` (an SVG file of the same thing) with the icon you want to show.
There's lots of online tools to help with this.

If you don't want to use a favicon, delete `static/Logo.png` and `static/Logo.svg`, and remove the lines referencing them from `src/app.html`.
Be prepared to tweak `src/lib/Navbar.svelte` too, since this displays the SVG version of the logo at desktop sizes.

### CMS welcome image

If you use the [CMS](/blog/cms), you can supply an image to be shown on the login page. It needs to be 300x125px in PNG format. Put this in `static/CMSLogo.png`.
If you don't care about having a custom logo there, delete the existing `static/CMSLogo.png`, and the line referencing `logo_url` from `static/admin/config.yml`.

## Add new assets for content

If you want to put pictures in your blog posts or other pages, put them in the `static` folder, and reference them like `<img src="/myNewImage.jpg" alt="A very descriptive description"/>` in your HTML or `![A very descriptive description](/myNewImage.jpg)` in markdown.

## Next steps

Maybe you want to go on to [change the fonts and colours](/blog/theming), [deploy your fancy new site](/blog/deployment) or [configure the CMS](/blog/cms).
