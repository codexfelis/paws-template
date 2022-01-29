---
layout: blog
title: 'Theming'
slug: 'theming'
description: 'How do I make this thing not be blue?'
tags: []
publishDate: '2021-09-16'
lastUpdated: '2021-09-16'
---

## I don't like your colours

The site currently generates its own colour scheme on the basis of one main colour, which is defined as `--colour-main` in `style.css`.
This is a [HSL colour](https://www.smashingmagazine.com/2021/07/hsl-colors-css/), which means you can change the hue to whatever you like and completely change the colours everywhere, while keeping similar visual contrast.
So if you wanted the site to be purple not blue, change `--colour-main-hue` to be something like 295 and notice the whole site change colour.

## I don't like your fonts

The fonts are also defined in CSS variables near the top of `style.css`, and come from [Google fonts](https://fonts.google.com/).
You can switch the fonts out to whatever you like, but make sure to also update the `import` URL at the top of the file to include (only) the fonts and weights you want to use.

## I don't like your code colour theme

Code syntax highlighting is done using [PrismJS](https://prismjs.com/), which has [loads of themes](https://github.com/PrismJS/prism-themes/tree/master/themes).
If you want to use a different theme, delete `src/nord.css` (the current theme) and add one of these files instead.
Then update the stylesheet import from `nord` to your new filename in `src/routes/_layout.svelte`.

## I want to make bigger changes

Go for it! There isn't all that much CSS to this site, go wild and change things.
Note that global styling is defined in `style.css`, but individual "components" such as the navbar have additional CSS defined in the components themselves.
You can find these in `/src/lib/<ComponentName>.svelte` (e.g. the Navbar component is in `/src/lib/ Navbar.svelte`), and there are `<style>` tags at the bottom of the component for scoped CSS.

## ... but I don't want to edit the CSS myself

email [Caro from Codex Felis](mailto:caro@codexfelis.dev) to talk about your needs and get a quote for custom development.

## Next steps

Maybe you want to go on to add your [logo and other image assets](/blog/assets), [deploy your fancy new site](/blog/deployment) or [configure the CMS](/blog/cms).
