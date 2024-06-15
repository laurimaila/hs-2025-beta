<script lang="ts">
	import { afterUpdate, onMount, tick } from 'svelte'
	import { page } from '$app/stores'
	import Timeline from './components/Timeline.svelte'
	import type { Production } from '$lib/types/common'

	/** @type {import('./$types').LayoutData} */
	export let data
	const productions: Production[] = data.productions || []
	$: productOpen = $page.url.pathname != '/produktiot'

	// WIP
</script>

<div class="layout {productOpen ? 'side' : 'full'}">
	<div class="tiny {productOpen}">
		<Timeline {productions} minimized={productOpen} />
	</div>
	{#if productOpen}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>

<style>
	/* TODO
	.productOpen {
	}
	*/

	.layout {
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}

	.tiny {
		flex: 1;
		overflow-y: auto; /* Allow the sidebar to scroll */
		transition: flex 0.3s ease;
	}

	.content {
		flex: 3;
		padding: 1rem;
		overflow-y: auto;
		background-color: #f8f8f8;
		transition: flex 0.3s ease;
	}

	.full .sidebar {
		flex: 1 1 100%; /* Full width when no product is selected */
	}

	.full .content {
		display: none; /* Hide content when no product is selected */
	}

	.side .sidebar {
		flex: 1; /* Shrink to sidebar when product is selected */
	}

	.side .content {
		display: block; /* Show content when product is selected */
	}

	@media (max-width: 800px) {
		.layout {
			flex-direction: column;
		}

		.sidebar {
			flex: 0 0 auto; /* Full width on small screens */
			overflow-y: visible;
		}

		.content {
			flex: 0 0 auto; /* Full width on small screens */
		}
	}
</style>
