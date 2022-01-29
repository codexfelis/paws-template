<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const res = await fetch(`/posts.json`);
		const posts = await res.json();

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Seo from '$lib/Seo.svelte';
	import BlogSummary from '$lib/BlogSummary.svelte';
	import { variables } from '$lib/variables';
	export let posts;

	const postsToShow = 3;
	$: blogPosts = posts.slice(0, postsToShow);
</script>

<!-- TODO UPDATE THE SEO INFO -->
<Seo title="Paws" description={variables.siteDescription} path="/" openGraphImage="OGExample.png"/>

# Paws

<p class=emph>
Lightweight and simple static site template for researchers in the
Digital Humanities.
</p>

[Use this template]({variables.github}) in GitHub, or read the [deployed documentation]({variables.siteUrl}).

Paws is a static site built on [SvelteKit](https://kit.svelte.dev/), using [Markdown](https://www.markdownguide.org/) for blog content, optionally with [Netlify CMS](https://www.netlifycms.org/). [Developer tooling](/blog/tooling) to help with editing the
template in [VSCode](https://code.visualstudio.com/) is provided.

"Static site" means that the website is made up of pre-built HTML, CSS and a tiny bit of JavaScript. The web pages load the same way every time, unlike dynamic websites, which load differently based on things such as the user's location, the time of day, or user actions. A static website can be served for free or very low cost, and provides a smooth and fast experience for users of the website. There's no content database to make things slow, or pose security issues as in for example a Wordpress site.

## Get started

Get up and running with this site really fast! For an [opinionated
quickstart](/blog/initial-setup), you need to have

- clicked "use this template" in [GitHub]({variables.github}), so you have your own copy of
  this repository, and cloned it to your own computer
- set up a free account on Netlify ready for [deployment](/blog/deployment) (other static site hosting options
  are fine if you know how)
- thought about whether you are happy writing blog content in files in
  GitHub, or prefer to use a [CMS](/blog/cms) for web-based writing.
- thought about whether this template has the right site sections
  (home/blog/about) for you, or if you need extra pages

While this template is still under development, these docs assume that you:

- are vaguely familiar with basic git commands (clone, add, commit, push) and GitHub
- know how to edit HTML/JavaScript files on your computer (even if you don't fully
  understand what they mean)
- are able to set up a working NodeJS environment on your computer.

More comprehensive beginner documentation is coming soon, and if you get stuck feel free to [contact
us](mailto:hi@codexfelis.dev) for help or [raise an issue in GitHub]({variables.github}/issues).

<a class=emph href="/blog/initial-setup">
Get started!
</a>

## [Recent blog posts](/blog)

{#each blogPosts as blogPost}
<BlogSummary {blogPost} />
{/each}
