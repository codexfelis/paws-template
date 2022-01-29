<script>
	import Seo from '$lib/Seo.svelte';
</script>

<!-- TODO UPDATE THE SEO INFO -->
<Seo title="About Paws" description="" path="/about" />

# Hi! 👋

Here's the page where you might want to write about yourself or your project and why it is cool. This page, like the blog posts, is written in Markdown, but is not hooked up to the [CMS](/blog/cms) (if you are using one).

## But I want another page like this

Make another file in `src/routes`, called whatever you want the URL of that page to be (this page lives at `www.yoursite.com/about`and `src/routes/about.md`) and add some content.
Copy over the few code lines from the start of this file, and fill in the [`Seo` component](/blog/seo) with the path to your new page and a description of what is written there.
See the section on [adding your pages](/blog/initial-setup#add-your-pages) for more detail.
