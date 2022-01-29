<script>
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables';

	let showMobileMenu = false;

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: `/${variables.contentPath}` },
		{ label: 'About', href: '/about' }
	];

	const toggleMobileMenuVisible = () => (showMobileMenu = !showMobileMenu);

	const resetMobileMenuState = (e) => {
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');
		mediaListener.addEventListener('change', resetMobileMenuState);
	});
</script>

<svelte:window on:sveltekit:navigation-end={resetMobileMenuState} />
<nav>
	<a class="skip-to-content-link" href="#main"> Skip to content </a>
	<button
		aria-label="Navigation menu"
		on:click={toggleMobileMenuVisible}
		class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
	>
		<div class="middle-line" />
	</button>
	<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
		{#if !showMobileMenu}
			<li><a href="/"><img src="/Logo.svg" alt="Logo" /></a></li>
		{/if}
		{#each navItems as item}
			<li>
				<a href={item.href}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		min-height: 48px;
		width: 100%;
		max-width: 800px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	button {
		background: none;
		border: none;
		text-align: left;
	}
	.wide-only {
		display: none;
	}
	.mobile-icon {
		width: 36px;
		height: 24px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: var(--colour-main);
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: var(--colour-bg);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.skip-to-content-link {
		margin: 0;
		background: var(--colour-accent);
		text-decoration: none;
		left: 40%;
		padding: 8px;
		position: absolute;
		transform: translateY(-150%);
		transition: transform 0.3s;
		border-radius: var(--border-radius);
	}

	.skip-to-content-link:focus {
		transform: translateY(0%);
	}
	.navbar-list a {
		text-decoration: none;
		height: 45px;
		align-items: center;
		color: var(--colour-main);
		font-family: var(--font-header);
	}

	@media only screen and (max-width: 767px) {
		.navbar-list a {
			display: flex;
		}
	}
	/* WIDE SCREEN ONLY */
	@media only screen and (min-width: 767px) {
		nav {
			/* padding: var(--space-narrow) 20px var(--space-wide) 20px; */
			border-bottom: 4px solid var(--colour-main-dim);
		}
		li {
			margin: 0 1em;
		}

		img {
			height: 1.6em;
		}
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-top: var(--space-narrow);
		}

		.navbar-list a {
			margin-left: 2em;
		}
		.navbar-list > :first-child,
		.navbar-list > :first-child a {
			margin: 0 auto 0 0;
			padding: 0;
		}

		.skip-to-content-link {
			left: 0;
		}
		.wide-only {
			display: block;
		}
	}
</style>
