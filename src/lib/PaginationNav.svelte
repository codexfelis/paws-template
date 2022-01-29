<script>
	// inspired by https://github.com/TahaSh/svelte-paginate/

	import { createEventDispatcher } from 'svelte';

	const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
	const NEXT_PAGE = 'NEXT_PAGE';

	function generateNavigationOptions({ totalItems, pageSize, currentPage }) {
		const totalPages = Math.ceil(totalItems / pageSize);
		return generateUnlimitedOptions({ currentPage, totalPages });
	}

	function generateUnlimitedOptions({ currentPage, totalPages }) {
		const options = new Array(totalPages).fill(null).map((_, index) => ({
			type: 'number',
			value: index + 1
		}));
		return [
			{
				type: 'symbol',
				symbol: PREVIOUS_PAGE,
				value: currentPage <= 1 ? 1 : currentPage - 1
			},
			...options,
			{
				type: 'symbol',
				symbol: NEXT_PAGE,
				value: currentPage >= totalPages ? totalPages : currentPage + 1
			}
		];
	}

	const dispatch = createEventDispatcher();
	export let totalItems = 0;
	export let pageSize = 1;
	export let currentPage = 1;
	$: options = generateNavigationOptions({
		totalItems,
		pageSize,
		currentPage
	});
	$: totalPages = Math.ceil(totalItems / pageSize);
	function handleOptionClick(option) {
		dispatch('setPage', { page: option.value });
	}
	function buttonLabel(option) {
		if (option.type === 'symbol') {
			return option.symbol === NEXT_PAGE ? 'Next page' : 'Previous page';
		}
		return `Page ${option.value}`;
	}
</script>

<div class="pagination-nav">
	{#each options as option}
		<button
			class="option"
			class:number={option.type === 'number'}
			class:prev={option.type === 'symbol' && option.symbol === PREVIOUS_PAGE}
			class:next={option.type === 'symbol' && option.symbol === NEXT_PAGE}
			disabled={(option.type === 'symbol' &&
				option.symbol === NEXT_PAGE &&
				currentPage >= totalPages) ||
				(option.type === 'symbol' && option.symbol === PREVIOUS_PAGE && currentPage <= 1) ||
				(option.type === 'number' && option.value === currentPage)}
			class:active={option.type === 'number' && option.value === currentPage}
			on:click={() => handleOptionClick(option)}
			aria-label={buttonLabel(option)}
		>
			{#if option.type === 'number'}
				<slot name="number" value={option.value}>
					<span>{option.value}</span>
				</slot>
			{:else if option.type === 'symbol' && option.symbol === PREVIOUS_PAGE}
				<slot name="prev">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
					</svg>
				</slot>
			{:else if option.type === 'symbol' && option.symbol === NEXT_PAGE}
				<slot name="next">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
					</svg>
				</slot>
			{/if}
		</button>
	{/each}
</div>

<style>
	.pagination-nav {
		align-self: center;
		display: flex;
		justify-content: center;
		font-family: var(--font-header);
	}
	button {
		background-color: var(--colour-bg);
		border: none;
		margin: 4px;
	}
	.option {
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s all ease-out;
		user-select: none;
		box-sizing: content-box;
		color: var(--colour-fg);
	}
	.option svg > path {
		fill: var(--colour-fg);
	}
	.option.number {
		padding: var(--space-narrow);
		font-size: 1em;
	}
	.option:not(:disabled):hover,
	.option:not(:disabled):focus {
		border: none;
		background: rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
	.option.active {
		font-weight: bold;
	}

	.option:disabled svg > path {
		fill: var(--colour-main-dim);
	}
</style>
