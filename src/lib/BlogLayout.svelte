<script>
	import Seo from '$lib/Seo.svelte';
	import { variables } from '$lib/variables';

	export let title;
	export let description;
	export let publishDate;
	export let readingTime;
	export let lastUpdated;
	export let slug;
	export let openGraphImage;

	function openGraphDetails() {
		return {
			article: { publishDate: publishDate, lastUpdated: lastUpdated || publishDate }
		};
	}
</script>

<p><a href="/{variables.contentPath}" class="dim">← Back to list</a></p>
<h1>{title}</h1>
<p class="dim"><time>{new Date(publishDate).toDateString()}</time> | {readingTime.text}</p>
{#if lastUpdated}
	<p class="dim">Last updated <time>{new Date(lastUpdated).toDateString()}</time></p>
{/if}
<article>
	<slot />
</article>

<Seo
	{title}
	{description}
	path={`/${variables.contentPath}/${slug}`}
	openGraph={openGraphDetails()}
	openGraphImage={openGraphImage || ''}
/>

<a
	class="tweet"
	href="https://twitter.com/intent/tweet?text={encodeURI(title)}&url={encodeURI(
		`${variables.siteUrl}/${variables.contentPath}/${slug}`
	)}&via={variables.twitter}"
	target="_blank"
	rel="noopener noreferrer">Tweet this post</a
>

<style>
	article {
		width: 100%;
	}
	a {
		margin-top: var(--space-wide);
		text-decoration: none;
		font-family: var(--font-header);
	}
	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	.tweet {
		align-self: center;
		font-size: 1em;
		margin-top: var(--space-wide);
		padding: 0.6em 1em;
		background-color: var(--colour-main);
		color: var(--colour-bg);
		border-radius: 0.2em;
		transition: 200ms;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}
	.tweet:hover,
	.tweet:focus {
		box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	}
</style>
