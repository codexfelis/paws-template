---
layout: blog
title: 'SEO component'
slug: 'seo'
description: 'What is the SEO component and why do I need one?'
tags: []
publishDate: '2021-09-12'
lastUpdated: '2021-09-12'
---

You need to add a `<Seo />` component to any of the standalone pages to set the page title and description correctly.
This information is automatically filled in based on values from the YAML frontmatter for blog posts.
Page title and description are important for showing useful information when someone finds your website in a Google search, or shares a link on Twitter and you get a preview.
At a minimum you need to import the SEO component and set the page title, description and path.

```jsx
<script>
	import Seo from '$lib/Seo.svelte';
</script>

<Seo
	title="My awesome page"
	description="A useful snippet of around 150 characters saying what this page is about"
	path="/pathToThisPageIEFilename"
/>
```

Optionally you can create a nice preview image for your page, and pass the path to that either to the SEO component like in `src/routes/index.md`, or by supplying the `openGraphImage` attribute in blog frontmatter as in `src/routes/blog/initial-setup.md`. The value should be the name of a 1200x630px PNG file, which lives in the `static` directory.
