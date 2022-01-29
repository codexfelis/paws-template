<script>
	export let blogPost;
</script>

<section>
	<a sveltekit:prefetch href={blogPost.path.replace(/\.[^/.]+$/, '')}
		><h2>{blogPost.metadata.title}</h2></a
	>
	<p class="dim">
		<time>{new Date(blogPost.metadata.publishDate).toDateString()} </time> | {blogPost.metadata
			.readingTime.text} ({blogPost.metadata.readingTime.words} words)
		{#if blogPost.metadata.tags.length > 0}
			| {blogPost.metadata.tags}
		{/if}
	</p>
	<p>{blogPost.metadata.description}</p>
</section>
