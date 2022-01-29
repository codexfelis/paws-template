<script>
	import { variables } from '$lib/variables';
	export let title = variables.projectName;
	export let description = variables.description;
	export let path = undefined;
	export let openGraph = {};
	export let openGraphImage;
	// openGraph = { description?: '', title?: '', article?: { publishDate: '', lastUpdated?: '' } };

	const canonicalUrl = variables.siteUrl + path;

	function add5Years(dateStr) {
		var date = new Date(dateStr);
		date.setFullYear(date.getFullYear() + 5);
		return date.toLocaleDateString('sv-SE');
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:title" content={openGraph.title || title} />
	<!-- max 70 characters -->
	<meta property="og:description" content={openGraph.description || description} />
	<!-- max 200 characters -->
	<meta property="og:locale" content="en_GB" />
	<meta property="og:type" content={openGraph.article ? 'article' : 'website'} />
	<meta property="og:url" content={canonicalUrl} />
	{#if openGraphImage}
		<meta property="og:image" content={`${variables.siteUrl}/${openGraphImage}`} />
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content={'1200'} />
		<meta property="og:image:height" content={'630'} />
	{/if}

	<meta name="twitter:site" content="@{variables.twitter}" />
	<meta name="twitter:card" content="summary_large_image" />

	{#if openGraph.article}
		<meta property="article:author" content={variables.projectName} />
		<meta property="article:published_time" content={openGraph.article.publishDate} />
		<meta
			property="article:modified_time"
			content={openGraph.article.lastUpdated || openGraph.article.publishDate}
		/>
		<meta
			property="article:expiration_time"
			content={add5Years(openGraph.article.lastUpdated || openGraph.article.publishDate)}
		/>
	{/if}
</svelte:head>
