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
	import PaginationNav from '$lib/PaginationNav.svelte';
	import BlogSummary from '$lib/BlogSummary.svelte';
	import Seo from '$lib/Seo.svelte';
	import { variables } from '$lib/variables';
	export let posts;

	function paginate(posts, pageSize, currentPage) {
		return posts.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
	}

	const numPosts = posts.length;
	let currentPage = 1;
	let pageSize = 8;
	$: paginatedItems = paginate(posts, pageSize, currentPage);
</script>

<Seo
	title="{variables.projectName} blog"
	description="A blog about a very cool project TODO update me!"
	path="/{variables.contentPath}"
/>

<h1>Blog posts</h1>

{#each paginatedItems as blogPost}
	<BlogSummary {blogPost} />
{/each}

{#if pageSize < numPosts}
	<PaginationNav
		totalItems={numPosts}
		{pageSize}
		{currentPage}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
{/if}
