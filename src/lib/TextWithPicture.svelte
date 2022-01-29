<script>
	export let picture;
	export let altText;
	export let pictureFirst = false;
</script>

<section>
	{#if pictureFirst}
		<img src={picture} alt={altText} />

		<p><slot /></p>
	{:else}
		<p><slot /></p>
		<img src={picture} alt={altText} />
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
	}
	img {
		max-height: 200px;
		aspect-ratio: 1;
		border: 2px solid var(--colour-fg);
		border-radius: var(--border-radius);
		box-sizing: border-box;
	}

	@media (min-width: 600px) {
		section {
			display: grid;
			grid-template-rows: auto;
			column-gap: calc(2 * var(--space-wide));
			grid-template-columns: 2fr 1fr;

			align-items: center;
			justify-items: center;
		}
	}
</style>
