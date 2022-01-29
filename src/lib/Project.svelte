<script>
	export let picture;
	export let altText;
	export let link;
	export let title;
</script>

<section>
	<h2><a href={link} rel="noopener noreferrer" target="_blank">{title}</a></h2>
	<p><slot /></p>
	<a href={link} rel="noopener noreferrer" target="_blank"><img src={picture} alt={altText} /></a>
</section>

<style>
	section {
		margin-top: 1em;
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
	}
	img {
		width: 200px;
		aspect-ratio: 1;
		border: 2px solid var(--colour-fg);
		border-radius: var(--border-radius);
		box-sizing: border-box;
		justify-self: center;
	}
	h2 {
		width: 100%;
	}

	@media (min-width: 600px) {
		section {
			display: grid;
			grid-template-rows: auto;
			grid-column-gap: 1rem;
			grid-template-columns: auto 30%;
			grid-template-areas: 'header image' 'content image';
			align-items: unset;
		}

		a {
			grid-area: image;
			margin-top: 0;
		}

		p {
			grid-area: content;
		}
		h2 {
			grid-area: header;
			margin-top: 0;
		}
	}
</style>
